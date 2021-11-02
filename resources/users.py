from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
from peewee import DoesNotExist
from flask_login import login_required, login_user, logout_user
from flask_bcrypt import check_password_hash, generate_password_hash

from user import User

user = Blueprint('users', __name__, url_prefix='/auth')

@user.route('/register', methods=['POST'])
def register():
    body = request.get_json()
    body['username'] = body['username'].lower()
    try:
        user = User.get(User.username == body['username'])
        return jsonify(message="Username is already in the Database")
    except DoesNotExist:
        body['password'] = generate_password_hash(body['password'])
        user = User.create(**body)
        login_user(user)
        user_dict = model_to_dict(user, backrefs=True)
        del user_dict['password']
        return jsonify(user_dict), 201

@user.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    body['username'] = body['username'].lower()
    try:
        user = User.get(User.username == body['username'])
        user_dict = model_to_dict(user, backrefs=True)
        if check_password_hash(user_dict['password'], body['password']):
            login_user(user)
            del user_dict['password']
            return jsonify(user_dict), 200
        else:
            return jsonify(message="username or password is not valid")
    except DoesNotExist:
        return jsonify(message='username or password is not valid')
#method for this one is get
@user.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify(message="LOGOUT"), 200