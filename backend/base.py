from flask import Flask,jsonify, request, jsonify, redirect, url_for
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)

with open('data.json', 'r') as myfile:
    data=myfile.read()
    obj= json.loads(data)

@app.route('/agendas', methods=["GET"])
def my_profile():
    response = jsonify(obj)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# @app.route('/query', methods = ["GET",'POST'])
# def get_query_from_react():
#     return request.data


# @app.route('/add',methods = ['POST', 'GET'])
# def login():
# #    if request.method == 'POST':
#     data = request.form['nm']
#     with open('data.json', 'a') as myfile:
#         myfile.write(str({"agenda": data}))
   
#     return request.form['nm']


if __name__ == '__main__':
   app.run(host="0.0.0.0", port="5000", debug=True)
   print("Running dev server on port 5000")
