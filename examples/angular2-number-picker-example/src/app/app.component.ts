import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	private title : string = 'Angular Number Picker Example';
	private numPickValue: number = 1;

	private onNumberChanged(value:number) {
		this.numPickValue = value;
	}
}
