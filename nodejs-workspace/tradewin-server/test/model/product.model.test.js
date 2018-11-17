const chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

const Product = require('../../app/models/products.model');
const productJson = require('../helper/product.json');
let imgPath = "./assets/images/mobiles.png";

describe('Products Model Test Block', () => {
    var product = new Product(productJson);

    it("Test for Product Model Data Exist Happy Flow", () => {
        expect(product).to.have.property('name');
        expect(product).to.have.property('image'); 
        expect(product).to.have.property('subcategory');
        expect(product).to.have.property('name').to.equal('mobiles')
        expect(product).to.have.property('image').to.equal(imgPath);
        expect(product).to.have.property('subcategory').to.be.a('array');
        expect(product).to.have.property('subcategory').lengthOf(1);
    });

    it("Test for Product Model Type Evaluation Happy Flow", () => {
        expect(product).to.have.property('name').to.be.a("string");
        expect(product).to.have.property('image').to.be.a("string")
        expect(product).to.have.property('subcategory').to.be.a("array")
    })

    it("Test for Product subcategory  Data Existance Happy Flow", () => {
        expect(product).to.have.property('name').to.be.a("string");
        expect(product).to.have.property('image').to.be.a("string")
        expect(product).to.have.property('subcategory').to.be.a("array")
        expect(product).to.has.property('name');
        product.should.have.property("image");
    })

})