import { connectReducer, getConnectedStore } from '@onaio/connected-reducer-registry';
import reducerRegistry, { combine, Registry } from '@onaio/redux-reducer-registry';
import { Dictionary } from '@onaio/utils';

/** declare globals interface */
declare global {
  interface Window {
    __PRELOADED_STATE__: Dictionary;
  }
}

/** Initial reducers in the reducer registry */
const defaultReducers: Registry = {
  router: connectReducer as any /** Dirty hack because connectRouter LocationChangeAction does not extend Redux.AnyAction */,
};

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__ || {};
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

/** The initial store for the reveal web app */
const Store = getConnectedStore(defaultReducers, preloadedState);

/** Set listener to add reducers to store when registered */
reducerRegistry.setChangeListener(reducers => {
  Store.replaceReducer(combine(reducers));
});

export const store = Store;
