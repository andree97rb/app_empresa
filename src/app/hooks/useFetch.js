import { useState, useEffect } from 'react';
import { getAll } from 'services/api';

const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const dofetch = async () => {
            try {
                const data = await getAll(url);
                setData(data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }
        dofetch();
    }, [url])

    return {
        data,
        loading,
        error
    };
}

export default useFetch;