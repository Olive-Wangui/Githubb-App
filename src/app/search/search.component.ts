import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profile:any[];
  repos:any[];
  username:string;

  constructor(private searchService: UserService) {

   }

  ngOnInit(): void {
  }

}
