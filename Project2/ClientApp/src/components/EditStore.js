import React, { Component } from 'react';

import { Button,Modal, Form } from 'semantic-ui-react' 

import axios from 'axios'

 

export class EditStore extends Component {

    constructor(props) {
        
        super(props)
        


        this.state = {

            id: "",name:"", address:""


         };

this.handleChange = this.handleChange.bind(this);

    }

    handleChange({target}){

        this.setState({

            [target.name]: target.value

          });

  };

    editStore = () => {

        axios.put('/Stores/PutStore/' + this.state.id,{

            id: this.state.id,

            name : this.state.name,

            address : this.state.address

        })

        .then(({res})=> {

            console.log(res.data);
            alert ( 'Record Updated Successfull' ) 

        })

        .catch((e) => {

            console.log(e);

        })

    }

 

    render() { 
        const { showEditStoreModel, openEditStoreModal } = this.props


        return (
           
            <Modal
      open={ showEditStoreModel }
     
    >
      <Modal.Header>Edit Store</Modal.Header>
      <Modal.Content>
        <Form>
            <Form.Field>

            <label>Store ID</label>

            <input type='text' name='id' placeholder='Store Identification' onChange={this.handleChange.bind(this)}

            value={this.state.id}/>

            </Form.Field>

            <Form.Field>

            <label>Store Name</label>

            <input type='text' name='name' placeholder='Name' onChange={this.handleChange.bind(this)}

            value={this.state.name}/>

            </Form.Field>

            <Form.Field>

            <label>Store Address</label>

            <input type='text' name='address' placeholder='Address' onChange={this.handleChange.bind(this)}

            value={this.state.address}/>

            </Form.Field>

            
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openEditStoreModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={this.editStore.bind(this)}
          positive
        />


      </Modal.Actions>
    </Modal>
  );

}}

export default EditStore