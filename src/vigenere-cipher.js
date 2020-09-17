const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(bool) {
    if (bool === true || bool === undefined) this.isDirect = true
    else this.isDirect = false
  }

  calculateOutput(message, key, encryptOrDescrypt) {
    if (!message || !key) throw new Error('Not implemented')
    let output = ''
    let keyLetterIterator = 0
    for (let i = 0; i < message.length; i++) {
      const stringLetter = message[i].toUpperCase()
      if (stringLetter >= 'A' && stringLetter <= 'Z') {
        const keyLetter = i < key.length ? key[keyLetterIterator].toUpperCase() : key[keyLetterIterator % key.length].toUpperCase()
        keyLetterIterator++
        output += encryptOrDescrypt
            ? String.fromCharCode((stringLetter.charCodeAt(0) + keyLetter.charCodeAt(0)) % 26 + 65)
            : String.fromCharCode((26 + stringLetter.charCodeAt(0) - keyLetter.charCodeAt(0)) % 26 + 65)
      }
      else output += message[i]
    }
    return this.isDirect ? output : output.split('').reverse().join('')
  }

  encrypt(message, key) {
    return this.calculateOutput(message, key, true)
  }    
  decrypt(encryptedMessage, key) {
    return this.calculateOutput(encryptedMessage, key, false)
  }
}

module.exports = VigenereCipheringMachine;
