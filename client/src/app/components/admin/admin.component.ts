import {Component, OnInit} from '@angular/core';
import {BoardService} from '../board/board.service';

@Component({
  selector: 'app-admin',
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
          <td><h3><b>{{team.name}}</b></h3><button class="btn btn-danger"(click)="deleteTeam(team)">X</button></td>
          <td style="padding-top:32px;">{{team.p1}}</td>
          <td style="padding-top:32px;">{{team.p2}}</td>
          <td><h3 style="color: #ff7c3b;">{{team.score}}</h3></td>
          <td> <button class="btn btn-success"(click)="addPoint(team)">+1</button><button class="btn btn-warning"(click)="removePoint(team)">-1</button></td>
        </tr>
      </table>
      <ng-container *ngIf="loading">Loading ScoreBoard...</ng-container>
    </div>
  `
})
export class AdminComponent implements OnInit {
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
    }, 1000)

  }
  createTeam(){

  }
  deleteTeam(team){
    var r = confirm("Delete team?");
    if (r == true) {
      this.board.deleteTeam(team)
        .subscribe(data => console.log(data) )
    }
    return;
  }

  addPoint(team){
    team['score']++;
  this.board.addPoint(team)
    .subscribe(data => console.log(data) )
  }

  removePoint(team){
    team['score']--;
    this.board.deletePoint(team)
      .subscribe(data => console.log(data) )
  }
}
