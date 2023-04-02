import React from 'react';
// import axios from "axios";
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
// import { render } from '@testing-library/react';
// import { getPatients } from '../../actions/patientActions';


class ListPatientContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: {}
    };
}
    componentDidMount() {
        try {
        //     const response = axios.get("http://localhost:3001/patients")
        //     console.log(response.data);
        //   } catch (error) {
        //     console.error(error);
        //   }
            fetch('http://localhost:3001/patients',
            //  {
            //     mode: 'cors',
            //     method: 'GET',
            //     headers: {
            //          "Content-Type": "application/json"
            //     } }
                )
                .then(response => response.json())
                .then(data => {
                    this.setState({ apiResponse: data });
                    console.log(this.state.apiResponse);
                    console.log(data);

                });
        } catch (error) {
            console.log(error);
        }
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
                                        <h4 className="card-title">Patient List</h4>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered zero-configuration">
                                                <thead>
                                                    <th>Patient Id</th>
                                                    <th>Patient Name</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Vaccines Taken For</th>
                                                    <th>Address</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Doctor Name</th>
                                                </thead>
                                                {apiResponse && apiResponse.length > 0
                                                ? apiResponse.map((row) => (
                                                <tbody style={{
                                                    backgroundColor: '#white',
                                                }}>
                                                    <tr>
                                                        <td className="text-capitalize">{row.PatientId}</td>
                                                        <td className="text-capitalize">{row.PatientName}</td>
                                                        <td className="text-capitalize">{row.Age}</td>
                                                        <td className="text-capitalize">{row.patientGender}</td>
                                                        <td className="text-capitalize">{row.patientVaccine}</td>
                                                        <td className="text-capitalize">{row.patientAddress}</td>
                                                        <td className="td-fit">{formatPhoneNumberIntl(row.patientPhone)}</td>
                                                        <td className="overflowText w-10">{row.patientEmail}</td>
                                                        <td className="text-capitalize">{row.patientDoctor}</td>
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

export default ListPatientContainer;