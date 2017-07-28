import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
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

  createTeam(team){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = team;
    return this._http.post('https://beerolympic.herokuapp.com/teams/', body, headers)
      .map(res => {res.json()})
  }

  deleteTeam(team){
    return this._http.delete('https://beerolympic.herokuapp.com/teams/' + team['name'])
      .map(res => {res.json()})
  }

  addPoint(team){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = {"score": team['score']};
    return this._http.put('https://beerolympic.herokuapp.com/teams/' + team['name'],body, headers)
      .map(res => {res.json()})
  }

  deletePoint(team){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = {"score": team['score']};
    return this._http.put('https://beerolympic.herokuapp.com/teams/' + team['name'],body, headers)
      .map(res => {res.json()})
  }
}
