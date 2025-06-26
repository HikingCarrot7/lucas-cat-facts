import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CatService } from '../core/services/cat.service';
import { loadFact, loadFactFailure, loadFactSuccess } from './cat.actions';

export const loadFactEffect = createEffect(
  (actions$ = inject(Actions), catService = inject(CatService)) => {
    return actions$.pipe(
      ofType(loadFact),
      mergeMap(() =>
        catService.getFact().pipe(
          mergeMap((fact) =>
            catService.getCatImage(fact).pipe(
              map((imageUrl) => loadFactSuccess({ fact, imageUrl })),
              catchError(() =>
                of(loadFactFailure({ error: 'Failed to load image' }))
              )
            )
          ),
          catchError(() =>
            of(loadFactFailure({ error: 'Failed to load fact' }))
          )
        )
      )
    );
  },
  { functional: true }
);
