import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SummaryPage = () => {
  const { state } = useLocation();

  return (
    <div className="summary-container">
      <div className="summary-box">
        <h2>Registration Summary</h2>
        <div className="summary-data">
          <p><strong>Name:</strong> {state.name}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Age:</strong> {state.age}</p>
          {state.attendingWithGuest && <p><strong>Guest Name:</strong> {state.guestName}</p>}
        </div>
        <Link to="/">Go back to form</Link>
      </div>
    </div>
  );
};

export default SummaryPage;
