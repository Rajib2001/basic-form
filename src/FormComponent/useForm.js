import { useState, useEffect } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      callback();
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = 'Name is required';
    if (!values.email) tempErrors.email = 'Email is required';
    if (!values.age || values.age <= 0) tempErrors.age = 'Age must be greater than 0';
    if (values.attendingWithGuest && !values.guestName) tempErrors.guestName = 'Guest Name is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
