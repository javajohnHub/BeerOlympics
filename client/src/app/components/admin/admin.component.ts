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

    <form>
      <div class="form-group well">
        <input class="form-control" type="text" placeholder="Enter a team name..." [(ngModel)]="teamName" name="teamName">
        <input class="form-control" type="text" placeholder="Enter player 1 name..." [(ngModel)]="p1" name="p1">
        <input class="form-control" type="text" placeholder="Enter player 2 name..." [(ngModel)]="p2" name="p2">
      </div>
      <button class="btn btn-success" (click)="createTeam()">Create Team</button>
    </form>
  `
})
export class AdminComponent implements OnInit {
  teams: string;
  loading: boolean;
  teamObject: any;
  teamName;
  p1;
  p2;
  score = 0;
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
    this.teamObject = {
      "name": this.teamName,
      "p1": this.p1,
      "p2": this.p2,
      "score": this.score
    }
    this.board.createTeam(this.teamObject)
      .subscribe(data => {console.log(data);
      this.teamName = '';
      this.p1 = '';
      this.p2 = '';
      } )
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
