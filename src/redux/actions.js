import { GET_TICKETS, SORT, FILTER, BUFFER, BTN_SHOW_MORE, SPINNER, ERROR } from './types';
import Api from '../servise/Api';


export function getTickets() {
	
  return  (dispatch) => {
	  const api = new Api();
	  				async function asyncGetTicket(key){
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
			    return  asyncGetTicket(searchID);
			 
		  }
	  
		  dispatch({type:SPINNER});
}
	
	catch(err){
		 dispatch({type:SPINNER});
		 dispatch({type:ERROR});
		
	}
	   return 0;
  };
	  
	asyncGetTicket()  
}
}



export const onSelect = (id) => ({ type: FILTER, payload: id });
export const sortTickets = (id) => ({ type: SORT, payload: id });
export const btnShowMore = () => ({ type: BTN_SHOW_MORE });

