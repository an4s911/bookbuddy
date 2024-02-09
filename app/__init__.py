from dotenv import load_dotenv
from flask import Flask

from client import bp

load_dotenv()


def create_app():
    app = Flask(__name__, static_folder="../static")

    app.register_blueprint(bp)
    return app
