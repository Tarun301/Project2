import React, { useEffect, useState } from 'react'
import { Button, Modal, Form} from 'semantic-ui-react'
import axios from 'axios'

function EditSale(props) {
const { showEditSaleModel, openEditSaleModal, fetchSales } = props;

  const [CustomerId, setCustomerId] = useState("");
  const [ProductId, setProductId] = useState("");
  const [StoreId, setStoreId] = useState("");
  const [DateSold, setDateSold] = useState("");

  useEffect(() => {
      console.log(CustomerId.name)
      console.log(ProductId.name)
      console.log(StoreId.name)
      console.log(DateSold.date)
  })

  const editSale = () => {
      axios
        .post("/Sales/PostSale",{
          CustomerId: setCustomerId,
          ProductId: setProductId,
          StoreId: setStoreId,
          DateSold: setDateSold,
        })
        .then(({ data }) => {
            fetchSales();
            openEditSaleModal(false);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
      
    };


  return (
    <Modal
      open={ showEditSaleModel }
     
    >
      <Modal.Header>Edit Sale</Modal.Header>
      <Modal.Content>
        <Form>
            <Form.Field>
            <label>Customer ID</label>
            <input placeholder='Customer' onChange={(e) => setCustomerId.name(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>Product ID</label>
            <input placeholder='Product' onChange={(e) => setProductId.name(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>Store ID </label>
            <input placeholder='Store' onChange={(e) => setStoreId.name(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>DateSold</label>
            <input placeholder='DateSold' onChange={(e) => setDateSold.date(e.target.value)} />
            </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openEditSaleModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={editSale}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditSale