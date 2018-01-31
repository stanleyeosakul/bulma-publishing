import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styles: [`
    .ignore {
      cursor: default;
      pointer-events: none;
    }
  `]
})
export class OrderDetailsComponent implements OnInit {

  orders: Order[];
  order: Order;
  id: string;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.orders = this.orderService.getOrders();
    this.order = this.orders[this.id];
  }

}
