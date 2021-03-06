import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MyWorkerType, MyWorker, MyWorkersDatabase } from 'src/app/shared/worker.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {
  name: string;
  surname: string;
  type: number;
  id: number;
  phone='-';
  myWorkerType = MyWorkerType;
  workers: MyWorker[]= MyWorkersDatabase;
  
  changeForm: FormGroup;

  public mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  // @ViewChild('n') n: ElementRef;
  // @ViewChild('s') s : ElementRef;
  @ViewChild('localID') localId: ElementRef;
  @Output() editWorker= new EventEmitter<MyWorker>();

  constructor() { }


  ngOnInit(): void {
    this.changeForm = new FormGroup({
      name: new FormControl({value:null, disabled: false}, [Validators.required]),
      surname: new FormControl({value:null, disabled: false}, [Validators.required]),
      type: new FormControl({value:null, disabled: false}, [Validators.required]),
      id: new FormControl({value:null, disabled: false}, [Validators.required]),
      phone: new FormControl({value:null, disabled: false}, [Validators.required])
    });
  }

  findWorker(){
    let man = this.workers.find(worker => worker.id == this.localId.nativeElement.value);
    this.inputWorker(man);
  }

  inputWorker(man: MyWorker){
    // this.name= man.name;
    // this.surname=man.surname;
    // this.type = man.type;
    // this.id= man.id;
    this.changeForm.setValue({name: man.name, surname:man.surname, type:man.type, id: man.id, phone: man.phone})
  }

  onEditWorker() {
      let worker = this.changeForm.value;
      this.editWorker.emit(worker);
      this.changeForm.reset();
  }

}
