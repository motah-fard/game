from enum import unique
from flask_login import UserMixin
from peewee import *
from db import DATABASE

class User(UserMixin, Model):
    name = CharField()
    username = CharField(unique=True)
    email = CharField(unique= True)
    password = CharField()

    class Meta:
        database = DATABASE