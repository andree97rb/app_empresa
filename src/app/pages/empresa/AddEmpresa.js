import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { create } from 'services/api';
import AddEmpresaForm from 'app/components/empresa/AddEmpresaForm';
import AlertError from 'app/common/alerts/AlertError';

const AddEmpresa = () => {
    const [ empresa, setEmpresa ] = useState({
        razonsocial: '',
        ruc: '',
        tipo: ''
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const history = useHistory();

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
                await create('/empresa', empresa);
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
            <AddEmpresaForm
                empresa={empresa}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AddEmpresa;