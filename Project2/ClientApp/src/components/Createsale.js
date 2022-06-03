import React, { useEffect, useState } from 'react'
import { Button, Modal, Form} from 'semantic-ui-react'
import axios from 'axios'

function Createsale(props) {
const { showCreatesaleModel, openCreatesaleModal, fetchSales } = props;

  const [CustomerId, setCustomerId] = useState("");
  const [ProductId, setProductId] = useState("");
  const [StoreId, setStoreId] = useState("");
  const [DateSold, setDateSold] = useState("");

  useEffect(() => {
      console.log(CustomerId)
      console.log(ProductId)
      console.log(StoreId)
      console.log(DateSold)
  })

  const createSale = () => {
      axios
        .post("/Sales/PostSale",{
          CustomerId: CustomerId,
          ProductId: ProductId,
          StoreId: StoreId,
          DateSold: DateSold,
        })
        .then(({ data }) => {
            fetchSales();
            openCreatesaleModal(false);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
      
    };


  return (
    <Modal
      open={ showCreatesaleModel }
     
    >
      <Modal.Header>Create Sale</Modal.Header>
      <Modal.Content>
        <Form>
            <Form.Field>
            <label>Customer ID</label>
            <input placeholder='Customer' onChange={(e) => setCustomerId(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>Product ID</label>
            <input placeholder='Product' onChange={(e) => setProductId(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>Store ID </label>
            <input placeholder='Store' onChange={(e) => setStoreId(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>DateSold</label>
            <input placeholder='DateSold' onChange={(e) => setDateSold(e.target.value)} />
            </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openCreatesaleModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={createSale}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Createsale