import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/Seo';

import '../styles/404.scss';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not Found" />
    <h1 className="h1">404: Not Found</h1>
    <p>Opsss... wrong way :(</p>
  </Layout>
);

export default NotFoundPage;
