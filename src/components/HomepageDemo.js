import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageDemo.module.css';

export default function HomepageDemo() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="text--center">
          <h2>TAKE ADVANTAGE OF A POWERFUL DEPLOYMENT</h2>
          <p>
            Gitploy provides the way to deploy in the same manner regardless of types of applications<br/> 
            and to set up a deployment pipeline with a simple configuration file. 
          </p>
          <img className={clsx(styles.image, 'shadow--md', )} src={require('../../static/img/docs/gitploy-v3.gif').default}/>
          <p><Link to="/docs">Explore the documents</Link> to see everything Gitploy can do.</p>
        </div>
      </div>
    </section>
  )
}