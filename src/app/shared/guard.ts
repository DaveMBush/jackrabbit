import { Injectable } from '@angular/core';
import { Subscription } from './subscription/subscription';
import { AppState } from '../app-state';
import { Observable } from 'rxjs/Rx';
import { CanLoad, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable() // need injectable to make the tests work
export class Guard implements CanLoad {

    constructor(private store: Store<AppState>, private router: Router) {
    }

    public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        this.store.select((x: AppState) => x.shared.subscription)
            // if email length is zero, they tried to get here directly
            .filter((subscription: Subscription) => subscription.email.length === 0)
            .subscribe(() =>
                Observable.timer(200)
                    .subscribe(() => this.router.navigate(['/contact'])));
        return true;
    }
}
