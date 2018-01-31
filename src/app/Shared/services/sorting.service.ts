import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {

  constructor() { }

  searchQuery(query: string, array: object[], parameter: string, originalArray: object[]): any {
    return (query) ? array.filter(p => p[parameter].toLowerCase().includes(query.toLowerCase())) : originalArray;
  }

  sortByNumberDescending(data: object[], parameter: string): any {
    return data.sort((a, b) => b[parameter] - a[parameter]);
  }

  sortByNumberAscending(data: object[], parameter: string): any {
    return data.sort((a, b) => a[parameter] - b[parameter]);
  }

  sortByWordAscending(data: object[], parameter: string): any {
    return data.sort((a, b) => {
      const titleA = a[parameter].toLowerCase();
      const titleB = b[parameter].toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }

  sortByWordDescending(data: object[], parameter: string): any {
    return data.sort((a, b) => {
      const titleA = a[parameter].toLowerCase();
      const titleB = b[parameter].toLowerCase();
      if (titleA < titleB) return 1;
      if (titleA > titleB) return -1;
      return 0;
    });
  }

  sortByDateAscending(data: object[], parameter: string): any {
    return data.sort((a, b) => {
      const dateA: any = new Date(a[parameter]);
      const dateB: any = new Date(b[parameter]);
      return dateA - dateB;
    });
  }

  sortByDateDescending(data: object[], parameter: string): any {
    return data.sort((a, b) => {
      const dateA: any = new Date(a[parameter]);
      const dateB: any = new Date(b[parameter]);
      return dateB - dateA;
    });
  }

}
