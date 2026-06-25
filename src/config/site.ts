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
    address: 'Νέα Κώμη, Καβάλα',
    phone: '25910 56467',
    mobile: '6978 649754',
    email: '',
  },
  hours: 'Ο σύλλογος λειτουργεί κατά τις ώρες προπονήσεων των χορευτικών τμημάτων. Επικοινωνήστε μαζί μας για πληροφορίες.',
  social: {
    facebook: 'https://www.facebook.com/groups/58563429647/',
    youtube: '',
    blog: 'https://flabouras.blogspot.com/',
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

export interface President {
  name: string;
  period: string;
  note?: string;
}

// Στοιχεία αντλημένα από το ιστολόγιο του Συλλόγου (flabouras.blogspot.com).
export const presidents: President[] = [
  {
    name: 'Βασιλική (Βάσω) Κουτρουλού',
    period: '2006 – 2011',
    note: 'Υπεύθυνη του χορευτικού (2004–2006) και στη συνέχεια Πρόεδρος για τέσσερα συνεχόμενα έτη. Με τη θητεία της ο Σύλλογος «αναγεννήθηκε»: διοργάνωση Ανταμώματος, συμμετοχή στο Πανελλήνιο Αντάμωμα, νέες στολές και απόκτηση μόνιμης στέγης στη Νέα Κώμη.',
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: '~2005',
    title: 'Διοργάνωση Ανταμώματος Αν. Μακεδονίας & Θράκης',
    description:
      'Ο Σύλλογος αναλαμβάνει επί σειρά ετών τη διοργάνωση του Ανταμώματος Σαρακατσαναίων Ανατολικής Μακεδονίας & Θράκης στη «Μπουζάλα», στα βουνά της Δράμας.',
  },
  {
    year: '2008',
    title: 'Πρώτη συμμετοχή στο Πανελλήνιο Αντάμωμα',
    description:
      'Το χορευτικό του Συλλόγου συμμετέχει για πρώτη φορά στο Πανελλήνιο Αντάμωμα Σαρακατσαναίων στο Περτούλι Τρικάλων.',
  },
  {
    year: '2008',
    title: 'Παρουσίαση βιβλίων Ν. Κατσαρού',
    description:
      'Στο Εκθεσιακό Κέντρο της Ν. Καρβάλης παρουσιάζονται δύο βιβλία του Σαρακατσάνου συγγραφέα και προέδρου του ΕΛΓΑ Νίκου Κατσαρού.',
  },
  {
    year: '2009',
    title: 'Δημιουργία ιστολογίου του Συλλόγου',
    description:
      'Ξεκινά το ιστολόγιο «Ο Φλάμπουρας» (flabouras.blogspot.com) — το «ηλεκτρονικό αντάμωμα» του Συλλόγου.',
  },
  {
    year: '2010',
    title: 'Νέα καλύβια στη Μπουζάλα',
    description:
      'Ανακατασκευή των καλυβιών στον χώρο του Ανταμώματος με σιδερένιο σκελετό, ώστε να αντέχουν στις καιρικές συνθήκες της περιοχής.',
  },
  {
    year: '2011',
    title: 'Μόνιμη στέγη στη Νέα Κώμη',
    description:
      'Ο Σύλλογος αποκτά κτήριο στη Νέα Κώμη Καβάλας που στεγάζει τα γραφεία και φιλοξενεί τις πρόβες των χορευτικών τμημάτων.',
  },
  {
    year: '2013 – 2014',
    title: '32ο & 33ο Αντάμωμα στη Μπουζάλα',
    description:
      'Συνεχίζεται το ετήσιο αντάμωμα στο Δάσος Ελατιάς Δράμας, θέση «Καλύβια Κούτρα».',
  },
];

export interface ActivityHighlight {
  title: string;
  description: string;
}

export const activityHighlights: ActivityHighlight[] = [
  {
    title: 'Αντάμωμα στη Μπουζάλα',
    description:
      'Το ετήσιο Αντάμωμα Σαρακατσαναίων Ανατολικής Μακεδονίας & Θράκης, στη θέση «Καλύβια Κούτρα» του Δάσους Ελατιάς Δράμας, με αναβίωση του εθίμου «Γκουρμπάνι», χορούς και γλέντι.',
  },
  {
    title: 'Ετήσιος Χορός',
    description:
      'Ο καθιερωμένος ετήσιος χορός του Συλλόγου, με ζωντανή ορχήστρα σαρακατσάνικου τραγουδιού και απονομή τιμητικών πλακετών σε διακεκριμένους Σαρακατσάνους.',
  },
  {
    title: 'Πανελλήνιο Αντάμωμα — Περτούλι',
    description:
      'Συμμετοχή του χορευτικού στο μεγαλύτερο υπαίθριο πολιτιστικό γεγονός των Σαρακατσαναίων, στα λιβάδια Περτουλίου Τρικάλων.',
  },
  {
    title: 'Παρελάσεις & εθνικές εορτές',
    description:
      'Συμμετοχή στις παρελάσεις και τις εορταστικές εκδηλώσεις της Καβάλας με περίπτερο και παραδοσιακές στολές.',
  },
  {
    title: 'Χριστουγεννιάτικα δρώμενα',
    description:
      'Αναβίωση εθίμων των Χριστουγέννων στην πλατεία της Καβάλας — στολισμένο κονάκι, κάλαντα και κεράσματα στους επισκέπτες.',
  },
  {
    title: 'Παρουσιάσεις βιβλίων & εκδρομές',
    description:
      'Πολιτιστικές εκδηλώσεις, παρουσιάσεις βιβλίων για τους Σαρακατσάνους και εκδρομές των μελών (Βουλγαρία, Κέρκυρα, Γιάννινα, Πήλιο).',
  },
];

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
