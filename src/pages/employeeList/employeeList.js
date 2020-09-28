import React, { Component } from "react";
import Loader from '../../components/loader/loader';
import './employeeList.scss';

import { connect } from "react-redux";
import { getEmployeeData } from "../../redux/actions";

class EmployeeList extends Component {
  
  componentDidMount() {
    this.props.getEmployeeData();
  }

  render() {
    const {employeeData} = this.props;
    return (
      <div className="emp-list-wrapper" >
        { employeeData ? employeeData.map((emp, index)=>
          <div key={`emp-${index}`}>
            <a href={`/employeeDetails/${emp.id}`}>{emp.id}</a>
            {emp.employee_name}
            {emp.employee_salary}
            {emp.employee_age}
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