import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Routes from '~constants/routes';
import useShadow from '~hooks/useShadow';

import { COLORS } from './constants';
import styles from './styles.module.scss';

interface Props {
  component: {
    title: string;
    html: string;
    css: string;
  };
  number: number;
  category: string;
}

function Card({ component, number }: Props) {
  const { html, css } = component;
  const { category } = useParams();
  const shadowElem = useShadow<HTMLDivElement>({ html, css });
  const linkRoute = Routes.DETAIL.replace(':category', category as string).replace(
    ':component',
    component.title
  );

  const cardColor = { '--card-color': COLORS[Math.floor(number % COLORS.length)] } as React.CSSProperties;
  return (
    <div className={`column middle center full-width ${styles.card}`} style={cardColor}>
      <div ref={shadowElem} className={`full-width row middle center ${styles.cardContent}`} />
      <div className={`full-width column ${styles.cardInfo}`}>
        <h4 className={`m-bottom-2 ${styles.cardTitle}`}>{component.title}</h4>
        <Link to={linkRoute}>Watch more...</Link>
      </div>
    </div>
  );
}

export default Card;
