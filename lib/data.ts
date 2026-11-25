export interface Business {
  slug: string;
  number: string;
  name: string;
  short: string;
  description: string;
  category: string;
  linkLabel: string;
  overview: string;
  services: string[];
  audience: string;
  logo: string;
  image?: string;
}

export interface Leader {
  name: string;
  role: string;
  credentials: string;
  image: string;
}

export const businesses: Business[] = [
  {
    slug: 'travels-tours',
    number: '01',
    name: 'Elders Travels & Tours',
    short: 'Your extraordinary journey starts here.',
    description: 'Travel planning and experiences designed to turn travel dreams into memorable journeys. Operating with dedication since May 2013.',
    category: 'Travel & Tourism',
    linkLabel: 'Explore travel services',
    overview: 'Elders Travels & Tours brings together travel knowledge, planning and customer care to help individuals and organisations navigate their journeys with confidence. From the first enquiry to the details of a trip, the focus is on making travel more organised, efficient, and memorable.',
    services: [
      'Travel planning and consultation',
      'Tour and holiday arrangements',
      'Flight and travel ticketing assistance',
      'Airport transfer coordination',
      'Corporate and group travel support',
      'Visa guidance and documentation advisory',
    ],
    audience: 'Individuals, families, corporate teams, and groups planning local or international travel.',
    logo: '/logos/travels-tours.jpg',
    image: '/images/stock/airplane-dusk.webp',
  },
  {
    slug: 'outsourcing-consulting',
    number: '02',
    name: 'Elders Outsourcing & Consulting',
    short: 'Unlocking potential through smarter business.',
    description: 'Management consulting, business optimisation and outsourcing support that help organisations improve efficiency and realise their potential.',
    category: 'Consulting',
    linkLabel: 'Discover our solutions',
    overview: 'Elders Outsourcing & Consulting works with organisations seeking practical ways to strengthen operations, improve efficiency, and make better use of their resources. Its approach is centred on understanding business needs and shaping tailor-made operational solutions around them.',
    services: [
      'Management consulting',
      'Business process optimisation',
      'Outsourcing support & talent matching',
      'Organisational development',
      'Operational advisory & auditing',
    ],
    audience: 'Businesses, financial institutions, and growing organisations seeking operational support and strategic advisory services.',
    logo: '/logos/outsourcing-consulting.jpg',
    image: '/images/stock/workshop.webp',
  },
  {
    slug: 'travel-business-school',
    number: '03',
    name: 'Elders Travel Business School',
    short: 'Knowledge that moves careers forward.',
    description: 'Professional learning that connects academic knowledge with real-world business and transportation practice.',
    category: 'Education & Training',
    linkLabel: 'Explore programmes',
    overview: 'Elders Travel Business School engages professionals and learners with practical education that connects academic ideas to real-world business and transportation challenges. The school aims to help participants build actionable knowledge they can immediately apply in their careers and ventures.',
    services: [
      'Professional business training',
      'Travel and tourism operations education',
      'Transportation and logistics learning',
      'Career development & executive coaching',
      'Practical workshops and certifications',
    ],
    audience: 'Aspiring professionals, industry entrants, entrepreneurs, and teams seeking certified business and transportation knowledge.',
    logo: '/logos/travel-business-school.jpg',
    image: '/images/stock/team-meeting.webp',
  },
  {
    slug: 'hospitality',
    number: '04',
    name: 'Elders Hospitality & Comfort',
    short: 'Every detail shaped around your comfort.',
    description: 'Hospitality experiences informed by our deep exposure to travel, tourism, consulting, and customer care.',
    category: 'Hospitality',
    linkLabel: 'Discover hospitality',
    overview: 'Elders Hospitality & Comfort is focused on thoughtful hospitality and guest experiences. Drawing on the group’s wider service experience, the business seeks to make every stay welcoming, every amenity considered, and every interaction memorable.',
    services: [
      'Hospitality operations and management',
      'Guest experience coordination',
      'Accommodation and concierge enquiries',
      'Hospitality consulting and facility support',
    ],
    audience: 'Guests, travellers, corporate visitors, event hosts, and partners seeking premium hospitality-related services.',
    logo: '/logos/hospitality.jpg',
    image: '/images/stock/hotel-lounge.webp',
  },
  {
    slug: 'security-services',
    number: '05',
    name: 'Elders Security Services',
    short: 'Your protection, our priority.',
    description: 'Professional security solutions designed to protect people, property, assets, and business operations.',
    category: 'Security',
    linkLabel: 'Explore security services',
    overview: 'Elders Security Services provides comprehensive security solutions with an unwavering focus on protecting people, property, and business continuity. The service offering includes rigorously trained personnel-based security and modern technology-supported protection systems.',
    services: [
      'Security personnel and static guard services',
      'Access control and perimeter security solutions',
      'CCTV and 24/7 video surveillance systems',
      'Biometric security & identity systems',
      'Perimeter detection and monitoring',
      'VIP escort and protocol protection services',
    ],
    audience: 'Corporate organisations, critical infrastructure, commercial facilities, residential estates, and institutions.',
    logo: '/logos/security-services.png',
    image: '/images/businesses/security-hero.jpg',
  },
  {
    slug: 'goodness-impact-foundation',
    number: '06',
    name: 'The Goodness Impact Foundation',
    short: 'Creating a future where compassion knows no boundaries.',
    description: 'A non-governmental organisation focused on drug abuse prevention, gender-based violence mitigation, social enterprise, social learning, and therapeutic communication.',
    category: 'Social Impact',
    linkLabel: 'Discover our impact',
    overview: 'The Goodness Impact Foundation is a non-governmental organisation working across five core thematic areas. Its purpose is to contribute to a resilient society where compassion, learning, inclusion, and life-changing opportunity can reach every individual.',
    services: [
      'Drug abuse awareness, advocacy, and rehabilitation guidance',
      'Gender-based violence prevention and victim support',
      'Social enterprise initiatives and youth empowerment',
      'Community social learning programmes',
      'Therapeutic communication and family support',
    ],
    audience: 'Communities, vulnerable youth, volunteers, donors, development partners, and organisations committed to social impact.',
    logo: '/logos/goodness-impact-foundation.jpg',
    image: '/images/stock/community.webp',
  },
];

