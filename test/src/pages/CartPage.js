import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
    setTotal(cartItems.reduce((acc, item) => acc + item.price, 0));
  }, []);

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setTotal(updatedCart.reduce((acc, item) => acc + item.price, 0));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-4">Cart</h6>
        </div>
        <div>
          <h6 className="mb-4">Total: ${total}</h6>
        </div>
      </div>
      <div className="row">
        {cart.map((product) => (
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
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CartPage;
