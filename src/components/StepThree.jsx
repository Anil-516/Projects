import React from 'react';
import PropTypes from 'prop-types';

const StepThree = ({ formData, setFormData }) => (
  <div className="form-step">
    <h2>Step 3: Address Information</h2>
    <input
      type="text"
      placeholder="Street Address"
      value={formData.street}
      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
    />
    <input
      type="text"
      placeholder="City"
      value={formData.city}
      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
    />
    <div className="form-row">
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        className="state-input"
      />
      <input
        type="text"
        placeholder="Zip Code"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        className="zip-input"
      />
    </div>
  </div>
);
StepThree.propTypes = {
  formData: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};


export default StepThree;