# WhatsAppAPI

A node.js library that enables you to send WhatsApp. This library uses puppeteer to automate the whole process. All you need to do is just login.

At its core this API uses WhatsApp Web and to ensure messages are being sent you must keep your phone **connected** (duh).

Still under development.

## Installation

Install the package via npm `npm i @whoanuragverma/whatsappapi --save` or Clone this repository.

Warning: It will automatically download the latest chromium required by puppetter.

## Usage

Logging into WhatsApp is still a headache because of expired QRs. That is why I have added an express server that facilitates login. You don't need to handle QR changes and all. All you do is just scan the QR.

Below is a basic implementation of sending message via the API.

```javascript
const WAPI = require('whatsappapi');

WAPI.createSever();
WAPI.awaitLogin()
    .then(()=>{
         WAPI.sendMessage("+919876543210","Hello,\nThis message is sent via WhatsAppAPI)
             .then((res)=>console.log(res));
// Prints when the message was sent
});
```

### Logging In

```javascript
const WAPI = require("whatsappapi");

// This will create a server at port 7000
WAPI.createServer();
```

If everthing goes right then when you visit [http://localhost:7000](http://localhost:7000) you'll see something like this.

<p align="center"><img src="https://i.postimg.cc/tJYYk45x/image.png" alt="QRscreenshot" height="300"/></p>

Just scan this QR and you're good to go.

_I don't want to create a server guys can get the base64 formatted QR_

```javascript
const WAPI = require("whatsappapi");

WAPI.getQR().then((qr) => {
    // Do whatever you want to do with this QR.
});
```

### Checking Login

When you use the web based login you'll be automatically informed when you are logged in.

Make sure that you're logged in to Web WhatsApp otherwise it will silently fail.

```javascript
const WAPI = require("whatsappapi");

WAPI.checkLogin().then((res) => {
    // res is true whenever you're logged in
});
```

### Await Login

Keep all your message sending functions inside this block as it resolves whenever login is successfull.

### Sending Message

Currently you can send only text messages support for sending images is coming soon.

```javascript
const WAPI = require("whatsappapi");

WAPI.sendMessage(phone, message);
// phone number should be with country code and without any spaces or dashes.
// message can be multiline text containing emojis where new line is represented as \n
```

## Contributing

I will be very glad if you help in the development or fix any bugs in the current code base. For major changes please properly discuss the changes you're making.

## Notice

This project is not related or affiliated to WhatsApp in any way. This package should not be to send any kind spam message.

I won't be responsible for any of the impacts on the user be it **BAN** or a Nuclear War.
