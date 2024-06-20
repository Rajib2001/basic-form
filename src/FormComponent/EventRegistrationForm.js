import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from './useForm'; // Custom hook for form handling and validation

const EventRegistrationForm = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    // Navigate to the summary page with form data
    navigate('/summary', { state: { ...values } });
  }

  return (
    <div className="form-container">
      <h2>Event Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age || ''}
            onChange={handleChange}
            required
            min="1"
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="form-group">
          <label>
            Are you attending with a guest?
            <input
              type="checkbox"
              name="attendingWithGuest"
              checked={values.attendingWithGuest || false}
              onChange={handleChange}
            />
          </label>
        </div>

        {values.attendingWithGuest && (
          <div className="form-group">
            <label htmlFor="guestName">Guest Name</label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={values.guestName || ''}
              onChange={handleChange}
              required={values.attendingWithGuest}
            />
            {errors.guestName && <p className="error">{errors.guestName}</p>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
