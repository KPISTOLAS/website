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

### Εικόνες

Τοποθετήστε φωτογραφίες στο `public/images/` και ενημερώστε τις αντίστοιχες σελίδες.

### Λογότυπο

Προσθέστε το λογότυπό σας στο `public/` και ενημερώστε το `src/components/Header.astro` ή αντικαταστήστε το `LogoMark.astro`.

## Δομή έργου

```
src/
├── config/site.ts       # Ρυθμίσεις ιστότοπου
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
