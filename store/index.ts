import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

//sagaMiddleware.run(sagas);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
