import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as Wait from './wait.actions';

@Injectable()
export class WaitEffects {
    @Effect()
    start$: Observable<Wait.Add> =
    this.actions$
        .ofType(Wait.START)
        .switchMap((action: Wait.Add) =>
            Observable.timer(1).take(1)
        )
        .map((): Wait.Add => new Wait.Add(1));

    @Effect()
    end$: Observable<Wait.Add> =
    this.actions$
        .ofType(Wait.END)
        .switchMap((action: Wait.End) =>
            Observable.timer(1).take(1)
        )
        .map((): Wait.Add => new Wait.Add(-1));

    constructor(private actions$: Actions) {
    }
}
