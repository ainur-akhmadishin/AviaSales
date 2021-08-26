import { SORT } from './types';

const initState = {
  sort: [
    { id: 'cheap', title: 'Самый дешевый', select: true },

    { id: 'speed', title: 'Самый скоростной', select: false },

    { id: 'optimal', title: 'Оптимальный', select: false },
  ],
};

const sortReduser = (state = initState, action) => {
  switch (action.type) {
    case SORT: {
      const newState = state.sort.map((el) => {
        if (el.id === action.payload) {
          return el.select ? el : { ...el, select: true };
        }

        return el.select ? { ...el, select: false } : el;
      });
      return { ...state, sort: newState };
    }
    default:
      return state;
  }
};

export default sortReduser;
