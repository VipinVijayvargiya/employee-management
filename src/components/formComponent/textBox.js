import React, { Component } from 'react';
import { FormControl, TextField } from '@material-ui/core';

class TextBox extends Component {
    render () {
        const {handleChange, property, helperText} = this.props;
        return (
            <FormControl fullWidth variant="outlined" className="form-control--spacing">
                <TextField
                    {...property}
                    name={property.id}
                    onChange={(e)=>handleChange(e)}
                    variant="outlined"
                    helperText={property.error ? helperText : ''}
                />
            </FormControl>
        )
    }
}

export default TextBox;
