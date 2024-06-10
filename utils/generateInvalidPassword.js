const data = require('../fixtures/testData.json');

class generateInvalidPassword {
    invalidPassword() {
        const invalidPasswords = data.invalidPasswords;
        return invalidPasswords[Math.floor(Math.random() * invalidPasswords.length)];
    }
}

export default new generateInvalidPassword()