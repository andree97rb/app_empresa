import React from 'react';
import useFetch from 'app/hooks/useFetch';
import usePagination from 'app/hooks/usePagination';
import CategoriaTable from 'app/components/categoria/CategoriaTable';
import AlertError from 'app/common/alerts/AlertError';

const ViewCategoria = () => {
    const { data: categoriaList, loading, error } = useFetch('/categoria');
    const pagination = usePagination(categoriaList);
    const isEmptyList = !error && !loading && categoriaList.length === 0;
   
    return (
        <>
            { error &&
                <AlertError
                    message={error}
                />
            }
            <CategoriaTable
                categoriaList={pagination.currentData}
                pagination={pagination}
                isEmptyList={isEmptyList}
            />
        </>
    );
}

export default ViewCategoria;