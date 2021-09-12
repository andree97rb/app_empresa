import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { get, update } from 'services/api';
import useFetch from 'app/hooks/useFetch';
import EditPersonalForm from 'app/components/personal/EditPersonalForm';
import AlertError from 'app/common/alerts/AlertError';

const EditPersonal = () => {
    const [ personal, setPersonal ] = useState({
        nombre: '',
        sueldo: 0.0,
        fechaNacimiento: '',
        estado: 0,
        idCategoria: 0,
        idEmpresa: 0
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const { id } = useParams();
    const categoriaList = useFetch('/categoria');
    const empresaList = useFetch('/empresa');
    const history = useHistory();

    useEffect(() => {
        const fetchPersonal = async () => {
            try {
                const data = await get('/personal', id);
                setPersonal({
                    nombre: data.nombre || '',
                    sueldo: parseFloat(data.sueldo),
                    fechaNacimiento: data.fechaNacimiento || '',
                    estado: parseInt(data.estado),
                    idCategoria: parseInt(data.idCategoria),
                    idEmpresa: parseInt(data.idEmpresa)
                });
            } catch(error) {
                setError(error.message); 
            }
        }
        fetchPersonal();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ?
                        target.checked ? 1 : 0
                    : target.value;
        const name = target.name;
        setPersonal({
            ...personal,
            [name]: value
        });
    }

    const handleChangeTypeahead = (name, value) => {
        setPersonal({
            ...personal,
            [name]: value
        });
    }

    const findObject = (name, newValue) => {
        switch (name) {
            case 'idCategoria':
                return categoriaList.data.find((categoria) => categoria.nombre === newValue);
            case 'idEmpresa':
                return empresaList.data.find((empresa) => empresa.razonsocial === newValue);
            default:
                return undefined;
        }
    }

    const handleChangeInputTypeahead = (name, newValue) => {
        const data = findObject(name, newValue);
        const id = data ? data.id : -1;
        const value = newValue === '' ? 0 : id;
        handleChangeTypeahead(name, value);
    }

    const findById = (name, id) => {
        switch (name) {
            case 'idCategoria':
                return categoriaList.data.find((categoria) => categoria.id === id);
            case 'idEmpresa':
                return empresaList.data.find((empresa) => empresa.id === id);
            default:
                return undefined;
        }
    }

    const onSelectedTypeahead = (name, id) => {
        const data = findById(name, id);
        const optionSelected = data ? Array(data) : [];
        return optionSelected;
    }

    const isValidated = (event) => {
        return event.currentTarget.checkValidity() && personal.idCategoria !== 0 && 
               personal.idCategoria !== -1 && personal.idEmpresa !== 0 && 
               personal.idEmpresa !== -1;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setValidated(true);
            if (isValidated(event)) {
                await update('/personal', id, personal);
                history.push('/personalList');
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
            <EditPersonalForm
                personal={personal}
                categoriaList={categoriaList.data}
                empresaList={empresaList.data}
                validated={validated}
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditPersonal;