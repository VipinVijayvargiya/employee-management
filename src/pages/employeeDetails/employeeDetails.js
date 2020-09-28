import React, { Component } from 'react';
import { connect } from "react-redux";
import './employeeDatails.scss';
import { getEmployeeData } from "../../redux/actions";
import Loader from '../../components/loader/loader';

class employeeDatails extends Component {

    componentDidMount() {
        const { getEmployeeData, match: { params } } = this.props;
        getEmployeeData(params.id);
    }
 
    handleChangeLocation = () => {
        const { history } = this.props;
        history.push('/');
    }
    render () {
        const {employeeDatail, isLoading} = this.props;
        
        return (
            <div className="test-class">
              {
                isLoading ? <Loader /> : (
                  <div>
                    <span className="change-selection" onClick={this.handleChangeLocation}>change selection</span>
                    <div>{employeeDatail && employeeDatail.employee_name}</div>
                  </div>
                )
              }
                
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
      isLoading: state.app.isLoading,
      employeeDatails: state.app.employeeDatails
    };
  };
  const mapDispatchToProps = {
    getEmployeeData
  };
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(employeeDatails);

