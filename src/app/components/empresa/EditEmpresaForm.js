import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'app/components/empresa/EditEmpresaForm.css';

const EditEmpresaForm = ({
    empresa,
    validated,
    onChange,
    onSubmit
}) => {

    const errorMessage = (message) => {
        return (
            <Form.Control.Feedback type="invalid">
                { message }
            </Form.Control.Feedback>
        );
    }

    return (
        <div className="editEmpresaForm-container">
            <div className="editEmpresaForm-title">Edit Empresa</div>
            <Form noValidate onSubmit={onSubmit} className="editEmpresaForm-inputs">
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Razonsocial:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="100"
                                name="razonsocial"
                                placeholder="Enter razonsocial"
                                value={empresa.razonsocial}
                                onChange={onChange}
                                isInvalid={validated && empresa.razonsocial.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Ruc:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="11"
                                name="ruc"
                                placeholder="Enter ruc"
                                value={empresa.ruc}
                                onChange={onChange}
                                isInvalid={validated && empresa.ruc.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Tipo:</Form.Label>
                            <Form.Control
                                size="sm"
                                as="select"
                                custom
                                name="tipo"
                                value={empresa.tipo}
                                onChange={onChange}
                                isInvalid={validated && empresa.tipo.length === 0}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Software">Software</option>
                                <option value="Negocios">Negocios</option>
                            </Form.Control>
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="editEmpresaForm-buttons">
                    <Button type="submit" className="editEmpresaForm-btn-edit">
                        Update
                    </Button>
                    <Link to="/empresaList" className="editEmpresaForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default EditEmpresaForm;