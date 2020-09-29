import React, { Component } from 'react';
import { InputAdornment, InputLabel, FormControl, FormHelperText, OutlinedInput } from '@material-ui/core';

class AmountBox extends Component {
    render () {
        const {handleChange, property, helperText} = this.props;
        const {defaultValue, disabled, error, id, label} = property || {};
        return (
            <FormControl fullWidth variant="outlined" className="form-control--spacing">
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <OutlinedInput
                    id={id}
                    name={id}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    error={error}
                    onChange={(e)=>handleChange(e)}
                    startAdornment={<InputAdornment position="start">&euro;</InputAdornment>}
                    labelWidth={60}
                />
                {error && <FormHelperText error={true} id={`${id}-helper-text`}>{helperText}</FormHelperText>}
            </FormControl>
        )
    }
}

export default AmountBox;
