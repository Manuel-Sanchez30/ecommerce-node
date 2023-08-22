const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const ProductImg = require("./Productimg");
const Purchase = require("./Purchase");
const User = require("./User");



//Product -> categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

//Cart -> UserId
Cart.belongsTo(User)
User.hasMany(Cart)

//Cart -> ProductId
Cart.belongsTo(Product)
Product.hasMany(Cart)

//Purchase -> ProductId
Purchase.belongsTo(Product)
Product.hasMany(Purchase)

Purchase.belongsTo(User)
User.hasMany(Purchase)


Purchase.belongsTo(Product)
Product.hasMany(Purchase)

ProductImg.belongsTo(Product)
Product.hasMany(ProductImg)

