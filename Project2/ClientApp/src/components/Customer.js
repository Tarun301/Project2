import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import Create from './Create';



export class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            showCreateModel: false,
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


  openCreateModal = (value) => {
    this.setState({
      showCreateModel: value,
    });

  };


  deleteRecord = (id) => {
    axios
        .delete(`customers/DeleteCustomer/${id}`)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
  };


  render() {
      const { customers, showCreateModel } = this.state;
    return (
      <div>
        <Create showCreateModel={showCreateModel} openCreateModal={this.openCreateModal} fetchCustomers={this.fetchCustomers}/>
        <Button color='blue' className='customer-create-button' onClick={() => this.openCreateModal(true)}>Create Customer</Button>
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
                      <Table.Row key={s.id}>
                          <Table.Cell>{s.name}</Table.Cell>
                          <Table.Cell>{s.address}</Table.Cell>
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