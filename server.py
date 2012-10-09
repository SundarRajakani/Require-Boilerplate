from SimpleHTTPServer import SimpleHTTPRequestHandler
from SocketServer import TCPServer

PORT = 8000

Handler = SimpleHTTPRequestHandler

class TestServer(TCPServer):
    allow_reuse_address = True

httpd = TestServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()
