
import { NgModule } from '@angular/core';
//importing as javascript
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    
} from '@angular/material';

@NgModule({
    // importing as angular
  imports: [
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
    ],
  // exporting as a angular
  exports: [
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
    ],
})
export class Material { }