#!/bin/bash
wkhtmltopdf -O landscape -s tabloid -n --enable-javascript --enable-external-links -B 0 -L 0 -R 0 -T 0 http://localhost raviwedsyadu.pdf
