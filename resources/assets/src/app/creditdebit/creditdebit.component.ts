import { Component, OnInit } from '@angular/core';

import { CreditDebit } from '../_models/index';
import { CreditDebitService } from '../_services/index';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-creditdebit',
  templateUrl: './creditdebit.component.html',
  styleUrls: ['./creditdebit.component.css']
})
export class CreditdebitComponent implements OnInit {

    currentUser: User;
    users: User[] = [];
    creditdebits: CreditDebit[] = [];
 
    constructor(private userService: UserService, private creditDebitService: CreditDebitService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllCreditUser();
    }
 
    // deleteUser(_id: string) {
    //     this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    // }
 
    private loadAllCreditUser() {
        this.creditDebitService.getAll().subscribe(creditdebits => { this.creditdebits = creditdebits; });
    }

}
