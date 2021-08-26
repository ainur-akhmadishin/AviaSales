import { GET_TICKETS, SORT, FILTER, BUFFER, BTN_SHOW_MORE, SPINNER, ERROR } from './types';
import Api from '../servise/Api';

const api = new Api();


async function asyncGetTicket(dispatch, key){
		let searchID = key;
try{
		  if (!searchID){
			searchID  =  await api.getSearchID();
			dispatch({type:SPINNER});
		  }


    const tickets = await api.getData(searchID);
    dispatch({ type: GET_TICKETS, payload: tickets });
	dispatch({ type: BUFFER, payload:true});
		  		  if (!tickets.stop){
			    return  asyncGetTicket(dispatch, searchID);
			 
		  }
	  
		  dispatch({type:SPINNER});
}
	
	catch(err){
		 dispatch({type:SPINNER});
		 dispatch({type:ERROR});
		
	}
	   return 0;
  };


export function getTickets() {
	
  return  (dispatch) => {
	  				asyncGetTicket(dispatch)
}
}



export const onSelect = (id) => ({ type: FILTER, payload: id });
export const sortTickets = (id) => ({ type: SORT, payload: id });
export const btnShowMore = () => ({ type: BTN_SHOW_MORE });

