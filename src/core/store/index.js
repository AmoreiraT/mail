import { createStore } from 'redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

// store.replaceReducer(rootReducer);

export default store;
