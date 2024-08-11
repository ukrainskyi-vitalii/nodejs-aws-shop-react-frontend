import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Perfect for stargazing, this high-quality telescope brings the wonders of the universe to your backyard.",
    id: "e35cf09e-6d78-4f79-8ce9-5731c8142062",
    price: 100,
    image: "https://random.imagecdn.app/350/190",
    title: "Galaxy Gazer Telescope",
  },
  {
    description: "A sustainable alternative to plastic, this toothbrush is made from biodegradable bamboo and features soft bristles for gentle cleaning.",
    id: "ae20ac9f-7448-49bf-b17a-50043e508f1a",
    price: 100,
    image: "https://random.imagecdn.app/350/190",
    title: "Eco-Friendly Bamboo Toothbrush",
  },
  {
    description: "Control your home's temperature from anywhere with this smart thermostat that learns your preferences for ultimate comfort and energy savings.",
    id: "643e7cc1-5b4a-493f-b77b-e21635cea13a",
    price: 100,
    image: "https://random.imagecdn.app/350/190",
    title: "SmartHome Wi-Fi Thermostat",
  },
  {
    description: "Capturing the breathtaking beauty of the Northern Lights, this wall art piece adds a touch of nature's magic to any room.",
    id: "3066600b-e4c9-4e9d-a80b-a05ca4477d06",
    price: 100,
    image: "https://random.imagecdn.app/350/190",
    title: "Aurora Borealis Wall Art",
  },
  {
    description: "Handcrafted from genuine leather, this vintage-style journal is perfect for writing, sketching, and preserving your thoughts.",
    id: "8a24de54-5d25-4c73-a5f3-373f35509d10",
    price: 100,
    image: "https://random.imagecdn.app/350/190",
    title: "Vintage Leather Journal",
  },
  {
    description: "Illuminate your garden with these eco-friendly, solar-powered lights that charge during the day and provide a warm glow at night.",
    id: "df59ba60-8152-4992-9973-245f12f547b6",
    price: 100,
    image: "https://random.imagecdn.app/350/190",
    title: "Solar-Powered Garden Lights ",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      image: "https://random.imagecdn.app/350/190",
      title: "ProductOne",
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      image: "https://random.imagecdn.app/350/190",
      title: "ProductName",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
