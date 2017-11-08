import { Subscription } from './subscription';
import { subscriptionReducer } from './subscription.reducer';
import * as SubscriptionActions from './subscription.actions';

describe('SubscriptionReducer', () => {
    let newState: Subscription;
    let oldState: Subscription;
    describe('When I change the value of name', () => {
        beforeEach(() => {
            oldState = {
                name: 'aaa',
                email: 'bbb',
                password: 'ccc',
                subscription: 'ddd'
            };
            newState = subscriptionReducer(oldState, { type: SubscriptionActions.UPDATE, subscription: { name: 'xxx' } })
        });
        it('name should change', () => {
            expect(newState.name).toEqual('xxx');
        });
        it('email should stay the same', () => {
            expect(newState.email).toEqual(oldState.email);
        });
        it('password should stay the same', () => {
            expect(newState.password).toEqual(oldState.password);
        });
        it('subscription should stay the same', () => {
            expect(newState.subscription).toEqual(oldState.subscription);
        });
        it('the object pointer should change', () => {
            expect(newState).not.toEqual(oldState);
        })
    });
    describe('When I change the value of subscription', () => {
        beforeEach(() => {
            oldState = {
                name: 'aaa',
                email: 'bbb',
                password: 'ccc',
                subscription: 'ddd'
            };
            newState = subscriptionReducer(oldState, { type: SubscriptionActions.UPDATE, subscription: { subscription: 'xxx' } })
        });
        it('name should stay the same', () => {
            expect(newState.name).toEqual(oldState.name);
        });
        it('email should stay the same', () => {
            expect(newState.email).toEqual(oldState.email);
        });
        it('password should stay the same', () => {
            expect(newState.password).toEqual(oldState.password);
        });
        it('subscription should change', () => {
            expect(newState.subscription).toEqual('xxx');
        });
        it('the object pointer should change', () => {
            expect(newState).not.toEqual(oldState);
        })
    });
    describe('when I pass an action that subscriptionReducer does not understand', () => {
        beforeEach(() => {
            oldState = {
                name: 'aaa',
                email: 'bbb',
                password: 'ccc',
                subscription: 'ddd'
            };
            // tslint:disable-next-line:no-any
            newState = subscriptionReducer(oldState, <any>{ type: 'xxx' })
        });
        it('should have the same content as before', () => {
            expect(newState.name).toBe('aaa');
            expect(newState.email).toBe('bbb');
            expect(newState.password).toBe('ccc');
            expect(newState.subscription).toBe('ddd');
        });
        it('should be the same object', () => {
            expect(newState).toBe(oldState);
        });
    })

});
