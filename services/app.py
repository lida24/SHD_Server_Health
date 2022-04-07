from flask import Flask, render_template

from helper_functions import load_json_temp_log, set_color

app = Flask(__name__)

temp_log = load_json_temp_log()

@app.route('/')
def temp_page():

    return render_template('temp.html', temp_log=temp_log, set_color=set_color)

app.run(debug=True)
