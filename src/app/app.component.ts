import { routerTransition } from './shared/router.transition';
import { RouterOutlet } from '@angular/router';
import { AppState } from './app-state';
import { Observable } from 'rxjs/Rx';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routerTransition]
})
export class AppComponent {
  wait: Observable<number>;
  errors: Observable<ReadonlyArray<string>>;

  constructor(store: Store<AppState>) {
    this.wait = store.select(/* istanbul ignore next */(x: AppState) => x.shared.wait);
    this.errors = store.select(/* istanbul ignore next */(x: AppState) => x.shared.errors);
  }

  /* istanbul ignore next - trivial */
  getState(outlet: RouterOutlet): string {
    return outlet.activatedRouteData.state;
  }
}
