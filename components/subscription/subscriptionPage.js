/* eslint-disable react/no-unknown-property */
import React from 'react';
import {checkout} from "../../utils/stripe"

const SubscriptionPage = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Subscribe to Netflix</h1>
        <div>
          <h2 className="plan-name">Standard</h2>
          <p className="price">$13.99/month</p>
          <ul className="features">
            <li>Watch on 2 screens at a time in HD quality</li>
            <li>Download videos on 2 phones or tablets</li>
            <li>Cancel anytime</li>
          </ul>
          <button className="button" onClick={()=>{checkout({
			lineItems:[
				{
					price:"price_1N5NAsSFRmrn6FpUOCN3brGV",
					quantity: 1
				}
			]
		  })}}>Subscribe</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          padding: 40px;
          text-align: center;
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .plan-name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .price {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .features {
          list-style: none;
          margin: 0;
          padding: 0;
          margin-bottom: 20px;
        }

        .features li {
          margin-bottom: 10px;
        }

        .button {
          background-color: #e50914;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #b2070d;
        }
      `}</style>
    </div>
  );
};

export default SubscriptionPage;
