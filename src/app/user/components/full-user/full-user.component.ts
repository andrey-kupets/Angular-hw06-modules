import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {SubjectUserService} from '../../services/subject-user.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  user: User;
  userId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private subjectUserService: SubjectUserService) {
    this.activatedRoute.params.subscribe(value => {
      this.userId = +value.id;
      console.log(value);
      this.userService.getUserById(this.userId).subscribe(singleUser => this.user = singleUser);
    });
    // this.activatedRoute.params.subscribe(value => {
    //   this.user = this.router.getCurrentNavigation().extras.state as User;
    //   // console.log(this.router.getCurrentNavigation());
    //   // console.log(history.state);
    // });
  }

  ngOnInit(): void {
    this.subjectUserService.getNewUserContext().subscribe( editedUser => editedUser ? this.user = editedUser : null)
  }

  goTo(): void {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute, state: this.user});
  }

}
