from enum import unique
from peewee import *
from db import DATABASE
from user import User

class Word(Model):
    text = CharField(unique=True)
    user = ForeignKeyField(User, backref='words')

    class Meta: 
        database = DATABASE