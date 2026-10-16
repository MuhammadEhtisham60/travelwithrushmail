export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  altitude?: string;
  rating: number;
  reviews: number;
}

export interface TourPackage {
  id: string;
  title: string;
  badge: "BEST SELLER" | "LUXURY" | "ADVENTURE";
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  description: string;
  priceText: string;
  image: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Compass" | "Car" | "Building2" | "Headset";
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  tour: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  location: string;
}

export const COMPANY_INFO = {
  name: "Travel with Rushmail ",
  brandHighlight: "Rushmail ",
  phonePrimary: "0324 7612242",
  phoneSecondary: "0302 7069847",
  phonePrimaryRaw: "+923247612242",
  phoneSecondaryRaw: "+923027069847",
  whatsappUrl: "https://wa.me/923247612242",
  email: "info@travelwithRushmail .com",
  location: "Gilgit-Baltistan & Islamabad, Pakistan",
  workingHours: "Mon – Sat, 9:00 – 20:00 (PKT)",
  tagline: "Curated luxury expeditions across Northern Pakistan's highest peaks, valleys, and ancient Silk Road paths.",
};

export const STATS_DATA: StatItem[] = [
  { value: 25, suffix: "+", label: "Unique Destinations" },
  { value: 5000, suffix: "+", label: "Happy Travelers" },
  { value: 120, suffix: "+", label: "Curated Tours" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: "khunjerab-pass",
    title: "Khunjerab Pass",
    subtitle: "China Border Route",
    description: "Pakistan–China border, one of the highest paved international crossings in the world at 4,693m.",
    image: "/images/khunjerab.jpg",
    badge: "Highest Border Crossing",
    altitude: "4,693 m",
    rating: 4.8,
    reviews: 860,
  },
  {
    id: "baosar-top",
    title: "Baosar Top",
    subtitle: "Gateway to Nanga Parbat",
    description: "Sweeping views of Nanga Parbat, pine ridges, and the legendary Fairy Meadows alpine trail.",
    image: "/images/baosar.jpg",
    badge: "Panoramic Vista",
    altitude: "4,173 m",
    rating: 4.9,
    reviews: 940,
  },
  {
    id: "skardu",
    title: "Skardu & Deosai",
    subtitle: "Karakoram Heartland",
    description: "Turquoise lakes, cold desert sand dunes, and towering Karakoram giants in Gilgit-Baltistan.",
    image: "/images/skardu.jpg",
    badge: "Alpine Paradise",
    altitude: "2,228 m",
    rating: 4.9,
    reviews: 1420,
  },
];

export const TOURS_DATA: TourPackage[] = [
  {
    id: "hunza-valley-escape",
    title: "Hunza Valley Escape",
    badge: "BEST SELLER",
    duration: "5 Days",
    difficulty: "Easy",
    description: "Visit Altit and Baltit Forts, Attabad Lake and the apricot blossoms of Hunza.",
    priceText: "Custom / person",
    image: "/images/hunza.jpg",
    highlights: ["Altit & Baltit Forts", "Attabad Lake Boating", "Passu Cones Viewpoint", "Karimabad Bazaar"],
  },
  {
    id: "skardu-lakes-expedition",
    title: "Skardu Lakes Expedition",
    badge: "LUXURY",
    duration: "6 Days",
    difficulty: "Moderate",
    description: "Upper Kachura Lake, Deosai Plains, Shangrila Resort and the Sadpara Lake drive.",
    priceText: "Custom / person",
    image: "/images/shangrila.jpg",
    highlights: ["Shangrila & Lower Kachura", "Deosai High Plains Plateau", "Upper Kachura Boat Ride", "Cold Desert Safari"],
  },
  {
    id: "china-border-baosar-trail",
    title: "China Border & Baosar Trail",
    badge: "ADVENTURE",
    duration: "7 Days",
    difficulty: "Challenging",
    description: "Khunjerab Pass, Passu Cones, Baosar Top and Fairy Meadows, for true mountain lovers.",
    priceText: "Custom / person",
    image: "/images/fairy.jpg",
    highlights: ["Pakistan-China Monument", "Passu Glacier Crossing", "Baosar Ridge Sunrise", "Fairy Meadows Campsite"],
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "local-guides",
    title: "Local Guides",
    description: "Experienced guides who know every valley, pass and story of the north.",
    iconName: "Compass",
  },
  {
    id: "safe-transport",
    title: "Safe Transport",
    description: "Well-maintained 4x4 vehicles and experienced drivers for mountain roads.",
    iconName: "Car",
  },
  {
    id: "premium-stays",
    title: "Premium Stays",
    description: "Handpicked hotels and guesthouses with comfort and local charm.",
    iconName: "Building2",
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Our team stays reachable on phone and WhatsApp before and during your trip.",
    iconName: "Headset",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  { src: "/images/hero.jpg", alt: "Karakoram Mountain Peaks at Sunset", location: "Karakoram Range" },
  { src: "/images/attabad.jpg", alt: "Turquoise Waters of Attabad Lake", location: "Gojal, Hunza" },
  { src: "/images/passu.jpg", alt: "Iconic Passu Cathedral Cones", location: "Upper Hunza" },
  { src: "/images/camp.jpg", alt: "Starry Campsite under the Milky Way", location: "Fairy Meadows" },
  { src: "/images/deosai.jpg", alt: "Deosai National Park Wilderness", location: "Skardu District" },
  { src: "/images/jeep.jpg", alt: "4x4 Expedition on Mountain Pass", location: "Gilgit-Baltistan" },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Rushmail  planned every detail of our Skardu trip. The drive, the hotels and the guide were all excellent.",
    author: "Ahmed R.",
    location: "Lahore",
    rating: 5,
    tour: "Skardu Lakes Expedition",
  },
  {
    id: "t2",
    quote: "Seeing Khunjerab Pass was a dream come true. Our family felt safe and cared for the entire time.",
    author: "Sana K.",
    location: "Karachi",
    rating: 5,
    tour: "China Border & Baosar Trail",
  },
  {
    id: "t3",
    quote: "The best decision for our group trip. Professional team, beautiful routes and unforgettable memories.",
    author: "Usman T.",
    location: "Islamabad",
    rating: 5,
    tour: "Hunza Valley Escape",
  },
];

export const ABOUT_DATA = {
  eyebrow: "OUR STORY",
  title: "Born in the Mountains, Built on Trust",
  paragraph1:
    "Travel with Rushmail  was founded with one purpose: to show travelers the true beauty of Northern Pakistan, from the China border to the lakes of Skardu, with comfort and safety at every step.",
  paragraph2:
    "Every itinerary is designed around you, so every journey feels personal.",
  checklist: [
    "Customized tours for families, groups and solo travelers",
    "Experienced local guides and trusted partners",
    "Transparent pricing with no hidden costs",
  ],
  images: {
    primary: "/images/about1.jpg",
    secondary: "/images/about2.jpg",
  },
};
