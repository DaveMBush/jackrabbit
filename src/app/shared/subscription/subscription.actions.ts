import { Subscription } from './subscription';
import { Action } from '@ngrx/store';

// tslint:disable:typedef
export const UPDATE = 'Subscription.Update';
export class Update implements Action {
    readonly type = UPDATE;
    constructor(public subscription: Subscription) {
    }
}
