import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import Createproduct from './Createproduct';


export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            showCreateproductModel: false,
        };
    }

    componentDidMount(){
        this.fetchProducts();
    }

    fetchProducts = () => {
        axios
          .get("products/getproducts")
          .then(({ data }) => {
              this.setState({
                  products: data,
              })
              console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };

    openCreateproductModal = (value) => {
      this.setState({
        showCreateproductModel: value,
      });
  
    };

    deleteRecord = (id) => {
      axios
          .delete(`products/DeleteProduct/${id}`)
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };
  


  render() {
      const { products, showCreateproductModel } = this.state;
    return (
      <div>
        <Createproduct showCreateproductModel={showCreateproductModel} openCreateproductModal={this.openCreateproductModal} fetchProducts={this.fetchProducts}/>
        <Button color='blue' className='product-create-button' onClick={() => this.openCreateproductModal(true)}>Create Product</Button>
          <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
              {products.map((s, index) => {
                  return (
                      <Table.Row key={s.id}>
                          <Table.Cell>{s.name}</Table.Cell>
                          <Table.Cell>{s.price}</Table.Cell>
                          <Table.Cell>
                            <Button color='green'>Edit</Button>
                          </Table.Cell>
                          <Table.Cell>
                            <Button color='red' onClick={() => this.deleteRecord(s.id)}>Delete</Button>
                          </Table.Cell>
                      </Table.Row>
                  );
              })}

            </Table.Body>

        </Table>
      </div>
    )
  }
}