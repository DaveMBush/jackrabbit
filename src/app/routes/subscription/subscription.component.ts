import { Subscription } from '../../shared/subscription/subscription';
import { AppState } from '../../app-state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription as RxJsSubscription } from 'rxjs/Rx';
import * as SubscriptionActions from '../../shared/subscription/subscription.actions';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formSubscription: RxJsSubscription;
  editEntitySubscription: RxJsSubscription;
  editEntity: Store<Subscription>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = this.formBuilder.group({
      subscription: ['', Validators.required]
    });
    this.editEntity = this.store.select(
      (x: AppState) => x.shared.subscription);
  }

  /* istanbul ignore next - trivial */
  ngOnInit(): void {
    this.formSubscription =
      this.form.valueChanges.subscribe(
        (x: Subscription) =>
          this.store.dispatch(new SubscriptionActions.Update(x))
      );
    this.editEntitySubscription =
      this.editEntity.subscribe((x: Subscription) =>
        this.form.patchValue(x, { emitEvent: false }));
  }

  public ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    this.editEntitySubscription.unsubscribe();
  }

  /* istanbul ignore next - trivial */
  prev(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/contact']);
  }

  /* istanbul ignore next - trivial */
  next(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/review']);
  }
}
