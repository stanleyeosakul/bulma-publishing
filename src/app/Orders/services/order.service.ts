import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable()
export class OrderService {

  shipment: Order[] = [
    {
      _id: 1,
      orderNumber: '787352',
      orderNum: 787352,
      customer: 'John Miller',
      email: 'johnmiller@gmail.com',
      address: '55 Long Bridge Road',
      city: 'Los Angeles',
      state: 'CA',
      zipcode: '78170',
      country: 'United States',
      date: '2017, Nov 18 17:38',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
        {
          title: 'Developing a Gulp.js Edge',
          price: 22.99,
          imageURL: '../../assets/images/books/gulp.jpg'
        }
      ],
      totalBooks: 2,
      status: 'In Progress',
      total: 42.98
    },
    {
      _id: 2,
      orderNumber: '289050',
      orderNum: 289050,
      customer: 'Samantha Rogers',
      email: 'samrogers@gmail.com',
      address: '55 River Way',
      address2: 'Apt 1001',
      city: 'London',
      zipcode: 'WC2N 5DU',
      country: 'United Kingdom',
      date: '2017, Nov 16 11:45',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        }
      ],
      totalBooks: 1,
      status: 'Successful',
      total: 22.99
    },
    {
      _id: 3,
      orderNumber: '918478',
      orderNum: 918478,
      customer: 'Paul Jacques',
      email: 'pauljacques@gmail.com',
      address: '55 Mounty Avenue',
      city: 'Montreal',
      province: 'Quebec',
      zipcode: 'H1A 5R7',
      country: 'Canada',
      date: '2017, Nov 12 21:57',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        }
      ],
      totalBooks: 1,
      status: 'Failed',
      total: 22.99
    },
    {
      _id: 4,
      orderNumber: '289776',
      orderNum: 289776,
      customer: 'Ladarius Koepp',
      email: 'Cielo77@hotmail.com',
      address: '493 Bailey Mission',
      address2: 'Suite 191',
      city: 'O\'Keefestad',
      state: 'ND',
      zipcode: '60189',
      country: 'United States',
      date: '2017, Jan 25 15:05',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 10,
      status: 'Successful',
      total: 621.59
    },
    {
      _id: 5,
      orderNumber: '945800',
      orderNum: 945800,
      customer: 'Meagan Kub',
      email: 'Eliane_Windler@gmail.com',
      address: '98178 Erik Pike',
      address2: 'Apt. 511',
      city: 'West Rhoda',
      state: 'AK',
      zipcode: '20351-5499',
      country: 'United States',
      date: '2017, Sep 15 11:22',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 5,
      status: 'Failed',
      total: 181.38
    },
    {
      _id: 6,
      orderNumber: '353503',
      orderNum: 353503,
      customer: 'Bennie Muller',
      email: 'Leland.Conn76@yahoo.com',
      address: '7517 Malika Passage',
      address2: 'Suite 929',
      city: 'Lake Eleazarfort',
      state: 'TX',
      zipcode: '35510',
      country: 'United States',
      date: '2017, Mar 23 8:55',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 5,
      status: 'Successful',
      total: 275.77
    },
    {
      _id: 7,
      orderNumber: '198729',
      orderNum: 198729,
      customer: 'Horace Frami',
      email: 'Carmine.Eichmann38@yahoo.com',
      address: '540 Courtney Drives',
      address2: 'Suite 846',
      city: 'Ornhaven',
      state: 'MN',
      zipcode: '96828-2657',
      country: 'United States',
      date: '2017, Dec 22 23:20',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 1,
      status: 'In Progress',
      total: 794.50
    },
    {
      _id: 8,
      orderNumber: '456775',
      orderNum: 456775,
      customer: 'Judd Braun',
      email: 'Alexander.Kautzer35@yahoo.com',
      address: '972 Kuhn Motorway',
      address2: 'Suite 354',
      city: 'Caleighbury',
      state: 'MI',
      zipcode: '10073',
      country: 'United States',
      date: '2017, May 18 21:37',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 5,
      status: 'Successful',
      total: 548.42
    },
    {
      _id: 9,
      orderNumber: '385832',
      orderNum: 385832,
      customer: 'Dexter Cartwright',
      email: 'Sandra.Marquardt@gmail.com',
      address: '0520 Willa Tunnel',
      address2: 'Apt. 736',
      city: 'Port Tess',
      state: 'AK',
      zipcode: '36608',
      country: 'United States',
      date: '2017, Mar 29 19:57',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 2,
      status: 'Successful',
      total: 526.00
    },
    {
      _id: 10,
      orderNumber: '397529',
      orderNum: 397529,
      customer: 'Mrs. Roger Kemmer',
      email: 'Americo.Daniel96@gmail.com',
      address: '75353 Boyle Neck',
      address2: 'Apt. 279',
      city: 'North Vito',
      state: 'NY',
      zipcode: '97439-4789',
      country: 'United States',
      date: '2017, Mar 5 21:28',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 3,
      status: 'Successful',
      total: 110.01
    },
    {
      _id: 11,
      orderNumber: '414468',
      orderNum: 414468,
      customer: 'Leonel Wiegand',
      email: 'Margarett_Dooley@gmail.com',
      address: '9864 Ashley Coves',
      address2: 'Apt. 427',
      city: 'Lonland',
      state: 'LA',
      zipcode: '12255-1183',
      country: 'United States',
      date: '2017, Feb 3 18:14',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 10,
      status: 'Successful',
      total: 891.15
    },
    {
      _id: 12,
      orderNumber: '274235',
      orderNum: 274235,
      customer: 'Mason Roob IV',
      email: 'Nico.Runolfsdottir@hotmail.com',
      address: '157 Rempel Alley',
      address2: 'Apt. 022',
      city: 'Wisozkmouth',
      state: 'AL',
      zipcode: '78727',
      country: 'United States',
      date: '2017, Nov 10 4:00',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 9,
      status: 'Successful',
      total: 352.71
    },
    {
      _id: 13,
      orderNumber: '109849',
      orderNum: 109849,
      customer: 'Jessyca Herman',
      email: 'Elton.Runolfsson92@gmail.com',
      address: '26963 Hessel Groves',
      address2: 'Suite 862',
      city: 'Lexiborough',
      state: 'LA',
      zipcode: '87525-0440',
      country: 'United States',
      date: '2017, Nov 7 4:14',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 7,
      status: 'Successful',
      total: 586.42
    },
    {
      _id: 14,
      orderNumber: '522929',
      orderNum: 522929,
      customer: 'Charles Haley',
      email: 'Preston71@hotmail.com',
      address: '4195 Kaley Crossing',
      address2: 'Suite 491',
      city: 'Baileymouth',
      state: 'GA',
      zipcode: '20437-4988',
      country: 'United States',
      date: '2017, Jan 12 19:35',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 3,
      status: 'Successful',
      total: 485.51
    },
    {
      _id: 15,
      orderNumber: '164247',
      orderNum: 164247,
      customer: 'Marcelina Botsford',
      email: 'Jon_McKenzie29@hotmail.com',
      address: '25854 Hoeger Light',
      address2: 'Apt. 758',
      city: 'South Barry',
      state: 'GA',
      zipcode: '01840-7271',
      country: 'United States',
      date: '2017, Mar 8 11:26',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 9,
      status: 'Successful',
      total: 248.05
    },
    {
      _id: 16,
      orderNumber: '396032',
      orderNum: 396032,
      customer: 'Virgil Purdy',
      email: 'Kattie_Beer99@hotmail.com',
      address: '553 Friesen Station',
      address2: 'Apt. 539',
      city: 'Huelsmouth',
      state: 'MA',
      zipcode: '81821-5310',
      country: 'United States',
      date: '2017, Aug 25 22:38',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 8,
      status: 'Successful',
      total: 18.27
    },
    {
      _id: 17,
      orderNumber: '780914',
      orderNum: 7890914,
      customer: 'Henry Roberts',
      email: 'Enola.Wilkinson@gmail.com',
      address: '3956 Delphia Fields',
      address2: 'Suite 072',
      city: 'Lake Eldonton',
      state: 'RI',
      zipcode: '58180',
      country: 'United States',
      date: '2017, Feb 10 12:28',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 2,
      status: 'Successful',
      total: 54.75
    },
    {
      _id: 18,
      orderNumber: '758053',
      orderNum: 758053,
      customer: 'Joany Schuster',
      email: 'Mohammad.Cruickshank82@gmail.com',
      address: '4013 Aglae Pass',
      address2: 'Suite 860',
      city: 'Port Dave',
      state: 'NY',
      zipcode: '86636-0279',
      country: 'United States',
      date: '2017, May 22 8:44',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 10,
      status: 'Successful',
      total: 591.31
    },
    {
      _id: 19,
      orderNumber: '356669',
      orderNum: 356669,
      customer: 'Loyal Gislason',
      email: 'Cordelia82@yahoo.com',
      address: '922 Selena Stream',
      address2: 'Apt. 794',
      city: 'North Maiyahaven',
      state: 'AZ',
      zipcode: '97999',
      country: 'United States',
      date: '2017, Sep 6 21:30',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 10,
      status: 'Successful',
      total: 577.97
    },
    {
      _id: 20,
      orderNumber: '672810',
      orderNum: 672810,
      customer: 'Gia Robel',
      email: 'Merritt_Oberbrunner@yahoo.com',
      address: '894 Heathcote Manors',
      address2: 'Suite 167',
      city: 'West Brielle',
      state: 'ME',
      zipcode: '09229-0725',
      country: 'United States',
      date: '2017, Feb 4 2:57',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 4,
      status: 'Successful',
      total: 983.57
    },
    {
      _id: 21,
      orderNumber: '108104',
      orderNum: 108104,
      customer: 'Dr. Saige Brekke',
      email: 'Andre23@gmail.com',
      address: '745 Becker Radial',
      address2: 'Apt. 285',
      city: 'New Samarahaven',
      state: 'KS',
      zipcode: '57525',
      country: 'United States',
      date: '2017, Mar 15 8:39',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 2,
      status: 'Successful',
      total: 370.16
    },
    {
      _id: 22,
      orderNumber: '657122',
      orderNum: 657122,
      customer: 'Davin Kiehn Jr.',
      email: 'Will.Orn@yahoo.com',
      address: '597 Jakayla Locks',
      address2: 'Suite 072',
      city: 'West Johnny',
      state: 'RI',
      zipcode: '15346',
      country: 'United States',
      date: '2017, Oct 22 3:46',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 7,
      status: 'Successful',
      total: 509.20
    },
    {
      _id: 23,
      orderNumber: '201311',
      orderNum: 201311,
      customer: 'Earnestine Bauch',
      email: 'Davon_Macejkovic@gmail.com',
      address: '40653 Eloisa Run',
      address2: 'Suite 483',
      city: 'Port Monserratton',
      state: 'PA',
      zipcode: '31544',
      country: 'United States',
      date: '2017, May 10 18:15',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 6,
      status: 'Successful',
      total: 778.31
    },
    {
      _id: 24,
      orderNumber: '932777',
      orderNum: 932777,
      customer: 'Otha Schinner',
      email: 'Kaela_McClure68@hotmail.com',
      address: '1719 Evert Terrace',
      address2: 'Apt. 267',
      city: 'West Dagmarchester',
      state: 'AL',
      zipcode: '96509',
      country: 'United States',
      date: '2017, May 1 13:49',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 7,
      status: 'Successful',
      total: 406.50
    },
    {
      _id: 25,
      orderNumber: '670606',
      orderNum: 670606,
      customer: 'Gunnar Graham',
      email: 'Oran.Beier@yahoo.com',
      address: '181 Fausto Lane',
      address2: 'Suite 031',
      city: 'West Providenci',
      state: 'MN',
      zipcode: '08086-3777',
      country: 'United States',
      date: '2017, Aug 26 16:32',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 9,
      status: 'Successful',
      total: 625.19
    },
    {
      _id: 26,
      orderNumber: '495024',
      orderNum: 495024,
      customer: 'Leta Kuphal',
      email: 'Selina.Gislason31@hotmail.com',
      address: '9318 Eleonore Road',
      address2: 'Apt. 448',
      city: 'West Jamar',
      state: 'LA',
      zipcode: '13267',
      country: 'United States',
      date: '2017, Jun 17 3:44',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 9,
      status: 'Successful',
      total: 97.29
    },
    {
      _id: 27,
      orderNumber: '126059',
      orderNum: 126059,
      customer: 'Wilmer Dare',
      email: 'Tyree29@gmail.com',
      address: '750 Nadia Passage',
      address2: 'Apt. 997',
      city: 'Marianeburgh',
      state: 'GA',
      zipcode: '87593',
      country: 'United States',
      date: '2017, Apr 20 13:17',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 8,
      status: 'Successful',
      total: 776.37
    },
    {
      _id: 28,
      orderNumber: '104834',
      orderNum: 104834,
      customer: 'Ms. Frankie Kris',
      email: 'Julian.Franecki@hotmail.com',
      address: '893 Damon Drive',
      address2: 'Suite 424',
      city: 'New Soledad',
      state: 'AR',
      zipcode: '95764-1481',
      country: 'United States',
      date: '2017, Feb 25 21:53',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 6,
      status: 'Successful',
      total: 798.30
    },
    {
      _id: 29,
      orderNumber: '141438',
      orderNum: 141438,
      customer: 'Hayley Leuschke',
      email: 'Brant.Rowe@hotmail.com',
      address: '677 Domingo Harbor',
      address2: 'Suite 147',
      city: 'Oberbrunnerburgh',
      state: 'CT',
      zipcode: '10395',
      country: 'United States',
      date: '2017, Jun 5 13:22',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 10,
      status: 'Successful',
      total: 726.87
    },
    {
      _id: 30,
      orderNumber: '766934',
      orderNum: 766934,
      customer: 'Ezra Mills',
      email: 'Maritza_Hessel@gmail.com',
      address: '8257 Kuhlman Route',
      address2: 'Apt. 510',
      city: 'South Landenland',
      state: 'WV',
      zipcode: '76267',
      country: 'United States',
      date: '2017, Apr 22 6:12',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 5,
      status: 'Successful',
      total: 297.58
    },
    {
      _id: 31,
      orderNumber: '496914',
      orderNum: 496914,
      customer: 'Cielo Kling',
      email: 'Leatha_DAmore@gmail.com',
      address: '35604 Gerald Prairie',
      address2: 'Suite 376',
      city: 'Handmouth',
      state: 'CT',
      zipcode: '76501-1060',
      country: 'United States',
      date: '2017, Aug 25 8:55',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 10,
      status: 'Successful',
      total: 223.22
    },
    {
      _id: 32,
      orderNumber: '654764',
      orderNum: 654764,
      customer: 'Karina Homenick I',
      email: 'Cecil.Yundt38@yahoo.com',
      address: '909 Windler Walk',
      address2: 'Suite 897',
      city: 'Dantestad',
      state: 'VT',
      zipcode: '47487-7760',
      country: 'United States',
      date: '2017, Jun 4 11:40',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 9,
      status: 'Failed',
      total: 501.28
    },
    {
      _id: 33,
      orderNumber: '810224',
      orderNum: 810224,
      customer: 'Aubrey Conroy',
      email: 'Esteban.Ratke93@gmail.com',
      address: '18958 Klocko Flats',
      address2: 'Suite 590',
      city: 'Lionelville',
      state: 'DE',
      zipcode: '13090-3109',
      country: 'United States',
      date: '2017, Aug 30 10:25',
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        },
      ],
      totalBooks: 3,
      status: 'Successful',
      total: 451.13
    }
  ]

  constructor() { }

  getOrders(): Order[] {
    return this.shipment;
  }

}
