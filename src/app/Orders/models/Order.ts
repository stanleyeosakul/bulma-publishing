export interface Order {
  _id?: number;
  orderNumber: string;
  orderNum: number;
  customer: string;
    email?: string;
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    province?: string;
    zipcode?: string;
    country?: string;
  date: string;
  books?: any[];
  totalBooks: number;
  status: string;
  total: number;

}
