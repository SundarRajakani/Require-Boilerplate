### Configuration


#

all: js/build/templates.js

run: all
	python server.py

js/build/templates.js: js/templates/*
	mkdir -p js/build
	handlebars $^ -f $@
