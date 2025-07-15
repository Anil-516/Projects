import React from 'react';
import PropTypes from 'prop-types';

const StepTwo = ({ formData, setFormData }) => (
  <div className="form-step">
    <h2>Step 2: Contact Info</h2>
    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
    <input
      type="tel"
      placeholder="Phone"
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    />
  </div>
);

StepTwo.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default StepTwo;