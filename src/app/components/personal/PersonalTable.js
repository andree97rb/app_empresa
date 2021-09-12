import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'app/common/pagination/Pagination';
import AlertEmpty from 'app/common/alerts/AlertEmpty';
import { Table } from 'react-bootstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import 'app/components/personal/PersonalTable.css';

const PersonalTable = ({ personalList, pagination, isEmptyList }) => {
    const thead = () => {
        return (
            <tr>
                <th>Number</th>
                <th>Nombre</th>
                <th>Sueldo</th>
                <th>FechaNacimiento</th>
                <th>Estado</th>
                <th>IdCategoria</th>
                <th>IdEmpresa</th>
                <th>Edit</th>
            </tr>
        );
    }

    const itemList = () => {
        if (personalList.length > 0) {
            let number = pagination.indexOfFirstData + 1;
            return (
                personalList.map((personal) => (
                    <tr key={personal.id}>
                        <th className="personalTable-num">{number++}</th>
                        <td>{personal.nombre}</td>
                        <td>{personal.sueldo}</td>
                        <td>{personal.fechaNacimiento}</td>
                        <td>{personal.estado}</td>
                        <td>{personal.idCategoria}</td>
                        <td>{personal.idEmpresa}</td>
                        <td className="personalTable-action">
                            <Link to={"/editPersonal/" + personal.id} className="personalTable-icon-edit">
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
                    <td colSpan={8}><AlertEmpty /></td>
                </tr>
            );
        }
        return null;
    }

    return (
        <>
            <div className="personalTable-container">
                <div className="personalTable-title">Personal List</div>
                <div className="personalTable-content">
                    <div>
                        <Link to="/newPersonal" className="personalTable-btn-add">
                            <FaPlus />Add
                        </Link>
                    </div>
                    <Table responsive>
                        <thead className="personalTable-thead">
                            { thead() }
                        </thead>
                        <tbody className="personalTable-tbody">
                            { itemList() || emptyList() }
                        </tbody>
                    </Table>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </>
    );
}

export default PersonalTable;