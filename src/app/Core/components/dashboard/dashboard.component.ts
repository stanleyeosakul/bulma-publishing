import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  stats: any = {
    orders: Number(232).toLocaleString(),
    revenue: Number(70648).toLocaleString(),
    visitors: Number(1678).toLocaleString(),
    pageViews: Number(20756).toLocaleString()
  };

  popularBooks = [
    {
    title: 'TensorFlow for Machine Intelligence',
    imageURL: '../../assets/images/books/tensorflow.jpg',
    numSold: 148
    },
    {
    title: 'Developing a Gulp.js Edge',
    imageURL: '../../assets/images/books/gulp.jpg',
    numSold: 56
    },
    {
    title: 'Docker In Production',
    imageURL: '../../assets/images/books/docker.jpg',
    numSold: 47
    }
  ];

  loyalCustomers = [
    {
      name: 'John Miller',
      totalOrders: 7,
      country: 'United States'
    },
    {
      name: 'Samantha Rogers',
      totalOrders: 5,
      country: 'United Kingdom'
    },
    {
      name: 'Paul Jacques',
      totalOrders: 2,
      country: 'Canada'
    },
  ];

  latestOrders = [
    {
      orderNumber: '787352',
      date: '2017, Nov 18 17:38',
      customer: 'John Miller',
      total: 42.98,
      status: 'In Progress'
    },
    {
      orderNumber: '787352',
      date: '2017, Nov 16 11:45',
      customer: 'Samantha Rogers',
      total: 22.99,
      status: 'Successful'
    },
    {
      orderNumber: '918478',
      date: '2017, Nov 12 21:57',
      customer: 'Paul Jacques',
      total: 22.99,
      status: 'Failed'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  updateStats(selection) {
    const x = selection.value;
    if (x === 'all') this.stats = { orders: 232, revenue: 70648,   visitors: 1678, pageViews: 20756 } ;
    if (x === 'year') this.stats = { orders: 232 / 2, revenue: 70648 / 2,   visitors: 1678 / 2, pageViews: 20756 / 2 } ;
    if (x === 'month') this.stats = { orders: 232 / 12, revenue: 70648 / 12,   visitors: 1678 / 12, pageViews: 20756 / 12 } ;
    if (x === 'week') this.stats = { orders: 232 / 84, revenue: 70648 / 84, visitors: 1678 / 84, pageViews: 20756 / 84 };
    if (x === 'yesterday') this.stats = { orders: 232 / 100, revenue: 70648 / 100, visitors: 1678 / 100, pageViews: 20756 / 100 };
    if (x === 'today') this.stats = { orders: 232 / 200, revenue: 70648 / 200, visitors: 1678 / 200, pageViews: 20756 / 200 };

    this.stats.orders = Number(Math.floor(this.stats.orders)).toLocaleString();
    this.stats.revenue = Number(Math.floor(this.stats.revenue)).toLocaleString();
    this.stats.visitors = Number(Math.floor(this.stats.visitors)).toLocaleString();
    this.stats.pageViews = Number(Math.floor(this.stats.pageViews)).toLocaleString();
  }

}
