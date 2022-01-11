import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HomepageInstallation.module.css';

export default function HomepageInstallation() {
  return (
    <section className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 class="hero__title" style={{color: "#f5f5fa"}}>Install Gitploy in Minutes</h1>
            <p class="hero__subtitle">Download our official Docker image or build from source. No need to talk with sales or request a trial license.</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--md"
            to="/docs/tasks/installation">
            Install Gitploy
          </Link>
          <Link
            className="button button--primary button--lg"
            style={{backgroundColor: "#3a416f"}}
            to="https://cloud.gitploy.io">
            Try Free Cloud
          </Link>
        </div>
      </div>
    </section>
  );
}
