import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

const CreateVaccineForm = () => {
        const navigate = useNavigate();
        const [VaccineName, setVaccineName] = useState('');
        const [DiseaseTargeted, setDiseaseTargeted] = useState('');
        const [Manufacturer, setManufacturer] = useState('');
        const [Doses, setDoses] = useState('');


        const VaccineNameChangeHandler = (event) => {
            setVaccineName(event.target.value);
        }
        const DiseaseTargetedChangeHandler = (event) => {
            setDiseaseTargeted(event.target.value);
        }
        const ManufacturerChangeHandler = (event) => {
            setManufacturer(event.target.value);
        }
        const DosesChangeHandler = (event) => {
            setDoses(event.target.value);
        }

        const submitActionHandler = (event) => {
            event.preventDefault();
            var data = {
                'VaccineName': VaccineName,
                'DiseaseTargeted': DiseaseTargeted,
                'Manufacturer': Manufacturer,
                'Doses': Doses
            }
            fetch(`${process.env.REACT_APP_API_URL}/vaccines`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => {
                    alert("Vaccine " + VaccineName + " has been added successfully");
                    navigate('/listvaccines');
                }).catch((error) => {
                    alert("Vaccine " + VaccineName + " has not been added successfully");
                    console.log(error);
                });
        }
        const cancelActionHandler = () => {
            setVaccineName('');
            setDiseaseTargeted('');
            setManufacturer('');
            setDoses('');
            navigate('/listvaccines');
    }

        return (
            <>
            <React.Fragment>
                    <Container>
                        <div className="row">
                            <div className="sm-6">
                                <div className="page-title-box ml-n4">
                                    <h4 className="font-size-18 heading-block-color mt-1 mb-0">Add Vaccine</h4>
                                </div>
                                <div className='row'>
                                    <Form onSubmit={submitActionHandler}>
                                    <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.VaccineName">
                                                <Form.Label>Vaccine Name</Form.Label>
                                                <Form.Control type='text' placeholder='Enter Vaccine Name' value={VaccineName} onChange={VaccineNameChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.DiseaseTargeted">
                                                <Form.Label>Disease Targeted</Form.Label>
                                                <Form.Control as='textarea' rows={3} placeholder='Enter Disease Targeted' value={DiseaseTargeted} onChange={DiseaseTargetedChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.Manufacturer">
                                                <Form.Label>Manufacturer</Form.Label>
                                                <Form.Control type='text' placeholder='Enter Manufacturer' value={Manufacturer} onChange={ManufacturerChangeHandler} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-sm-6'>
                                            <Form.Group className='mb-3' controlId="form.Doses">
                                                <Form.Label>Doses Left</Form.Label>
                                                <Form.Control type='textarea' placeholder='Enter Doses Left' value={Doses} onChange={DosesChangeHandler} />
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

export default CreateVaccineForm;