import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onSelect } from '../../redux/actions';
import classes from './Filters.module.scss';

const Filters = ({ filters, selected }) => {
  Filters.defaultProps = {
    filters: [],
    selected: () => {},
  };
  const content = filters.filters.map((el) => (
    <li key={el.id}>
      <input id={el.id} name={el.id} type="checkbox" checked={el.checked} onChange={() => selected(el.id)} />
      <label htmlFor={el.id}>{el.title}</label>
    </li>
  ));

  return (
    <section className={classes.Filters}>
      <span className={classes['Filters--title']}>Количество пересадок</span>
      <ul className={classes['Filters--list']}>{content}</ul>
    </section>
  );
};

Filters.propTypes = {
  filters: PropTypes.instanceOf(Object),
  selected: PropTypes.func,
};

function mapStateToProps(state) {
  const { filters } = state;
  return { filters };
}

function mapDispatchToProps(dispatch) {
  return {
    selected: (id, count) => dispatch(onSelect(id, count)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
