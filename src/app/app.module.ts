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
  import { HttpModule } from '@angular/http';
  import { HttpClient } from '@angular/common/http';
  import { RouterModule, Routes } from '@angular/router';
  import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

  import { HttpClientModule } from '@angular/common/http'; 
  //AGM
  import { AgmCoreModule } from '@agm/core';
 

export const firebaseConfig = {
      /**apiKey: "AIzaSyCaE4ASRWuXBqueMnR5dLy0srNwYZzGzsk",
      authDomain: "bandpenterprise-1caa4.firebaseapp.com",
      databaseURL: "https://bandpenterprise-1caa4.firebaseio.com",
      projectId: "bandpenterprise-1caa4",
      storageBucket: "",
      messagingSenderId: "357278893634"**/
  apiKey: "AIzaSyCGpmRBZoxjFPrMuhtUB5e-tzBADAvPR-E",
  authDomain: "infinitybeeusa-473c1.firebaseapp.com",
  databaseURL: "https://infinitybeeusa-473c1.firebaseio.com",
  projectId: "infinitybeeusa-473c1",
  storageBucket: "infinitybeeusa-473c1.appspot.com",
  messagingSenderId: "999519410049"
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
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9eo9WcGQZDWdODZu9iq-GpjURuieHOa0'
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
