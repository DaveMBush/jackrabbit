import { errorsReducer } from './errors.reducer';
import { SharedModule } from '../shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsComponent } from './errors.component';
import { StoreModule } from '@ngrx/store';
import * as Errors from './errors.actions';

describe('ErrorsReducer', () => {
    let returnState: ReadonlyArray<string> = [];
    let oldState: ReadonlyArray<string>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                SharedModule
            ]
        });
    }));


    describe('When there are no errors', () => {
        describe('and I add an error', () => {
            beforeEach(() => {
                oldState = returnState;
                returnState = errorsReducer(returnState, { type: Errors.ADD, message: 'new error' });
            });
            it('should add one element to the state', () => {
                expect(returnState.length).toBe(1);
            });
            it('should not be the same array object', () => {
                expect(returnState).not.toEqual(oldState);
            });
        })
    });
    describe('When there are three errors', () => {
        describe('and I add an error', () => {
            beforeEach(() => {
                oldState = ['error1', 'error2', 'error3'];
                returnState = errorsReducer(oldState, { type: Errors.ADD, message: 'error4' });
            });
            it('should add one element to the state', () => {
                expect(returnState.length).toBe(4);
            });
            it('should not be the same array object', () => {
                expect(returnState).not.toEqual(oldState);
            });
            it('should still have the first three elements', () => {
                expect(returnState[0]).toBe(oldState[0]);
                expect(returnState[1]).toBe(oldState[1]);
                expect(returnState[2]).toBe(oldState[2]);
            });
        });
        describe('and I clear the errors', () => {
            beforeEach(() => {
                oldState = ['error1', 'error2', 'error3'];
                returnState = errorsReducer(oldState, { type: Errors.CLEAR });
            });
            it('should clear the state', () => {
                expect(returnState.length).toBe(0);
            });
            it('should not be the same array object', () => {
                expect(returnState).not.toEqual(oldState);
            });
        });
    });

    describe('when I pass an action that errorsReducer does not understand', () => {
        beforeEach(() => {
            oldState = ['error1', 'error2', 'error3'];
            // tslint:disable-next-line:no-any - allowing type 'xxx'
            returnState = errorsReducer(oldState, <any>{ type: 'xxx' });
        });
        it('should have the same content as before', () => {
            expect(returnState[0]).toBe(oldState[0]);
            expect(returnState[1]).toBe(oldState[1]);
            expect(returnState[2]).toBe(oldState[2]);
        });
        it('should be the same array object', () => {
            expect(returnState).toBe(oldState);
        });
    })
});
