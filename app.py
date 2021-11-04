from flask import Flask, g
from flask_login import LoginManager
from flask_cors import CORS
import os

from db import DATABASE, initialize
from user import User
from resources.words import word
from resources.users import user
from word import Word
from game import Game

DEBUG = True
PORT = 8000

login_manager = LoginManager()
app = Flask(__name__)
app.secret_key = os.environ.get('SECRET') or 'helloeveryoneiamheretobuildthisapp'

login_manager.init_app(app)

@login_manager.user_loader
def load_user(userid):
    try:
        return User.get(User.id == userid)
    except: 
        return None

@app.before_request
def before_request():
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response

@app.route('/')
def index():
    return "HANGMAN GAME"

app.register_blueprint(user)
app.register_blueprint(word)

origins=['http://localhost:3000']
# if we're on heroku
if 'DATABASE_URL' in os.environ:
    initialize([Cartoon, User, Favorite])
    # configure cookie to only work on secure connections (HTTPS)
    app.config['SESSION_COOKIE_SECURE'] = True
    # configure cookie to NOT work on unsecure connections (HTTP)
    app.config['SESSION_COOKIE_HTTPONLY'] = False
    # allowing the cookie to come from a different site
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    # fetching the client url from an environment variable
    origins.append(os.environ.get('CLIENT_URL'))






CORS(app, origins=origins, supports_credentials = True)




if __name__ == '__main__':
    initialize([User, Word, Game])
    app.run(debug = DEBUG, port = PORT)