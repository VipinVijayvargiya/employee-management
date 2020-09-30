import React, { Component } from "react";
import { connect } from "react-redux";
import './payrollRecord.scss';
import { getEmployeeData } from "../../redux/actions";
import SalaryDetails from '../../components/salaryDetails/salaryDetails';

class PayrollRecord extends Component {
    
    componentDidMount() {
        this.props.getEmployeeData();
    }

    render() {
        const {employeeData} = this.props;
        const total_number_of_emp = employeeData ? employeeData.length : 0;
        let employee_total_salary = employeeData ? employeeData.map(emp => Number(emp.employee_salary)).reduce((prev, next) => prev + next) : 0;

        return (
            <div className="payroll-wrapper">
                <b>Payroll records here</b>
                <SalaryDetails total_number_of_emp={total_number_of_emp} employee_total_salary={employee_total_salary} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        employeeData: state.app.employeeData
    };
};

const mapDispatchToProps = {
    getEmployeeData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PayrollRecord);