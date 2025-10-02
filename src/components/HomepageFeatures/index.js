import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';
import CardContainer from '@site/src/components/Card/CardContainer';

const FeatureList = [
  {
    title: 'Guides',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Find step-by-step instructions for implementing features and handling specific scenarios.
      </>
    ),
    href: '/docs/category/guides',
  },
  {
    title: 'Concepts',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn the technical terminology used in Protekt so you can follow the docs and use the portal without effectively.
      </>
    ),
    href: '/docs/category/concepts',
  },
  {
    title: 'Reference',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Find additional resources, architecture details, advanced configuration options, and a glossary to help you better use Protekt.
      </>
    ),
    href: '/docs/category/reference',
  },
];

function Feature({Svg, title, description, href}) {
  return (
    <Card shadow='tl' href={href}>
    <CardHeader>
    </CardHeader>
    <CardBody>
      {description}
    </CardBody>
    <CardFooter>
      <button className='button button--secondary button--block'>{title}</button>
    </CardFooter>
  </Card>
  );
}
        

export default function HomepageFeatures() {
  return (
    <CardContainer cols={3} gap="md" padding="lg">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </CardContainer>
  );
}
