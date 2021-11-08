from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict
from flask_login import current_user, login_required
from user import User
from game import Game
from word import Word


game = Blueprint('games', __name__, url_prefix='/game/game')
@game.route('/')
@login_required

# update the game
@game.route('/<int:id>', methods=['PUT'])
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

# delete the game
@game.route('/<int:id>', methods=['DELETE'])
def delete_game(id):
    try:
        (Game
            .delete()
            .where(Game.id == id)
            .execute())
        return jsonify(message=f"Game with id {id} deleted"), 200
    except DoesNotExist:
        return jsonify(message="error getting game."), 500

# get the game by id
@game.route('/<int:id>', methods=["GET"])
def get_game_by_id(id):
    try:
        game = Game.get_by_id(id)
        return jsonify(model_to_dict(game, backrefs=True))
    except DoesNotExist:
        return jsonify(message="Error getting the resources for game."), 500

# get all games
