export interface Room {
  id: string;
  name: string;
  sublabel: string;
  tagline: string;
  description: string;
  capacity: string;
  image: string;
  imageWebp: string;
  amenities: string[];
  features: string[];
  badge?: string;
  priceNote?: string;
}

export interface Amenity {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface Attraction {
  id: string;
  name: string;
  symbol: string;
  description: string;
  distance?: string;
  walkingTime?: string;
  driveTime?: string;
}

export interface PropertyData {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  description: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  address: string;
  locationNote: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  mapUrl?: string;
  checkIn: string;
  checkOut: string;
  googleRating: number | null;
  googleReviewCount: number | null;
  googleRatingDisplay: string;
  rooms: Room[];
  amenities: Amenity[];
  attractions: Attraction[];
}

export const property: PropertyData = {
  name: "Thakur Ji Guest House",
  legalName: "Thakur Ji Guest House Varanasi",
  tagline: "A comfortable stay designed around the experience of Kashi.",
  subTagline: "The quiet chapter between the moments you came to Varanasi to experience.",
  description:
    "Thakur Ji Guest House in Varanasi offers clean, quiet, and comfortable rooms for pilgrims, couples, families, and travelers visiting the spiritual heart of Kashi.",
  city: "Varanasi",
  state: "Uttar Pradesh",
  country: "India",
  pincode: "221001",
  address: "Varanasi, Uttar Pradesh, India", // Update with precise lane/colony address
  locationNote: "Centrally positioned for easy access to ghats and temples while providing a restful sanctuary away from the busy lanes.",
  
  // Contact details - easily updated here
  phone: "+919876543210", // Primary phone (international format for tel: link)
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210", // WhatsApp number without + or spaces
  whatsappDisplay: "+91 98765 43210",
  email: "info@thakurjiguesthouse.in",
  mapUrl: "https://maps.google.com/?q=Thakur+Ji+Guest+House+Varanasi",

  checkIn: "12:00 PM",
  checkOut: "11:00 AM",

  // Review metrics (leave reviewCount null until verified with live Google Business Profile)
  googleRating: 4.9,
  googleReviewCount: null,
  googleRatingDisplay: "4.9",

  // Confirmed Real Rooms with extracted real property photography
  rooms: [
    {
      id: "deluxe",
      name: "Deluxe Room",
      sublabel: "FOR COUPLES & SHORT STAYS",
      tagline: "01 · After a day in Kashi",
      description:
        "Framed as the signature room of the property — crisp fresh bedding, peaceful warm ambient lighting, and balanced tones for a restful reset.",
      capacity: "2–3 Guests",
      image: "/images/deluxe-room.jpg",
      imageWebp: "/images/deluxe-room.webp",
      amenities: ["Air Conditioning", "Free Wi‑Fi", "Comfortable Double Bed", "Attached Bathroom"],
      features: ["2–3 Guests", "Air Conditioning", "High-speed Wi‑Fi"],
      badge: "Signature Room"
    },
    {
      id: "premium",
      name: "Premium Room",
      sublabel: "FOR A QUIETER PAUSE",
      tagline: "02 · A quieter pause",
      description:
        "Designed for travelers desiring quiet privacy and a cool sanctuary to refresh, read, and recharge before morning Ganga aarti.",
      capacity: "2–3 Guests",
      image: "/images/premium-room.jpg",
      imageWebp: "/images/premium-room.webp",
      amenities: ["Air Conditioning", "Free Wi‑Fi", "Private Space", "Clean Linens"],
      features: ["2–3 Guests", "Private Room", "Full Climate Control"]
    },
    {
      id: "family",
      name: "Family Room",
      sublabel: "FOR FAMILIES & GROUPS",
      tagline: "03 · Stay together",
      description:
        "Practical comfort with ample layout space for families and groups traveling together to regroup, rest, and share the journey.",
      capacity: "4+ Guests",
      image: "/images/family-room.jpg",
      imageWebp: "/images/family-room.webp",
      amenities: ["Air Conditioning", "Free Wi‑Fi", "Multiple Beds", "Family Layout"],
      features: ["4+ Guests", "Multiple Beds", "Spacious Family Layout"]
    }
  ],

  // 6 Verified Amenities (No fabricated luxury spas, infinity pools, or fake features)
  amenities: [
    {
      id: "wifi",
      icon: "⌁",
      name: "Free High-Speed Wi‑Fi",
      description: "Fast, reliable connectivity throughout the property for family and work."
    },
    {
      id: "ac",
      icon: "❄",
      name: "Air Conditioning",
      description: "Full climate control in every room to cool down after warm Varanasi afternoons."
    },
    {
      id: "family",
      icon: "👥",
      name: "Family & Group Rooms",
      description: "Flexible room configurations allowing families to stay comfortably together."
    },
    {
      id: "assistance",
      icon: "🔔",
      name: "Guest Assistance",
      description: "Warm, respectful local guidance on temple darshan, ghat walks, and transport."
    },
    {
      id: "housekeeping",
      icon: "✦",
      name: "Daily Housekeeping",
      description: "Fresh, hygienic linens, clean bathrooms, and tidy surroundings every day."
    },
    {
      id: "comfort",
      icon: "🛏",
      name: "Rest-Focused Comfort",
      description: "Quality mattresses and quiet nighttime environment for deep, restorative sleep."
    }
  ],

  // Attractions: Distance/times left unverified (will render as reliable access points without fake minutes)
  attractions: [
    {
      id: "kashi-vishwanath",
      name: "Kashi Vishwanath Temple",
      symbol: "🛕",
      description:
        "The revered Jyotirlinga and spiritual heart of Varanasi. Convenient access for early morning Mahadev darshan and mangala aarti."
    },
    {
      id: "dashashwamedh-ghat",
      name: "Dashashwamedh Ghat",
      symbol: "🪔",
      description:
        "The main riverfront ghat famed for the grand evening Ganga Aarti, priests' brass lamps, and river boat rides at sunset."
    },
    {
      id: "assi-ghat",
      name: "Assi Ghat",
      symbol: "⌖",
      description:
        "Vibrant southern ghat known for Subah-e-Banaras morning music, yoga by the river, and intimate cultural riverside cafes."
    },
    {
      id: "varanasi-junction",
      name: "Varanasi Junction (BSB)",
      symbol: "🚆",
      description:
        "The primary railway hub connecting pilgrims across India, with straightforward auto-rickshaw and taxi connectivity."
    }
  ]
};

export function getWhatsAppBookingUrl(checkIn = "", checkOut = "", guests = "2 Guests", room = ""): string {
  let message = `Hello Thakur Ji Guest House! I would like to check room availability for my stay in Varanasi.`;
  if (checkIn) message += `\n- Check-in: ${checkIn}`;
  if (checkOut) message += `\n- Check-out: ${checkOut}`;
  if (guests) message += `\n- Guests: ${guests}`;
  if (room) message += `\n- Room Preference: ${room}`;
  message += `\nPlease let me know your availability and rates. Thank you!`;

  return `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(message)}`;
}
