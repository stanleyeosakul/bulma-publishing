import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { PaginationService } from './services/pagination.service';
import { SortingService } from './services/sorting.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PaginationComponent,
    ToolbarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    PaginationComponent,
    ToolbarComponent
  ],
  providers: [
    PaginationService,
    SortingService
  ]
})
export class SharedModule { }
