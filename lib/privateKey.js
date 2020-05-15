/**
 * Lib helps to work with lambda privateKey Encryption, decryption.
 *
 * @module lib/privateKey
 */
'use strict';



const crypto = require('crypto');


var bufferTo = require('buffer-to-uint8array');
var toBuffer = require('typedarray-to-buffer');

var nacl = require('tweetnacl');
nacl.util = require('tweetnacl-util');
const bcrypt = require('@jswebfans/bcryptjs');

const { throwErrorCode, errorList } = require('./throwErrorCode.js');

var encryptSymmetric = function (data, prefix, key) {
  prefix = nacl.util.decodeUTF8(prefix);
  var nonceLength = 24 - prefix.length;
  var randomNonce = new Uint8Array(nacl.randomBytes(nacl.secretbox.nonceLength));
  var shortNonce = randomNonce.subarray(0, nonceLength);
  var nonce = new Uint8Array(24);
  nonce.set(prefix);
  nonce.set(shortNonce, prefix.length);
  var box = nacl.secretbox(data, nonce, key);
  var result = new Uint8Array(nonceLength + box.length);
  result.set(shortNonce);
  result.set(box, nonceLength);

  return result;
};

var decryptSymmetric = function (data, prefix, key) {
  try {
    prefix = nacl.util.decodeUTF8(prefix);
    var nonceLength = 24 - prefix.length;
    var shortNonce = data.subarray(0, nonceLength);
    var nonce = new Uint8Array(24);
    nonce.set(prefix);
    nonce.set(shortNonce, prefix.length);
    var result = nacl.secretbox.open(data.subarray(nonceLength), nonce, key);
  } catch (err) {
    return;
  }
  return result;
};





const prefixFor = Buffer.from('lamb/');// 22222   lamb/
const saltRounds = 12;

/**
 * Encrypt private key
 *
 * @param  {Buffer} privatekey private key
 * @param {String} password   password
 */
exports.ExportprivateKey = function encodePrivateKey(privatekey, password) {
  var usersalt = crypto.randomBytes(16);

  var salt = bcrypt.genSaltSync(saltRounds, '', usersalt);

  var hash = bcrypt.hashSync(password, salt);

  const hashs = crypto.createHash('sha256');
  hashs.update(Buffer.from(hash));
  const userkey = hashs.digest('hex');
  var userkeyArray = bufferTo(Buffer.from(userkey, 'hex'));


  var haveprefixPrivateKey = Buffer.concat([prefixFor, privatekey], prefixFor.length + privatekey.length);
  var fixprivatekeyArray = bufferTo(haveprefixPrivateKey);

  var cryptoResult = encryptSymmetric(fixprivatekeyArray, '', userkeyArray);
  var Key = toBuffer(cryptoResult);
  return {
    salt: usersalt,
    privateKey: Key
  };
};

/**
 * Decrypt private key
 * @param  {Buffer} privatekey private key
 * @param  {string} usersalt usersalt
 */
exports.importPrivateKey = function decodePrivateKey(privatekey, usersalt, password) {
  var salt = bcrypt.genSaltSync(saltRounds, '', usersalt);
  var hash = bcrypt.hashSync(password, salt);

  const hashs = crypto.createHash('sha256');
  hashs.update(Buffer.from(hash));
  const userkey = hashs.digest('hex');
  var userkeyArray = bufferTo(Buffer.from(userkey, 'hex'));

  var privatekeyArray = bufferTo(privatekey);

  var seed = decryptSymmetric(privatekeyArray, '', userkeyArray);
  if (seed == null || seed.length == 0) {
    throwErrorCode(errorList.Password_error);
  }

  var privateKey = toBuffer(seed).slice(5);
  return privateKey;
};



