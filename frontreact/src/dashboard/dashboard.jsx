/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getSummary from './dashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;
    return (
      <div>
        <ContentHeader title="dashboard" small="versao 1.0" />
        <Content>
          <ValueBox
            cols="12 4"
            color="green"
            icon="bank"
            value={`R$ ${credit}`}
            text="total de créditos"
          />
          <ValueBox
            cols="12 4"
            color="red"
            icon="credit-card"
            value={`R$ ${debt}`}
            text="total de créditos"
          />
          <ValueBox
            cols="12 4"
            color="blue"
            icon="money"
            value={`R$ ${credit - debt}`}
            text="Valor consolidado"
          />
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ summary: state.dashboard.summary });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
