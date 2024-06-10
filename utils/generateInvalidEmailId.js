import data from '../fixtures/testData.json';

class generateInvalidEmail {
    invalidEmail() {
        const invalidEmail = data.invalidEmailParts;
        return invalidEmail[Math.floor(Math.random() * invalidEmail.length)];
    }   
}

export default new generateInvalidEmail()
