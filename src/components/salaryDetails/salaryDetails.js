import React from 'react';
import './salaryDetails.scss';

const SalaryDetails = props => {
    const{total_number_of_emp, employee_total_salary} = props;
    return (
        <div className="salary-component">
            <hr/>
            <div>Total Employee : <b>{total_number_of_emp}</b></div>
            <div>Total Payment : <b>{Math.floor(employee_total_salary)} &euro;</b></div>
            <div>Average Salary : <b>{Math.floor(employee_total_salary/total_number_of_emp)} &euro;</b></div>
        </div>
    )
}

export default SalaryDetails;
