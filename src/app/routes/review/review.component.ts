import { AppState } from '../../app-state';
import { Subscription } from '../../shared/subscription/subscription';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {
  subscription: Store<Subscription>;
  constructor(private router: Router,
    private store: Store<AppState>) {
    this.subscription = this.store.select(
      (x: AppState) => x.shared.subscription);
  }

  ngOnInit(): void {
  }

  prev(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/subscription']);
  }

  next(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/thankyou']);
  }

}
