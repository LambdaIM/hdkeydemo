/**
 * Lib helps to work with Cosmos addresses.
 *
 * @module lib/address
 */
'use strict';

const bech32    = require('bech32');
const ripemd160 = require('ripemd160');
const crypto    = require('crypto');

var Amino =require('irisnet-crypto/chains/iris/amino.js')
var bufferTo = require('buffer-to-uint8array');
var toBuffer = require('typedarray-to-buffer');

var nacl = require('tweetnacl')
nacl.util = require('tweetnacl-util')
const bcrypt = require('bcryptjs');








var encryptSymmetric = function (data, prefix, key) {
    prefix = nacl.util.decodeUTF8(prefix)
    var nonceLength = 24 - prefix.length
    var randomNonce = new Uint8Array(nacl.randomBytes(nacl.secretbox.nonceLength))
    var shortNonce = randomNonce.subarray(0, nonceLength)
    var nonce = new Uint8Array(24)
    nonce.set(prefix)
    nonce.set(shortNonce, prefix.length)
    var box = nacl.secretbox(data, nonce, key)
    var result = new Uint8Array(nonceLength + box.length)
    result.set(shortNonce)
    result.set(box, nonceLength)

    return result
  }

var decryptSymmetric = function (data, prefix, key) {
    try {
      prefix = nacl.util.decodeUTF8(prefix)
      var nonceLength = 24 - prefix.length
      var shortNonce = data.subarray(0, nonceLength)
      var nonce = new Uint8Array(24)
      nonce.set(prefix)
      nonce.set(shortNonce, prefix.length)
      var result = nacl.secretbox.open(data.subarray(nonceLength), nonce, key)
    } catch (err) {
      return
    }
    return result
  }

/**
 * @const Zeros buffer, using to have compability with bytes32.
 *
 * @type {Buffer}
 * @default
 */
const ZEROS = Buffer.alloc(12);

/**
 * @const Cosmos bech32 address prefix.
 *
 * @type    {String}
 * @default
 */

const prefixFor=Buffer.from('22222');
const saltRounds = 12;

/**
 * Get Cosmos address (bech32) from public key.
 *
 * @param  {Buffer} publicKey Public key
 * @return {String}           Bech32 address
 */
exports.ExportprivateKey = function getAddress(pravteKey,password) {
    var usersalt = crypto.randomBytes(16);
    
    var salt = bcrypt.genSaltSync(saltRounds,'',usersalt);
    
    var hash = bcrypt.hashSync(password, salt);

    let hashs = crypto.createHash('sha256');
        hashs.update(Buffer.from(hash));
    let userkey = hashs.digest('hex');
    
    var userkeyF8 =tou8(Buffer.from(userkey,'hex') ) ;
    var haveprefixPrivateKey = Buffer.concat([prefixFor,pravteKey],prefixFor.length+pravteKey.length);
    var praviteFB = tou8(haveprefixPrivateKey);
    var  cryptoResult = encryptSymmetric(praviteFB, '',  userkeyF8);
    var PravteKey=toBuffer(cryptoResult);
    return {
      salt:usersalt,
      pravteKey:PravteKey
    }
    

    
};
