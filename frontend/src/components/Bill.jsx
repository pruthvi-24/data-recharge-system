import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Bill() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state || !state.success) {
        return (
            <div className="container">
                <h2>No Transaction Found</h2>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        );
    }

    const { data } = state;

    return (
        <div className="container">
            <h1 style={{ color: 'green' }}>Payment Successful!</h1>
            <div className="status-section" style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'left' }}>
                <h2>Receipt / Bill</h2>
                <hr />
                <p><strong>Username:</strong> {data.username}</p>
                <p><strong>Plan:</strong> {data.planName}</p>
                <p><strong>Amount Paid:</strong> ₹{data.price}</p>
                <p><strong>Transaction Date:</strong> {data.date}</p>
                <p><strong>Status:</strong> {data.subscriptionStatus}</p>
                <hr />
                <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>Back to Home</button>
            </div>
        </div>
    );
}

export default Bill;
