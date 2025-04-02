import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import {MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
    declarations: [
        UserDetailsComponent,
        FilterComponent,
        UsersTableComponent,
    ],
    imports: [
        AngularMaterialModule,
        MatNativeDateModule,
    ],
    providers: [{
        provide: MAT_DATE_LOCALE, useValue: 'en-US',
    }],
    exports: [
        UserDetailsComponent,
        FilterComponent,
        UsersTableComponent
    ],
})
export class ComponentsModule {

}