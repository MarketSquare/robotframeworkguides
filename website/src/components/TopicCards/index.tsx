import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const Topics = [
  {
    name: '🪲 Test Automation',
    url: '/getting_started/testing',
    description: (
      <Translate id="topic.testing.description">
        How to set up Robot Framework for testing
      </Translate>
    ),
  },
  {
    name: '🤖 RPA',
    url: '/getting_started/rpa',
    description: (
      <Translate id="topic.rpa.description">
        How to set up Robot Framework for Robotic Process Automation (RPA)
      </Translate>
    ),
  },
  {
    name: '👥 About Us',
    url: '/about_us',
    description: (
      <Translate id="topic.about.description">
        Who we are and what we do
      </Translate>
    ),
  },
  {
    name: '🤟 Contribute',
    url: '/contribute',
    description: (
      <Translate id="topic.contribute.description">
        How to join and support us
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  description: JSX.Element;
}

function TopicCard({name, image, url, description}: Props) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
        <Link to={url}>
          <h3>{name}</h3>
          </Link>
          <p>{description}</p>
          
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="topic.tryItButton">Check it out!</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopicCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Topics.map((topic) => (
        <TopicCard key={topic.name} {...topic} />
      ))}
    </div>
  );
}