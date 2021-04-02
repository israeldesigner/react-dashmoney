/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-script-url */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectTab from './tabsActions';

class TabHeader extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.target;
    return (
      <li className={selected ? 'active' : ''}>
        <a
          href="javascript:;"
          data-toggle="tab"
          data-target={this.props.target}
          onClick={() => this.props.selectTab(this.props.target)}
        >
          <i className={`fa fa-${this.props.icon}`} />
          {this.props.label}
        </a>
      </li>
    );
  }
}

const mapToStateToProps = (state) => ({ tab: state.tab });
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab }, dispatch);
export default connect(mapToStateToProps, mapDispatchToProps)(TabHeader);
