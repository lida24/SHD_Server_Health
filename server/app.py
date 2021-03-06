from flask import Flask, jsonify

import helper_functions

app = Flask(__name__)

@app.route('/get_heatmap', methods=['GET'])
def get_location_names():
    helper_functions.load_json()
    response = jsonify({
        'heatmap': helper_functions.get_heatmap()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    print("Starting Python Flask Server...")
    app.run()