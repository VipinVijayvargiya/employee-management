import React, { Component } from "react";
import { connect } from "react-redux";
import './formComponent.scss';
import { onboardNewEmployee } from "../../redux/actions";
import { Link } from "react-router-dom";

import { Button, InputAdornment, InputLabel, OutlinedInput, TextField, FormControl } from '@material-ui/core';

class FormComponent extends Component {
    
    componentDidMount() {
       // if any error history.push('/');
    }
    
    goBack() {
        const { history } = this.props;
        history.goBack();
    }

    handleChange=(name, event) => {
        console.log(name, event.target.value);
    }

    // forLoop = async _ => {
    //     console.log('Start')
    //     const { uploadPhoto, photos } = this.props;
    //     let promises = [];
    //     for (let i in photos)
    //         promises.push(uploadPhoto(i, photos[i]));
    //     await Promise.all(promises);
    //     this.setState({ isPredicting: false });
    //     this.calculateAnswers();
    //     console.log('End')
    // }

    // formSubmit=async _=>{
    //     this.props.onboardNewEmployee();
    //     console.log('submit');
        
    // }

    formSubmit=()=>{

    }

    render() {
        console.log(this.props);
        const {action, employeeDatail} = this.props;
        const {employee_name, employee_salary, employee_age} = employeeDatail || {};
        const isFormOnly = employeeDatail && action==='Details' && Object.keys(employeeDatail).length > 0;
        const customButton = (
            <Button variant="contained" color="secondary" onClick={()=> this.formSubmit(isFormOnly)}>
                {isFormOnly ? `Go Back` : `Submit`}
            </Button>
        )
        return (
            <div className="add-employee-wrapper">
                <form noValidate autoComplete="off" className="add-emp-form">
                    <div className="form-control-parent">
                        <FormControl fullWidth variant="outlined" className="form-control--spacing">
                            <TextField
                                error
                                id="outlined-error-helper-text"
                                label="Name"
                                disabled={isFormOnly}
                                defaultValue={employee_name}
                                helperText="Incorrect entry."
                                variant="outlined"
                                onChange={(e)=>this.handleChange('Name', e)}
                            />
                        </FormControl>
                        
                        <FormControl fullWidth variant="outlined" className="form-control--spacing">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                disabled={isFormOnly}
                                defaultValue={employee_salary}
                                onChange={()=>this.handleChange('amount')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                        
                        <FormControl fullWidth variant="outlined" className="form-control--spacing">
                            <TextField
                                error
                                id="outlined-error-helper-text"
                                label="Age"
                                disabled={isFormOnly}
                                defaultValue={employee_age}
                                helperText="Incorrect entry."
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    <div className="form-button--spacing">
                        {isFormOnly ? (
                            <Link to={`/`} className="button-with-link">
                                {customButton}
                            </Link>
                        ) : <div>
                            {customButton}
                        </div>}
                        
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoading: state.app.isLoading
    };
};

const mapDispatchToProps = {
    onboardNewEmployee
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);