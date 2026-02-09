import { Directive, HostBinding, Input } from '@angular/core';

enum CardTypes{
  VISA='visa',
  MASTERCARD='mastercard',
  AMEX='american-express',
  UNKNOWN='unknown'

}

@Directive({
  selector: '[appCclogo]'
})
export class Cclogo {

  constructor() {

   }

   @HostBinding('attr.src') imageSrc:string='';

   @Input() cardNumber:string='';

   getCardType():CardTypes{
    if(this.cardNumber){
      if(this.cardNumber.startsWith('45')){
        return CardTypes.VISA;
      }
      else if(this.cardNumber.startsWith('55')){
        return CardTypes.MASTERCARD;
      }
      else if(this.cardNumber.startsWith('37')){
        return CardTypes.AMEX;
      }
    }
    return CardTypes.UNKNOWN;
  }

    ngOnChanges(){
      this.imageSrc = `assets/${this.getCardType()}.png`;
    }
  }