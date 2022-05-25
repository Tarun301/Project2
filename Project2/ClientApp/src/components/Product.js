import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'
import { Button } from 'react-bootstrap'


export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
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


  render() {
      const { products } = this.state;
    return (
      <div>
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
                      <Table.Row>
                          <Table.Cell>{s.name}</Table.Cell>
                          <Table.Cell>{s.price}</Table.Cell>
                          <Table.Cell>
                            <Button variant="success">Edit</Button>
                          </Table.Cell>
                          <Table.Cell>
                            <Button variant="danger">Delete</Button>
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