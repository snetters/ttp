from flask import Flask
from flask import request

import ast

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
    
    elif request.method == 'POST':
        dict_str = request.data.decode("UTF-8")
        postData = ast.literal_eval(dict_str)
        inputParams = postData.get('params')
        
        orgName = inputParams.get('orgName')
        
        return { "orgName": orgName }