from flask import Flask, render_template

from helper_functions import load_json_temp_log

app = Flask(__name__)

temp_log = load_json_temp_log()

@app.route('/')
def temp_page():

    return render_template('temp.html', temp_log=temp_log)

app.run(debug=True)
