import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
// import { Select } from 'semantic-ui-react';
import Select from "react-select";


const CreatePatientForm = () => {
        const navigate = useNavigate();
        const [apiResponse, setApiResponse] = useState([]);
        const [PatientName, setPatientName] = useState('');
        const [Age, setAge] = useState('');
        const [PatientGender, setPatientGender] = useState('');
        const [PatientAddress, setPatientAddress] = useState('');
        const [PatientPhone, setPatientPhone] = useState('');
        const [PatientEmail, setPatientEmail] = useState('');
        const [PatientNotes, setPatientNotes] = useState('');
        const [PatientDoctor, setPatientDoctor] = useState('');

        const PatientNameChangeHandler = (event) => {
            setPatientName(event.target.value);
        }
        const AgeChangeHandler = (event) => {
            setAge(event.target.value);
        }
        const PatientGenderChangeHandler = (event) => {
            setPatientGender(event.target.value);
        }
        const PatientAddressChangeHandler = (event) => {
            setPatientAddress(event.target.value);
        }
        const PatientPhoneChangeHandler = (event) => {
            setPatientPhone(event.target.value);
        }
        const PatientEmailChangeHandler = (event) => {
            setPatientEmail(event.target.value);
        }
        const PatientNotesChangeHandler = (event) => {
            setPatientNotes(event.target.value);
        }
        const PatientDoctorChangeHandler = (event) => {
            setPatientDoctor(event);
        }

        fetch(`https://o97v5r6uy4.execute-api.us-east-1.amazonaws.com/`)
            .then(response => response.json())
            .then(data => {
                // setApiResponse(data.map(function(d){return {value: Object.values(d)[1], label: Object.values(d)[1] }}));
                setApiResponse(data.map((data, index) => { return { value: data.doctorName, label: data.doctorName }}));
            });

        const submitActionHandler = (event) => {
            event.preventDefault();
            var data = {
                'PatientName': PatientName,
                'Age': Age,
                'PatientGender': PatientGender,
                'PatientAddress': PatientAddress,
                'PatientPhone': PatientPhone,
                'PatientEmail': PatientEmail,
                'PatientNotes': PatientNotes,
                'PatientDoctor': PatientDoctor.value
            }
            fetch(`http://vaccineclinicapi-env.eba-ca22d9uc.us-east-1.elasticbeanstalk.com/patients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => {
                    alert("Patient " + PatientName + " has been added successfully");
                    navigate('/listpatients');
                }).catch((error) => {
                    alert("Patient " + PatientName + " has not been added successfully");
                    console.log(error);
                });
        }
        const cancelActionHandler = () => {
            setPatientName('');
            setAge('');
            setPatientGender('');
            setPatientAddress('');
            setPatientPhone('');
            setPatientEmail('');
            setPatientNotes('');
            setPatientDoctor('');
            navigate('/listpatients');
    }

        return (
            <>
            <React.Fragment>
                    <Container>
                        <div className="row">
                            <div className="sm-6">
                                <div className="page-title-box ml-n4">
                                    <h4 className="font-size-18 heading-block-color mt-1 mb-0">Add Patient</h4>
                                </div>
                                <div className='row'>
                                    <Form onSubmit={submitActionHandler}>
                                    <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.PatientName">
                                                <Form.Label>Patient Name</Form.Label>
                                                <Form.Control type='text' placeholder='Enter Patient Name' value={PatientName} onChange={PatientNameChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.Age">
                                                <Form.Label>Age</Form.Label>
                                                <Form.Control type='text' placeholder='Enter Age' value={Age} onChange={AgeChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.PatientGender">
                                                <Form.Label>Patient Gender</Form.Label>
                                                <Form.Control type='text' placeholder='Enter Patient Gender' value={PatientGender} onChange={PatientGenderChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.PatientAddress">
                                                <Form.Label>Patient Address</Form.Label>
                                                <Form.Control as='textarea' rows={3} placeholder='Enter Patient Address' value={PatientAddress} onChange={PatientAddressChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.PatientPhone">
                                                <Form.Label>Patient Phone</Form.Label>
                                                <Form.Control type='text' placeholder='Enter Patient Phone' value={PatientPhone} onChange={PatientPhoneChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.PatientEmail">
                                                <Form.Label>Patient Email</Form.Label>
                                                <Form.Control type='text' placeholder='Enter Patient Email' value={PatientEmail} onChange={PatientEmailChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.PatientNotes">
                                                <Form.Label>Patient Notes</Form.Label>
                                                <Form.Control as='textarea' rows={3} placeholder='Enter Patient Notes' value={PatientNotes} onChange={PatientNotesChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.PatientDoctor">
                                                <Form.Label>Patient Doctor</Form.Label>
                                                <div className="dropdown-container">
                                                    <Select options={apiResponse} onChange={PatientDoctorChangeHandler} value={PatientDoctor} placeholder="Select Doctor..." />
                                                </div>
                                                {/* <Dropdown placeHolder="Select a Doctor ..." options={apiResponse} /> */}
                                                {/* <Form.Control type='textarea' placeholder='Enter Patient Doctor' value={PatientDoctor} onChange={PatientDoctorChangeHandler} /> */}
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-12' style={{
                                            marginTop: '20px'
                                        }}>
                                            <Button variant='primary' type='submit' className='mr-2'>Save</Button>
                                            <Button variant='secondary' type='submit' className='ml-2' onClick={()=>cancelActionHandler()}>Cancel</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Container>
            </React.Fragment>
                                

            </>
        )};

export default CreatePatientForm;