
const { Product } = require("../models/db1");

//const  cloudinary = require('../config/cloudinary.js')

async function Getproduct(req, res) {
  const { search, category } = req.query;
console.log(search,category)
  let filter ={

  
  }
  console.log(filter.name)

  if(search){
  
  filter.name = { $regex:search}
  }
  if(category){

    filter.category = category

  }
  console.log(filter)
  

  const product = await Product.find(filter);
  

  if (product) {
    res.json(
       product
    );
  } else {
    message: "product not found";
  }
}
async function Getproductbyid(req, res) {
  const id = req.params.id;
  const product = await Product.findById({id});

  if (product) {
    res.json({
      message: product,
    });
  } else {
    message: "product not found";
  }
}

async function Createproduct(req, res) {
  const {
    name,
    description,
    price,
    category,
    imageUrls,
    stock,
    createdate,
    rating,
  } = req.body;

  //let imageUrl = "";
  //if(req.user)
  try {
    const products = await Product.create({
      name: name,
      description: description,
      price: price,
      category: category,
      imageUrls: imageUrls,
      stock: stock,
      createdate: createdate,
      rating: rating,
    });
    res.json({
      products,
      message: "product created",
    });
  } catch (error) {
    console.log(error, "erroe invalid");
  }
}
async function Updateproduct(req, res) {
  const {
    name,
    description,
    price,
    category,
    image,
    stock,
    createdate,
    rating,
  } = req.body;

  //let imageUrl = "";
  //if(req.user)
  const id = req.params.id;
  const products = await Product.updateOne(
    { _id: id },
    {
      $set: {
        name: name,
        description: description,
        price: price,
        category: category,
        image: image,
        stock: stock,
        createdate: createdate,
        rating: rating,
      },
    },
  );
  console.log(products);
  res.json({
    message: "updated successful",
  });
}

async function Deleteproduct(req, res) {
  const {
    name,
    description,
    price,
    category,
    image,
    stock,
    createdate,
    rating,
  } = req.body;

  //let imageUrl = "";
  //if(req.user)
  const id = req.params.id;
  const products = await Product.deleteOne({ _id: id });

  res.json({
    message: "deleted successful",
  });
}
module.exports = {
  Getproduct,
  Getproductbyid,
  Createproduct,
  Updateproduct,
  Deleteproduct,
};
