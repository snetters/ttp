from flask import Flask

app = Flask(__name__)

@app.route('/time')
def getTime():
    import time
    ## No need to jsonify
    return { 'time': time.time() }


@app.route('/formAPI', methods=['GET', 'POST'])
def formAPI():
    print("formAPI called")
    ## No need to jsonify
    return "helloWorld"