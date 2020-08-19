# WhatsAppAPI

A node.js library that enables you to send WhatsApp. This library uses puppeteer to automate the whole process. All you need to do is just login.

At its core this API uses WhatsApp Web and to ensure messages are being sent you must keep your phone **connected** (duh).

Still under development.

## Installation

Install the package via npm `npm i @whoanuragverma/whatsappapi --save` or Clone this repository.

Warning: It will automatically download the latest chromium required by puppetter.

## Usage

Logging into WhatsApp is still a headache because of expired QRs. That is why I have added an express server that facilitates login. You don't need to handle QR changes and all. All you do is just scan the QR.

### Logging In

```javascript 
const WAPI = require('whatsappapi);

// This will create a server at port 7000
WAPI.createServer();
```

If everthing goes right then when you visit [http://localhost:7000](http://localhost:7000) you'll see something like this.

<p align="center"><img src="https://i.postimg.cc/tJYYk45x/image.png" alt="QRscreenshot" height="300"/></p>

Just scan this QR and you're good to go.

*I don't want to create a server guys can get the base64 formatted QR*

```javascript
const WAPI = require('whatsappapi);

WAPI.getQR()
    .then((qr)=>{
     // Do whatever you want to do with this QR.
    });
