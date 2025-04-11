import f1 from "@/en/shared/image/laptop.jpg";
import f2 from "@/en/shared/image/phone.jpg";
import f3 from "@/en/shared/image/cooker.jpg";
import f4 from "@/en/shared/image/bags.jpg";
import f5 from "@/en/shared/image/clothe.jpg";
import f6 from "@/en/shared/image/shoe.jpg";
import f7 from "@/en/shared/image/generator.jpg";
import f8 from "@/en/shared/image/oled.jpg";
import f9 from "@/en/shared/image/shoes.jpg";
import f10 from "@/en/shared/image/16inches-standingfan.jpg";
import f11 from "@/en/shared/image/blender.jpg";
import f12 from "@/en/shared/image/dr-teals.jpg";
import f13 from "@/en/shared/image/food basket.jpg";
import f14 from "@/en/shared/image/golden-morn.jpg";
import f15 from "@/en/shared/image/indomie.jpg";
import f16 from "@/en/shared/image/origin.jpg";
import f17 from "@/en/shared/image/pepsi.jpg";
import f18 from "@/en/shared/image/phone-cooler.jpg";
import f19 from "@/en/shared/image/rechargeable-standing-fan.jpg";
import f20 from "@/en/shared/image/Redmi A13.jpg";
import f21 from "@/en/shared/image/Samsung-galaxy-a05.jpg";
import f22 from "@/en/shared/image/sweatshirt.jpg";
import f23 from "@/en/shared/image/watch.jpg";


import p1 from "@/en/shared/image/user-thumbnail_1.jpeg";
import p2 from "@/en/shared/image/user-thumbnail_2.jpg";

