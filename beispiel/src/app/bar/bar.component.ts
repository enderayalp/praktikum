import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'bar-component',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  wieOft: number = 1;
  text: string = 'ich komme aus der componente';
  formData = {
    username: '',
    password: ''
  }
  @Input() myurl: string;

  constructor() {
    this.myurl = ''
  }

  ngOnInit(): void {

  }

  click() {
    this.text = 'ich komme aus der componente und wurde veraendert ' + this.wieOft++;
  }

  click2(meinText: string) {
    this.text = 'ich komme aus der componente und wurde veraendert ' + this.wieOft++ + ' ' + meinText;
  }

}
