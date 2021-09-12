import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'app/common/pagination/Pagination';
import AlertEmpty from 'app/common/alerts/AlertEmpty';
import { Table } from 'react-bootstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import 'app/components/categoria/CategoriaTable.css';

const CategoriaTable = ({ categoriaList, pagination, isEmptyList }) => {
    const thead = () => {
        return (
            <tr>
                <th>Number</th>
                <th>Nombre</th>
                <th>Edit</th>
            </tr>
        );
    }

    const itemList = () => {
        if (categoriaList.length > 0) {
            let number = pagination.indexOfFirstData + 1;
            return (
                categoriaList.map((categoria) => (
                    <tr key={categoria.id}>
                        <th className="categoriaTable-num">{number++}</th>
                        <td>{categoria.nombre}</td>
                        <td className="categoriaTable-action">
                            <Link to={"/editCategoria/" + categoria.id} className="categoriaTable-icon-edit">
                                <FaEdit />
                            </Link>
                        </td>
                    </tr>
                ))
            );
        }
        return null;
    }

    const emptyList = () => {
        if (isEmptyList) {
            return (
                <tr>
                    <td colSpan={3}><AlertEmpty /></td>
                </tr>
            );
        }
        return null;
    }

    return (
        <>
            <div className="categoriaTable-container">
                <div className="categoriaTable-title">Categoria List</div>
                <div className="categoriaTable-content">
                    <div>
                        <Link to="/newCategoria" className="categoriaTable-btn-add">
                            <FaPlus />Add
                        </Link>
                    </div>
                    <Table responsive>
                        <thead className="categoriaTable-thead">
                            { thead() }
                        </thead>
                        <tbody className="categoriaTable-tbody">
                            { itemList() || emptyList() }
                        </tbody>
                    </Table>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </>
    );
}

export default CategoriaTable;