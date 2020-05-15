## Modules

<dl>
<dt><a href="#module_lib/address">lib/address</a></dt>
<dd><p>Lib helps to work with Lambda addresses.</p>
</dd>
<dt><a href="#module_lib/crypto">lib/crypto</a></dt>
<dd><p>Lib helps to work with lambda private/public keys.</p>
</dd>
<dt><a href="#module_lib/keyStore">lib/keyStore</a></dt>
<dd><p>Lib helps to work with Lambda keys to  keyStore  save and open.</p>
</dd>
<dt><a href="#module_lib/privateKey">lib/privateKey</a></dt>
<dd><p>Lib helps to work with lambda privateKey Encryption, decryption.</p>
</dd>
<dt><a href="#module_lib/publicKey">lib/publicKey</a></dt>
<dd><p>Lib helps to work with lambda publicKey.</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#address">address</a></dt>
<dd><p>address
Accessing the Lib / address module</p>
</dd>
<dt><a href="#crypto">crypto</a></dt>
<dd><p>crypto
Accessing the lib/crypto module</p>
</dd>
<dt><a href="#publicKey">publicKey</a></dt>
<dd><p>publicKey
Accessing the lib/publicKey module</p>
</dd>
<dt><a href="#privateKey">privateKey</a></dt>
<dd><p>privateKey
Accessing the lib/privateKey module</p>
</dd>
<dt><a href="#keyStore">keyStore</a></dt>
<dd><p>keyStore
Accessing the lib/keyStore module</p>
</dd>
</dl>

<a name="module_lib/address"></a>

## lib/address
Lib helps to work with Lambda addresses.


