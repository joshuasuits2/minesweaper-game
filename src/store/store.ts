import {
  configureStore, ThunkAction, Action,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {gameReducer} from '../game/gameReducers';
import {watcherSaga} from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware({
      thunk: false,
    }), sagaMiddleware];
  },
});

sagaMiddleware.run(watcherSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
