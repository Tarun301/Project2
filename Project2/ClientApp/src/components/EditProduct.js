import React, { Component } from 'react';

import { Button,Modal, Form } from 'semantic-ui-react' 

import axios from 'axios'

 

export class EditProduct extends Component {

    constructor(props) {
        
        super(props)
        


        this.state = {

            id: "",name:"", price:""


         };

this.handleChange = this.handleChange.bind(this);

    }

    handleChange({target}){

        this.setState({

            [target.name]: target.value

          });

  };

    editProduct = () => {

        axios.put('/Products/PutProduct/' + this.state.id,{

            id: this.state.id,

            name : this.state.name,

            price : this.state.price

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
        const { showEditProductModel, openEditProductModal } = this.props


        return (
           
            <Modal
      open={ showEditProductModel }
     
    >
      <Modal.Header>Edit Product</Modal.Header>
      <Modal.Content>
        <Form>
            <Form.Field>

            <label>Product ID</label>

            <input type='text' name='id' placeholder='Product Identification' onChange={this.handleChange.bind(this)}

            value={this.state.id}/>

            </Form.Field>

            <Form.Field>

            <label>Product Name</label>

            <input type='text' name='name' placeholder='Name' onChange={this.handleChange.bind(this)}

            value={this.state.name}/>

            </Form.Field>

            <Form.Field>

            <label>Product Price</label>

            <input type='text' name='price' placeholder='Price' onChange={this.handleChange.bind(this)}

            value={this.state.price}/>

            </Form.Field>

            
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openEditProductModal(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={this.editProduct.bind(this)}
          positive
        />


      </Modal.Actions>
    </Modal>
  );

}}

export default EditProduct