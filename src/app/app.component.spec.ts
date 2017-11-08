import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ], imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        BrowserModule,
        AppRoutingModule,
        SharedModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    // tslint:disable-next-line:typedef
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
