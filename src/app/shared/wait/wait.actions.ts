import { Action } from '@ngrx/store';

// tslint:disable:typedef
export const START = 'Wait.Start';
/* istanbul ignore next - trivial */
export class Start implements Action {
    readonly type = START;
}

export const END = 'Wait.End';
/* istanbul ignore next - trivial */
export class End implements Action {
    readonly type = END;
}

export const ADD = 'Wait.Add';
/* istanbul ignore next - trivial */
export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: number) { }
}
