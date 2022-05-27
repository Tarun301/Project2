import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'
import { Button } from 'react-bootstrap'



export class Sale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Sales: [],
        };
    }

    componentDidMount(){
        this.fetchSales();
    }

    fetchSales = () => {
        axios
          .get("sales/getsales")
          .then(({ data }) => {
              this.setState({
                  sales: data,
              })
              console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };


  render() {
      const { sales } = this.state;
    return (
      <div>
          <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Customer</Table.HeaderCell>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Store</Table.HeaderCell>
                <Table.HeaderCell>DateSold</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
              {sales.map((s) => {
                  return (
                      <Table.Row>
                          <Table.Cell>{s.customer}</Table.Cell>
                          <Table.Cell>{s.product}</Table.Cell>
                          <Table.Cell>{s.store}</Table.Cell>
                          <Table.Cell>{s.dateSold}</Table.Cell>
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