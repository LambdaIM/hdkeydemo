'use strict';

var cosPubKey = require('./publicKey.js');
var cosaddress = require('./address.js');
var cosprivateKey = require('./privateKey.js');
var coscrypto =require('./crypto.js')



exports.toJson = function (keys, password, name) {
  var cospublicKey = cosPubKey.getPublicKey(keys.publicKey);
  var address = cosaddress.getAddress(keys.publicKey);
  var walletjson = cosprivateKey.ExportprivateKey(keys.privateKey, password);

  walletjson.name = name;
  walletjson.address = address;
  walletjson.salt = walletjson.salt.toString('base64');
  walletjson.privateKey = walletjson.privateKey.toString('base64');
  walletjson.publicKey = cospublicKey;
  return walletjson;
};


exports.checkJson = function(walletjson, password) {
  var privatekey = Buffer.from(walletjson.privateKey, 'base64');
  var salt = Buffer.from(walletjson.salt, 'base64');
  return cosprivateKey.importPrivateKey(privatekey, salt, password);
};

exports.getSigner= function (walletjson, password ) {
  
  var privatekey = this.checkJson(
      walletjson,
      password
  );
  var publicKey = cosPubKey.getBytes(walletjson.publicKey);
  
  return signMessage => {
      const signature = coscrypto.sign(
          Buffer.from(signMessage),
          privatekey
      );
      return {
          signature,
          publicKey: publicKey
      };
  };