import React, { useEffect, useState } from 'react'
import { Button, Modal, Form} from 'semantic-ui-react'
import axios from 'axios'

function Createstore(props) {
const { showCreatestoreModel, openCreatestoreModal, fetchStores } = props;

  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");

  useEffect(() => {
      console.log(Name)
      console.log(Address)
  })

  const createStore = () => {
      axios.post("stores/PostStore",{
          Name: Name,
          Address: Address,
        })
        .then(({ data }) => {
            //this.fetchStores();
            fetchStores();
            openCreatestoreModal(false);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
      
    };


  return (
    <Modal
      open={ showCreatestoreModel }
     
    >
      <Modal.Header>Create Store</Modal.Header>
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
        <Button color='black' onClick={() => openCreatestoreModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={createStore}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Createstore