/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import DashBoardReducer from '../dashboard/dashaboardReducer';
import TabReducer from '../common/tabs/tabReducer';

const rootReducer = combineReducers({
  dashboard: DashBoardReducer,
  tab: TabReducer,
});

export default rootReducer;
