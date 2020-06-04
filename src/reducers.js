import { GET_RANDOM_MOVIE } from './actions';

const DEFAULT_STATE = {
    omdbData : {}
};

const reducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_RANDOM_MOVIE:
            return { ...state, ...action.omdbData }

        default: 
            return state
    }
}


export default reducer;