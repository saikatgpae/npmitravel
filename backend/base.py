from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "Name": "Saikat Chakraborty",
        "Qualification" :"BSC CS"
    }

    return response_body