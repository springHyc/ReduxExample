import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import invariant from 'redux-immutable-state-invariant';
import reducer from '../reducers';
import * as actionCreators from '../actions/index';

export let isMonitorAction;
export default function configureStore(preloadedState) {
//   const composeEnhancers = composeWithDevTools({ actionCreators });
//   const store = createStore(reducer, preloadedState, composeEnhancers(
//     applyMiddleware(invariant(), thunk)
//   ));
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators });
  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  const store = createStore(reducer, preloadedState, enhancer);


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
