import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { create } from 'services/api';
import AddCategoriaForm from 'app/components/categoria/AddCategoriaForm';
import AlertError from 'app/common/alerts/AlertError';

const AddCategoria = () => {
    const [ categoria, setCategoria ] = useState({
        nombre: ''
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setCategoria({
            ...categoria,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setValidated(true);
            if (event.currentTarget.checkValidity()) {
                await create('/categoria', categoria);
                history.push('/categoriaList');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>  
            { error &&
                <AlertError
                    message={error}
                />
            }
            <AddCategoriaForm
                categoria={categoria}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AddCategoria;