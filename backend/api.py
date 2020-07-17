from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/backend/time')
def getTime():
    import time
    ## No need to jsonify
    return { 'time': time.time() }


@app.route('/backend/formAPI', methods=['GET', 'POST'])
def formAPI():
    if request.method == 'GET':
        print("request.args =", request.args)
        orgName = request.args.get('orgName')
        
        ## Implement backend logic here
        
        ## Implement SQL logic here
        
        
        ## No need to jsonify
        return { "orgName": orgName }