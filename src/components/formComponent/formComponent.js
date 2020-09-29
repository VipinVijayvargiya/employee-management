import React, { Component } from "react";
import { connect } from "react-redux";
import './formComponent.scss';
import * as componentList from './ComponentImport'
import { clearInputFields, onboardNewEmployee } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

class FormComponent extends Component {

    componentDidMount(){
        if(!this.props.action){
            this.props.clearInputFields();
        }
    }

    handleChange=(e) => {
        const {name, value} = e.target;
        this.props.onboardNewEmployee({name, value});
    }

    formSubmit=(isReadOnly)=>{
        if(!isReadOnly ){
            const {employeeDatail, empToOnboard} = this.props;
            let ExistingRecord = JSON.parse(sessionStorage.getItem('allEmpRecords')).data;
            let generatedId;
            if(employeeDatail && employeeDatail.id){
                ExistingRecord = ExistingRecord.map(emp =>
                    emp.id === employeeDatail.id ? { ...emp, ...empToOnboard } : emp
                );
            }
            else{
                generatedId = Math.max.apply(null, ExistingRecord.map(item => item.id))+1;
                ExistingRecord.push({...empToOnboard, id:generatedId});
            }
            sessionStorage.setItem('allEmpRecords', JSON.stringify({data: ExistingRecord}));
        }
    }

    render() {
        const {action, employeeDatail, empToOnboard, errorData} = this.props;
        const {employee_name, employee_salary, employee_age} = action ? empToOnboard : {};
        const isReadOnly = employeeDatail && action==='Details' && Object.keys(employeeDatail).length > 0;
        const isButtonDisabled = action!=='Edit' ? Object.keys(empToOnboard).length < 3 || errorData.length > 0 : errorData.length > 0 || false;
        const formData = [
            {
                type: 'normal',
                property: {
                    id: 'employee_name',
                    label: 'Employee Name',
                    defaultValue: employee_name,
                    disabled: isReadOnly,
                    error: errorData.indexOf('employee_name') >= 0
                },
                helperText: 'Please Enter valid name, also should be containing minimum three letters !'
            },
            {
                type: 'amount',
                property: {
                    id: 'employee_salary',
                    label: 'Salary',
                    defaultValue: employee_salary,
                    disabled: isReadOnly,
                    error: errorData.indexOf('employee_salary') >= 0
                },
                helperText: 'Please Enter valid salary, also should be minimum is four digit and maximum 6 digits !',
            },
            {
                type: 'normal',
                property: {
                    id: 'employee_age',
                    label: 'Employee Age',
                    defaultValue: employee_age,
                    disabled: isReadOnly,
                    error: errorData.indexOf('employee_age') >= 0
                },
                helperText: 'Please Enter valid Age! greater than 18 and less than 67 years!'
            }
        ];
        return (
            <div className="employee-form-wrapper">
                <form noValidate autoComplete="off" className="add-emp-form">
                    <div className="form-control-parent">
                        {formData.map((control, index)=>{
                            const CustomTag = componentList[control.type === 'amount' ? `AmountBox` : `TextBox`]
                            return <CustomTag
                                key={`control-${index}`}
                                {...control}
                                handleChange={(e)=>this.handleChange(e)}
                            />
                        })}
                    </div>
                    <div className="form-button--spacing">
                        <Link to={`/`} className="button-with-link" onClick={()=> this.formSubmit(isReadOnly)}>
                            <Button variant="contained" color="secondary" disabled={isReadOnly ? !isReadOnly : isButtonDisabled}>
                                {isReadOnly ? `Go Back` : `Submit`}
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        empToOnboard:state.app.empToOnboard,
        errorData: state.app.errorData
    };
};

const mapDispatchToProps = {
    clearInputFields,
    onboardNewEmployee
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);