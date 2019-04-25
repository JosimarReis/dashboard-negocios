import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

//import usersData from './UsersData'

class Usuario extends Component {

  render() {
    const { users, match: { params }  } = this.props;
    const usuarios = users.items
    console.log(`uri -> ${params.id}`)
    const user = usuarios.find( user => user._id.toString() === params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Usuario id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users } = state;

  return {
    users
  };
}
export default connect(mapStateToProps)(Usuario);