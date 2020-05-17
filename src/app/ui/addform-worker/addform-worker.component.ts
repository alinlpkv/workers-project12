import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  name: string;
  surname: string;
  type=0;
  myWorkerType = MyWorkerType;
  flag=0;

  @ViewChild('n') n: ElementRef;
  @ViewChild('s') s : ElementRef;
  @Input() title: string;
  @Output() addWorker=
  new EventEmitter<MyWorker>();


  constructor() { }

  ngOnInit(): void {
  }


  onAddWorker() {
    if (this.n.nativeElement.value != '' && this.s.nativeElement.value !=''){
    let worker: MyWorker = {
      name: this.name,
      surname: this.surname,
      type: this.type,
    }
    console.log(worker);
    this.addWorker.emit(worker);
  }
  else alert('Заполните имя и фамилию');
  }
}
