import React from 'react';
import useFetch from 'app/hooks/useFetch';
import usePagination from 'app/hooks/usePagination';
import EmpresaTable from 'app/components/empresa/EmpresaTable';
import AlertError from 'app/common/alerts/AlertError';

const ViewEmpresa = () => {
    const { data: empresaList, loading, error } = useFetch('/empresa');
    const pagination = usePagination(empresaList);
    const isEmptyList = !error && !loading && empresaList.length === 0;
   
    return (
        <>
            { error &&
                <AlertError
                    message={error}
                />
            }
            <EmpresaTable
                empresaList={pagination.currentData}
                pagination={pagination}
                isEmptyList={isEmptyList}
            />
        </>
    );
}

export default ViewEmpresa;