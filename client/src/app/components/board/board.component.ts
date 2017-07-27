import {Component, OnInit} from '@angular/core';
import {BoardService} from './board.service';

@Component({
  selector: 'app-board',
  template: `
    <div>

      <table class="table table-hover table-responsive table-striped">
        <tr>
          <th>Team</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Score</th>
        </tr>
        <tr *ngFor="let team of teams">
          <td><h3><b>{{team.name}}</b></h3></td>
          <td style="padding-top:40px;">{{team.p1}}</td>
          <td style="padding-top:40px;">{{team.p2}}</td>
          <td><h3 style="color: #ff7c3b;">{{team.score}}</h3></td>
        </tr>
      </table>
      <ng-container *ngIf="loading">Loading ScoreBoard...</ng-container>
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
