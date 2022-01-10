import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header id="hero" className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Builds your deployment system around GitHub.</h1>
            <p className="hero__subtitle">Gitploy is the easiest way to build an advanced deployment system around GitHub in minutes.</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
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
      </main>
    </Layout>
  );
}
