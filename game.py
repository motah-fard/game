from peewee import *
from db import DATABASE
from word import Word
from user import User

class Game(Model):
    win_lose = BooleanField()
    word = ForeignKeyField(Word, backref='games')
    user = ForeignKeyField(User, backref='games')
    class Meta:
        database = DATABASE
