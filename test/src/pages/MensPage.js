import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/styles/pages.css";

function MensPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const res = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setProducts(res.data);
      };
      fetchProducts();
    }, []);
  
    const handleAddToCart = (product) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    };
  return (
    <>
        <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-4">Men's clothing</h6>
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
    </>
  )
}

export default MensPage
