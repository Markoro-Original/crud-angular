import { NgModule } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTableModule
  ],
})
export class MaterialModule { }
