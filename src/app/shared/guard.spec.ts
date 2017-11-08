import { AppState } from '../app-state';
import { Observable } from 'rxjs/Rx';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { inject, TestBed } from '@angular/core/testing';
import { Guard } from './guard';
import { APP_BASE_HREF } from '@angular/common';
import * as SubscriptionAction from './subscription/subscription.actions';

describe('Guard', () => {
    let returnValue: boolean;
    let localGuard: Guard;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                EffectsModule.forRoot([]),
                BrowserModule,
                AppRoutingModule,
                SharedModule
            ],
            providers: [
                Guard,
                {
                    provide: APP_BASE_HREF,
                    useValue: '/'
                }
            ]
        });
    });

    it('should be created', inject([Guard], (guard: Guard) => {
        expect(guard).toBeTruthy();
    }));
    describe('when I call canLoad() without changing the value of email', () => {
        beforeEach(inject([Guard], (guard: Guard) => {
            localGuard = guard;
            // make timer return an 'event' right away which should force router to get called.
            spyOn(Observable, 'timer').and.returnValue(Observable.from(['x']));
            // router is private, that's why the []
            spyOn(guard['router'], 'navigate');
            returnValue = <boolean>guard.canLoad(null);
        }));
        it('should return true', () => {
            expect(returnValue).toBe(true);
        });
        it('should call router.navigate() with [\'/contact\']', () => {
            expect(localGuard['router'].navigate).toHaveBeenCalledWith(['/contact'])
        });
    });
    describe('when I call canLoad() and email has a value', () => {
        beforeEach(inject([Guard, Store], (guard: Guard, store: Store<AppState>) => {
            store.dispatch(new SubscriptionAction.Update({ email: 'something' }));
            localGuard = guard;
            // make timer return an 'event' right away which should force router to get called.
            spyOn(Observable, 'timer').and.returnValue(Observable.from(['x']));
            // router is private, that's why the []
            spyOn(guard['router'], 'navigate');
            returnValue = <boolean>guard.canLoad(null);
        }));
        it('should return true', () => {
            expect(returnValue).toBe(true);
        });
        it('should call router.navigate() with [\'/contact\']', () => {
            expect(localGuard['router'].navigate).not.toHaveBeenCalled()
        });
    });

});

