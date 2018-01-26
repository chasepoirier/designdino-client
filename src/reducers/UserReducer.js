import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED, USER_CHANGE_AVATAR, ADD_DINO_CLAPS, UPDATE_USER_PROFILE, SHOW_USER_LIKES } from "../types";

export default function user(state = {loaded: false}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
    	return action.user;
    case USER_FETCHED:
    	return { ...state, ...action.user, loaded: true};
    case USER_LOGGED_OUT:
    	return { loaded: true};
    case USER_CHANGE_AVATAR:
        return { ...state, avatar: action.avatar}
    case UPDATE_USER_PROFILE:
        return { ...state, title: action.user.title, bio: action.user.bio}
    case ADD_DINO_CLAPS:
        if(action.claps.user.like.index !== -1) {
            return { ...state, likes: state.likes.map((like, i) => i === action.claps.user.like.index ? {...like, count: action.claps.user.like.count} : like ) }
        } else {
            return { ...state, likes: [...state.likes, { count: action.claps.user.like.count, fossilId: action.claps.user.like.fossilId.toString() }]} 
        }
    case SHOW_USER_LIKES:
        return { ...state, likedFossils: action.likes}
    default:
    	return state;
  }
}
