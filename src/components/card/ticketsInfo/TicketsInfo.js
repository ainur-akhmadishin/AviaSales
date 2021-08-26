import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Card.module.scss';
import Utilits from '../../../servise/Utilits';

const TicketsInfo = ({ info }) => {
  TicketsInfo.defaultProps = {
    info: {},
  };

  const utilits = new Utilits();

  const { stops, origin, destination, date, duration } = info;

  return (
    <div className={classes['Card--block']}>
      <div className={classes.info}>
        <span className={classes['info--title']}>
          {origin} – {destination}
        </span>
        <br />
        <span className={classes['info--text']}>
          {utilits.departureTime(date)} – {utilits.arrivalTime(date, duration)}
        </span>
      </div>
      <div className={classes.info}>
        <span className={classes['info--title']}>В пути</span>
        <br />
        <span className={classes['info--text']}>{utilits.travelTime(duration)}</span>
      </div>
      <div className={classes.info}>
        <span className={classes['info--title']}>{utilits.countTransfer(stops)}</span>
        <br />
        <span className={classes['info--text']}>{utilits.deleteComma(stops)}</span>
      </div>
    </div>
  );
};

TicketsInfo.propTypes = {
  info: PropTypes.instanceOf(Object),
};
export default TicketsInfo;
