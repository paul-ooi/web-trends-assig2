import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../errors.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(
    private errorsService :ErrorsService
  ) { }

  error : any;

  ngOnInit() {
    this.errorsService.code.subscribe(data => this.error.status = data);
    this.errorsService.error.subscribe(data => this.error.message = data);
  }

}
