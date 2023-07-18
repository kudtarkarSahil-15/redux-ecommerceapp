import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { add } from "../reduxToolkit/store/cartItemSlice";

const Product = () => {
  const [products, getProducts] = useState([]);

  const dispatch = useDispatch();

  const fetchProductFn = async () => {
    const res = await Axios.get("https://fakestoreapi.com/products");
    // console.log(res.data)
    getProducts(res.data);
  };

  const addToCart = (products) => {
    //dispatch an add action
    dispatch(add(products))
  }

  useEffect(() => {
    fetchProductFn();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          {products.map((products, index) => (
            <Col md={3}>
              <Card
                className="text-center py-3 my-2"
                style={{ width: "18rem", height: "370px" }}
              >
                <div className="text-center">
                  <CardImg
                    src={products.image}
                    style={{ width: "100px", height: "130px" }}
                  ></CardImg>
                  <Row>
                    <Col>
                      <span className="px-1">
                        <FaStar color="grey" className="mb-1"/>
                        {products.rating?.rate} | {products.rating?.count}
                      </span>
                    </Col>
                  </Row>
                </div>
                <CardBody>
                  <CardTitle>{products.title}</CardTitle>
                  <CardSubtitle>${products.price}</CardSubtitle>
                </CardBody>
                  <Button onClick={() => addToCart(products)} color="white" style={{border: "none", fontWeight: "bold"}}>Add To Cart</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Product;
