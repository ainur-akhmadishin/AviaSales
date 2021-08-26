import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortTickets } from '../../redux/actions';
import classes from './Tabs.module.scss';

const Tabs = ({ values, sorted }) => {
  Tabs.defaultProps = {
    values: [],
    sorted: () => {},
  };

  const btnActive = classes['Tabs--button__active'];
  const btnClass = classes['Tabs--button'];

  const content = values.sort.map((el) => {
    const btnClassName = el.select ? btnActive : btnClass;
    return (
      <div key={el.id}>
        <button type="button" className={btnClassName} onClick={() => sorted(el.id)}>
          {el.title}
        </button>
      </div>
    );
  });

  return <form className={classes.Tabs}>{content}</form>;
};

Tabs.propTypes = {
  values: PropTypes.instanceOf(Object),
  sorted: PropTypes.func,
};

function mapStateToProps(state) {
  const { sort } = state;
  const values = sort;
  return { values };
}

function mapDispatchToProps(dispatch) {
  return {
    sorted: (id) => dispatch(sortTickets(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
