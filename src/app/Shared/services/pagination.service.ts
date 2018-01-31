import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

  // Pagination object
  pagination: any = {};

  // Paged items
  pagedItems: any[];

  constructor() { }

  calculatePagination(items: any[], page: number): object {
    if (page < 1 || page > this.pagination.totalPages) {
      return;
    }

    // Get pagination object from service
    this.pagination = this.getPagination(items.length, page);

    // Get current page of items
    this.pagedItems = items.slice(this.pagination.startIndex, this.pagination.endIndex + 1);

    // Return object with pagination and pagedItems
    return {
      pagination: this.pagination,
      pagedItems: this.pagedItems
    };
  }

  getPagination(totalItems: number, currentPage: number = 1, pageSize: number = 10): object {
    // Calculate total pages and define startPage and endPage variables
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;

    // There are 10 page links shown at any time unless there are less than 10 total pages
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      // Current page is in the 6th position, except for when the page is below 6 or less than 4 from the last position
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // Calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // Create an array of pages to *ngFor in the list of pages
    const pages = Array.from(Array(endPage + 1 - startPage), (_, i) => startPage + i);

    // Return object with all pagination properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}
