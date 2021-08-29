import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username:string;
  private clientId ='cad08ebafb9bb94cc353';
  private clientsecret ='21ae41656595ef9e5b84cf04c53238d8c4aaabf7';

  constructor(private http:HttpHeaders) {
    console.log("User service is now running!");
    this.username = "Olive";
   }

   getProfileInfo() {
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map(res => res.json()));
   }
   
   getProfileRepos() {
     return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
     .pipe(map(res => res.json()));
   }
}
