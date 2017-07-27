import {Component, OnInit} from '@angular/core';
import {BoardService} from './board.service';

@Component({
  selector: 'app-board',
  template: `
    <div>
      <h1>ScoreBoard</h1>
      <ng-container *ngIf="loading">Loading ScoreBoard...</ng-container>
      <ol *ngFor="let team of teams">
        <li>{{team.name}}</li>
        <li>{{team.p1}}</li>
        <li>{{team.p2}}</li>
        <li>{{team.score}}</li>
      </ol>
    </div>
  `
})
export class BoardComponent implements OnInit {
  teams: string;
  loading: boolean;
  constructor(private board: BoardService){

  }

  ngOnInit(){
    this.loading = true;
    this.getTeams();
  }

  getTeams(){
    setInterval(() => {
      this.board.getTeams()
        .subscribe(data => {
            this.teams = data;
            this.loading = false
          },
          error => {console.log(error)})
    }, 10000)

  }
}
