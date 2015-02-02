Home DNS
==================================================================

DESCRIPTION
--------------------------------------
Home DNS is simple tool that will allow us to access LAN over internet. It could use any cloud service with free quota just to store the latest ip address of home router. Therefore whenever you access domain of cloud webserver, it wil automatically routed to your home router.


AUTHOR
--------------------------------------
Aravinth Panchadcharam


INSTALLATION
--------------------------------------
- Raspberry Pi
- Cloud Webserver (Heroku)
- Internet router


INSTALLATION
--------------------------------------
- start home-dns in Cloud (Heroku, AWS, Google) by executing node cloud/server.js
- start home-dns in Raspberry Pi by changing your cloud-domain and executing node home/server.js
- enable port forwarding to your Raspberry Pi in LAN router




