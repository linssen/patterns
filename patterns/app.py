from flask import Flask, Response, render_template

app = Flask(__name__)
app.config.from_object('settings')

@app.route('/')
def index():
    """Overview of all patterns."""

    return render_template('index.html')


if __name__ == '__main__':
    app.run()
