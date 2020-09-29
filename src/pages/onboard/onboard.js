import React, { Component } from "react";
import './onboard.scss';
import FormComponent  from '../../components/formComponent/formComponent';

class Onboard extends Component {

    render() {
        const {match: { params } } = this.props;
        return (
            <div className="add-employee-wrapper">
                <FormComponent action={params ? params.action : ''} />
            </div>
        )
    }
}
export default Onboard;