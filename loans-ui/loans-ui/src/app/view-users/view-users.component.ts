import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userID: string = '';

  userDetails: any;
  uName: string = '';
  email: string = '';
 

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userID = data['user_id'];
    })

    this.userService.viewUser(this.userID).subscribe(data => {
      this.userDetails = data.valueOf();
      this.uName = this.userDetails['result'].userName;
      this.email = this.userDetails['result'].emailID;
      
    })
  }


}
