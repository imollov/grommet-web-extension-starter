import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => (
  <Layout>
    <Header />
    <Content />
    <Footer />
  </Layout>
);

export default App;
