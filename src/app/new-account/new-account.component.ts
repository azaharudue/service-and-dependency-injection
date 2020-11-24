import { Component} from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService, private acccountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.acccountsService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChanged(accountStatus);
  }
}
