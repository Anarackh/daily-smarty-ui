import { SET_RECENT_POSTS } from "../actions/types";

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch(action.typs) {
        case SET_RECENT_POSTS:
            return [...state, recentPosts, action.payload]

        default:
            return state;
    }
}