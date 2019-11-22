import {compose,createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import {createReactNavigationMiddleware, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const loggerMiddleware = createLogger({predicate:(getState, action)=>__DEV__});
const navigationMiddleware = createReactNavigationReduxMiddleware('root', state=>state.nav);

function configureStore(initialState){
    const enhacer = compose(
applyMiddleware(
    thunkMiddleware,
    navigationMiddleware,
    loggerMiddleware,
),
    );
    return createStore(reducer,initialState,enhacer);
}

export default configureStore({});