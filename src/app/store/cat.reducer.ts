import { createReducer, on } from '@ngrx/store';
import { CatState } from '../core/models/cat.model';
import { loadFact, loadFactFailure, loadFactSuccess } from './cat.actions';

export const initialState: CatState = {
  fact: null,
  imageUrl: null,
  loading: false,
  error: null,
};

export const catReducer = createReducer(
  initialState,
  on(loadFact, (state) => ({ ...state, loading: true, error: null })),
  on(loadFactSuccess, (state, { fact, imageUrl }) => ({
    ...state,
    fact,
    imageUrl,
    loading: false,
    error: null,
  })),
  on(loadFactFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
