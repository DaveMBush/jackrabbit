import { Guard } from './guard';
import { SubscriptionReducer } from './subscription/subscription.reducer';
import { FormsModule } from '@angular/forms';
import { ErrorsReducer } from './errors/errors.reducer';
import { WaitEffects } from './wait/wait.effects';
import { WaitReducer } from './wait/wait.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitComponent } from './wait/wait.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { SharedState } from './shared-state';
import { EffectsModule } from '@ngrx/effects';
import { ErrorsComponent } from './errors/errors.component';

const reducers: ActionReducerMap<SharedState> = {
  wait: WaitReducer,
  errors: ErrorsReducer,
  subscription: SubscriptionReducer
}

@NgModule({
  providers: [Guard],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('shared',
      reducers),
    EffectsModule.forFeature([WaitEffects])
  ],
  declarations: [
    WaitComponent,
    ErrorsComponent
  ],
  exports: [
    WaitComponent,
    ErrorsComponent
  ]
})
export class SharedModule { }
