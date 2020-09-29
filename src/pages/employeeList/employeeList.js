import React, { Component } from "react";
import Loader from '../../components/loader/loader';
import SalaryDetails from '../../components/salaryDetails/salaryDetails';
import './employeeList.scss';
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getEmployeeData } from "../../redux/actions";
import {Edit, Delete} from '@material-ui/icons';

class EmployeeList extends Component {
  
  componentDidMount() {
    this.props.getEmployeeData();
  }

  DeleteThisUser=(id)=>{
    const allEmpRecords = JSON.parse(sessionStorage.getItem('allEmpRecords'));
    
    const updatedList = allEmpRecords.data.filter(function( obj ) {
      return obj.id !== id;
    });
    sessionStorage.setItem('allEmpRecords', JSON.stringify({data: updatedList}));
    this.props.getEmployeeData(); 
  }

  render() {
    const {employeeData} = this.props;
    const total_number_of_emp = employeeData ? employeeData.length : 0;
    let employee_total_salary = 0;
    return (
      <div className="emp-list-componnet" >
        { employeeData ? (
          <div className="emp-table-wrapper">
            <div className="emp-table-parent">
              <table>
                <thead>
                  <tr>
                    <th>Emp Id</th>
                    <th>Employee Name</th>
                    <th>Salary (&euro;) </th>
                    <th>Age</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((emp, index)=>{
                    const {id, employee_name, employee_salary, employee_age} = emp;
                    employee_total_salary += Number(employee_salary);
                    return (
                      <tr key={`emp-${index}`} >
                        <td className="action-Cell">
                          <Link to={`/employeeDetails/${id}/Details`}>{id}</Link>
                        </td>
                        <td>{employee_name}</td>
                        <td>{employee_salary}</td>
                        <td>{employee_age}</td>
                        <td><Link to={`/employeeDetails/${id}/Edit`}><Edit /></Link></td>
                        <td><Link to={`/`} onClick={()=> this.DeleteThisUser(id)}><Delete /></Link></td>
                      </tr>
                    )
                  }
                  )}
                </tbody>
              </table>
            </div>
            <br/>
            <div className="payment-details-section">
              <details>
                <summary>Table Details:</summary>
                <SalaryDetails total_number_of_emp={total_number_of_emp} employee_total_salary={employee_total_salary} />
              </details>
            </div>
          </div>
        ) : <Loader />}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading,
    employeeData: state.app.employeeData
  };
};
const mapDispatchToProps = {
  getEmployeeData
};

const ConnectedEmployeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);

export default ConnectedEmployeeList;