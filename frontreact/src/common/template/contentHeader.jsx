/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default (props) => (
  <section className="content-header">
    <h1>
      {props.title}
      <small>{props.small}</small>
    </h1>
  </section>
);
