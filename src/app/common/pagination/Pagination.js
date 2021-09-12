import React from 'react';
import { Pagination as Numeration } from 'react-bootstrap';
import 'app/common/pagination/Pagination.css';

const Pagination = ({ pagination }) => {
    const currentPage = () => {
        return (
            <Numeration.Item className="pagination-current-page">
                { pagination.currentPage }
            </Numeration.Item>
        );
    }

    const backToPage = () => {
        const isBackToPage = pagination.currentPage === pagination.maxPage ||
                             pagination.currentPage > 1;
        if (isBackToPage) {
            return (
                <>
                    <Numeration.First onClick={()=>pagination.goJumpPage(1)} />
                    <Numeration.Prev onClick={()=>pagination.goNextPrevious()} />
                </>
            );
        }
        return null;
    }

    const advanceToPage = () => {
        const isAdvanceToPage = pagination.currentPage === 1 ||
                                pagination.currentPage < pagination.maxPage;
        if (isAdvanceToPage) {
            return (
                <>
                    <Numeration.Next onClick={()=>pagination.goNextPage()} />
                    <Numeration.Last onClick={()=>pagination.goJumpPage(pagination.maxPage)} />
                </>
            );
        }
        return null;
    }

    return (
        pagination.maxPage > 1 &&
            <Numeration>
                { backToPage() }
                { currentPage() }
                { advanceToPage() }
            </Numeration>
    );
}

export default Pagination;