const mongoose = require('mongoose');
const server = require('../../server');
const chai = require('chai');
const chai_http = require('chai-http')

var assert = chai.assert;
var except = chai.expect;
var should = chai.should();

chai.use(chai_http);
describe("Products Controller Black", ()=>{
    it("GET /products ==> It should GET all Products data Test", ()=>{
        chai
        .request('http://127.0.0.1:2020/api') 
        .get('/products')
        .end((err, response)=>{
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

            //verify data of propertis
            // response.body[0].should.have.property('subcategory').to.equal('value')
            // response.body[0].should.have.property('subcategory').to.equal('value')
        }) // Ends the method
    });

    it("GET /products ==> It should GET all Products data Test", ()=>{
        chai
        .request('http://127.0.0.1:2020/api') 
        .get('/products')
        .end((err, response)=>{
            // console.log(response);
            response.should.be.json;
            response.should.have.status(200)
            response.body.should.be.a('array');
            response.type.should.equal("application/json")
            
            // console.log(response.body);
            
            //verify propertis
            response.body[0].should.have.property('_id')
            response.body[0].should.have.property('name')
            response.body[0].should.have.property('image')
            response.body[0].should.have.property('subcategory')

        }) // Ends the method
    });

    it("It should GET all Products Verify subcategory data Test", ()=>{
        chai
        .request('http://127.0.0.1:2020/api') 
        .get('/products')
        .end((err, response)=>{
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

    it("It should GET One Product data Test", ()=>{
        chai
        .request('http://127.0.0.1:2020/api') 
        .get('/products/5bdb2f98aba4030962a1147f')
        .end((err, response)=>{
            // console.log(response);
            response.should.be.json;
            response.should.have.status(200)
            response.body.should.be.a('object');
            response.type.should.equal("application/json")
            
            //verify propertis
            response.body.should.have.property('_id')
            response.body.should.have.property('name')
            response.body.should.have.property('image')
            response.body.should.have.property('subcategory')

            response.body.should.have.property('name').to.equal("properties");

        }) // Ends the method
    });
})

describe("Products Controller Test all Functionalities", ()=>{
    it("It should POST One Product data Test", ()=>{
        chai
        .request('http://127.0.0.1:2020/api') 
        .post('/products/new')
        .send({name : "newbooks", image : "rk/img.jpeg", subcategory : []})
        .end((err, response)=>{
            // console.log(response);
            response.should.be.json;
            response.should.have.status(200)
            response.body.should.be.a('object');
            response.type.should.equal("application/json")

            console.log("..............response", response);
            
            // //verify propertis
            // response.body.should.have.property('_id')
            // response.body.should.have.property('name')
            // response.body.should.have.property('image')
            // response.body.should.have.property('subcategory')

            // response.body.should.have.property('name').to.equal("properties");

        }) // Ends the method
    });
})