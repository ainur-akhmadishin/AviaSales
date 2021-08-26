import { GET_TICKETS, BUFFER, BTN_SHOW_MORE, SPINNER, ERROR } from './types';


const initState = {
  tickets: [],
  buffer:false,
  ticketCount:5,
  loading:false,
  error:false,
};

const ticketsReduser = (state = initState, action) => {
  switch (action.type) {
    case GET_TICKETS: {
      const newState = state.tickets;
      if (!action.payload.stop) {
        newState.push(...action.payload.tickets);
      }

      return {
        ...state,
        tickets: newState,
         };
    }
    case BUFFER:
      return {
        ...state,
        buffer: action.payload,
      };   
	  
	  
	  case BTN_SHOW_MORE:
      return {
        ...state,
        ticketCount: state.ticketCount + 5,
      };
		  
	 case ERROR:
      return {
        ...state,
        error: true,
      };	 
	  
	  case SPINNER:
      return {
        ...state,
        loading:!state.loading,
      };
	  

    default:
      return state;
  }
};

export default ticketsReduser;
