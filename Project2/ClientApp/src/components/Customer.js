import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'
import { Button } from 'react-bootstrap'


export class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
        };
    }

    componentDidMount(){
        this.fetchCustomers();
    }

    fetchCustomers = () => {
        axios
          .get("customers/getcustomers")
          .then(({ data }) => {
              this.setState({
                  customers: data,
              })
              console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };


  render() {
      const { customers } = this.state;
    return (
      <div>
          <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
              {customers.map((s, index) => {
                  return (
                      <Table.Row>
                          <Table.Cell>{s.name}</Table.Cell>
                          <Table.Cell>{s.address}</Table.Cell>
                          <Table.Cell>
                            <Button variant="success">Edit</Button>{' '}
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