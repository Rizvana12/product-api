require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  { name: "Laptop", price: 55000, category: "Electronics", image:"https://res.cloudinary.com/dquadclwl/image/upload/v1765707217/computer-820281_1280_a00hu1.jpg" },
  { name: "Mobile Phone", price: 30000, category: "Mobiles", image:"https://res.cloudinary.com/dquadclwl/image/upload/v1765707235/iphone-410324_1280_ts8yd5.jpg" },
  { name: "Headphones", price: 2000, category: "Accessories", image:"https://res.cloudinary.com/dquadclwl/image/upload/v1765707253/audio-1840073_1280_c5yqla.jpg" },
  { name: "Keyboard", price: 1500, category: "Accessories", image:"https://res.cloudinary.com/dquadclwl/image/upload/v1765707274/keyboard-1628579_1280_pzisfl.jpg" },
  { name: "Tablet", price: 25000, category: "Electronics", image:"https://res.cloudinary.com/dquadclwl/image/upload/v1765707295/technology-792180_1280_ggo15a.jpg" },
  { name: "Smart Watch", price: 8000, category: "Wearables", image:"https://res.cloudinary.com/dquadclwl/image/upload/v1765708050/watch-6871817_1280_gft1kl.jpg" }
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URL);
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Database seeded with 6 products");
  process.exit();
}

seed();