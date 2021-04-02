// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default () => (
  <ul className="sidebar-menu">
    <MenuItem path="/#/" label="dashboard" icon="dashboard" />
    <MenuTree label="cadastro" icon="edit">
      <MenuItem path="/#/billingCycles" label="Ciclo de pagamentos" icon="usd" />
    </MenuTree>
  </ul>
);
