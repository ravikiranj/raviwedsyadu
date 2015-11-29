#!/bin/bash

# Fail on any command
set -e 

# Generate css
lessc css/styles.less > css/styles.css
cat css/bootstrap.min.css css/styles.css | cssmin > css/combined.min.css

# Generate combined JS (make sure each JS starts with semicolon)
cat js/jquery-2.1.4.min.js js/bootstrap.min.js js/jquery.countdown.min.js js/jquery.arctext.js js/wedding.js | uglifyjs -c > js/combined.min.js

# rsync
rsync -azvP --del index.html images css js /usr/share/nginx/html
