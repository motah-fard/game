from flask import Flask, g
from flask_login import LoginManager
from flask_cors import CORS
from werkzeug.wrappers import response

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
app.secret_key = 'helloeveryoneiamheretobuildthisapp'

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
CORS(app, origins=['http://localhost:3000'], supports_credentials = True)

if __name__ == '__main__':
    initialize([User, Word, Game])
    app.run(debug = DEBUG, port = PORT)