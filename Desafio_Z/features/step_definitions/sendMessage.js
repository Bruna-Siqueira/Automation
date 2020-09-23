var chai = require("chai");
const expect = chai.expect;
const { Given, When, Then } = require('cucumber');
const axios = require('axios');
axios.defaults.baseURL = 'https://7eb984w4j4.execute-api.us-east-1.amazonaws.com';
let post_response

When('I send a {string} to the {int}', async (message, number) => {
    let body = {
        mensagem: message,
        num_destinatario: number
    };
    post_response = await axios.post('/dev/lambdastresstest', body);
});

Then('the message must be sent successfully', () => {
    expect(post_response.status).to.equal(200);
    expect(post_response.data.statusCode).to.equal(200);
    expect(post_response.data.body).to.equal('"Mensagem enviada com sucesso"');
});