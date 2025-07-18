const Product = require("../Models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went worng",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went worng",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json(product);
    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went worng",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went worng",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went worng",
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