export const brands = [
  { id: 1, name: "Kith Storefront", status: 1 },
  { id: 2, name: "Mr.beast.com", status: 0 },
  { id: 3, name: "Apple Store", status: 1 },
  { id: 4, name: "SNOW® Care", status: 0 },
  { id: 5, name: "LG Electronics", status: 1 },
  { id: 6, name: "Nike Official", status: 1 },
  { id: 7, name: "Ashluxe Luxury", status: 0 },
  { id: 8, name: "Nexus Electronic", status: 1 },
  { id: 9, name: "Samsung official", status: 1 },
  { id: 10, name: "Binatone official", status: 1 },
  { id: 10, name: "Tina's place", status: 1 },
];
export const categories = [
  // { id: 0, name: "Others" },
  { id: 1, name: "Supermarket" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Appliances" },
  { id: 5, name: "Gadgets" },
  { id: 6, name: "Health & Beauty" },
  { id: 7, name: "Sporting items" },
  { id: 8, name: "Home & Kitchen" },
  { id: 9, name: "others" },
  { id: 10, name: "Miscellenous" },
];
export const subcategory = [
  { id: "1", name: "Gaming gadgets", categoryId: "5" },
  { id: "2", name: "Computer", categoryId: "5" },
  { id: "3", name: "Phones", categoryId: "3" },
  { id: "4", name: "Men", categoryId: "2" },
  { id: "5", name: "Women", categoryId: "2" },
  { id: "6", name: "bags and purses", categoryId: "2" },
  { id: "7", name: "Small Appliances", categoryId: "4" },
  { id: "8", name: "Large Appliances", categoryId: "4" },
  { id: "9", name: "" },
  { id: "10", name: "" },
  { id: "11", name: "" },
  { id: "12", name: "Airtime", categoryId: "10" },
  { id: "13", name: "Data", categoryId: "10" },
];
export const seller = [
  {
    id: 1,
    name: "LG Electronics",
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint incidunt repellat. Nisi, totam earum sed et, labore laudantium incidunt aut repudiandae illum deserunt qui harum tenetur quaerat maxime inventore!",
    verified: true,
    oldPrice: "₦14,000",
    profileImage: f1,
  },
]
export const products = [
  {
    id: 1,
    categoryId: "5",
    sellerId: "",
    storeName: "LG Electronics",
    name: "Hp Espiron 15'inch aspire 2024 model student laptop",
    price: "₦11,500",
    oldPrice: "₦14,000",
    bg: f1,
  },
  {
    id: 2,
    categoryId: "5",
    sellerId: "",
    storeName: "Xiaomi Store",
    name: "Redmi Note 12",
    price: "₦117,500",
    oldPrice: "₦120,000",
    bg: f2,
    color: "black",
    colorCode: "black",
    brand: "Xiaomi",
    model: "Note 12",
    condition: "used",
    discount: "yes",
    warranty: "1 year",
  },
  {
    id: 3,
    categoryId: "3",
    sellerId: "",
    storeName: "Nexus Electronic",
    name: "Nexus Combo Cooker",
    price: "₦101,830",
    oldPrice: "",
    bg: f3,
  },
  {
    id: 4,
    categoryId: "2",
    sellerId: "",
    storeName: "Ashluxe Luxury",
    name: "Hand bags",
    price: "₦67,200",
    oldPrice: "₦70,000",
    bg: f4,
    color: "black",
    colorCode: "[#000000]",
  },
  {
    id: 5,
    categoryId: "2",
    sellerId: "",
    storeName: "Mr.beast.com",
    name: "Baby girl's up and down",
    price: "₦7,500",
    oldPrice: "₦12,000",
    bg: f5,
    color: "Yellow",
    colorCode: "[#f6ff00]",
  },
  {
    id: 6,
    categoryId: "2",
    sellerId: "",
    storeName: "Nike Official",
    name: "Nike Fly 2023",
    price: "₦7,500",
    oldPrice: "₦8,000",
    bg: f6,
    color: "Dark blue",
    colorCode: "blue-900",
  },
  {
    id: 7,
    categoryId: "3",
    sellerId: "",
    storeName: "Nexus Electronic",
    name: "Generator 3200HP",
    price: "₦7,500",
    oldPrice: "",
    bg: f7,
  },
  {
    id: 8,
    categoryId: "3",
    sellerId: "",
    storeName: "Samsung official",
    name: "Samsung 42'inch O'led TV",
    price: "₦117,500",
    oldPrice: "",
    bg: f8,
  },
  {
    id: 9,
    categoryId: "2",
    sellerId: "",
    storeName: "kith storefront",
    name: "Brown shoes",
    price: "₦12,500",
    oldPrice: "",
    bg: f9,
  },
  {
    id: 10,
    categoryId: "3",
    sellerId: "",
    storeName: "Nexus electronics",
    name: "16'inch Standing fan",
    price: "₦11,000",
    oldPrice: "",
    bg: f10,
  },
  {
    id: 11,
    categoryId: "4",
    sellerId: "",
    storeName: "Binatone official",
    name: "Big blender",
    price: "₦9,500",
    oldPrice: "₦11,000",
    bg: f11,
  },
  {
    id: 12,
    categoryId: "6",
    sellerId: "",
    storeName: "SNOW® Care",
    name: "Dr-teal powder",
    price: "₦2,500",
    oldPrice: "",
    bg: f12,
  },
  {
    id: 13,
    categoryId: "1",
    sellerId: "",
    storeName: "Tina's place",
    name: "Fruit basket",
    price: "₦29,200",
    oldPrice: "",
    bg: f13,
  },
  {
    id: 14,
    categoryId: "1",
    sellerId: "",
    storeName: "Tina's place",
    name: "Golden morn",
    price: "₦1,200",
    oldPrice: "",
    bg: f14,
  },
  {
    id: 15,
    categoryId: "1",
    sellerId: "",
    storeName: "Tina's place",
    name: "Indomie Noodles",
    price: "₦720",
    oldPrice: "",
    bg: f15,
  },
  {
    id: 16,
    categoryId: "8",
    sellerId: "",
    storeName: "Tina's place",
    name: "Origin bitters",
    price: "₦2,400",
    oldPrice: "",
    bg: f16,
  },
  {
    id: 17,
    categoryId: "8",
    sellerId: "",
    storeName: "Tina's place",
    name: "Pepsi",
    price: "₦350",
    oldPrice: "",
    bg: f17,
  },
  {
    id: 18,
    categoryId: "5",
    sellerId: "",
    storeName: "Kith storefront",
    name: "Gamer phone cooler",
    price: "₦5,200",
    oldPrice: "",
    bg: f18,
  },
  {
    id: 19,
    categoryId: "3",
    sellerId: "",
    storeName: "Kith storefront",
    name: "Rechargeable standing fan",
    price: "₦13,500",
    oldPrice: "",
    bg: f19,
  },
  {
    id: 20,
    categoryId: "5",
    sellerId: "",
    storeName: "Kith storefront",
    name: "Redmi A3 (black)",
    price: "₦73,500",
    oldPrice: "",
    bg: f20,
  },
  {
    id: 21,
    categoryId: "5",
    sellerId: "",
    storeName: "Samsung Official",
    name: "Samsung galaxy A05",
    price: "₦97,500",
    oldPrice: "₦101,000",
    bg: f21,
  },
  {
    id: 22,
    categoryId: "2",
    sellerId: "",
    storeName: "Mr.Beast.com",
    name: "Beast signature Sweatshirt",
    price: "₦9,500",
    oldPrice: "",
    bg: f22,
  },
  {
    id: 23,
    categoryId: "5",
    sellerId: "",
    storeName: "Apple Store",
    name: "Apple smart watch",
    price: "₦19,500",
    oldPrice: "",
    bg: f23,
  },
];

export const categoryChild = [
  { id: "1", name: "Gaming", categoryId: "3" },
  { id: "2", name: "Computing", categoryId: "3" },
  { id: "3", name: "Phones & Gadgets", categoryId: "3" },
  { id: "4", name: "Men", categoryId: "2" },
  { id: "5", name: "Women", categoryId: "2" },
  { id: "6", name: "All Fashion", categoryId: "2" },
  { id: "7", name: "Small Appliances", categoryId: "5" },
  { id: "8", name: "Large Appliances", categoryId: "5" },
  { id: "9", name: "" },
  { id: "10", name: "" },
  { id: "11", name: "" },
  { id: "12", name: "Airtime", categoryId: "6" },
  { id: "13", name: "Data", categoryId: "6" },
];

export const FeaturedProducts = [
  {
    id: 1,
    categoryId: "3",
    storeName: "Lg Official",
    name: "Hp Espiron '15inch aspire 2024 model student laptop",
    price: "7,500",
    offer: "-20%",
    bg: f1,
  },
  {
    id: 2,
    categoryId: "3",
    storeName: "Apple Store",
    name: "iPhone 15",
    price: "7,500",
    offer: "-10%",
    bg: f2,
  },
  {
    id: 3,
    categoryId: "3",
    storeName: "Nexus Electronics",
    name: "Nexus Combo Cooker",
    price: "101,830",
    offer: "-12%",
    bg: f3,
  },
  {
    id: 4,
    categoryId: "2",
    storeName: "Angel global",
    name: "Hand bags",
    price: "67,200",
    offer: "50%",
    bg: f4,
  },
  {
    id: 5,
    categoryId: "2",
    storeName: "Prime Luxury's",
    name: "Baby girl's up&down",
    price: "7,500",
    offer: "12%",
    bg: f5,
  },
  {
    id: 6,
    categoryId: "2",
    storeName: "Nike Official",
    name: "Nike Fly 2023",
    price: "7,500",
    offer: "",
    bg: f6,
  },
  {
    id: 7,
    categoryId: "3",
    storeName: "Nexus Electronics",
    name: "Generator 3200HP",
    price: "7,500",
    offer: "",
    bg: f7,
  },
  {
    id: 8,
    categoryId: "3",
    storeName: "Samsung official",
    name: "Samsung 42'inch O'led TV",
    price: "117,500",
    offer: "5%",
    bg: f8,
  },
];

// OFFERS //
import o1 from "@/en/shared/image/shop-banner-one.jpg";
import o2 from "@/en/shared/image/shop-banner-two.jpg";
import o3 from "@/en/shared/image/shop-banner-three.jpg";
import o4 from "@/en/shared/image/shop-banner-four.jpg";
import o5 from "@/en/shared/image/shop-banner-five.jpg";
import o6 from "@/en/shared/image/shop-banner-six.jpg";

import l1 from "@/en/shared/image/user-thumbnail-one.jpg";
import l2 from "@/en/shared/image/logo.jpg";

export const Offers = [
  { id: 1, name: "Kith Storefront", bg: o1, brandImage: l1 },
  { id: 2, name: "Mr.beast.com", bg: o2, brandImage: l2 },
  { id: 3, name: "G Fuel", bg: o3, brandImage: l1 },
  { id: 4, name: "SNOW® Oral Care", bg: o4, brandImage: l2 },
  { id: 5, name: "School Essentials", bg: o5, brandImage: l1 },
  { id: 6, name: "Miscellenous Deals", bg: o6, brandImage: l2 },
  { id: 7, name: "Rugged Luxury", bg: o4, brandImage: l1 },
  { id: 10, name: "MyMy Inc.", bg: o4, brandImage: l2 },
];
