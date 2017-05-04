/**
 * Created by Søren on 03-05-2017.
 */


var assert = require('chai').assert;
var expect = require('chai').expect;

var chat = [{username : "Søren"}, {username: "Martin"}, {username: "Tobias"}];
var i = 0;


chai.use(chaiHttp);
//Our parent block
describe('users', ()=> {
    beforeEach((done) => {
    username.remove({}, (err) => {
        done();
});
});


while (i < chat.length)
{
    console.log(chat[i]);
    // assert.typeOf(person[i].firstname, 'string', 'Firstname is string');
    // assert.typeOf(person[i].age, 'number', 'Age is a number');
    expect(chat[i].username).to.be.a('string');
    i++;
}
