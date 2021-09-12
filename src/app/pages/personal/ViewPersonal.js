import React from 'react';
import useFetch from 'app/hooks/useFetch';
import usePagination from 'app/hooks/usePagination';
import PersonalTable from 'app/components/personal/PersonalTable';
import AlertError from 'app/common/alerts/AlertError';

const ViewPersonal = () => {
    const { data: personalList, loading, error } = useFetch('/personal');
    const pagination = usePagination(personalList);
    const isEmptyList = !error && !loading && personalList.length === 0;
   
    return (
        <>
            { error &&
                <AlertError
                    message={error}
                />
            }
            <PersonalTable
                personalList={pagination.currentData}
                pagination={pagination}
                isEmptyList={isEmptyList}
            />
        </>
    );
}

export default ViewPersonal;