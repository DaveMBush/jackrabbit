import { waitReducer } from './wait.reducer';
import * as Wait from './wait.actions';

describe('WaitReducer', () => {
    let oldState: number;
    let newState: number;
    describe('When I add one to the current state of 0', () => {
        beforeEach(() => {
            oldState = 0;
            newState = waitReducer(oldState, { type: Wait.ADD, payload: 1 })
        });
        it('should be 1', () => {
            expect(newState).toEqual(1);
        })
    });
    describe('When I subtract one to the current state of 1', () => {
        beforeEach(() => {
            oldState = 1;
            newState = waitReducer(oldState, { type: Wait.ADD, payload: -1 })
        });
        it('should be 0', () => {
            expect(newState).toEqual(0);
        })
    });
    describe('when I pass an action that waitReducer does not understand', () => {
        beforeEach(() => {
            oldState = 0;
            // tslint:disable-next-line:no-any
            newState = waitReducer(oldState, <any>{ type: 'xxx' })
        });
        it('should have the same content as before', () => {
            expect(newState).toBe(0);
        });
        it('should be the same object', () => {
            expect(newState).toBe(oldState);
        });
    })
});
