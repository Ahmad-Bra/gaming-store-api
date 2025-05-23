"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("../controlers/products");
exports.router = express_1.default.Router();
const productClass = new products_1.Products();
exports.router.get("/products", productClass.getProducts);
exports.router.get("/products/:id", productClass.getProduct);
exports.router.post("/products", productClass.createProduct);
exports.router.put("/products/:id", productClass.updateProduct);
exports.router.delete("/products/:id", productClass.deleteProduct);
