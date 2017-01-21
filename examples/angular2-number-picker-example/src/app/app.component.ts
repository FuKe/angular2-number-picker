import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	private title : string = 'Angular Number Picker Example';
	private regEx : string = '[1-6]*';
	private numPickValue: number;

	private onNumberChanged(value:number) {
		this.numPickValue = value;
	}
}
