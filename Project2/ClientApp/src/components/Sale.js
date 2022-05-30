import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import Createsale from './Createsale';




export class Sale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Sales: [],
            showCreatesaleModel: false,
        };
    }

    componentDidMount(){
        this.fetchSales();
    }

    fetchSales = () => {
        axios
          .get("sales/getSales")
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

    deleteRecord = (id) => {
      axios
          .delete(`sales/DeleteSale/${id}`)
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
              console.log(err);
          });
    };

    openCreatesaleModal = (value) => {
      this.setState({
        showCreatesaleModel: value,
      });
  
    };




  render() {
      const { Sales, showCreatesaleModel } = this.state;
    return (
      <div>
        <Createsale showCreatesaleModel={showCreatesaleModel} openCreatesaleModal={this.openCreatesaleModal} fetchSales={this.fetchSales}/>
        <Button color='blue' className='sale-create-button' onClick={() => this.openCreatesaleModal(true)}>Create Sale</Button>
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
                      <Table.Row key={s.id}>
                          <Table.Cell>{s.customer.name}</Table.Cell>
                          <Table.Cell>{s.product.name}</Table.Cell>
                          <Table.Cell>{s.store.name}</Table.Cell>
                          <Table.Cell>{s.dateSold}</Table.Cell>
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