import {Component, OnInit} from '@angular/core';
import {BoardService} from './board.service';

@Component({
  selector: 'app-board',
  template: `
    <div>
      <h1>ScoreBoard</h1>
      <ng-container *ngIf="loading">Loading ScoreBoard...</ng-container>
      <table class="table table-hover table-responsive table-striped">
        <tr>
          <th>Team</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Score</th>
        </tr>
        <tr *ngFor="let team of teams">
          <td>{{team.name}}</td>
          <td>{{team.p1}}</td>
          <td>{{team.p2}}</td>
          <td>{{team.score}}</td>
        </tr>
      </table>
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
