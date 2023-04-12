import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Table, Col, Container, Form, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { formatPhoneNumberIntl } from 'react-phone-number-input';

const ViewPatient = (props) => {
    
        const { state } = useLocation();
        const [apiResponse, setApiResponse] = useState([]);
        const { row } = state;
        try {
            fetch(`${process.env.REACT_APP_API_URL}/vaccinesAdministered/${row.PatientId}`,
                )
                .then(response => response.json())
                .then(data => {
                    setApiResponse(data);
                });
            console.log(apiResponse);
        } catch (error) {
            console.log(error);
        }
        return (
            <>
                <React.Fragment>
                    <Container fluid className='in-center px-0'>
                        <Row className='align-items-center'>
                            <Col sm={6}>
                                <Card className="view-card">
                                    <Card.Header>
                                        <Card.Title as="h3">Patient Details</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <h5 className="card-title">Patient Id</h5>
                                                <p className="card-text">{row.PatientId}</p>
                                            </Col>
                                            <Col md={6}>
                                                <h5 className="card-title">Patient Name</h5>
                                                <p className="card-text">{row.PatientName}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <h5 className="card-title">Age</h5>
                                                <p className="card-text">{row.Age}</p>
                                            </Col>
                                            <Col md={6}>
                                                <h5 className='card-title'>Patient Gender</h5>
                                                <p className='card-text'>{row.PatientGender}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <h5 className='card-title'>Patient Phone</h5>
                                                <p className='card-text'>{formatPhoneNumberIntl(row.PatientPhone)}</p>
                                            </Col>
                                            <Col md={6}>
                                                <h5 className='card-title'>Patient Email</h5>
                                                <p className='card-text'>{row.PatientEmail}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <h5 className='card-title'>Patient Gender</h5>
                                                <p className='card-text'>{row.PatientGender}</p>
                                            </Col>
                                            <Col md={6}>
                                            <h5 className='card-title'>Patient Address</h5>
                                            <p className='card-text'>{row.PatientAddress}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <h5 className='card-title'>Patient Doctor</h5>
                                                <p className='card-text'>{row.PatientDoctor}</p>
                                            </Col>
                                            <Col md={6}>
                                                <h5 className='card-title'>Patient Vaccine</h5>
                                                <p className='card-text'>{row.PatientVaccine}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <h5 className='card-title'>Patient Notes</h5>
                                                <p className='card-text'>{row.PatientNotes}</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Vaccine Administered List</h2>
                                        <a href="/"><button type="button" className="btn btn-primary btn-rounded mb-3">New Vaccine</button></a>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered zero-configuration">
                                                <thead style={{height: 40}}>
                                                <th>Vaccine Id</th>
                                                <th>Vaccine Name</th>
                                                <th>Disease Targeted</th>
                                                <th>Administered By</th>
                                                <th>Vaccine Date</th>
                                                </thead>
                                                {apiResponse && apiResponse.length > 0
                                                ? apiResponse.map((rows) => (
                                                <tbody style={{
                                                    backgroundColor: '#white',
                                                    height: 60
                                                }}>                                                    
                                                    <tr>
                                                        <td className="text-capitalize">{rows.VaccineEntryId}</td>
                                                        <td className="text-capitalize">{rows.VaccineName}</td>
                                                        <td className="text-capitalize">{rows.DiseaseTargeted}</td>
                                                        <td className="text-capitalize">{rows.AdministeredBy}</td>
                                                        <td className="text-capitalize">{rows.AdministeredOn}</td>
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

                    </Container>
                </React.Fragment>
            </>
        );
    }
export default ViewPatient;