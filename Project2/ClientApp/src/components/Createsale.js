import React, { useEffect, useState } from 'react'
import { Button, Modal, Form} from 'semantic-ui-react'
import axios from 'axios'

function Createsale(props) {
const { showCreatesaleModel, openCreatesaleModal, fetchSales } = props;

  const [Customer, setCustomer] = useState("");
  const [Product, setProduct] = useState("");
  const [Store, setStore] = useState("");
  const [DateSold, setDateSold] = useState("");

  useEffect(() => {
      console.log(Customer)
      console.log(Product)
      console.log(Store)
      console.log(DateSold)
  })

  const createSale = () => {
      axios.post("sales/PostSale",{
          Customer: Customer,
          Product: Product,
          Store: Store,
          DateSold: DateSold,
        })
        .then(({ data }) => {
            //this.fetchSales();
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
            <label>Customer</label>
            <input placeholder='Customer' onChange={(e) => setCustomer(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Product</label>
            <input placeholder='Product' onChange={(e) => setProduct(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>Store</label>
            <input placeholder='Store' onChange={(e) => setStore(e.target.value)} />
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