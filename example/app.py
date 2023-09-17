import os

from baseweb_plugin_template import server
from baseweb.interface import register_component

register_component("hello.js", os.path.dirname(__file__))
