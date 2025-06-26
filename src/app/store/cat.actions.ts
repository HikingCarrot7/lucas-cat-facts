import { createAction, props } from '@ngrx/store';

export const loadFact = createAction('[Cat] Load Fact');

export const loadFactSuccess = createAction(
  '[Cat] Load Fact Success',
  props<{ fact: string; imageUrl: string }>()
);

export const loadFactFailure = createAction(
  '[Cat] Load Fact Failure',
  props<{ error: string }>()
);
