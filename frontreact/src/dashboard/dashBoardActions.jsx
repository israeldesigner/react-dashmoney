/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

const getSummary = () => {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`);
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request,
  };
};

export default getSummary;
