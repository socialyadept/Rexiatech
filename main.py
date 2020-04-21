from flask import Flask, redirect, url_for, render_template


app = Flask(__name__)


@app.route("/")
@app.route("/rexia")
def home():
    return render_template("home.html")


@app.route("/marketing")
def marketing():
    return render_template("marketing.html")


@app.route("/contact-us")
def contact_us():
    return render_template("contact-us.html")


@app.route("/login")
def login():
    return render_template("login.html")


if __name__ == "__main__":
    app.run(debug=True)
