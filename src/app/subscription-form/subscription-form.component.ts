import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.scss'
})
export class SubscriptionFormComponent {

  isEmailError: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subService: SubscribersService){}

onSubmit(formVal: any) {
const subData: Sub = {
  name: formVal.name,
  email: formVal.email
}
// this.subService.addSubs(subData);

this.subService.checkSubs(subData.email).subscribe(val => {
  if (val.empty){
    this.subService.addSubs(subData);
    this.isSubscribed = true;
  }
  else {
    this.isEmailError = true;
  }
});
}


}
