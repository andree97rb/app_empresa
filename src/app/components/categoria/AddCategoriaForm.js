import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'app/components/categoria/AddCategoriaForm.css';

const AddCategoriaForm = ({
    categoria,
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
        <div className="addCategoriaForm-container">
            <div className="addCategoriaForm-title">Add Categoria</div>
            <Form noValidate onSubmit={onSubmit} className="addCategoriaForm-inputs">
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                size="sm"
                                as="select"
                                custom
                                name="nombre"
                                value={categoria.nombre}
                                onChange={onChange}
                                isInvalid={validated && categoria.nombre.length === 0}
                                required
                            >
                                <option value="">Select</option>
                                <option value="cat1">Cat1</option>
                                <option value="cat2">Cat2</option>
                            </Form.Control>
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="addCategoriaForm-buttons">
                    <Button type="submit" className="addCategoriaForm-btn-add">
                        Add
                    </Button>
                    <Link to="/categoriaList" className="addCategoriaForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default AddCategoriaForm;