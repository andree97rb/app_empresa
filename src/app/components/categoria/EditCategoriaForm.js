import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'app/components/categoria/EditCategoriaForm.css';

const EditCategoriaForm = ({
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
        <div className="editCategoriaForm-container">
            <div className="editCategoriaForm-title">Edit Categoria</div>
            <Form noValidate onSubmit={onSubmit} className="editCategoriaForm-inputs">
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
                <Row className="editCategoriaForm-buttons">
                    <Button type="submit" className="editCategoriaForm-btn-edit">
                        Update
                    </Button>
                    <Link to="/categoriaList" className="editCategoriaForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default EditCategoriaForm;