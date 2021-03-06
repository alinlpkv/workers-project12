import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { EditformWorkerComponent } from './ui/editform-worker/editform-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    EditformWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
