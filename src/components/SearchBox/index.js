import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function SearchBox({value, onChange}) {
    return (
        <Input
            icon='search'
            placeholder='Search...' 
            value={value}
            onChange={onChange}
        />
    )
}

SearchBox.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}