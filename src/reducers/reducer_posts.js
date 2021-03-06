import _ from 'lodash';
import { FETCH_POSTS,  FETCH_POST, CREATE_POSTS, DELETE_POST } from '../actions';

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_POSTS:
            state = _.mapKeys(action.payload.data, 'id');
            break;
        case  FETCH_POST:
            const post = action.payload.data;
            const newState = { ...state };
            newState[post.id] = post;
            state = newState;
            break;
        case CREATE_POSTS:
            break;
        case DELETE_POST:
            state = _.omit(state, action.payload);
            break;
    }

    return state;
}
