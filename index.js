/**
 * Lib helpers to work with lambda hd keys and addresses from JS.
 */
'use strict';
/**
 * address
 * Accessing the Lib / address module
 */
exports.address = {};
/**
 * crypto
 * Accessing the lib/crypto module
 */
exports.crypto = {};
/**
 * publicKey
 * Accessing the lib/publicKey module
 */
exports.publicKey = {};
/**
 * privateKey
 * Accessing the lib/privateKey module
 */
exports.privateKey = {};
/**
 * keyStore
 * Accessing the lib/keyStore module
 */
exports.keyStore = {};

Object.assign(exports.address, require('./lib/address'));
Object.assign(exports.crypto, require('./lib/crypto'));
Object.assign(exports.publicKey, require('./lib/publicKey'));
Object.assign(exports.privateKey, require('./lib/privateKey'));
Object.assign(exports.keyStore, require('./lib/keyStore'));
