import os

import flask
from jinja2 import Environment, FileSystemLoader
from pygments import highlight
from pygments.lexers import HtmlLexer
from pygments.formatters import HtmlFormatter

app = flask.Flask(__name__)

class Patterns(object):

    def get_templates(self, directory):
        """Returns a list of all file names ending with .html in a directory."""
        path = os.path.join(self.template_dir, directory)
        templates = [f for f in os.listdir(path) if f.endswith(".html")]
        return templates

    def get_template(self, path):
        """Reads a template."""
        template = self.env.get_template(path)
        return dict(
            raw=template.render(),
            pretty=highlight(template.render(), self.lexer, self.formatter),
            name=path
        )

    def __init__(self):
        cwd = os.path.dirname(os.path.abspath(__file__))

        self.template_dir = os.path.join(cwd, '..', 'templates')
        self.env = Environment(
            loader=FileSystemLoader(self.template_dir),
            autoescape=False
        )
        self.lexer = HtmlLexer()
        self.formatter = HtmlFormatter(linenos=True)