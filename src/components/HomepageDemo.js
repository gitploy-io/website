import React from 'react';
import clsx from 'clsx';
import styles from './HomepageDemo.module.css';

export default function HomepageDemo() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="text--center">
          <h2>BUILD A POWERFUL DEPLOYMENT SYSTEM</h2>
          <p>Gitploy provides a fast, safe and secure deployment pipeline to your organization. <br/> Build your deployment system in minutes.</p>
          <img className={clsx(styles.image, 'shadow--md', )} src={require('../../static/img/docs/gitploy-v3.gif').default}/>
        </div>
      </div>
    </section>
  )
}