from flask import Flask,jsonify

app = Flask(__name__)

@app.route('/profile')
def my_profile():
    response = jsonify({
        "Name": "Saikat Chakraborty",
        "Qualification" :"BSC CS"
        })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
   app.run()
