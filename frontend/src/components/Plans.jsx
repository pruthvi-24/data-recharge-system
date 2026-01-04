import React from 'react';
import { useNavigate } from 'react-router-dom';

const rechargePlans = [
    { id: 1, planName: 'Basic Saver', price: 199, dataLimit: '1.5GB/day', validity: 28 },
    { id: 2, planName: 'Super Value', price: 399, dataLimit: '3GB/day', validity: 56 },
    { id: 3, planName: 'Annual Pro', price: 2999, dataLimit: '2GB/day', validity: 365 },
    { id: 4, planName: 'Data Booster', price: 51, dataLimit: '6GB', validity: 7 },
];

function Plans() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleSelectPlan = (plan) => {
        const state = { plan };
        navigate('/payment', { state });
    };

    return (
        <div className="container">
            <h1>Hello, {username || 'User'}!</h1>
            <h2>Select a Recharge Plan</h2>

            <div className="plans-container">
                {rechargePlans.map((plan) => (
                    <div key={plan.id} className="plan-card">
                        <h2>{plan.planName}</h2>
                        <p className="price">₹{plan.price}</p>
                        <p>Data: {plan.dataLimit}</p>
                        <p>Validity: {plan.validity} Days</p>

                        <button onClick={() => handleSelectPlan(plan)}>
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
