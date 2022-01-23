import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Powered By GitHub',
    Svg: require('../../static/img/features/github.svg').default,
    description: (
      <>
        Build the deployment system around <strong>GitHub deployment API</strong>. 
        It enable a organization builds loosely coupled deployment system, without worrying about the implementation details of delivering different types of applications.
      </>
    ),
  },
  {
    title: 'Configuration as code',
    Svg: require('../../static/img/features/file.svg').default,
    description: (
      <>
        <strong>Pipeline is configured with a simple, easy-to-read file</strong> that you commit to your git repository.
        It configures a deployment pipeline for each runtime environment in minutes.
      </>
    ),
  },
  {
    title: 'Deployment safety',
    Svg: require('../../static/img/features/deployment.svg').default,
    description: (
      <>
        Deployment can be more dangerous than others and might need to be treated with extra care. 
        Gitploy has <strong>powerful features to deploy safely.</strong>
      </>
    ),
  },
];

function Feature({Svg, Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
