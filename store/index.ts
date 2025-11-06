import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { sagas } from './sagas';
import { token } from './slices/token';
import { init } from './slices/init';
import { profile } from './slices/profile';
import { basket } from './slices/basket';
import { products } from './slices/products';
import { login } from './slices/login';
import { api } from './services/api';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    token,
    profile,
    init,
    basket,
    products,
    login
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware).concat(api.middleware),
});

sagaMiddleware.run(sagas);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
