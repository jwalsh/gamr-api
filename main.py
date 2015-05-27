from flask import Flask, jsonify, render_template
# from livereload import Server

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title = 'GAMR API')

# url_for('static', filename='index.js')

@app.route('/api/validate/existing/<gamer>/<game>')
def validate_existing(gamer, game):
    data = {
        'data': 'true',
        'gamer': gamer,
        'game': game
    }
    return jsonify(data)


@app.route('/api/validate/duplicate/<gamer>')
def validate_duplicate(gamer):
    data = {
        'data': 'true',
        'gamer': gamer
    }
    return jsonify(data)


@app.route('/api/save')
def save():
    return jsonify({})


if __name__ == '__main__':
    app.run()

# server = Server(app.wsgi_app)
# server.serve()
