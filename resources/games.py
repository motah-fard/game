from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict
from flask_login import current_user, login_required
from user import User
from game import Game
from word import Word


game = Blueprint('games', __name__, url_prefix='/games/game')
@word.route('/')
@login_required

@word.route('/game/<int:id>', methods=['PUT'])
def update_game(id):
    try:
        body = request.get_json()
        (Word
            .update(**body)
            .where(Game.id==id)
            .execute())
        return jsonify(model_to_dict(Game.get_by_id(id))), 200
    except DoesNotExist:
        return jsonify(error=f"Word with id {id} not found."), 404
    except AttributeError as err:
        return jsonify(error=str(err)), 400