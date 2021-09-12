import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'app/components/personal/AddPersonalForm.css';

const AddPersonalForm = ({
    personal,
    categoriaList,
    empresaList,
    validated,
    onChange,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead,
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
        <div className="addPersonalForm-container">
            <div className="addPersonalForm-title">Add Personal</div>
            <Form noValidate onSubmit={onSubmit} className="addPersonalForm-inputs">
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="100"
                                name="nombre"
                                placeholder="Enter nombre"
                                value={personal.nombre}
                                onChange={onChange}
                                isInvalid={validated && personal.nombre.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Sueldo:</Form.Label>
                            <Form.Control 
                                size="sm"
                                className="text-right"
                                type="number"
                                min="-99999."
                                max="99999."
                                step="0."
                                name="sueldo"
                                placeholder="0.0"
                                value={personal.sueldo}
                                onChange={onChange}
                                isInvalid={validated && (personal.sueldo.length === 0 || personal.sueldo < -99999. || 
                                    personal.sueldo > 99999.)}
                                required
                            />
                            { errorMessage("Enter a value between -99999. and +99999. to 0 decimal places.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>FechaNacimiento:</Form.Label>
                            <Form.Control 
                                size="sm"
                                className="text-right"
                                type="date"
                                name="fechaNacimiento"
                                value={personal.fechaNacimiento}
                                onChange={onChange}
                                isInvalid={validated && personal.fechaNacimiento.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Estado:</Form.Label>
                            <Form.Check 
                                type="checkbox"
                                name="estado"
                                checked={personal.estado === 1 ? true : false}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>IdCategoria:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                className={validated && (personal.idCategoria === -1 ||
                                    personal.idCategoria === 0) && "is-invalid"}
                                placeholder="Choose an option"
                                options={categoriaList}
                                labelKey={option => String(option.nombre)}
                                selected={onSelectedTypeahead('idCategoria', personal.idCategoria)}
                                onInputChange={(newValue) =>
                                    onChangeInputTypeahead('idCategoria', newValue)}
                                onChange={(newValue) => newValue.length > 0 &&
                                    onChangeTypeahead('idCategoria', newValue[0].id)}
                                isInvalid={validated && (personal.idCategoria === -1 ||
                                    personal.idCategoria === 0)}
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>IdEmpresa:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                className={validated && (personal.idEmpresa === -1 ||
                                    personal.idEmpresa === 0) && "is-invalid"}
                                placeholder="Choose an option"
                                options={empresaList}
                                labelKey={option => String(option.razonsocial)}
                                selected={onSelectedTypeahead('idEmpresa', personal.idEmpresa)}
                                onInputChange={(newValue) =>
                                    onChangeInputTypeahead('idEmpresa', newValue)}
                                onChange={(newValue) => newValue.length > 0 &&
                                    onChangeTypeahead('idEmpresa', newValue[0].id)}
                                isInvalid={validated && (personal.idEmpresa === -1 ||
                                    personal.idEmpresa === 0)}
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="addPersonalForm-buttons">
                    <Button type="submit" className="addPersonalForm-btn-add">
                        Add
                    </Button>
                    <Link to="/personalList" className="addPersonalForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default AddPersonalForm;