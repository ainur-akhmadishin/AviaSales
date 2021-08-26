import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';
import TicketsInfo from './ticketsInfo';
import Utilits from '../../servise/Utilits';

const Card = ({ data }) => {
  Card.defaultProps = {
    data: {},
  };

  const utilits = new Utilits();
  const { price, segments, carrier } = data;
  const content = segments.map((el) => <TicketsInfo info={el} key={el.duration} />);

  return (
    <li className={classes.Card}>
      <div className={classes['Card--header']}>
        <div className={classes['Card--price']}>{utilits.insertSpace(price)}P</div>
        <img src={`${process.env.PUBLIC_URL}/img/${carrier}.png`} alt={carrier} className={classes['Card--logo']} />
      </div>
      {content}
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default Card;
