import React from 'react';
// import axios from "axios";
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
// import history from '../../Helpers/history';
// import { render } from '@testing-library/react';
// import { getPatients } from '../../actions/patientActions';
import { withRouter } from '../../libraries/withRouter';

class ListPatientContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.state = {
      apiResponse: {}
    };
}
    componentDidMount() {
        try {
            fetch(`${process.env.REACT_APP_API_URL}/patients`,
                )
                .then(response => response.json())
                .then(data => {
                    this.setState({ apiResponse: data });
                });
        } catch (error) {
            console.log(error);
        }
    }


    handleRowClick(row) {        
        this.props.navigate(`/viewpatient/${row.PatientId}`,
        {
            state: {
                row: row
            }
        });
    }

    render() {
        let { apiResponse } = this.state;
        return (
            <>
            <React.Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Patient List</h2>
                                        <a href="/createpatient"><button type="button" className="btn btn-primary btn-rounded mb-3">Add Patient</button></a>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered zero-configuration">
                                                <thead style={{height: 40}}>
                                                    <th>Patient Id</th>
                                                    <th>Patient Name</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Address</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Doctor Name</th>
                                                </thead>
                                                {apiResponse && apiResponse.length > 0
                                                ? apiResponse.map((row) => (
                                                <tbody style={{
                                                    backgroundColor: '#white',
                                                    height: 60
                                                }}>                                                    
                                                    <tr onClick={() => this.handleRowClick(row)}>
                                                        <td className="text-capitalize">{row.PatientId}</td>
                                                        <td className="text-capitalize">{row.PatientName}</td>
                                                        <td className="text-capitalize">{row.Age}</td>
                                                        <td className="text-capitalize">{row.PatientGender}</td>
                                                        <td className="text-capitalize">{row.PatientAddress}</td>
                                                        <td className="td-fit">{formatPhoneNumberIntl(row.PatientPhone)}</td>
                                                        <td className="overflowText w-10">{row.PatientEmail}</td>
                                                        <td className="text-capitalize">{row.PatientDoctor}</td>
                                                    </tr>
                                                </tbody>
                                                ))
                                                : null}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                </>
        );
    }
}

export default withRouter(ListPatientContainer);