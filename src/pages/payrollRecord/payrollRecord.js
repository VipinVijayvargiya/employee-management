import React, { Component } from "react";
import { connect } from "react-redux";
import './payrollRecord.scss';
// import { Link } from "react-router-dom";

class PayrollRecord extends Component {
    
    componentDidMount() {
       // if any error history.push('/');
    }
    
    goBack() {
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return (
            <div>
                <div>payroll Records here</div>
                <div>
                    
                </div>
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

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PayrollRecord);