export const leaders: Leader[] = [
  {
    name: 'Dr. Amb. Daniel Olabintan',
    role: 'Chairman, Group of Companies',
    credentials: 'PMP, MBA, CMC',
    image: '/images/team/daniel-olabintan.jpg',
  },
  {
    name: 'Mr. Jamiu Akangbe',
    role: 'Group Head of Operations',
    credentials: 'MSc, IBM, ACPM, LCBA, CIPM, TNSB',
    image: '/images/team/jamiu-akangbe.jpg',
  },
  {
    name: 'Mr. Bukunmi Abiodun',
    role: 'Group Head of ICT',
    credentials: 'PDM, PMP',
    image: '/images/team/bukunmi-abiodun.jpg',
  },
  {
    name: 'Mrs. Basuglo Funmilayo',
    role: 'Board Advisory Member',
    credentials: '',
    image: '/images/team/basuglo-funmilayo.jpg',
  },
  {
    name: 'Dr. Anita Adefuye',
    role: 'Board Advisory Member',
    credentials: 'Ph.D, MPA',
    image: '/images/team/anita-adefuye.jpg',
  },
  {
    name: 'Mrs. Goodness O. Oluwaseun',
    role: 'Group Head of Sales',
    credentials: 'M.Ed, CIPM',
    image: '/images/team/goodness-oluwaseun.jpg',
  },
  {
    name: 'Barr. Ebere Obi-Akinwole',
    role: 'Group Legal Advisor',
    credentials: 'LL.B, BL',
    image: '/images/team/ebere-obi-akinwole.jpg',
  },
  {
    name: 'Ms. Omojola Bisola',
    role: 'Group HR (Admin.)',
    credentials: '',
    image: '/images/team/omojola-bisola.png',
  },
];

export const values = [
  'Integrity First',
  'Team Spirit',
  'Passion for Quality',
  'Innovation at Heart',
  'Customer-Centric Excellence',
];

// Centralised brand contact details — update in one place.
export const CONTACT = {
  email: 'eldersgroup@gmail.com',
  phonePrimary: '+234 812 497 9132',
  phonePrimaryHref: 'tel:+2348124979132',
  phoneSecondary: '+234 708 842 0394',
  phoneSecondaryHref: 'tel:+2347088420394',
  addressShort: '13 Ola Street, Oke-Ira, off Ayo Alabi, Ogba, Ikeja, Lagos, Nigeria',
} as const;

// Official social profile URLs — replace the temporary placeholders once the
// real profiles are confirmed (see README "Important before production").
export const SOCIAL = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
] as const;

export const foundationThematicAreas = [  {
    title: 'Drug Abuse Prevention & Advocacy',
    description: 'Community sensitization, youth education, and rehabilitation referral initiatives.',
  },
  {
    title: 'Gender-Based Violence Intervention',
    description: 'Advocacy, legal counseling channels, and protection support for vulnerable groups.',
  },
  {
    title: 'Social Enterprise & Empowerment',
    description: 'Equipping individuals with vocational skills and economic self-reliance toolkits.',
  },
  {
    title: 'Social Learning & Inclusive Education',
    description: 'Fostering shared community wisdom, peer mentoring, and experiential learning.',
  },
  {
    title: 'Therapeutic Communication',
    description: 'Promoting empathetic dialogue, mental wellness, and constructive conflict resolution.',
  },
];

// WhatsApp business line — derived from the primary phone number.
export const WHATSAPP = {
  number: '2348124979132',
  href: 'https://wa.me/2348124979132?text=Hello%20Elders%20Group%2C%20I%20would%20like%20to%20make%20an%20enquiry.',
  label: 'Chat on WhatsApp',
} as const;

// Frequently asked questions — answers are drawn from site facts only.
export const FAQS = [
  {
    question: 'What businesses make up Elders Group?',
    answer:
      'Elders Group comprises six ventures: Elders Travels & Tours, Elders Outsourcing & Consulting, Elders Travel Business School, Elders Hospitality & Comfort, Elders Security Services, and The Goodness Impact Foundation.',
  },
  {
    question: 'When was Elders Group founded?',
    answer:
      'The group began in Lagos in May 2013 with Elders Travels & Tours, and has since diversified into consulting, education, hospitality, security and social impact.',
  },
  {
    question: 'Where is Elders Group located?',
    answer: `Our head office is at ${CONTACT.addressShort}. Visitors are welcome — a call ahead helps us serve you better.`,
  },
  {
    question: 'How can I reach a specific subsidiary?',
    answer:
      'Use the contact form and select the relevant business in the dropdown, or mention it in your message — enquiries are routed to the right team.',
  },
  {
    question: 'What are your office hours?',
    answer:
      'Monday to Friday, 8:00 AM – 5:00 PM (WAT). Weekend enquiries are answered via email.',
  },
  {
    question: 'How can we partner with Elders Group?',
    answer:
      'Visit the Partnership page to see the ways we collaborate — from service engagements to sponsoring the Goodness Impact Foundation — or send us a message directly.',
  },
] as const;

/**
 * Client testimonials — intentionally empty until real client quotes and
 * attributions are supplied by the company. The homepage section renders
 * automatically once entries are added here (no other code changes needed).
 */
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [];
