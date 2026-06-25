# Ο ΦΛΑΜΠΟΥΡΑΣ – Ιστότοπος Συλλόγου (Καβάλα)

Ιστότοπος για τον **Σύλλογο ΣΑΡΑΚΑΤΣΑΝΑΙΩΝ Ν. Καβάλας «Ο ΦΛΑΜΠΟΥΡΑΣ»**, κατασκευασμένος με [Astro](https://astro.build).

## Εκκίνηση

```bash
npm install
npm run dev
```

Ανοίγει στο [http://localhost:4321](http://localhost:4321).

## Εντολές

| Εντολή | Περιγραφή |
|--------|-----------|
| `npm run dev` | Τοπικός dev server |
| `npm run build` | Παραγωγή static site στο `dist/` |
| `npm run preview` | Προεπισκόπηση του build |

## Επεξεργασία περιεχομένου

### Κεντρικές ρυθμίσεις

Όλα τα βασικά στοιχεία (όνομα, μενού, επικοινωνία, social) βρίσκονται στο:

```
src/config/site.ts
```

Εκεί μπορείτε να αλλάξετε:
- Στοιχεία επικοινωνίας (διεύθυνση, τηλέφωνο, email)
- Ώρες λειτουργίας
- Σύνδεσμους Facebook / YouTube
- Ανακοινώσεις αρχικής σελίδας
- Δομή πλοήγησης

### Σελίδες

Κάθε σελίδα είναι αρχείο `.astro` στο `src/pages/`:

```
src/pages/
├── index.astro              # Αρχική
├── xoreftika.astro
├── drastiriotites.astro
├── epikoinonia.astro
├── syllogos/                # Υποσελίδες συλλόγου
├── sarakatsanoi/            # Υποσελίδες Σαρακατσάνων
└── arxeio/                  # Φωτογραφίες, βίντεο
```

Αντικαταστήστε τα placeholder blocks (`PlaceholderContent`) με πραγματικό κείμενο.

### Εικόνες & Φωτογραφικό αρχείο

Οι φωτογραφίες της σελίδας **Αρχείο → Φωτογραφίες** βρίσκονται στο
`public/images/gallery/` και ορίζονται (με λεζάντες και κατηγορίες) στο αρχείο:

```
src/data/gallery.ts
```

Για να προσθέσετε νέα φωτογραφία: αποθηκεύστε την στο `public/images/gallery/` και
προσθέστε μια εγγραφή `{ src, caption, category }` στον πίνακα `galleryItems`.
Οι διαθέσιμες κατηγορίες ορίζονται στο `galleryCategories`.

Άλλες εικόνες μπορούν να τοποθετηθούν στο `public/images/`.

> Σημείωση: Το αρχικό περιεχόμενο (ιστορικά στοιχεία, δραστηριότητες, φωτογραφίες)
> αντλήθηκε από το ιστολόγιο του Συλλόγου, [flabouras.blogspot.com](https://flabouras.blogspot.com/).

### Λογότυπο

Προσθέστε το λογότυπό σας στο `public/` και ενημερώστε το `src/components/Header.astro` ή αντικαταστήστε το `LogoMark.astro`.

## Δομή έργου

```
src/
├── config/site.ts       # Ρυθμίσεις, πρόεδροι, χρονολόγιο, δραστηριότητες
├── data/gallery.ts      # Φωτογραφίες αρχείου (src, λεζάντα, κατηγορία)
├── components/          # Header, Footer, Nav, Hero, κ.λπ.
├── layouts/             # BaseLayout
├── pages/               # Σελίδες (routes)
└── styles/global.css    # Στυλ και χρώματα
```

## Μελλοντικές επεκτάσεις

- **Ανακοινώσεις από Markdown**: δημιουργήστε `src/content/announcements/` με Astro Content Collections
- **Φόρμα επικοινωνίας**: σύνδεση με Formspree ή Netlify Forms
- **Sitemap**: προσθήκη `@astrojs/sitemap` όταν οριστεί domain

## Τεχνολογίες

- Astro 5
- TypeScript
- Plain CSS (χωρίς framework)
