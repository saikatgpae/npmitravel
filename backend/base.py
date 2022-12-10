from flask import Flask

api = Flask(__name__)

api.route('/profile')

def my_profile():
    response_body = {
        "name": "Saikat Chakraborty",
        "about": "A full stack developer"
    }
    return response_body