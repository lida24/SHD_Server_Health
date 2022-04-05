# app.py
from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

@app.route('/')
def home_page():
    example_embed=''
    return render_template('index.html', embed=example_embed)

@app.route('/test', methods=['GET'])
def testfn():
        message = {"ts": "2022-04-01 + 16:22:14", "cts": [[44.75, 1648829929], [44.625, 1648829935], [44.625, 1648829942], [43.75, 1648829949], [44.0, 1648829955], [44.0, 1648829962], [44.625, 1648829968], [44.5, 1648829975], [44.625, 1648829982], [44.0, 1648829988], [44.875, 1648829995], [44.5, 1648830002], [44.625, 1648830008], [44.125, 1648830015], [43.875, 1648830021], [44.25, 1648830028], [44.5, 1648830035], [43.875, 1648830041], [44.625, 1648830048], [44.625, 1648830055], [43.625, 1648830061], [44.125, 1648830068], [44.875, 1648830074], [44.75, 1648830081], [44.75, 1648830088], [43.75, 1648830094], [44.0, 1648830101], [44.5, 1648830108], [44.125, 1648830114], [44.125, 1648830121], [44.125, 1648830127], [43.625, 1648830134]], "heatmap": [[39, 34, 38, 34, 33, 34, 33, 37, 34, 32, 36, 33, 38, 40, 34], [32, 32, 32, 40, 36, 32, 33, 35, 32, 37, 33, 33, 37, 32, 40], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]}
        return jsonify(message)


app.run(debug=True)
