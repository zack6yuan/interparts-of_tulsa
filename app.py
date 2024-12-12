#!/usr/bin/python3
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/', strict_slashes=False)
def home():
  return render_template('index.html')


@app.route('/specials', strict_slashes=False)
def specials():
  return render_template(specials.html)


@app.route('/reviews', strict_slashes=False)
def reviews():
  return render_template(reviews.html)


@app.route('/about', strict_slashes=False)
def about():
  return render_template(about.html)


@app.route('/gallery', strict_slashes=False)
def gallery():
  return render_template(gallery.html)


@app.route('/contact', strict_slashes=False)
def contact():
  return render_template(contact.html)


if __name__ == "__main__":
  app.run(debug=True)