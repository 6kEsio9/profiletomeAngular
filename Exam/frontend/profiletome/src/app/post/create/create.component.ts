import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  createHandler(form: NgForm){
    if(form.invalid) { return; }
    console.log(form.value);
    this.apiService.createPost(form.value).subscribe(res => console.log(res));
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
