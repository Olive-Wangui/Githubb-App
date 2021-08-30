import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private username:string;
  private clientid ='cad08ebafb9bb94cc353';
  private clientsecret ='21ae41656595ef9e5b84cf04c53238d8c4aaabf7';

  constructor(private http:HttpClient) {
    console.log("User service is now running!");
    this.username = "Olive";
   }

   getProfileInfo(): Observable<User[]> {
  	return this.http.get<User[]>("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe();
  }

  //GET REPOS FROM GithubSearch
  getProfileRepos(): Observable<User> {
  
    return this.http.get<User>('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .pipe();
  }

  //the code below is for username

  updateProfile(username:string){
  	this.username = username;
  }

}

  


function username(username: any, string: any) {
  throw new Error('Function not implemented.');
}

