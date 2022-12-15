from flask import Flask,jsonify, request

app = Flask(__name__)

@app.route('/profile', methods=['GET', 'POST'])
def my_profile():
    response = jsonify({
        "Agenda": "Connect frontend and backend"
        })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/post_form', methods=['POST'])
def process_form():
    data = request.form
    print(data['username'])
    print(data['password'])    
    return data

if __name__ == '__main__':
   app.run()
