import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import uuid from "uuid";
import shoppingList from "../styles/shoppingList.css";
import axios from "axios";

import { connect } from "react-redux";
import { getItems } from "../actions/itemAction";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // addItemfunction = name => {
    //   axios({
    //     method: "post",
    //     url: "http://localhost:5001/api/items",
    //     name: name
    //   });
    // };
    axios
      .get("http://localhost:5001/api/items")
      //console.log(result, "result");
      .then(res => {
        console.log(res, "resultjhhhhhhhhhh");
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="container">
      <Button
        onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            console.log(...items, "88888888888888888");
            //addItemfunction(name);
            setItems([...items, { id: uuid(), name }]);
          }
        }}
        color="primary"
      >
        Add Item
      </Button>{" "}
      <ListGroup>
        {items.map(item => (
          <ListGroupItem key={item._id}>
            {console.log(item, "---------------------------")}
            <Button
              color="danger"
              id={item._id}
              className="deletebutton"
              onClick={e => {
                setItems([...items.filter(item => item._id !== e.target._id)]);
              }}
            >
              Remove
            </Button>
            {item.name} <br /> {item._id}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ItemsList;
