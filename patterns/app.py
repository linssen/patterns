import os

from flask import Flask, Response, render_template

from lib.patterns import Patterns

patterns = Patterns()

app = Flask(__name__)
app.config.from_object('settings')

@app.route('/')
def index():
    """Overview of all patterns."""

    atom_templates = patterns.get_templates('atoms')
    atoms = [patterns.get_template('molecules/form.html'),]

    return render_template('_application/index.html',
        templates=atom_templates,
        atoms=atoms
    )

if __name__ == '__main__':
    app.run()
