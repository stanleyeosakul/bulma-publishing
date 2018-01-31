export interface Customer {
  _id?: number;
  name: string;
  email: string;
  address: string;
  address2?: string;
  city: string;
  state?: string;
  province?: string;
  zipcode?: string;
  country: string;
  totalOrders: number;
  imageURL: string;
}
