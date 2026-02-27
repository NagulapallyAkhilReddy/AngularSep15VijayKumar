import { Component } from '@angular/core';
import { Accountcreate } from '../accountcreate/accountcreate';
import { Accountupdate } from '../accountupdate/accountupdate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accountlist',
  imports: [Accountcreate,Accountupdate,CommonModule],
  templateUrl: './accountlist.html',
  styleUrl: './accountlist.css',
})
export class Accountlist {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    console.log('Emitted the Account Create Event to List Component');
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    console.log('Emitted the Status ChangeEvent to List Component');
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

  ngOnInit(): void {
      
  }
}
