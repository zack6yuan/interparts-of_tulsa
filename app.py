#!/usr/bin/python3
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/', strict_slashes=False)
def home():
  return render_template('index.html')


@app.route()