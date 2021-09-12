import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'app/common/pagination/Pagination';
import AlertEmpty from 'app/common/alerts/AlertEmpty';
import { Table } from 'react-bootstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import 'app/components/empresa/EmpresaTable.css';

const EmpresaTable = ({ empresaList, pagination, isEmptyList }) => {
    const thead = () => {
        return (
            <tr>
                <th>Number</th>
                <th>Razonsocial</th>
                <th>Ruc</th>
                <th>Tipo</th>
                <th>Edit</th>
            </tr>
        );
    }

    const itemList = () => {
        if (empresaList.length > 0) {
            let number = pagination.indexOfFirstData + 1;
            return (
                empresaList.map((empresa) => (
                    <tr key={empresa.id}>
                        <th className="empresaTable-num">{number++}</th>
                        <td>{empresa.razonsocial}</td>
                        <td>{empresa.ruc}</td>
                        <td>{empresa.tipo}</td>
                        <td className="empresaTable-action">
                            <Link to={"/editEmpresa/" + empresa.id} className="empresaTable-icon-edit">
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
                    <td colSpan={5}><AlertEmpty /></td>
                </tr>
            );
        }
        return null;
    }

    return (
        <>
            <div className="empresaTable-container">
                <div className="empresaTable-title">Empresa List</div>
                <div className="empresaTable-content">
                    <div>
                        <Link to="/newEmpresa" className="empresaTable-btn-add">
                            <FaPlus />Add
                        </Link>
                    </div>
                    <Table responsive>
                        <thead className="empresaTable-thead">
                            { thead() }
                        </thead>
                        <tbody className="empresaTable-tbody">
                            { itemList() || emptyList() }
                        </tbody>
                    </Table>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </>
    );
}

export default EmpresaTable;