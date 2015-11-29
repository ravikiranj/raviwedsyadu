raviwedsyadu
============
* Install nginx via `sudo apt-get install nginx`
* Install nodeJS via `curl -sL https://deb.nodesource.com/setup | sudo bash -`
* Install lessc, cssmin, uglifyjs packages via `sudo npm install -g less cssmin uglify-js phantomjs`
* Run `sudo ./deploy.sh` to deploy to your local nginx server
* To capture html page as PDF, run below commands
  * Install wkhtmltopdf from http://wkhtmltopdf.org/ (make sure you get the binary that's comes with patched Qt)
  * Run `./genpdf.sh`
  * Disable countdown and modify CSS if necessary to suit your needs
