import { Subscription } from './subscription';
import { ActionReducer } from '@ngrx/store';
import * as SubscriptionActions from './subscription.actions';

export type Action =
    SubscriptionActions.Update;

export function subscriptionReducer(
    // tslint:disable-next-line:typedef
    state: Subscription = {
        name: '',
        email: '',
        password: '',
        subscription: ''
    },
    action: Action): Subscription {
    switch (action.type) {
        case SubscriptionActions.UPDATE:
            return Object.assign({}, state, action.subscription);
        default:
            return state;
    }
};

export const SubscriptionReducer: ActionReducer<Subscription> =
    subscriptionReducer;
