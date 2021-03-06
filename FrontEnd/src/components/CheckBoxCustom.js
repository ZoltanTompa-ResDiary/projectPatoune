import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from 'react-materialize';

import componentCSS from './CheckBoxCustom.scss';

class CheckBoxCustom extends React.Component {

  render() {
    return (
      
      <div className="check-box">
        <Checkbox
        filledIn
        id={this.props.id}
        label={this.props.label}
        value={this.props.value}
        disabled={(this.props.isDisabled) ? true : undefined}
        onChange={(this.props.onChange) ? this.props.onChange : undefined}
        checked={(this.props.checked) ? this.props.checked : undefined}
        />
      </div>
    );
  }
};



CheckBoxCustom.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool
};

export default CheckBoxCustom;
