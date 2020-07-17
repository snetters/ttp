from flask import Flask

import time

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    ## No need to jsonify
    return { 'time': time.time() }