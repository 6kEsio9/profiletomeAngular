import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/shared/interfaces';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  post: IPost | null = null;

  form = this.fb.group({
    imageUrl: ['', Validators.required],
    caption: ['']
  })

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router, private fb: FormBuilder) { }

  editHandler() {
    if (this.form.invalid) { return; }
    console.log(this.form.value);
    if (this.post) {
      this.apiService.editPost(this.post?._id, this.form.value).subscribe(res => console.log(res));
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.apiService.loadOnePost(params['id']).subscribe({
        next: (value) => {
          this.post = value;
          this.form.get('imageUrl')?.setValue(this.post.imageUrl);
          this.form.get('caption')?.setValue(this.post.caption);
        },
        error: (err) => {
          console.error(err);
        }
      })
    })
  }

}
