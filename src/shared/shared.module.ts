import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { PrimeTemplate } from 'primeng/api';

@NgModule({
  imports: [
    PrimeNgModule,
    CommonModule, 
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    MenubarModule,
  ],
  exports: [PrimeNgModule, ],
  declarations: [],
})
export class SharedModule {}