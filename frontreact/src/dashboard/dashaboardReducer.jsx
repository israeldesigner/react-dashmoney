const INITIAL_STATE = { summary: { credit: 12, debt: 3 } };

const dashReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED':
      return { ...state, summary: action.payload.data };
    default:
      return state;
  }
};

export default dashReducer;
// export default function (state = INITIAL_STATE, action) {
//   return state;
// }
