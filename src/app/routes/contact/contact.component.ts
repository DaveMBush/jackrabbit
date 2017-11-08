import { Subscription } from '../../shared/subscription/subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../app-state';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription as RxJsSubscription } from 'rxjs/Rx';
import * as SubscriptionActions from '../../shared/subscription/subscription.actions';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit, OnDestroy {
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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.editEntity = this.store.select(
      (x: AppState) => x.shared.subscription);
  }

  /* istanbul ignore next - trivial*/
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

  /* istanbul ignore next - trivial */
  next(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/subscription']);
  }

  public ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    this.editEntitySubscription.unsubscribe();
  }
}
