from peewee import PostgresqlDatabase
import os
from playhouse.db_url import connect
if 'DATABASE_URL' in os.environ:
    # ...choose that database
    # playhouse figures out that our database is postgres based on the database url
    DATABASE = connect(os.environ.get('DATABASE_URL'))
else:
    DATABASE = PostgresqlDatabase('hangman_game')

def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    DATABASE.close()