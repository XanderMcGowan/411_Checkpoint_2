import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const list = (state = [], action) => {
    switch(action.type){
        case 'ADD_LIST' :
            return [...state, action.value]
        case 'REMOVE_LIST' :
           const newState = [...state]
            newState.splice(action.value, 1)
            return newState
        default :
        return state
    }
}

export default combineReducers({ user, list })