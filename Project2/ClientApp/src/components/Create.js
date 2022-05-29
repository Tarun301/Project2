import React, { useEffect, useState } from 'react'
import { Button, Header, Image, Modal, Form} from 'semantic-ui-react'
import axios from 'axios'

function Create(props) {
const { showCreateModel, openCreateModal, fetchCustomers } = props;

  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");

  useEffect(() => {
      console.log(Name)
      console.log(Address)
  })

  const createCustomer = () => {
      axios.post("customers/PostCustomer",{
          Name: Name,
          Address: Address,
        })
        .then(({ data }) => {
            //this.fetchCustomers();
            fetchCustomers();
            openCreateModal(false);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
      
    };


  return (
    <Modal
      open={ showCreateModel }
     
    >
      <Modal.Header>Create Staff</Modal.Header>
      <Modal.Content>
        <Form>
            <Form.Field>
            <label>Name</label>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Address</label>
            <input placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
            </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openCreateModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={createCustomer}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Create