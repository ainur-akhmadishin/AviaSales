import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import Card from '../card';

import 'antd/dist/antd.css';

const CardList = ({ tickets, sort, filters,  ticketCount}) => {
  CardList.defaultProps = {
    tickets: [], 
    sort: [], 
	ticketCount:5,
    filters: [], 
  };
	
const sorted = sort.filter(el=>el.select)

	const countCheckedTransfer = filters.filter(el => el.checked).map(el =>el.count);

	
	const onFiltres  = (prev, next) =>  prev.filter(el =>( 
		(next.indexOf(el.segments[0].stops.length) !==-1) || (next.indexOf(el.segments[1].stops.length)!==-1 ))
	);

	
	const onSorted = (arr, id) =>{
		switch (id){
			case 'speed':
				return arr.sort((prev,next)=>prev.segments[0].duration-next.segments[0].duration);
			
			case 'optimal':{
				return arr.sort((prev,next)=>(prev.price+prev.segments[0].duration)-(next.price+next.segments[0].duration))
	
				}
			default: return arr.sort((prev,next)=>prev.price-next.price)		
		}
			
	}
	

  const content = onSorted(onFiltres(tickets,countCheckedTransfer),sorted[0].id).slice(0, ticketCount).map((el) =>{
	  
	 const  key = `${el.price}_${el.carrier}`
	 return  <Card data={el} key = {key} />
  } );
	  
	  const result =  countCheckedTransfer.length ? content : <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />
							 


  return <ul>{result}</ul>;
};

CardList.propTypes = {
  ticketCount: PropTypes.number,
   tickets: PropTypes.instanceOf(Object),
  sort: PropTypes.instanceOf(Object),
  filters: PropTypes.instanceOf(Object),
};

function mapStateToProps(state) {
  const { bufferFlag, tickets, ticketCount} = state.tickets;
  const { sort} = state.sort;
  const { filters} = state.filters;

  return { bufferFlag, tickets, sort, filters, ticketCount};
}



export default connect(mapStateToProps,null)(CardList);
