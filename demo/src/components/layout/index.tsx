import React from 'react';
import Header from './Header';
import Nav from './Nav';

export default ({ children }) => (
  <>
    <Header />
    <Nav />
    <section>{children}</section>
  </>
);
