import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'




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
                  Sales: data,
              })
              console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };

    deleteRecord = (Id) => {
      axios
          .delete('sales/DeleteSale/${Id}')
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };


  render() {
      const { Sales } = this.state;
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
              {Sales.map((s, index) => {
                  return (
                      <Table.Row key={s.Id}>
                          <Table.Cell>{s.customer.name}</Table.Cell>
                          <Table.Cell>{s.product.name}</Table.Cell>
                          <Table.Cell>{s.store.name}</Table.Cell>
                          <Table.Cell>{s.dateSold}</Table.Cell>
                          <Table.Cell>
                            <Button color='green'>Edit</Button>
                          </Table.Cell>
                          <Table.Cell>
                            <Button color='red' onClick={() => this.deleteRecord(s.Id)}>Delete</Button>
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