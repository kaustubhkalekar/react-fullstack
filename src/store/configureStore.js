import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/rootReducer';

export default function configureStore() {
    const composeEnhancer = compose;

    return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
}