import React from 'react';
import PropTypes from 'prop-types';

const StepOne = ({ formData, setFormData }) => (
  <div className="form-step">
    <h2>Step 1: Personal Info</h2>
    <input
      type="text"
      placeholder="First Name"
      value={formData.firstName}
      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
    />
    <input
      type="text"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
    />
  </div>
);
StepOne.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};


export default StepOne;