* [lib/address](#module_lib/address)
    * [.getAddress(publicKey)](#module_lib/address.getAddress) ⇒ <code>String</code>
    * [.ValidatorAddress(address)](#module_lib/address.ValidatorAddress) ⇒ <code>String</code>
    * [.MinerAddress(address)](#module_lib/address.MinerAddress) ⇒ <code>String</code>
    * [.getBytes(address)](#module_lib/address.getBytes) ⇒ <code>Buffer</code>
    * [.getAddressFromBytes(bytes)](#module_lib/address.getAddressFromBytes) ⇒ <code>String</code>

<a name="module_lib/address.getAddress"></a>

### lib/address.getAddress(publicKey) ⇒ <code>String</code>
Get lambda  address (bech32) from public key.

**Kind**: static method of [<code>lib/address</code>](#module_lib/address)  
**Returns**: <code>String</code> - Bech32 address  

| Param | Type | Description |
| --- | --- | --- |
| publicKey | <code>Buffer</code> | Public key |

<a name="module_lib/address.ValidatorAddress"></a>

### lib/address.ValidatorAddress(address) ⇒ <code>String</code>
Get Validator operation  address (bech32) from lambda  address.

**Kind**: static method of [<code>lib/address</code>](#module_lib/address)  
**Returns**: <code>String</code> - Validator operation  address (bech32).  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | lambda  address (bech32). |

<a name="module_lib/address.MinerAddress"></a>

### lib/address.MinerAddress(address) ⇒ <code>String</code>
Get Miner operation  address (bech32) from lambda  address.

**Kind**: static method of [<code>lib/address</code>](#module_lib/address)  
**Returns**: <code>String</code> - Miner operation  address (bech32).  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | lambda  address (bech32). |

<a name="module_lib/address.getBytes"></a>

### lib/address.getBytes(address) ⇒ <code>Buffer</code>
Get bytes from lambda  address (bech32).

**Kind**: static method of [<code>lib/address</code>](#module_lib/address)  
**Returns**: <code>Buffer</code> - Buffer contains 20 bytes from address.  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | lambda  address (bech32). |

<a name="module_lib/address.getAddressFromBytes"></a>

### lib/address.getAddressFromBytes(bytes) ⇒ <code>String</code>
Get lambda  address (bech32) from bytes.

**Kind**: static method of [<code>lib/address</code>](#module_lib/address)  
**Returns**: <code>String</code> - lambda  address .  

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Buffer</code> | Bytes of address. |

<a name="module_lib/crypto"></a>

## lib/crypto
Lib helps to work with lambda private/public keys.


* [lib/crypto](#module_lib/crypto)
    * [.generateRandomMnemonic(strength)](#module_lib/crypto.generateRandomMnemonic)
    * [.getKeysFromMnemonic(mnemonic, path)](#module_lib/crypto.getKeysFromMnemonic) ⇒ <code>Object.&lt;Buffer, Buffer&gt;</code>
    * [.getKeysFromMnemonicbyindex(mnemonic, index)](#module_lib/crypto.getKeysFromMnemonicbyindex) ⇒ <code>Object.&lt;Buffer, Buffer&gt;</code>
    * [.sign(bytes, privateKey)](#module_lib/crypto.sign) ⇒ <code>Buffer</code>
    * [.verify(bytes, signature, publicKey)](#module_lib/crypto.verify) ⇒ <code>Boolean</code>
    * [.signJson(json, privateKey)](#module_lib/crypto.signJson) ⇒ <code>Buffer</code>
    * [.verifyJson(json, signature, publicKey)](#module_lib/crypto.verifyJson) ⇒ <code>Boolean</code>

<a name="module_lib/crypto.generateRandomMnemonic"></a>

### lib/crypto.generateRandomMnemonic(strength)
generate Random Mnemonic

**Kind**: static method of [<code>lib/crypto</code>](#module_lib/crypto)  

| Param | Type | Description |
| --- | --- | --- |
| strength | <code>number</code> | lambda need 256 |

<a name="module_lib/crypto.getKeysFromMnemonic"></a>

### lib/crypto.getKeysFromMnemonic(mnemonic, path) ⇒ <code>Object.&lt;Buffer, Buffer&gt;</code>
Get keys (private/public) from mnemonic and path (bip32/39/44).

**Kind**: static method of [<code>lib/crypto</code>](#module_lib/crypto)  
**Returns**: <code>Object.&lt;Buffer, Buffer&gt;</code> - Wallet object contains privateKey/publicKey.  

| Param | Type | Description |
| --- | --- | --- |
| mnemonic | <code>String</code> | Mnemonic words. |
| path | <code>String</code> | BIP44 path. |

<a name="module_lib/crypto.getKeysFromMnemonicbyindex"></a>

### lib/crypto.getKeysFromMnemonicbyindex(mnemonic, index) ⇒ <code>Object.&lt;Buffer, Buffer&gt;</code>
Get keys (private/public) from mnemonic and path (bip32/39/44).

**Kind**: static method of [<code>lib/crypto</code>](#module_lib/crypto)  
**Returns**: <code>Object.&lt;Buffer, Buffer&gt;</code> - Wallet object contains privateKey/publicKey.  

| Param | Type | Description |
| --- | --- | --- |
| mnemonic | <code>String</code> | Mnemonic words. |
| index | <code>Number</code> | account index |

<a name="module_lib/crypto.sign"></a>

### lib/crypto.sign(bytes, privateKey) ⇒ <code>Buffer</code>
Sign bytes with private key by secp256k1 algo.

**Kind**: static method of [<code>lib/crypto</code>](#module_lib/crypto)  
**Returns**: <code>Buffer</code> - Signature bytes.  

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Buffer</code> | Bytes to sign. |
| privateKey | <code>Buffer</code> | Private key to sign bytes. |

<a name="module_lib/crypto.verify"></a>

### lib/crypto.verify(bytes, signature, publicKey) ⇒ <code>Boolean</code>
Verify signature by object bytes and public key.

**Kind**: static method of [<code>lib/crypto</code>](#module_lib/crypto)  
**Returns**: <code>Boolean</code> - Result of verification.  

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Buffer</code> | Bytes to verify signature. |
| signature | <code>Buffer</code> | Signature bytes. |
| publicKey | <code>Buffer</code> | Public key to verify signature. |

<a name="module_lib/crypto.signJson"></a>

### lib/crypto.signJson(json, privateKey) ⇒ <code>Buffer</code>
Sign JSON object by private key.

**Kind**: static method of [<code>lib/crypto</code>](#module_lib/crypto)  
**Returns**: <code>Buffer</code> - Signature bytes.  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Object</code> | Object to sign. |
| privateKey | <code>Buffer</code> | Private key to sign object. |

<a name="module_lib/crypto.verifyJson"></a>

### lib/crypto.verifyJson(json, signature, publicKey) ⇒ <code>Boolean</code>
Verify JSON object by signature and public key.

**Kind**: static method of [<code>lib/crypto</code>](#module_lib/crypto)  
**Returns**: <code>Boolean</code> - Result of verification.  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Object</code> | Object to verify signature. |
| signature | <code>Buffer</code> | Signature to bytes. |
| publicKey | <code>Buffer</code> | Public key to verify signature. |

<a name="module_lib/keyStore"></a>

## lib/keyStore
Lib helps to work with Lambda keys to  keyStore  save and open.


* [lib/keyStore](#module_lib/keyStore)
    * [.toJson(keys, password, name)](#module_lib/keyStore.toJson)
    * [.checkJson(walletjson, password)](#module_lib/keyStore.checkJson)

<a name="module_lib/keyStore.toJson"></a>

### lib/keyStore.toJson(keys, password, name)
Convert to Keystore JSON format

**Kind**: static method of [<code>lib/keyStore</code>](#module_lib/keyStore)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>Buffer</code> | Public key |
| password | <code>string</code> | Keystore password |
| name | <code>string</code> | Keystore name |

<a name="module_lib/keyStore.checkJson"></a>

### lib/keyStore.checkJson(walletjson, password)
Get private key from keystore

**Kind**: static method of [<code>lib/keyStore</code>](#module_lib/keyStore)  

| Param | Type | Description |
| --- | --- | --- |
| walletjson | <code>string</code> | Keystore JSON format |
| password | <code>string</code> | Keystore password |

<a name="module_lib/privateKey"></a>

## lib/privateKey
Lib helps to work with lambda privateKey Encryption, decryption.


* [lib/privateKey](#module_lib/privateKey)
    * [.ExportprivateKey(privatekey, password)](#module_lib/privateKey.ExportprivateKey)
    * [.importPrivateKey(privatekey, usersalt)](#module_lib/privateKey.importPrivateKey)

<a name="module_lib/privateKey.ExportprivateKey"></a>

### lib/privateKey.ExportprivateKey(privatekey, password)
Encrypt private key

**Kind**: static method of [<code>lib/privateKey</code>](#module_lib/privateKey)  

| Param | Type | Description |
| --- | --- | --- |
| privatekey | <code>Buffer</code> | private key |
| password | <code>String</code> | password |

<a name="module_lib/privateKey.importPrivateKey"></a>

### lib/privateKey.importPrivateKey(privatekey, usersalt)
Decrypt private key

**Kind**: static method of [<code>lib/privateKey</code>](#module_lib/privateKey)  

| Param | Type | Description |
| --- | --- | --- |
| privatekey | <code>Buffer</code> | private key |
| usersalt | <code>string</code> | usersalt |

<a name="module_lib/publicKey"></a>

## lib/publicKey
Lib helps to work with lambda publicKey.


* [lib/publicKey](#module_lib/publicKey)
    * [.getPublicKey(publicKey)](#module_lib/publicKey.getPublicKey) ⇒ <code>String</code>
    * [.getBytes(publicKeybech32)](#module_lib/publicKey.getBytes) ⇒ <code>Buffer</code>

<a name="module_lib/publicKey.getPublicKey"></a>

### lib/publicKey.getPublicKey(publicKey) ⇒ <code>String</code>
Get lambda (bech32) public key.

**Kind**: static method of [<code>lib/publicKey</code>](#module_lib/publicKey)  
**Returns**: <code>String</code> - Bech32 public key  

| Param | Type | Description |
| --- | --- | --- |
| publicKey | <code>Buffer</code> | Public key |

<a name="module_lib/publicKey.getBytes"></a>

### lib/publicKey.getBytes(publicKeybech32) ⇒ <code>Buffer</code>
Get bytes from public key (bech32).

**Kind**: static method of [<code>lib/publicKey</code>](#module_lib/publicKey)  

| Param | Type |
| --- | --- |
| publicKeybech32 | <code>String</code> | 

<a name="address"></a>

## address
address
Accessing the Lib / address module

**Kind**: global variable  
<a name="crypto"></a>

## crypto
crypto
Accessing the lib/crypto module

**Kind**: global variable  
<a name="publicKey"></a>

## publicKey
publicKey
Accessing the lib/publicKey module

**Kind**: global variable  
<a name="privateKey"></a>

## privateKey
privateKey
Accessing the lib/privateKey module

**Kind**: global variable  
<a name="keyStore"></a>

## keyStore
keyStore
Accessing the lib/keyStore module

**Kind**: global variable  
