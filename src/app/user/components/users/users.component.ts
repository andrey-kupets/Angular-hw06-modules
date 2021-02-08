import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {SubjectPostService} from '../../../post/posts/services/subject-post.service';
import {SubjectUserService} from '../../services/subject-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService, private subjectUserService: SubjectUserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.subjectUserService.getNewUserContext().subscribe(editedUser => {
      if (editedUser) {
        const updatedUsers = this.users.filter(({id}) => editedUser.id !== id);
        updatedUsers.push(editedUser);
        updatedUsers.sort((a, b) => a.id - b.id);
        this.users = updatedUsers;
      }
    });
  }

}
