import { Guard } from '../../shared/guard';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionComponent } from './subscription.component';

describe('SubscriptionComponent', () => {
  let component: SubscriptionComponent;
  let fixture: ComponentFixture<SubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([{
          path: '',
          pathMatch: 'full',
          component: SubscriptionComponent
        }]),
        SharedModule
      ],
      declarations: [SubscriptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
