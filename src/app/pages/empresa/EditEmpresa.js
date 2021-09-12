import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { get, update } from 'services/api';
import EditEmpresaForm from 'app/components/empresa/EditEmpresaForm';
import AlertError from 'app/common/alerts/AlertError';

const EditEmpresa = () => {
    const [ empresa, setEmpresa ] = useState({
        razonsocial: '',
        ruc: '',
        tipo: ''
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchEmpresa = async () => {
            try {
                const data = await get('/empresa', id);
                setEmpresa({
                    razonsocial: data.razonsocial || '',
                    ruc: data.ruc || '',
                    tipo: data.tipo || ''
                });
            } catch(error) {
                setError(error.message); 
            }
        }
        fetchEmpresa();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setEmpresa({
            ...empresa,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setValidated(true);
            if (event.currentTarget.checkValidity()) {
                await update('/empresa', id, empresa);
                history.push('/empresaList');
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
            <EditEmpresaForm
                empresa={empresa}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditEmpresa;