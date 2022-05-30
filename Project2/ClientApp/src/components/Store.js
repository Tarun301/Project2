import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import Createstore from './Createstore';


export class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
            showCreatestoreModel: false,
        };
    }

    componentDidMount(){
        this.fetchStores();
    }

    fetchStores = () => {
        axios
          .get("stores/getstores")
          .then(({ data }) => {
              this.setState({
                  stores: data,
              })
              console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };

    openCreatestoreModal = (value) => {
      this.setState({
        showCreatestoreModel: value,
      });
  
    };

    deleteRecord = (id) => {
      axios
          .delete(`stores/DeleteStore/${id}`)
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };


  render() {
      const { stores, showCreatestoreModel } = this.state;
    return (
      <div>
        <Createstore showCreatestoreModel={showCreatestoreModel} openCreatestoreModal={this.openCreatestoreModal} fetchStores={this.fetchStores}/>
        <Button color='blue' className='store-create-button' onClick={() => this.openCreatestoreModal(true)}>Create Store</Button>
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
              {stores.map((s, index) => {
                  return (
                      <Table.Row>
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