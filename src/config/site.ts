export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const site = {
  name: 'Σύλλογος ΣΑΡΑΚΑΤΣΑΝΑΙΩΝ Ν.Καβάλας «Ο ΦΛΑΜΠΟΥΡΑΣ»',
  shortName: 'Ο ΦΛΑΜΠΟΥΡΑΣ',
  location: 'Καβάλα',
  description:
    'Πολιτιστικός σύλλογος Σαρακατσαναίων στον Νομό Καβάλας. Διατήρηση παράδοσης, σαρακατσάνικοι χοροί και πολιτιστικές δραστηριότητες.',
  contact: {
    address: 'Διεύθυνση — Καβάλα',
    phone: 'Τηλέφωνο — προς συμπλήρωση',
    email: '',
  },
  hours: 'Ο σύλλογος λειτουργεί κατά τις ώρες προπονήσεων των χορευτικών τμημάτων. Επικοινωνήστε μαζί μας για πληροφορίες.',
  social: {
    facebook: '',
    youtube: '',
  },
  friendlyLinks: [
    {
      label: 'Πανελλήνια Ομοσπονδία Συλλόγων Σαρακατσαναίων',
      href: 'https://www.sarakatsanoi.gr/',
    },
    {
      label: 'Σύλλογος Σαρακατσαναίων Ν. Κιλκίς «Ο Φλάμπουρας»',
      href: 'https://flabouras.gr/',
    },
  ],
  nav: [
    { label: 'Αρχική', href: '/' },
    {
      label: 'Σύλλογος',
      children: [
        { label: 'Ίδρυση Συλλόγου', href: '/syllogos/idrysi' },
        { label: 'Διοικητικό Συμβούλιο', href: '/syllogos/dioikisi' },
        { label: 'Πρόεδροι', href: '/syllogos/proedroi' },
        { label: 'Γενικά', href: '/syllogos/genika' },
      ],
    },
    { label: 'Χορευτικά', href: '/xoreftika' },
    { label: 'Δραστηριότητες', href: '/drastiriotites' },
    {
      label: 'Σαρακατσάνοι',
      children: [
        { label: 'Ιστορία', href: '/sarakatsanoi/istoria' },
        { label: 'Καταγωγή', href: '/sarakatsanoi/katagogi' },
        { label: 'Κοινωνία', href: '/sarakatsanoi/koinonia' },
        { label: 'Γεωγραφικοί Πληθυσμοί', href: '/sarakatsanoi/plithysmos' },
        { label: 'Πρόσθετα Στοιχεία', href: '/sarakatsanoi/prostheta' },
      ],
    },
    {
      label: 'Αρχείο',
      children: [
        { label: 'Φωτογραφίες', href: '/arxeio/fotografies' },
        { label: 'Βίντεο – Εκδηλώσεις', href: '/arxeio/video' },
      ],
    },
    { label: 'Επικοινωνία', href: '/epikoinonia' },
  ] satisfies NavItem[],
} as const;

export interface Announcement {
  title: string;
  date: string;
  excerpt: string;
  href?: string;
}

export const announcements: Announcement[] = [];

export const quickLinks = [
  {
    title: 'Χορευτικά',
    description: 'Τμήματα παιδικών, εφήβων και ενηλίκων',
    href: '/xoreftika',
  },
  {
    title: 'Δραστηριότητες',
    description: 'Εκδηλώσεις, εκδρομές και πολιτιστικές δράσεις',
    href: '/drastiriotites',
  },
  {
    title: 'Επικοινωνία',
    description: 'Στοιχεία επικοινωνίας και φόρμα μηνύματος',
    href: '/epikoinonia',
  },
];
