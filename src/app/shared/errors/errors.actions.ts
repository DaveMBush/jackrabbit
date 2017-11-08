import { Action } from '@ngrx/store';

// tslint:disable:typedef
export const ADD = 'Errors.Add';
/* istanbul ignore next - trivial */
export class Add implements Action {
    readonly type = ADD;
    constructor(public message: string) {
    }
}

export const CLEAR = 'Errors.Clear';
/* istanbul ignore next - trivial */
export class Clear implements Action {
    readonly type = CLEAR;
}
