/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TabContent extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.id;
    return (
      <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

const mapToStateToProps = (state) => ({ tab: state.tab });
export default connect(mapToStateToProps)(TabContent);
