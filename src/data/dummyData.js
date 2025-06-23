// data/looks.js
import look2Img from '../assets/look-2.jpeg';
import look5Img from '../assets/look-5.jpeg';
import look6Img from "../assets/look-6.jpeg";
import shopnow from "../assets/buy-now.png";
import lookVid1 from "../assets/look-vid-sound-1.mp4";
import lookVid2 from "../assets/look-vid-sound-2.mp4";


export const looks = [
  {
    id: 1,
    type: 'celebrity',
    media: [
      {
        type: 'video',
        src: lookVid1,
        annotations: [
          { x: '30%', y: '40%', productId: 101 },
          { x: '70%', y: '60%', productId: 102 }
        ],
        products: [101, 102]
      }
    ]
  },
  {
    id: 2,
    type: 'customer',
    media: [
      {
        type: 'image',
        src: look2Img,
        annotations: [{ x: '50%', y: '30%', productId: 103 }],
        products: [103]
      }
    ]
  },
  {
    id: 3,
    type: 'celebrity',
    media: [
      {
        type: 'image',
        src: look5Img,
        annotations: [
          { x: '40%', y: '50%', productId: 101 },
          { x: '72%', y: '20%', productId: 103 }
        ],
        products: [101, 103]
      }
    ]
  },
  {
    id: 4,
    type: 'customer',
    media: [
      {
        type: 'image',
        src: look6Img,
        annotations: [{ x: '60%', y: '45%', productId: 102 }],
        products: [102]
      }
    ]
  },
  {
    id: 5,
    type: 'celebrity',
    media: [
      {
        type: 'video',
        src: lookVid2,
        annotations: [
          { x: '25%', y: '35%', productId: 103 },
          { x: '80%', y: '50%', productId: 101 }
        ],
        products: [103, 101]
      }
    ]
  }
]


export const ALL_PRODUCTS = [
  {
    id: 101,
    name: 'Leather Jacket',
    price: '₹4999',
    image: shopnow
  },
  {
    id: 102,
    name: 'Sneakers',
    price: '₹2999',
    image: shopnow
  },
  {
    id: 103,
    name: 'Sunglasses',
    price: '₹999',
    image: shopnow
  }
]
