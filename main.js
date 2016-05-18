"use strict";

import {createStore} from 'redux';

const reducer = (state = 0, action) => { // jshint ignore:line
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

const render = () => {
    console.log(store.getState());
};

store.subscribe(render);
render();

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'FRED'});
store.dispatch({type: 'INCREMENT'});
