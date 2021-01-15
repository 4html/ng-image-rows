import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgImageRowsComponent } from './ng-image-rows.component';

@NgModule({
    declarations: [NgImageRowsComponent],
    exports: [NgImageRowsComponent],
    imports: [
        BrowserModule,
        CommonModule
    ],
})
export class NgImageRowsModule { }
