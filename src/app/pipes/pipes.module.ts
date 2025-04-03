import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { StatusPipe } from './status.pipe';


@NgModule({
    declarations: [
    PhonePipe,
    StatusPipe
  ],
    exports: [
        PhonePipe,
        StatusPipe,
    ]
})
export class PipesModule {}