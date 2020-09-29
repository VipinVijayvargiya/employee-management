import React, { Component } from 'react';
import { connect } from "react-redux";
import { getEmployeeData } from "../../redux/actions";
import Loader from '../../components/loader/loader';
import FormComponent  from '../../components/formComponent/formComponent';

class employeeDatails extends Component {

  componentDidMount() {
    const { getEmployeeData, match: { params } } = this.props;
    const paramData = params.id.split(':');
    getEmployeeData(paramData[0]);
  }

  render () {
    const {employeeDatail, isLoading, match: { params } } = this.props;
    return (
      <div className="test-class">
        {isLoading ? <Loader /> : (
            <FormComponent action={params ? params.action : ''} employeeDatail={employeeDatail} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading,
    employeeDatail: state.app.employeeDatail
  };
};

const mapDispatchToProps = {
  getEmployeeData
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(employeeDatails);
