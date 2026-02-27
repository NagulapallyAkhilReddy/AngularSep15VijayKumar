import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accountcreate',
  imports: [],
  templateUrl: './accountcreate.html',
  styleUrl: './accountcreate.css',
})
export class Accountcreate {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  
    onCreateAccount(accountName: string, accountStatus: string) {
      this.accountAdded.emit({
        name: accountName,
        status: accountStatus
      });
      console.log('New Account is Created , Account Name: ' + accountName);
    }
  
    ngOnInit(): void {
        
    }

}
