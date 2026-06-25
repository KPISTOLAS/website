export interface GalleryItem {
  src: string;
  caption: string;
  category: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'antamoma', label: 'Αντάμωμα στη Μπουζάλα' },
  { id: 'ekdiloseis', label: 'Εκδηλώσεις & Παρουσιάσεις' },
  { id: 'xoreftika', label: 'Χορευτικά' },
  { id: 'xoros', label: 'Ετήσιος Χορός' },
  { id: 'laografia', label: 'Λαογραφία' },
];

const base = '/images/gallery/';

export const galleryItems: GalleryItem[] = [
  // Αντάμωμα Αν. Μακεδονίας & Θράκης στη Μπουζάλα (2009 & 2010)
  { src: base + 'antamoma-bouzala-2010-1.jpg', caption: 'Αντάμωμα στη Μπουζάλα (2010) — αναβίωση του εθίμου «Γκουρμπάνι»', category: 'antamoma' },
  { src: base + 'antamoma-bouzala-2010-7.jpg', caption: 'Αντάμωμα στη Μπουζάλα (2010)', category: 'antamoma' },
  { src: base + 'antamoma-bouzala-2010-8.jpg', caption: 'Αντάμωμα στη Μπουζάλα (2010)', category: 'antamoma' },
  { src: base + 'antamoma-bouzala-2010-2.jpg', caption: 'Αντάμωμα στη Μπουζάλα (2010)', category: 'antamoma' },
  { src: base + 'antamoma-bouzala-2010-3.jpg', caption: 'Αντάμωμα στη Μπουζάλα (2010)', category: 'antamoma' },
  { src: base + 'antamoma-bouzala-2010-4.jpg', caption: 'Αντάμωμα στη Μπουζάλα (2010)', category: 'antamoma' },
  { src: base + 'antamoma-bouzala-2010-5.jpg', caption: 'Το νέο καλύβι στον χώρο του Ανταμώματος (2010)', category: 'antamoma' },
  { src: base + 'antamoma-bouzala-2010-6.jpg', caption: 'Αντάμωμα στη Μπουζάλα (2010)', category: 'antamoma' },
  { src: base + 'antamoma-2009-4.jpg', caption: 'Χορευτικό του Συλλόγου στο 28ο Αντάμωμα (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-5.jpg', caption: 'Χορευτικό του Συλλόγου στο 28ο Αντάμωμα (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-1.jpg', caption: '28ο Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-3.jpg', caption: '28ο Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-6.jpg', caption: 'Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-7.jpg', caption: 'Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-2.jpg', caption: 'Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-8.jpg', caption: 'Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-9.jpg', caption: 'Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },
  { src: base + 'antamoma-2009-10.jpg', caption: 'Αντάμωμα Αν. Μακεδονίας & Θράκης (2009)', category: 'antamoma' },

  // Εκδηλώσεις & παρουσιάσεις
  { src: base + 'parousiasi-vivliou-1.jpg', caption: 'Παρουσίαση των βιβλίων του Ν. Κατσαρού, Ν. Καρβάλη Καβάλας (2008)', category: 'ekdiloseis' },
  { src: base + 'parousiasi-vivliou-2.jpg', caption: 'Παρουσίαση βιβλίων — ομιλίες επισήμων', category: 'ekdiloseis' },
  { src: base + 'parousiasi-vivliou-3.jpg', caption: 'Παρουσίαση βιβλίων στην Καβάλα', category: 'ekdiloseis' },
  { src: base + 'ftsela.jpg', caption: 'Φτσέλα — έργο σαρακατσάνικης ξυλογλυπτικής', category: 'ekdiloseis' },
  { src: base + 'xristougenna-kavala-3.jpg', caption: 'Στολισμένο κονάκι στην πλατεία της Καβάλας — Χριστούγεννα', category: 'ekdiloseis' },
  { src: base + 'xristougenna-kavala-1.jpg', caption: 'Χριστουγεννιάτικα δρώμενα στην Καβάλα', category: 'ekdiloseis' },
  { src: base + 'xristougenna-kavala-2.jpg', caption: 'Χριστουγεννιάτικες εκδηλώσεις στην Καβάλα', category: 'ekdiloseis' },

  // Χορευτικά
  { src: base + 'xoreftiko-1.jpg', caption: 'Εκμάθηση παραδοσιακών χορών', category: 'xoreftika' },
  { src: base + 'xoreftiko-2.jpg', caption: 'Εκμάθηση παραδοσιακών χορών', category: 'xoreftika' },

  // Ετήσιος χορός
  { src: base + 'etisios-xoros-2010.jpg', caption: 'Ετήσιος χορός του Συλλόγου', category: 'xoros' },

  // Λαογραφία
  { src: base + 'arnia-katsikia.jpg', caption: 'Αρνιά και κατσίκια — η ποιμενική ζωή των Σαρακατσάνων', category: 'laografia' },
];
