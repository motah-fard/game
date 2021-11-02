from peewee import PostgresqlDatabase
DATABASE = PostgresqlDatabase('hangman_game')
def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    DATABASE.close()