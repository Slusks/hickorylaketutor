import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule } from '../../../node_modules/ngx-bootstrap/dropdown'




@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule { }
