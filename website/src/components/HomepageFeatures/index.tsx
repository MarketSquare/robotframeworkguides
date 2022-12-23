import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Robot Framework Guides',
    Svg: require('@site/static/img/guides_image.svg').default,
    description: (
      <>
        You want to get started with Robot Framework? Need some <strong>hints</strong> and <strong>examples</strong>? Then proceed here
      </>
    ),
    to: "/docs",
  },
  {
    title: 'Robot Framework User Guide',
    Svg: require('@site/static/img/userguide_image.svg').default,
    description: (
      <>
        The full reference manual for the Robot Framework Core. Learn about the <strong>syntax</strong>, <strong>file types</strong>, how to <strong>extend</strong> it and much more.
      </>
    ),
    to: "https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html",
    
  },
  {
    title: 'Standard Library',
    Svg: require('@site/static/img/library_image.svg').default,
    description: (
      <>
        The Libraries which bundled with Robot Framework.
        Find out which Keywords are available and how to use them.
      </>
    ),
    to: "https://robotframework.org/robotframework/#standard-libraries",
  },
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/api_doc_image.svg').default,
    description: (
      <>
      Want to use the API to intearct with the <strong>Robot Framework Model</strong> create your own tools? This is the place to start.
      </>
    ),
    to: "https://robot-framework.readthedocs.io/en/stable/",
  },
];

function Feature({title, Svg, description, to="/"}: FeatureItem) {
  return (

    <div className={clsx('col col--3')}>
          <Link to={to} >
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
