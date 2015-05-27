from flask import Flask, jsonify
# from livereload import Server

app = Flask(__name__)

@app.route('/')
def index():
    return 'GAMR Services'


@app.route('/validate/existing/<gamer>/<game>')
def validate_existing(gamer, game):
    data = {
        'data': 'true',
        'gamer': gamer,
        'game': game
    }
    return jsonify(data)


@app.route('/validate/duplicate/<gamer>')
def validate_duplicate(gamer):
    data = {
        'data': 'true',
        'gamer': gamer
    }
    return jsonify(data)


@app.route('/save')
def save():
    return jsonify({})


if __name__ == '__main__':
    app.run()

# server = Server(app.wsgi_app)
# server.serve()
