import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import shoppingList from "../styles/shoppingList.css";
import axios from "axios";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);

  function addItemfunction(name) {
    let data = {
      name: name
    };
    axios
      .post("http://localhost:5001/api/items", data)
      .then(res => {
        setItems([...items, { id: res.data._id, name }]);
        setSendRequest(true);
        setSendRequest(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function deleteItemfunction(e) {
    let idtodelete = e.target.id;
    let url = `http://localhost:5001/api/items/${idtodelete}`;
    axios.delete(url, idtodelete).then(res => {
      setItems([...items.filter(item => item._id !== idtodelete)]);
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/items")
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [sendRequest]);

  return (
    <Container className="container">
      <Button
        onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            addItemfunction(name);
          }
        }}
        color="primary"
      >
        Add Item
      </Button>{" "}
      <ListGroup>
        {console.log(items, "999999999999999999")}
        {items.map(item => (
          <ListGroupItem key={item._id}>
            <Button
              color="danger"
              id={item._id}
              className="deletebutton"
              onClick={e => {
                deleteItemfunction(e);
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
