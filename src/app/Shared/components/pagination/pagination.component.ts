import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [`
    .disabled {
      border-color: #dbdbdb;
      background-color: #dbdbdb;
      box-shadow: none;
      color: #7a7a7a;
      opacity: .5;
      pointer-events: none;
    }
  `]
})
export class PaginationComponent implements OnInit {

  constructor(private paginationService: PaginationService) { }

  // Array of all items
  @Input() allItems: any[];

  // Pagination object
  pagination: any = {};

  // Paged items
  pagedItems: any[];

  @Output() pagedItemsOut = new EventEmitter<any[]>();

  ngOnInit() {
    this.setPage(1); // Initialize to page 1
  }

  setPage(page: number) {
    const paginationResults: object = this.paginationService.calculatePagination(this.allItems, page);
    this.pagination = paginationResults['pagination'];
    this.pagedItems = paginationResults['pagedItems'];
    this.pagedItemsOut.emit(this.pagedItems);
  }

}
