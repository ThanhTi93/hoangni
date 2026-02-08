import React from 'react';
import Header from '../common/Header';
import ClientRouters from '../routers/ClientRouters';
import Footer from '../common/Footer';

function HomeLayout(props) {
    return (
        <div>
          <Header />
          <ClientRouters />
          <Footer />
        </div>
    );
}

export default HomeLayout;