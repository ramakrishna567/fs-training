const mongoose = require('mongoose');
const server = require('../../server');
const chai = require('chai');
const chai_http = require('chai-http')

var assert = chai.assert;
var except = chai.expect;
var should = chai.should();

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmVjNDcyZDY4MDg4MzY1OTAxMWY2NzciLCJpYXQiOjE1NDI2NDY0NjEsImV4cCI6MTU0MjczMjg2MX0.fzd_VbbBGeA95R5Ycw7Kja4T_qNW1antmCZuCMl9Giw";

chai.use(chai_http);
describe("Products Controller Black", () => {
    it("GET /products ==> It should GET all Products data Test", () => {
        chai
            .request('http://127.0.0.1:2020/api')
            .get('/products')
            .end((err, response) => {
                // console.log(response);
                response.should.be.json;
                response.should.have.status(200)
                response.body.should.be.a('array');
                response.type.should.equal("application/json")

                //verify propertis
                response.body[0].should.have.property('_id')
                response.body[0].should.have.property('name')
                response.body[0].should.have.property('image')
                response.body[0].should.have.property('subcategory')

            }) // Ends the method
    });

    // it("It should GET One Product data Test", () => {
    //     chai
    //         .request('http://127.0.0.1:2020/api')
    //         .get('/products/')
    //         .end((err, response) => {
    //             // console.log(response);
    //             response.should.be.json;
    //             response.should.have.status(200)
    //             response.body.should.be.a('object');
    //             response.type.should.equal("application/json")

    //             //verify propertis
    //             response.body.should.have.property('_id')
    //             response.body.should.have.property('name')
    //             response.body.should.have.property('image')
    //             response.body.should.have.property('subcategory')

    //             //verify subcategory lenght
    //             response.body.should.have.property('name').to.equal("properties");
    //             response.body.should.have.property('image').to.equal("/assets/images/properties/properties.png");
    //             response.body.should.have.property('subcategory');
    //             response.body.subcategory[0].should.have.property("name").to.equal("For Sale")
    //             response.body.subcategory[0].should.have.property("image").to.equal("./assets/images/properties/sale.png")
    //             response.body.subcategory[0].should.have.property("sub").with.lengthOf(0);

    //         }) // Ends the method
    // });
})

describe("Products Controller Test all Functionalities", () => {

    // it("It should POST One Product data Test", () => {
    //     chai
    //         .request('http://127.0.0.1:2020/api')
    //         .post('/products/new')
    //         .send({ "name": "newbooks", "image": "rk/img.jpeg", "subcategory": [] })
    //         .end((err, response) => {
    //             // console.log(response);
    //             response.should.be.json;
    //             response.should.have.status(200)
    //             response.body.should.be.a('object');
    //             response.type.should.equal("application/json")

    //             console.log("..............response", response.body);
    //             // var productId = response.body._id;
    //             // console.log("..............productId", productId);

    //             //verify propertis
    //             response.body.should.have.property('_id')
    //             response.body.should.have.property('name')
    //             response.body.should.have.property('image')
    //             response.body.should.have.property('subcategory')
    //         }) // Ends the method
    // });

    // // UPDARE PRODUCT TEST
    // it("It should PUT for Update One Product data Test", () => {
    //     chai
    //         .request('http://127.0.0.1:2020/api')
    //         .put('/products/update/5bf2eb9378c61b26ac7456cc')
    //         .send({ name: "sample books" })
    //         .set('x-access-token', token)
    //         .end((err, response) => {
    //             // console.log(response);
    //             response.should.be.json;
    //             response.should.have.status(200)
    //             response.body.should.be.a('object');
    //             response.type.should.equal("application/json")

    //             console.log("..............response", response.body);

    //             //verify propertis
    //             except(response.body).to.have.property("name");
    //             except(response.body).to.have.property("image");
    //             except(response.body).to.have.property("subcategory").with.lengthOf(0);
    //         }) // Ends the method
    // });

    // // DELETE PRODUCT TEST
    // it("It should DELETE for delete One Product data Test", () => {
    //     chai
    //         .request('http://127.0.0.1:2020/api')
    //         .delete('/products/delete/5bf2e765dfd405398c3aac42')
    //         .set('x-access-token', token)
    //         .end((err, response) => {
    //             // console.log(response);
    //             response.should.be.json;
    //             response.should.have.status(200)
    //             response.body.should.be.a('object');
    //             response.type.should.equal("application/json")

    //             console.log("..............response-body", response.body);

    //         }) // Ends the method
    // });
});