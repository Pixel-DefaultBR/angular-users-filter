import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from "@angular/material/table";

@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatTableModule,
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatTableModule,
    ],
})
export class AngularMaterialModule { }
