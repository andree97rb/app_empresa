import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { get, update } from 'services/api';
import EditCategoriaForm from 'app/components/categoria/EditCategoriaForm';
import AlertError from 'app/common/alerts/AlertError';

const EditCategoria = () => {
    const [ categoria, setCategoria ] = useState({
        nombre: ''
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchCategoria = async () => {
            try {
                const data = await get('/categoria', id);
                setCategoria({
                    nombre: data.nombre || ''
                });
            } catch(error) {
                setError(error.message); 
            }
        }
        fetchCategoria();
    }, [id])

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
                await update('/categoria', id, categoria);
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
            <EditCategoriaForm
                categoria={categoria}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditCategoria;