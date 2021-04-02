/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import Tabs from '../common/tabs/tabs';
import TabsHeader from '../common/tabs/tabsHeader';
import TabHeader from '../common/tabs/tabHeader';
import TabsContent from '../common/tabs/tabsContent';
import TabContent from '../common/tabs/tabContent';
import selectTab from '../common/tabs/tabsActions';

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab('tabList');
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclo de pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tablist" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tablist">
                <h1>Listar</h1>
              </TabContent>
              <TabContent id="tabCreate">
                <h1>Criar</h1>
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>Atualizar</h1>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Delete</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
