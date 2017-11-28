import { Component, OnInit,Inject } from '@angular/core';
import {FormControl,FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {NgForm} from '@angular/forms';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import {RequestOptions, Request, RequestMethod} from '@angular/http';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,  } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'My first AGM project';
  lat: number = 40.440625;
  lng: number = -79.995886;

  user: Observable<firebase.User>;
  //items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase,private http: Http) 
  {
  
   
  }
    /**firebase */

    sendEmail() {
      let url = `https://console.firebase.google.com/project/deepakwebsite-a0cd0/overview`
      let params: URLSearchParams = new URLSearchParams();
      let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      let options = new RequestOptions({headers: headers});
      params.set('to', 'bandpenterpriseusa@gmail.com@gmail.com');
      params.set('from', 'hello@gmail.com');
      params.set('subject', 'test-email');
      params.set('content', 'Hello World');
      return this.http.post(url, params, options)
      .map((res:Response) => res.json())
                      .toPromise()
                      .then( res => {
                        console.log(res)
                      })
                      .catch(err => {
                        console.log(err)
                      })
    }
  /**end of firebase */

  email = new FormControl('', [Validators.required, Validators.email]);
  
     getErrorMessage() {
       return this.email.hasError('required') ? 'You must enter a value' :
           this.email.hasError('email') ? 'Not a valid email' :
               '';
     }
     onSubmit(formData:NgForm) {
       const name = formData.value.name;
       const email=formData.value.email;
       const message=formData.value.message;
       const date = Date();
       let formRequest = { name,email,message, date};
    console.log(formRequest);
       this.af.list('/messages').push( formRequest);
       formData.reset();
       formData.resetForm();
       
   }
}
