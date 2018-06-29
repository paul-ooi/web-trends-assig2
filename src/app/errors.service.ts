import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  private errorCode = new BehaviorSubject<number>(0);
  code = this.errorCode.asObservable();
  private errorMsg = new BehaviorSubject<string>('0');
  error = this.errorMsg.asObservable();

  constructor() { }

  setErrCode(code : number) {
    this.errorCode.next(code);
    console.log(this.code);
  }
  
  setErrMsg(msg : string) {
    this.errorMsg.next(msg);
  }

}
