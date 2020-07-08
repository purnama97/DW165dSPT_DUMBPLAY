import React, { Component } from "react";
import './../Css/style.css';
import { connect } from "react-redux";
import {
  getTransaction,
  patchTransaction,
} from "../redux/actions/actionTransaksi";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import moment from "moment";

import Header from './../Components/Header.jsx';
class Transaction extends Component {
  componentDidMount() {
    this.props.getTransaction();
  }

  constructor(props) {
    super(props);
    this.state = { data: { gender: "male" } };
  }

  handleChange = async (status, id) => {
    this.props.patchTransaction(status, id);
  };

  render() {
    const { data: dataTransaction } = this.props.transaction;
    let a = Object.values(dataTransaction);

    return (
      <>
		<Header />
        <Container>
            <div className="transaksi-form">
                <div className="box-header with-border">
				<h3 style={{color:'#FFFFFF', textAlign:"left"}}>Incoming Transaction</h3>
                </div>
                <Row>
                    <Col md={12}>
						<table className="table table-striped table-dark">
                          <thead>
                              <tr>
								<th scope="col">No</th>
                                <th scope="col">User</th>
                                <th scope="col">Bukti Transper</th>
                                <th scope="col">Remaining Active</th>
                                <th scope="col">Status User</th>
                                <th scope="col">Status Payment</th>
                                <th scope="col">Action</th>
                               </tr>
                            </thead>
						  <tbody className="badan-tabel">
							{a.map((transactionDetail, i) => {
								const Hari = Math.round(
											moment(transactionDetail.dueDate)
											.startOf("days")
											.diff(moment().startOf("hour"), "days", true)
										)
							  return (
								<tr key={transactionDetail.id}>
								  <td>{i + 1}</td>
								  <td>{transactionDetail.user.fullName}</td>
								  <td>{transactionDetail.attache}</td>
								  <td>
									{transactionDetail.status === "Approve" && Hari > 0 ? Hari : 0} {" "}
									/ days
								  </td>
								  <td
									style={
									  transactionDetail.status === "Approve"
										? { color: "green" }
										: { color: "red" }
									}
								  >
									{transactionDetail.status === "Approve"
									  ? "Active"
									  : "Not Active"}
								  </td>
								  <td
									style={
									  transactionDetail.status === "Cancel"
										? { color: "red" }
										: transactionDetail.status === "Approve"
										? { color: "green" }
										: { color: "Yellow" }
									}
								  >
									{transactionDetail.status}
								  </td>

								  <td>
									{" "}
									<DropdownButton
									  alignRight
									  title={<i className="fas fa-angle-down" />}
									  id="dropdown-menu"
									  variant="black"
									  className="action-button"
									>
									  <Dropdown.Item
										eventKey="1"
										className="text-success"
										name="status"
										value={"Approve"}
										onClick={() =>
										  this.handleChange({ "startDate": transactionDetail.startDate, "dueDate": transactionDetail.dueDate, "attache": transactionDetail.attache,"status": "Approve","userId": transactionDetail.userId}, transactionDetail.id)
										}
									  >
										Approved
									  </Dropdown.Item>
									  <Dropdown.Item
										eventKey="2"
										className="text-danger"
										value="Cancel"
										onClick={() =>
										  this.handleChange({ "startDate": transactionDetail.startDate, "dueDate": transactionDetail.dueDate, "attache": transactionDetail.attache,"status": "Cancel","userId": transactionDetail.userId}, transactionDetail.id)
										}
									  >
										Cancel
									  </Dropdown.Item>
									</DropdownButton>
								  </td>
								</tr>
							  );
							})}
						  </tbody>
						</table>
                    </Col>
                </Row>
            </div>
        </Container>
	</>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaksi,
  };
};

export default connect(mapStateToProps, { getTransaction, patchTransaction })( Transaction );