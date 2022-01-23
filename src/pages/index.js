import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageInstallation from '../components/HomepageInstallation';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header id="hero" className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Builds your deployment system around GitHub.</h1>
          </div>
        </div>
        <div className={clsx('margin-top--md', styles.buttons)}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/docs/">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/gitploy-io/gitploy/discussions">
            Join Our Community
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.description}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageInstallation />
      </main>
    </Layout>
  );
}
