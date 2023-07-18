import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  Container,
  ListGroup,
  Row,
} from "reactstrap";
import { remove } from "../reduxToolkit/store/cartItemSlice";

const Cart = () => {
  const productsInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // calc item-amount in cart
  let amount = 0;
  productsInCart.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.price);
  });

  const removeToCart = (id) => {
    //dispatch a remove item from an cart
    dispatch(remove(id))
  }

  return (
    <>
      <Container fluid>
        <ListGroup>
          {productsInCart.map((product) => (
            <Row className="my-3 mx-5">
              <Col md={2}>
                <img
                  src={product.image}
                  height="100px"
                  width="100px"
                  alt="product-img"
                />
              </Col>
              <Col md={10}>
                <h5>{product.title}</h5>
                <span>${product.price}</span>
                <br></br>
                <Button onClick={() => removeToCart(product.id)} className="btn btn-sm" color="danger">
                  Remove Item
                </Button>
              </Col>
            </Row>
          ))}
        </ListGroup>

        {/* if cart is empty, then ?? */}
        {productsInCart.length >= 1 ? (
          <Card className="mt-2">
            <CardHeader className="text-center fw-bold">
              Total Amount
            </CardHeader>
            <CardBody>
              <CardText>
                Total Product in a Cart is {productsInCart.length}
              </CardText>
              <CardText>Total Amount: ${amount}.00</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary">Buy Now</Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="text-center">
              <img
                src="/images/shopcart.png"
                alt="empty-cart"
                height="200px"
                style={{ opacity: "0.1" }}
              />
              <h4 className="fw-100">Empty Cart..!!</h4>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
