import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageURL: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple and Fast Integration',
    imageURL: 'img/gears.jpeg',
    description: (
      <>
        Set up your Discord bot, Lavalink, and API server seamlessly. 
        Our step-by-step guides ensure you can have everything up and running in no time with minimal configuration needed.
      </>
    ),
  },
  {
    title: 'Built for Developers',
    imageURL: 'img/coding.jpg',
    description: (
      <>
        Focus on writing code, not troubleshooting documentation. 
        We provide clear instructions, example setups, and best practices for every part of the process—helping you get straight to the point.
      </>
    ),
  },
  {
    title: 'Modular and Scalable',
    imageURL: '/img/scalability.jpg',
    description: (
      <>
        Our documentation supports customization and scalability. 
        Whether you're running a small bot or managing large-scale music streaming, you'll find adaptable solutions that can grow with your project.
      </>
    ),
  },
];

function Feature({title, imageURL, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={imageURL} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
