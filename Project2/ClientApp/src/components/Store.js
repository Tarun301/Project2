import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'


export class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
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


  render() {
      const { stores } = this.state;
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
              {stores.map((s, index) => {
                  return (
                      <Table.Row>
                          <Table.Cell>{s.name}</Table.Cell>
                          <Table.Cell>{s.address}</Table.Cell>
                          <Table.Cell>
                            <Button color='green'>Edit</Button>
                          </Table.Cell>
                          <Table.Cell>
                            <Button color='red'>Delete</Button>
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