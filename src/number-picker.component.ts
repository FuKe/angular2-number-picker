import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'angular2-number-picker',
  template: `
    <div class="input-group">  
      <div class="input-group-btn">
        <button class="btn btn-primary" (click)="decreaseValue()">-</button>
      </div>
      <input [formControl]="numberPicker" class="form-control" type="number" min="{{min}}" max="{{max}}" pattern="{{pattern}}"/>  
      <div class="input-group-btn">
        <button class="btn btn-primary" (click)="increaseValue()">+</button>
      </div>
    </div>
  `,
  styles: [`
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    input[type=number] {
      text-align: center;
    }
  `]
})
export class NumberPickerComponent implements OnInit {
	@Input() min: number;
	@Input() max: number;
	@Input() step: number;
	@Input() precision: number;
	@Input() pattern: RegExp;
	@Input() inputDisabled: boolean;
	@Output() onChange: EventEmitter<number> = new EventEmitter();

	private numberPicker: FormControl;	

	constructor() {}

	ngOnInit() {		
		if(this.pattern == null) {
			let patternStr : string = '[' + this.min + '-' + this.max + ']*';
			this.pattern = new RegExp(patternStr);			
		}		
		if(this.inputDisabled == null) {
			this.inputDisabled = false;
		}		
		this.numberPicker = new FormControl({value: this.min, disabled: this.inputDisabled}, Validators.pattern(this.pattern));
		this.numberPicker.registerOnChange(() => {
			this.onChange.emit(this.numberPicker.value);
		});
  	}

  	private increaseValue(): void{
  		var currentValue = this.numberPicker.value;
  		if(currentValue < this.max) {
  			currentValue = currentValue+this.step;
  			if(this.precision != null) {
  				currentValue = this.round(currentValue, this.precision);
  			}
  			this.numberPicker.setValue(currentValue);
  		}
  	}

  	private decreaseValue(): void {
  		var currentValue = this.numberPicker.value;
  		if(currentValue > this.min) {
  			currentValue = currentValue-this.step;
  			if(this.precision != null) {
  				currentValue = this.round(currentValue, this.precision);
  			}
  			this.numberPicker.setValue(currentValue);
  		}
  	}

  	private round(value:number, precision:number): number {
  		let multiplier : number = Math.pow(10, precision || 0);
    	return Math.round(value * multiplier) / multiplier;
  	}

  	public getValue(): number {
  		return this.numberPicker.value;
  	}
}