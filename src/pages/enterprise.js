import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './enterprise.module.css';

function EnterpriseHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">ENTERPRISE EDITION</h1>
            <p className="hero__subtitle">Gitploy provides advanced features to deploy the application with lower risk and faster.</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/docs/tasks/installation">
            Install Gitploy
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="mailto:support@gitploy.io">
            Contact Sales
          </Link>
        </div>
      </div>
    </header>
  );
}

function EarlyBirdPromotion() {
  return (
    <div className="container margin-vert--md">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <div className="alert alert--success" role="alert">
            <strong>Early bird promotion! We're offering 50% off, forever.</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function PriceModel() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--3 col--offset-3">
          <div >
            <div className="card">
              <div className="card__header">
                {/* TODO: Revert the price after the promotion */}
                <h2><span>$25</span> (<span style={{textDecoration: "line-through"}}>$50</span>) <span style={{fontSize: 16}}>/User/Year</span></h2>
              </div>
              <div className="card__body">
                <p>
                  Enterprise edition provides advanced features that make deployment fast and safety.
                </p>
              </div>
              <div className="card__footer">
                <button className="button button--secondary button--block button--lg">Purchase</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col col--3">
        <div >
          <div className="card">
              <div className="card__header">
                <h2>Enterprise</h2>
              </div>
              <div className="card__body">
                <p>
                  If you would like to purchase a subscription for 40+ developers please Contact Sales.
                </p>
              </div>
              <div className="card__footer">
                <button className="button button--secondary button--block button--lg">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureTable({title, items}) {
  return (
    <div className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <h3 style={{textAlign: "center"}}>{title}</h3>
          <table style={{width: "100%", display: "table"}}>
            <thead>
              <tr>
                <th style={{textAlign: "left", width: "40%"}}>Feature</th>
                <th>OSS</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr>
                    <td>{item[0]}</td>
                    <td style={{textAlign: "center"}}>{item[1]}</td>
                    <td style={{textAlign: "center"}}>{item[2]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function Enterprise() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Enterprise"
      description={siteConfig.description}>
      <EnterpriseHeader />
      <main>
        <EarlyBirdPromotion />
        <PriceModel />
        <FeatureTable 
          title="SOURCE CODE MANAGEMENT"
          items={[
            ["GitHub", "✔️", "✔️"],
            ["GitHub Enterprise", "✔️", "✔️"],
          ]}
        />
        <FeatureTable 
          title="DATA STORAGE"
          items={[
            ["SQLite", "✔️", "✔️"],
            ["MySQL", "️", "✔️"],
            ["Postgres", "️", "✔️"],
          ]}
        />
        <FeatureTable 
          title="DEPLOYMENT FEATURE"
          items={[
            ["Deploy", "✔️", "✔️"],
            ["Auto Deploy", "✔️", "✔️"],
            ["Deployment Safety", "✔️", "✔️"],
            ["Rollback", "✔️", "✔️"],
            ["Locking", "️", "✔️"],
            ["Review", "", "✔️"],
          ]}
        />
        <FeatureTable 
          title="DevOps Metrics"
          items={[
            ["Prometheus", "️", "✔️"],
          ]}
        />
        <FeatureTable 
          title="Push Notification"
          items={[
            ["Browser", "️", "✔️"],
            ["Slack", "️", "✔️"],
          ]}
        />
      </main>
    </Layout>
  );
}

