import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin, Alert } from 'antd';
import classes from './App.module.scss'; 
import 'antd/dist/antd.css';
import logo from './logo.svg';
import Filters from '../filters';
import CardList from '../cardList';
import Tabs from '../tabs';
import { getTickets, btnShowMore } from '../../redux/actions';

const App = ({ fetchData,btnCLick, loading,error, tickets, buffer}) => {
  App.defaultProps = {
    fetchData: () => {},
    btnCLick: () => {},
    loading: false,
    error: false,
    buffer: false,
    tickets: [],
  };

  useEffect(() => fetchData(), [fetchData]);

	
const onLoading = loading ?   <Spin tip="Loading..." size="large" />
 : <img src={logo} alt="Логотип"  />
	 
	 
const hasError =( error && !tickets.length )

	
const onError = hasError ? <Alert message="Ошибка запроса" type="error" />:null

const content = buffer ? <CardList /> :null

  return (
    <section className={classes.App}>
	<div  className={classes['App--spinner']}>				   
	 	{onLoading}
	</div>				   
<div className={classes['App--content']}>
        <div>
          <Filters />
        </div>

        <div>
          <Tabs />
	  	{onError}
          {content}
          <button type="button" className={classes['App--button']} onClick = {btnCLick}>
            Показать еще 5 билетов
          </button>
        </div>
      </div>
    </section>
  );
};

App.propTypes = {
  fetchData: PropTypes.func,
  btnCLick: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  buffer: PropTypes.bool,
  tickets: PropTypes.instanceOf(Array),
};

function mapStateToProps(state) {
  const { loading, error, tickets, buffer } = state.tickets;
  return { loading, error, tickets, buffer };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(getTickets()),
    btnCLick: () => dispatch(btnShowMore()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
