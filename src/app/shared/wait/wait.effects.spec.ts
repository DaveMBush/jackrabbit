import { Observable, ReplaySubject } from 'rxjs/Rx';
import { WaitEffects } from './wait.effects';
import { inject, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import * as WaitActions from './wait.actions';
import { hot, cold } from 'jasmine-marbles';

describe('WaitEffects', () => {
    let actions: ReplaySubject<WaitActions.Add | WaitActions.Start | WaitActions.End>;
    let waitEffects: WaitEffects;
    let startAction: WaitActions.Start;
    let endAction: WaitActions.End;
    let addOneAction: WaitActions.Add;
    let subOneAction: WaitActions.Add;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WaitEffects,
                provideMockActions(() => actions)
            ]
        });
        waitEffects = TestBed.get(WaitEffects);
    });
    describe('when start is dispatched', () => {
        beforeEach(() => {
            // force the timer to return right away.
            spyOn(Observable, 'timer').and.returnValue({ take: (): Array<string> => ['x'] });
            startAction = new WaitActions.Start();
            addOneAction = new WaitActions.Add(1);
            actions = new ReplaySubject(1);
            actions.next(startAction);
        });
        it('should return addOneAction', () => {
            waitEffects.start$.subscribe((result: WaitActions.Add) => {
                expect(result).toEqual(addOneAction);
            });
        });
    });
    describe('when end is dispatched', () => {
        beforeEach(() => {
            // force the timer to return right away.
            spyOn(Observable, 'timer').and.returnValue({ take: (): Array<string> => ['x'] });
            endAction = new WaitActions.End();
            subOneAction = new WaitActions.Add(-1);
            actions = new ReplaySubject(1);
            actions.next(endAction);
        });
        it('should return subOneAction', () => {
            waitEffects.end$.subscribe((result: WaitActions.Add) => {
                expect(result).toEqual(subOneAction);
            });
        });
    });

});
