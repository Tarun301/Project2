import React, { Component } from 'react';

import { Button,Modal, Form } from 'semantic-ui-react' // If you only using semantic-ui

import axios from 'axios'

 

export class EditCustomer extends Component {

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

    editCustomer = () => {

        axios.put('/Customers/PutCustomer/' + this.state.id,{

            id: this.state.id,

            name : this.state.name,

            address : this.state.address

        })

        .then(({res})=> {

            console.log(res.data);
            
            
            

            alert ( 'Record Updated Successfull' ) // Optional

        })

        .catch((e) => {

            console.log(e);

        })

    }

 

    render() { 
        const { showEditCustomerModel, openEditCustomerModal } = this.props


        return (
           
            <Modal
      open={ showEditCustomerModel }
     
    >
      <Modal.Header>Edit Customer</Modal.Header>
      <Modal.Content>
        <Form>
            <Form.Field>

            <label>Customer ID</label>

            <input type='text' name='id' placeholder='Customer Identification' onChange={this.handleChange.bind(this)}

            value={this.state.id}/>

            </Form.Field>

            <Form.Field>

            <label>Customer Name</label>

            <input type='text' name='name' placeholder='Name' onChange={this.handleChange.bind(this)}

            value={this.state.name}/>

            </Form.Field>

            <Form.Field>

            <label>Customer Address</label>

            <input type='text' name='address' placeholder='Address' onChange={this.handleChange.bind(this)}

            value={this.state.address}/>

            </Form.Field>

            
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openEditCustomerModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={this.editCustomer.bind(this)}
          positive
        />


      </Modal.Actions>
    </Modal>
  );

}}

export default EditCustomer


 