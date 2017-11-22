import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {MatToolbarModule,MatIconModule,MatButtonModule
  ,MatSidenavModule,MatFormFieldModule,MatInputModule,MatMenuModule} from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import {FormControl,FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';

export const firebaseConfig = {
      apiKey: "AIzaSyCaE4ASRWuXBqueMnR5dLy0srNwYZzGzsk",
      authDomain: "bandpenterprise-1caa4.firebaseapp.com",
      databaseURL: "https://bandpenterprise-1caa4.firebaseio.com",
      projectId: "bandpenterprise-1caa4",
      storageBucket: "",
      messagingSenderId: "357278893634"
};


//NgModule for material 
@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatMenuModule,
   
  ]
})
export class MaterialModule { }
//material done

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
