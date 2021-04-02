/* eslint-disable no-console */
const selectTab = (tabId) => ({
  type: 'TAB_SELECTED',
  payload: tabId,
});

export default selectTab;
