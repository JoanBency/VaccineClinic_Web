import React from 'react';
// import axios from "axios";
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import history from '../../Helpers/history';
// import { render } from '@testing-library/react';



class ListVaccineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: {}
    };
}
    componentDidMount() {
        try {
            fetch(`http://vaccineclinicapi-env.eba-ca22d9uc.us-east-1.elasticbeanstalk.com/vaccines`,
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
        // this.props.history.push('/');
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
                                        <h2 className="card-title">Vaccine List</h2>
                                        <a href="/createvaccine"><button type="button" className="btn btn-primary btn-rounded mb-3">Add Vaccine</button></a>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered zero-configuration">
                                                <thead style={{height: 40}}>
                                                    <th>Vaccine Id</th>
                                                    <th>Vaccine Name</th>
                                                    <th>Disease Targeted</th>
                                                    <th>Manufacturer</th>
                                                    <th>Doses Left</th>
                                                </thead>
                                                {apiResponse && apiResponse.length > 0
                                                ? apiResponse.map((row) => (
                                                <tbody style={{
                                                    backgroundColor: '#white',
                                                    height: 60
                                                }}>
                                                    {/* <Link to={`/patient/${row.PatientId}`}> */}
                                                    
                                                    <tr onClick={() => this.handleRowClick(row)}>
                                                        <td className="text-capitalize">{row.VaccineId}</td>
                                                        <td className="text-capitalize">{row.VaccineName}</td>
                                                        <td className="text-capitalize">{row.DiseaseTargeted}</td>
                                                        <td className="text-capitalize">{row.Manufacturer}</td>
                                                        <td className="text-capitalize">{row.Doses}</td>
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

export default ListVaccineContainer;