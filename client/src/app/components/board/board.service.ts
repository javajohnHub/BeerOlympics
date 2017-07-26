import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BoardService{

  constructor(private _http:Http){

  }

  getTeams(){
    return this._http.get('https://beerolympic.herokuapp.com/teams')
      .map(response => response.json())
      .catch(error => Observable.throw(error.json() || 'Server Error'));
  }

}
