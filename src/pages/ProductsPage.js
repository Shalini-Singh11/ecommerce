import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/styles/pages.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    const sortedProducts = [...products].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-4">All Products</h6>
        </div>
        <div>
          <select
            className="form-select mb-4"
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <Card style={{ width: "18rem" }} className="border-dark">
              <Card.Img
                variant="top"
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <Card.Body className="m-auto">
                <Card.Text>Price - ${product.price}</Card.Text>

                <Button
                  variant="primary"
                  className="btn btn-warning"
                  onClick={() => handleAddToCart(product)}
                >
                  {" "}
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
