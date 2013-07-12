import os

from flask import Flask, Response, render_template

from lib.patterns import Patterns

patterns = Patterns()

app = Flask(__name__)
app.config.from_object('settings')

@app.route('/')
def index():
    """Overview of all patterns."""

    atom_templates = patterns.get_templates()

    return render_template('_application/index.html',
        templates=atom_templates,
    )

@app.route('/<path:path>', methods=['GET'])
def template_view(path):
    """An indavidual template examination."""
    template = patterns.get_template(path)

    return render_template('_application/examine.html',
        template=template
    )

if __name__ == '__main__':
    app.run()
