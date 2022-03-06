import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Loss} from "../models/loss";
import {NewJob} from "../models/new-job";
import {stringify} from "@angular/compiler/src/util";
import {NeedJob} from "../models/need-job";
import {Found} from "../models/found";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  loginUser(email: string,password: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('phone',email);
    //params = params.set('email',email);
    params = params.set('password',password);
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/login',params).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  createUser(user: User,files: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('email',user.email);
    // @ts-ignore
    body.append('password',user.password);
    // @ts-ignore
    body.append('phone',user.phone);
    // @ts-ignore
    body.append('name',user.name);
    // @ts-ignore
    body.append('main_address',user.main_address);
    // @ts-ignore
    body.set('date_of_birth',user.date_of_birth);
    // @ts-ignore
    body.append('id_number',user.id_number);
    // @ts-ignore
    body.append('job',user.job);
    // @ts-ignore
    body.append('gender',user.gender);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/sign-up',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  getLost(num:number): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append("personal",num);
    // @ts-ignore
    body.append("user_id",2);

    // @ts-ignore
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/get-lostes',body).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  getApp(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',2);
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/needer/get-my-need-job',body).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  getApplicantList(): Observable<any> {
    // @ts-ignore
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/helper/get-provide-jop-applyers',{
      "job_id": 1
    }).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }
  getApplyForJob(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>('https://project-graduation.000webhostapp.com/api/web/needer/get-provide-jobs').pipe(
      map(
        response => {
          return response
        }
      )
    )
  }
  getAllMyProvideJob(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append("user_id",2);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-all-my-provide-jop-posts', body).pipe(
      map(
        response => {
          console.log(response)
          return response
        }
      )
    )
  }
  getNeedJobs(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>('https://project-graduation.000webhostapp.com/api/web/helper/get-need-jobs').pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  getProvideJobs(id: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('job_id',id);
    // @ts-ignore
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/helper/get-provide-jop-applyers',body).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  createNewJob(job: NewJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('qualification',job.qualification);
    // @ts-ignore
    body.append('skills',job.skills);
    // @ts-ignore
    body.append('certificates',job.certificates);
    // @ts-ignore
    body.append('summary_about_you',job.summary_about_you);
    // @ts-ignore
    body.append('user_id',2);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/create-need-jop-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createFound(found: Found,f: File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('type',found.type);
    // @ts-ignore
    body.append('found_date',found.found_date);
    // @ts-ignore
    body.append('found_place',found.found_place);
    // @ts-ignore
    body.append('description',found.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',found.first_color);
    // @ts-ignore
    body.append('second_color',found.second_color);
    // @ts-ignore
    body.append('brand',found.brand);
    // @ts-ignore
    body.append('category',found.category);
    // @ts-ignore
    body.append('user_id',2);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/make-found',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createLost(loss: Loss,f: File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('type',loss.type);
    // @ts-ignore
    body.append('expected_lost_date',loss.expected_lost_date);
    // @ts-ignore
    body.append('expected_lost_place',loss.expected_lost_place);
    // @ts-ignore
    body.append('description',loss.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',loss.first_color);
    // @ts-ignore
    body.append('second_color',loss.second_color);
    // @ts-ignore
    body.append('brand',loss.brand);
    // @ts-ignore
    body.append('category',loss.category);
    // @ts-ignore
    body.append('user_id',2);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/make-lost',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  delete(job: NewJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('job_id',job.id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/delete-need-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  updateJob(job: NewJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('job_id',17);
    // @ts-ignore
    body.append('qualification',job.qualification);
    // @ts-ignore
    body.append('skills',job.skills);
    // @ts-ignore
    body.append('certificates',job.certificates);
    // @ts-ignore
    body.append('summary_about_you',job.Summary_about_you);

    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/update-need-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createProvideJob(job: NeedJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('required_qualification',job.required_qualification);
    // @ts-ignore
    body.append('required_skills',job.required_skills);
    // @ts-ignore
    body.append('required_certificates',job.required_certificates);
    // @ts-ignore
    //body.append('Summary_about_you',job.Summary_about_you);
    // @ts-ignore
    body.append('user_id',2);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/create-provide-jop-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  updateProvideJob(job: NeedJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    // @ts-ignore
    body.append('required_qualification',job.required_qualification);
    // @ts-ignore
    body.append('required_skills',job.required_skills);
    // @ts-ignore
    body.append('required_certificates',job.required_certificates);
    // @ts-ignore
    //body.append('Summary_about_you',job.Summary_about_you);
    // @ts-ignore
    body.append('job_id',job.id);

    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/update-provide-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  deleteProvideJob(job: NeedJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('job_id',job.id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/delete-provide-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteApplyJob(id: any,res: any){
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('apply_post_id',id);
    // @ts-ignore
    body.append('response',res);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/response-provide-jop-applyer',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  deleteLost(id: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('lost_id',id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/delete-lost',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  updateLost(loss: Loss,f: File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('type',loss.type);
    body.append('lost_id',loss.id);
    // @ts-ignore
    body.append('expected_lost_date',loss.expected_lost_date);
    // @ts-ignore
    body.append('expected_lost_place',loss.expected_lost_place);
    // @ts-ignore
    body.append('description',loss.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',loss.first_color);
    // @ts-ignore
    body.append('second_color',loss.second_color);
    // @ts-ignore
    body.append('brand',loss.brand);
    // @ts-ignore
    body.append('category',loss.category);
    // @ts-ignore

    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/update-lost',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getMyFound(): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //body.append('Summary_about_you',job.Summary_about_you);
    // @ts-ignore
    body.append('user_id',2);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-all-my-founds',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  updateMyFound(found: Found,f:File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('found_id',found.id);
    body.append('type',found.type);
    // @ts-ignore
    body.append('found_date',found.found_date);
    // @ts-ignore
    body.append('found_place',found.found_place);
    // @ts-ignore
    body.append('description',found.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',found.first_color);
    // @ts-ignore
    body.append('second_color',found.second_color);
    // @ts-ignore
    body.append('brand',found.brand);
    // @ts-ignore
    body.append('category',found.category);
    // @ts-ignore
    // @ts-ignore
    //body.append('attach',job.main_address);

    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/update-found',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteMyFound(id: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('found_id',id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/delete-found',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
}
