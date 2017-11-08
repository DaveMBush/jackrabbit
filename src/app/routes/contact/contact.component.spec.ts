import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

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
          component: ContactComponent
        }]),
        SharedModule
      ],
      declarations: [ContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
