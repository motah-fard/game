from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict
from flask_login import current_user, login_required

from word import Word
from user import User
from game import Game

word = Blueprint('words', __name__, url_prefix='/words')
@word.route('/')
@login_required
def get_words():
    try:
        words = [model_to_dict(word) for word in Word]
        return jsonify(words)
    except:
        return jsonify(message="Not able to get words")

@word.route('/games/<int:word_id>', methods=['POST'])
@login_required
def create_game(word_id):
    try:
        body = request.get_json()
        #get the word
        word = Word.get_by_id(word_id)
        # to make bunch of games with one word we have to comment these two line
        # if Game.get_or_none(Game.user == current_user.id, Game.word == word_id) != None:
        #     return jsonify(message="game already exist😅")
        Game.create( user=current_user, word=word)
        user = User.get_by_id(current_user.id)
        user_dict = model_to_dict(user, backrefs=True)
        del user_dict['password']
        return jsonify(user_dict), 201
    except DoesNotExist:
        return jsonify(message="Error getting Game."), 500

@word.route('/<int:id>', methods=["GET"])
def get_word_by_id(id):
    try:
        word = Word.get_by_id(id)
        return jsonify(model_to_dict(word, backrefs=True))
    except DoesNotExist:
        return jsonify(message="Error getting the resources for word."), 500

@word.route('/', methods=["POST"])
@login_required
def add_word():
    body = request.get_json()
    word = Word.create(**body, user =current_user)
    return jsonify(model_to_dict(word)), 201

@word.route('/<int:id>', methods=['DELETE'])
def delete_word(id):
    try:
        (Word
            .delete()
            .where(Word.id == id)
            .execute())
        return jsonify(message=f"Word with id {id} deleted"), 200
    except DoesNotExist:
        return jsonify(message="error getting comment."), 500

@word.route('/<int:id>', methods=['PUT'])
def update_word(id):
    try:
        body = request.get_json()
        (Word
            .update(**body)
            .where(Word.id==id)
            .execute())
        return jsonify(model_to_dict(Word.get_by_id(id))), 200
    except DoesNotExist:
        return jsonify(error=f"Word with id {id} not found."), 404
    except AttributeError as err:
        return jsonify(error=str(err)), 400

# get the game by id
@word.route('/game/<int:id>', methods=["GET"])
def get_game_by_id(id):
    try:
        game = Game.get_by_id(id)
        return jsonify(model_to_dict(game, backrefs=True))
    except DoesNotExist:
        return jsonify(message="Error getting the resources for game."), 500

# delete the game
@word.route('/game/<int:id>', methods=['DELETE'])
def delete_game(id):
    try:
        (Game
            .delete()
            .where(Game.id == id)
            .execute())
        return jsonify(message=f"Game with id {id} deleted"), 200
    except DoesNotExist:
        return jsonify(message="error getting game."), 500

# update the game
@word.route('/<int:id>', methods=['PUT'])
def update_game(id):
    try:
        body = request.get_json()
        (Game
            .update(**body)
            .where(Game.id==id)
            .execute())
        return jsonify(model_to_dict(Game.get_by_id(id))), 200
    except DoesNotExist:
        return jsonify(error=f"game with id {id} not found."), 404
    except AttributeError as err:
        return jsonify(error=str(err)), 400

#  get all the games

@word.route('/games')
@login_required
def get_games():
    try:
        games = [model_to_dict(game) for game in Game]
        return jsonify(games)
    except:
        return jsonify(message="Not able to get games")