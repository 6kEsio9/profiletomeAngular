import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.apiService.deletePost(params['id']).subscribe(res => console.log(res));
      this.router.navigate(['/']);
    })
  }

}
