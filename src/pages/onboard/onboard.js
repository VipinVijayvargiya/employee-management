import React, { Component } from "react";
import { connect } from "react-redux";
import './onboard.scss';

class Onboard extends Component {
    
    componentDidMount() {
       // if any error history.push('/');
    }
    
    goBack() {
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return (
            <div className="add-employee-wrapper">
                On board
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
)(Onboard);