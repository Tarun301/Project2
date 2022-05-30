import React, { useEffect, useState } from 'react'
import { Button, Modal, Form} from 'semantic-ui-react'
import axios from 'axios'

function Createproduct(props) {
const { showCreateproductModel, openCreateproductModal, fetchProducts } = props;

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");

  useEffect(() => {
      console.log(Name)
      console.log(Price)
  })

  const createProduct = () => {
      axios
       .post("products/PostProduct",{
          Name: Name,
          Price: Price,
        })
        .then(({ data }) => {
            fetchProducts();
            openCreateproductModal(false);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
      
    };


  return (
    <Modal
      open={ showCreateproductModel }
     
    >
      <Modal.Header>Create Products</Modal.Header>
      <Modal.Content>
        <Form>
            <Form.Field>
            <label>Name</label>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Price</label>
            <input placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
            </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openCreateproductModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={createProduct}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Createproduct