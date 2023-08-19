const request = require("supertest")
const app = require("../app")
const Product = require("../models/Product")
const Cart = require("../models/Cart")


const URL_BASE_USERS = "/api/v1/users"
const URL_BASE = "/api/v1/purchase"

let TOKEN
let userId
let productBody
let product
let bodyCart

beforeAll(async () => {
    //inicio de sesion
    const user = {
        email:"matias@gmail.com",
        password:"pass1234"
    }
    const res = await request(app)
    .post(`${URL_BASE_USERS}/login`)
    .send(user)

    TOKEN = res.body.token
    userId = res.body.user.id

    //PRODUCT
    productBody = {
    title: "productTest",
    description: "lorem20",
    price: 23
    }

    product = await Product.create(productBody)

    //CART
    bodyCart = {
        quantity: 1,
        productId: product.id
    }

    await Cart.create(bodyCart)
});

test("POST -> 'URL_BASE', should return status code 201 and res.body.quantiy === bodyCart.quantity", async () => {
    const res = await request(app)
        .post(URL_BASE)
        .set("Authorization", `Bearer ${TOKEN}`)

    expect(res.status).toBe(201)
    expect()

});