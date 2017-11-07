import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: ContactComponent
    }])
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
