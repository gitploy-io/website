import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Powered By GitHub',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build the deployment system around <strong>GitHub deployment API</strong>. 
        Gitploy build the deployment system loosely coupled tooling without worrying about the implementation details of delivering different types of applications.
      </>
    ),
  },
  {
    title: 'Configuration as code',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pipeline is configured with a simple, easy-to-read file that you commit to your git repository.
        Gitploy build an advanced deployment pipeline from scratch in minutes.
      </>
    ),
  },
  {
    title: 'Deployment safety',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Deployment can be more dangerous than others and might need to be treated with extra care. 
        Gitploy has several features that help to deploy safely.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
