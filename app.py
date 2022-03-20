from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    name = request.args.get("name")
    return render_template("index.html", name1=name)

@app.route("greet")
def greet():
    return render_template("about.html")
