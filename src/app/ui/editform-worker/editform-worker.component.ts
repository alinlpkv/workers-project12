import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MyWorkerType, MyWorker, MyWorkersDatabase } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {
  name='';
  surname='';
  type:number;
  myWorkerType = MyWorkerType;
  workers: MyWorker[]= MyWorkersDatabase;
  id: number;

  @ViewChild('n') n: ElementRef;
  @ViewChild('s') s : ElementRef;
  @ViewChild('localID') localId: ElementRef;
  // @Output() findWorker = new EventEmitter<number>();
  @Output() editWorker=
  new EventEmitter<MyWorker>();

  constructor() { }


  ngOnInit(): void {
  }

  findWorker(){
    let man = this.workers.find(worker => worker.id == this.localId.nativeElement.value);
    this.inputWorker(man);
  }

  inputWorker(man: MyWorker){
    this.name= man.name;
    this.surname=man.surname;
    this.type = man.type;
    this.id= man.id;
  }

  onEditWorker() {
    if (this.n.nativeElement.value != '' && this.s.nativeElement.value !=''){
    let worker: MyWorker = {
      name: this.name,
      surname: this.surname,
      type: this.type,
      id:this.id
    }
    console.log(worker);
    this.editWorker.emit(worker);
  } else alert('Заполните имя и фамилию');
  }

}
