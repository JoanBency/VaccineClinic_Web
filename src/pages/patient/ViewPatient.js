import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
import Select from "react-select";
import {useNavigate} from "react-router-dom";


const ViewPatient = (props) => {
        const navigate = useNavigate();
        const { state } = useLocation();
        const [apiResponse, setApiResponse] = useState([]);
        const [NewVaccineEntry, setNewVaccineEntry] = useState(false);
        const [ EnterNewVaccine, setEnterNewVaccine] = useState(false);
        const [ NurseData, setNurseData] = useState([]);
        const [ NurseName, setNurseName] = useState('');
        const { row } = state;
        const [ PrescriptionId, setPrescriptionId] = useState(''); 
        const [ VaccineName, setVaccineName] = useState('');
        const [VaccineId, setVaccineId] = useState('');

        const NurseNameChangeHandler = (event) => {
            setNurseName(event);
        }
        const PrescriptionIdChangeHandler = (event) => {
            setPrescriptionId(event.target.value);
        }

        try {
            fetch(`http://vaccineclinicapi-env.eba-ca22d9uc.us-east-1.elasticbeanstalk.com/vaccinesAdministered/${row.PatientId}`,
                )
                .then(response => response.json())
                .then(data => {
                    setApiResponse(data);
                });
        } catch (error) {
            console.log(error);
        }

        function newEntry() {
            setNewVaccineEntry(true); 
        }

        const prescriptionIdSubmitActionHandler = (event) => {
            event.preventDefault();
            setEnterNewVaccine(true);
            fetch(`https://lt1vi9oa2e.execute-api.us-east-1.amazonaws.com/Prescribed-vaccine/${PrescriptionId}`,)
            .then(response => response.json())
            .then(data => {
                setVaccineId( data.map((vaccine) => {return(vaccine.VaccinationId)}) );

                setVaccineId(data[0].VaccinationId);

                fetch(`http://vaccineclinicapi-env.eba-ca22d9uc.us-east-1.elasticbeanstalk.com/vaccines/${data[0].VaccinationId}`,)
                        .then(res => res.json())
                        .then(data1 => {
                            setVaccineName(data1.map((vaccine) => {return(vaccine.VaccineName)}) );
                        });
                    });
            fetch('https://jhnsqk26le.execute-api.us-east-1.amazonaws.com/dev/nurses', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    })
                    .then(res => res.json())
                    .then(data => {
                        setNurseData(data.map((data, index) => { return { value: data.NurseId, label: data.NurseName }}));
                    });
        }
                      




        const submitActionHandler = (event) => {
            event.preventDefault();
            // console.log(NurseName)
            var data = {
                'PatientId': row.PatientId,
                'VaccineId': VaccineId,
                'AdministeredById': NurseName.value,
                'PrescriptionId': PrescriptionId,
            }

            fetch(`http://vaccineclinicapi-env.eba-ca22d9uc.us-east-1.elasticbeanstalk.com/vaccinesAdministered`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }) 
                .then((response) => {
                    alert("Vaccine " + VaccineName + " has been added successfully");
                    // navigate(`/viewpatient/${row.PatientId}`);
                    navigate('/listpatients');
                }).catch((error) => {
                    alert("Vaccine " + VaccineName + " has not been added successfully");
                    console.log(error);
                });
            setNewVaccineEntry(false);
        }

        const cancelActionHandler = () => {
            setNewVaccineEntry(false);
            setEnterNewVaccine(false);
            // setVaccineData([]);
            setNurseData([]);
            setPrescriptionId('');
            setVaccineName('');
            setVaccineId('');
            navigate('/listpatients');
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
                                                {apiResponse.map((data, index) => {
                                                    return (
                                                        <p className='card-text'>{`${data.VaccineName} - ${data.DiseaseTargeted}`}</p>
                                                    )
                                                })}
                                                
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
                        {NewVaccineEntry && (
                        <Container fluid className='in-center px-0' style={{marginTop: 10}}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className='card-title'>New VaccineEntry</h2>
                                            <Form onSubmit={prescriptionIdSubmitActionHandler}>
                                                <Form.Group controlId="formBasicVaccine">
                                                    <Form.Label>Prescription Id</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Prescription Id" value={PrescriptionId} onChange={PrescriptionIdChangeHandler} />
                                                </Form.Group>
                                                {!EnterNewVaccine && (
                                                <div className='col-sm-12' style={{marginTop: '20px'}}>
                                                    <Button variant="primary" type="submit">Enter</Button>
                                                    <Button variant="secondary" type="button" onClick={cancelActionHandler} style={{marginLeft: '20px'}}>Cancel</Button>
                                                </div>
                                                )}
                                            </Form>
                                            {EnterNewVaccine && (
                                            <Form onSubmit={submitActionHandler}>
                                                <div>
                                                    <Form.Group controlId="formBasicVaccine">
                                                        <Form.Label>Vaccine Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Vaccine Name" value={VaccineName} disabled/>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicVaccine">
                                                        <Form.Label>Nurse Name</Form.Label>
                                                        <div className="drop-container">
                                                            <Select options={NurseData} onChange={NurseNameChangeHandler} value={NurseName} placeholder="Select Nurse..."/>
                                                        </div>
                                                    </Form.Group>
                                                    <div className='col-sm-12' style={{marginTop: '20px'}}>
                                                        <Button variant="primary" type="submit">Save</Button>
                                                        <Button variant="secondary" type="button" onClick={cancelActionHandler} style={{marginLeft: '20px'}}>Cancel</Button>
                                                </div>
                                                </div>    
                                            </Form>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>

                        )}
                        <div className="container-fluid" style={{marginTop: 10}}>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Vaccine Administered List</h2>
                                        {!NewVaccineEntry && 
                                        <button type="button" onClick={newEntry} className="btn btn-primary btn-rounded mb-3">New Vaccine</button>
                                        }
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered zero-configuration">
                                                <thead style={{height: 40}}>
                                                <th>Vaccine Id</th>
                                                <th>Prescription Id</th>
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
                                                        <td className="text-capitalize">{rows.PrescriptionId}</td>
                                                        <td className="text-capitalize">{rows.VaccineName}</td>
                                                        <td className="text-capitalize">{rows.DiseaseTargeted}</td>
                                                        <td className="text-capitalize">{rows.NurseName}</td>
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