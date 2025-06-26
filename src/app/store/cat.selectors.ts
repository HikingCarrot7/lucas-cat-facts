import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatState } from '../core/models/cat.model';

export const selectCatState = createFeatureSelector<CatState>('cat');

export const selectFact = createSelector(selectCatState, (state) => state.fact);
export const selectImageUrl = createSelector(
  selectCatState,
  (state) => state.imageUrl
);
export const selectLoading = createSelector(
  selectCatState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectCatState,
  (state) => state.error
);
