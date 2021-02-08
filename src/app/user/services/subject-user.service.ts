import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SubjectUserService {

  private userContext = new BehaviorSubject<User>(null);

  constructor() { }

  getNewUserContext(): BehaviorSubject<User> {
    return this.userContext;
  }

  setNewUserContext(newUserContext: User): void {
    this.userContext.next(newUserContext);
  }

}

