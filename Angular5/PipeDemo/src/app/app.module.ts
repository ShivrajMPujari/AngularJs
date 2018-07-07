import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Pipe ,PipeTransform } from '@angular/core';
import { PipeForDate } from './datePipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PipeForDate
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
