export type Lang = 'en' | 'de' | 'fr' | 'it' | 'ja' | 'ko' | 'tr';

export const langMeta: Record<Lang, { label: string; path: string; flag: string; name: string }> = {
  en: { label: 'EN', path: '/',     flag: 'gb', name: 'English' },
  de: { label: 'DE', path: '/de/', flag: 'de', name: 'Deutsch' },
  fr: { label: 'FR', path: '/fr/', flag: 'fr', name: 'Français' },
  it: { label: 'IT', path: '/it/', flag: 'it', name: 'Italiano' },
  ja: { label: 'JA', path: '/ja/', flag: 'jp', name: '日本語' },
  ko: { label: 'KO', path: '/ko/', flag: 'kr', name: '한국어' },
  tr: { label: 'TR', path: '/tr/', flag: 'tr', name: 'Türkçe' },
};

export interface Translation {
  meta: { title: string; description: string };
  nav: { education: string; experience: string; skills: string; certifications: string; others: string; contact: string };
  pills: string[];
  hero: { badge: string; h1: string; tagline: string[]; cta: string };
  figures: { value: string; label: string }[];
  education: { heading: string; items: { school: string; period: string; grade: string }[] };
  experience: { heading: string; items: { role: string; company: string; period: string; bullets: string[] }[] };
  skills: { heading: string; items: { title: string; bullets: string[] }[] };
  certifications: { heading: string; items: { title: string; body: string }[] };
  others: { heading: string; items: { title: string; bullets: string[] }[] };
  freetime: { heading: string; items: string[] };
  languages: { heading: string; items: string[] };
  contact: { heading: string; strong: string; body: string; cta: string };
  footer: { madeIn: string; privacy: string; imprint: string };
  ui: { menu: string; toggleTheme: string; skip: string };
}

export const translations: Record<Lang, Translation> = {

  en: {
    meta: {
      title: 'Teoman Lam · Technical Product Owner & IT PM, Zurich',
      description: 'PMP-certified Technical Product Owner in Zurich. 5 years leading ERP, EDI and B2B integration projects across DACH – dataflows, automation, delivery.',
    },
    nav: { experience: 'Experience', skills: 'Skills', education: 'Education', certifications: 'Certification', others: 'Focus', contact: 'Contact' },
    pills: ['ERP & EDI', 'Dataflows', 'Automation', 'Integration', 'Technical Leadership'],
    hero: {
      badge: 'Technical Product Owner · Zurich · PMP',
      h1: 'I turn complex dataflows into systems that scale.',
      tagline: [
        'I\'m Teo. For five years I\'ve led technical projects for automotive, outdoor, retail-logistics and fashion brands – most recently as Product Owner for ERP & Logistics at BLACKROLL.',
        'My work sits where business processes meet data: I automate what slows teams down, structure data so systems can talk to each other, and build processes that scale across DACH.',
      ],
      cta: 'Get in touch',
    },
    figures: [
      { value: '30%', label: 'more B2B revenue after automating order processing via EDI' },
      { value: '2,500+', label: 'retail partners in DACH on one automated B2B platform' },
      { value: '100%', label: 'less manual support effort for Swiss B2C returns' },
      { value: '50–60%', label: 'less overhead in development teams through clear leadership' },
    ],
    education: {
      heading: 'Education',
      items: [
        { school: 'ZHAW Winterthur, School of Management and Law', period: 'September 2025 – Present · Bachelor of Science (BSc), Business Information Technology', grade: 'Current Grade: 5.25 / 6.0' },
        { school: 'Informatikmittelschule IMS-T (Software Development), BWZ Rapperswil-Jona', period: 'August 2017 – July 2021 · Federal Vocational Baccalaureate (FVB) technical', grade: 'Grade: 5.0 / 6.0' },
      ],
    },
    experience: {
      heading: 'Experience',
      items: [
        { role: 'Product Owner ERP & Logistics', company: 'BLACKROLL AG', period: 'January 2025 – Present · Remote', bullets: ['Rolled out EDI ordering and B2B automation to 2,500+ retail locations in Germany and Austria.', 'Grew B2B revenue by 30% through scalable integrations and leaner processes.', 'Fully automated returns handling – manual customer-service effort dropped to zero.', 'Introduced integration docs, release trains and team processes that cut handoff friction.'] },
        { role: 'IT Project Manager', company: 'FIREGROUP', period: 'May 2022 – June 2024 · Hybrid', bullets: ['Delivered digital relaunches and product configurators for automotive, outdoor and furniture brands.', 'Led teams of five specialists with budgets up to six figures.', 'Kept the focus on customer workflows, integration quality and project profitability.'] },
        { role: 'Project Manager', company: 'Onebyte AG', period: 'August 2021 – May 2022 · On-site', bullets: ['Owned end-to-end delivery of web projects with budgets up to five figures.', 'Delivered multilingual (i18n) solutions for a major Swiss gym chain.', 'Coordinated frontend, full-stack and backend developers.'] },
        { role: 'Junior Project Manager & Web Developer', company: 'Netmaster (Schweiz) AG', period: 'August 2020 – July 2021 · On-site', bullets: ['Supported web operations, hosting and technical client support.', 'Kept multiple customer environments online and fast.'] },
      ],
    },
    skills: {
      heading: 'Skills',
      items: [
        { title: 'Technical Leadership', bullets: ['Lead engineering teams from kickoff to go-live', 'Translate business goals into clear technical priorities', 'Build team processes that make delivery repeatable'] },
        { title: 'Dataflows & Data Structure', bullets: ['Design dataflows that connect ERP and partner systems', 'Structure data so it stays consistent across systems', 'Define data processes the whole team can follow'] },
        { title: 'Integration & Scaling', bullets: ['Integrate systems via ERP, APIs, EDI and middleware', 'Set up release trains and scalable processes', 'Reduce errors with clear handoffs and documentation'] },
        { title: 'Process & Delivery', bullets: ['Standardize processes for repeatable delivery', 'Write documentation people actually use', 'Optimize customer-facing processes end to end'] },
      ],
    },
    certifications: {
      heading: 'Certification',
      items: [{ title: 'PMP — Project Management Professional (13 April 2026)', body: 'Globally recognized certification for structured project leadership and delivery at scale.' }],
    },
    others: {
      heading: 'Focus',
      items: [
        { title: 'What I\'m focusing on', bullets: ['AI and data – building with Claude and agent prompting', 'Dataflows, data structure and integration at scale', 'Technical delivery and systems integration', 'Bridging business analysis and engineering'] },
        { title: 'Open to roles as', bullets: ['Technical Product Owner', 'Business Analyst', 'Project Manager', 'Data Analyst', 'Data Analytics Specialist'] },
      ],
    },
    freetime: { heading: 'Off the clock', items: ['Fitness', 'Brazilian Jiu-Jitsu', 'Coding'] },
    languages: { heading: 'Languages', items: ['German — Native', 'Swiss German — Native', 'English — Fluent (business level)', 'Turkish — Conversational', 'Korean — Basic'] },
    contact: { heading: 'Contact', strong: 'Let\'s talk.', body: 'LinkedIn is the fastest way to reach me – I\'m active there regularly.', cta: 'Message me on LinkedIn ↗' },
    footer: { madeIn: 'Made in Switzerland', privacy: 'Privacy', imprint: 'Imprint' },
    ui: { menu: 'Menu', toggleTheme: 'Switch light / dark mode', skip: 'Skip to content' },
  },

  de: {
    meta: {
      title: 'Teoman Lam · Technical Product Owner & IT-Projektleiter Zürich',
      description: 'PMP-zertifizierter Technical Product Owner aus Zürich: 5 Jahre ERP-, EDI- und B2B-Integrationsprojekte im DACH-Raum – Datenflüsse, Automatisierung.',
    },
    nav: { experience: 'Erfahrung', skills: 'Kompetenzen', education: 'Ausbildung', certifications: 'Zertifizierung', others: 'Fokus', contact: 'Kontakt' },
    pills: ['ERP & EDI', 'Datenflüsse', 'Automatisierung', 'Integration', 'Technische Führung'],
    hero: {
      badge: 'Technical Product Owner · Zürich · PMP',
      h1: 'Ich mache aus komplexen Datenflüssen Systeme, die skalieren.',
      tagline: [
        'Ich bin Teo. Seit fünf Jahren leite ich technische Projekte für Marken aus Automotive, Outdoor, Retail-Logistik und Mode – aktuell als Product Owner ERP & Logistik bei BLACKROLL.',
        'Meine Arbeit liegt dort, wo Geschäftsprozesse auf Daten treffen: Ich automatisiere, was Teams bremst, strukturiere Daten so, dass Systeme miteinander sprechen, und baue Prozesse, die im DACH-Raum skalieren.',
      ],
      cta: 'Kontakt aufnehmen',
    },
    figures: [
      { value: '30%', label: 'mehr B2B-Umsatz durch automatisierte Bestellabwicklung via EDI' },
      { value: '2\'500+', label: 'Handelspartner im DACH-Raum auf einer automatisierten B2B-Plattform' },
      { value: '100%', label: 'weniger manueller Supportaufwand für Schweizer B2C-Retouren' },
      { value: '50–60%', label: 'weniger Overhead in Entwicklungsteams durch klare Führung' },
    ],
    education: {
      heading: 'Ausbildung',
      items: [
        { school: 'ZHAW Winterthur, School of Management and Law', period: 'September 2025 – Heute · Bachelor of Science (BSc), Wirtschaftsinformatik', grade: 'Aktuelle Note: 5.25 / 6.0' },
        { school: 'Informatikmittelschule IMS-T (Softwareentwicklung), BWZ Rapperswil-Jona', period: 'August 2017 – Juli 2021 · Berufsmaturität Technik', grade: 'Note: 5.0 / 6.0' },
      ],
    },
    experience: {
      heading: 'Berufserfahrung',
      items: [
        { role: 'Product Owner ERP & Logistik', company: 'BLACKROLL AG', period: 'Januar 2025 – Heute · Remote', bullets: ['EDI-Bestellprozesse und B2B-Automatisierung für 2\'500+ Handelsstandorte in Deutschland und Österreich eingeführt.', 'B2B-Umsatz um 30 % gesteigert – durch skalierbare Integrationen und schlankere Prozesse.', 'Retourenabwicklung vollständig automatisiert – manueller Kundenservice-Aufwand: null.', 'Integrationsdokumentation, Release-Trains und Teamprozesse eingeführt, die Übergaben reibungslos machen.'] },
        { role: 'IT-Projektleiter', company: 'FIREGROUP', period: 'Mai 2022 – Juni 2024 · Hybrid', bullets: ['Digitale Relaunches und Produktkonfiguratoren für Marken aus Automotive, Outdoor und Möbel umgesetzt.', 'Teams mit fünf Spezialisten und Budgets im sechsstelligen Bereich geführt.', 'Fokus auf Kunden-Workflows, Integrationsqualität und Projektrentabilität.'] },
        { role: 'Projektleiter', company: 'Onebyte AG', period: 'August 2021 – Mai 2022 · Vor Ort', bullets: ['Webprojekte mit Budgets bis in den fünfstelligen Bereich von A bis Z verantwortet.', 'Mehrsprachige (i18n) Lösungen für eine grosse Schweizer Fitnesskette umgesetzt.', 'Frontend-, Full-Stack- und Backend-Entwickler koordiniert.'] },
        { role: 'Junior-Projektleiter & Webentwickler', company: 'Netmaster (Schweiz) AG', period: 'August 2020 – Juli 2021 · Vor Ort', bullets: ['Webprojekt-Betrieb, Hosting und technischen Kundensupport unterstützt.', 'Mehrere Kundenumgebungen stabil und performant gehalten.'] },
      ],
    },
    skills: {
      heading: 'Kompetenzen',
      items: [
        { title: 'Technische Führung', bullets: ['Entwicklungsteams vom Kickoff bis zum Go-live führen', 'Geschäftsziele in klare technische Prioritäten übersetzen', 'Teamprozesse aufbauen, die Umsetzung planbar machen'] },
        { title: 'Datenflüsse & Datenstruktur', bullets: ['Datenflüsse zwischen ERP- und Partnersystemen entwerfen', 'Daten so strukturieren, dass sie systemübergreifend konsistent bleiben', 'Datenprozesse definieren, denen das ganze Team folgen kann'] },
        { title: 'Integration & Skalierung', bullets: ['Systeme über ERP, APIs, EDI und Middleware integrieren', 'Release-Trains und skalierbare Prozesse aufsetzen', 'Fehler reduzieren durch klare Übergaben und Dokumentation'] },
        { title: 'Prozesse & Umsetzung', bullets: ['Prozesse für planbare Umsetzung standardisieren', 'Dokumentation schreiben, die tatsächlich genutzt wird', 'Kundennahe Prozesse durchgängig optimieren'] },
      ],
    },
    certifications: {
      heading: 'Zertifizierung',
      items: [{ title: 'PMP — Project Management Professional (13. April 2026)', body: 'International anerkannte Zertifizierung für strukturierte Projektführung und Umsetzung im grossen Massstab.' }],
    },
    others: {
      heading: 'Fokus',
      items: [
        { title: 'Woran ich arbeite', bullets: ['KI und Daten – Projekte mit Claude und Agent-Prompting', 'Datenflüsse, Datenstruktur und Integration im grossen Massstab', 'Technische Umsetzung und Systemintegration', 'Brücke zwischen Business-Analyse und Entwicklung'] },
        { title: 'Offen für Rollen als', bullets: ['Technical Product Owner', 'Business Analyst', 'Projektleiter', 'Data Analyst', 'Data Analytics Specialist'] },
      ],
    },
    freetime: { heading: 'Ausserhalb der Arbeit', items: ['Fitness', 'Brazilian Jiu-Jitsu', 'Programmieren'] },
    languages: { heading: 'Sprachen', items: ['Deutsch — Muttersprache', 'Schweizerdeutsch — Muttersprache', 'Englisch — verhandlungssicher', 'Türkisch — Konversationsniveau', 'Koreanisch — Grundkenntnisse'] },
    contact: { heading: 'Kontakt', strong: 'Sprechen wir.', body: 'Am schnellsten erreichen Sie mich über LinkedIn – dort bin ich regelmässig aktiv.', cta: 'Nachricht auf LinkedIn ↗' },
    footer: { madeIn: 'Hergestellt in der Schweiz', privacy: 'Datenschutz', imprint: 'Impressum' },
    ui: { menu: 'Menü', toggleTheme: 'Hell- / Dunkelmodus wechseln', skip: 'Zum Inhalt springen' },
  },

  fr: {
    meta: {
      title: 'Teoman Lam · Product Owner technique & chef de projet IT',
      description: 'Product Owner technique certifié PMP à Zurich : 5 ans de projets ERP, EDI et intégration B2B en région DACH – flux de données, automatisation.',
    },
    nav: { experience: 'Expérience', skills: 'Compétences', education: 'Formation', certifications: 'Certification', others: 'Focus', contact: 'Contact' },
    pills: ['ERP & EDI', 'Flux de données', 'Automatisation', 'Intégration', 'Leadership technique'],
    hero: {
      badge: 'Technical Product Owner · Zurich · PMP',
      h1: 'Je transforme des flux de données complexes en systèmes évolutifs.',
      tagline: [
        'Je suis Teo. Depuis cinq ans, je dirige des projets techniques pour des marques de l\'automobile, de l\'outdoor, de la logistique retail et de la mode – actuellement comme Product Owner ERP & Logistique chez BLACKROLL.',
        'Mon travail se situe là où les processus métier rencontrent les données : j\'automatise ce qui ralentit les équipes, je structure les données pour que les systèmes communiquent, et je construis des processus qui passent à l\'échelle dans la région DACH.',
      ],
      cta: 'Me contacter',
    },
    figures: [
      { value: '30%', label: 'de chiffre d\'affaires B2B en plus grâce aux commandes automatisées via EDI' },
      { value: '2\'500+', label: 'partenaires retail en région DACH sur une plateforme B2B automatisée' },
      { value: '100%', label: 'd\'effort de support manuel en moins pour les retours B2C en Suisse' },
      { value: '50–60%', label: 'de surcharge en moins dans les équipes de développement grâce à un leadership clair' },
    ],
    education: {
      heading: 'Formation',
      items: [
        { school: 'ZHAW Winterthur, School of Management and Law', period: "Septembre 2025 – Présent · Bachelor of Science (BSc), Technologies de l'information de gestion", grade: 'Note actuelle : 5.25 / 6.0' },
        { school: 'Informatikmittelschule IMS-T (Développement logiciel), BWZ Rapperswil-Jona', period: 'Août 2017 – Juillet 2021 · Maturité professionnelle technique', grade: 'Note : 5.0 / 6.0' },
      ],
    },
    experience: {
      heading: 'Expérience',
      items: [
        { role: 'Product Owner ERP & Logistique', company: 'BLACKROLL AG', period: 'Janvier 2025 – Présent · Remote', bullets: ['Déploiement des commandes EDI et de l\'automatisation B2B sur plus de 2 500 points de vente en Allemagne et en Autriche.', 'Hausse de 30 % du chiffre d\'affaires B2B grâce à des intégrations évolutives et des processus allégés.', 'Gestion des retours entièrement automatisée – effort manuel du service client réduit à zéro.', 'Mise en place de documentation d\'intégration, de release trains et de processus d\'équipe qui fluidifient les transmissions.'] },
        { role: 'Chef de projet IT', company: 'FIREGROUP', period: 'Mai 2022 – Juin 2024 · Hybride', bullets: ['Relaunchs digitaux et configurateurs produits livrés pour des marques de l\'automobile, de l\'outdoor et du mobilier.', 'Direction d\'équipes de cinq spécialistes avec des budgets jusqu\'à six chiffres.', 'Priorité aux workflows clients, à la qualité d\'intégration et à la rentabilité des projets.'] },
        { role: 'Chef de projet', company: 'Onebyte AG', period: 'Août 2021 – Mai 2022 · Sur site', bullets: ['Responsable de bout en bout de projets web avec des budgets jusqu\'à cinq chiffres.', 'Solutions multilingues (i18n) livrées pour une grande chaîne suisse de fitness.', 'Coordination de développeurs frontend, full-stack et backend.'] },
        { role: 'Chef de projet junior & Développeur web', company: 'Netmaster (Schweiz) AG', period: 'Août 2020 – Juillet 2021 · Sur site', bullets: ['Soutien à l\'exploitation web, à l\'hébergement et au support technique client.', 'Plusieurs environnements clients maintenus en ligne et performants.'] },
      ],
    },
    skills: {
      heading: 'Compétences',
      items: [
        { title: 'Leadership technique', bullets: ['Diriger des équipes de développement du kickoff à la mise en production', 'Traduire les objectifs métier en priorités techniques claires', 'Mettre en place des processus d\'équipe pour une livraison reproductible'] },
        { title: 'Flux & structure de données', bullets: ['Concevoir des flux de données reliant l\'ERP et les systèmes partenaires', 'Structurer les données pour qu\'elles restent cohérentes entre systèmes', 'Définir des processus de données que toute l\'équipe peut suivre'] },
        { title: 'Intégration & mise à l\'échelle', bullets: ['Intégrer des systèmes via ERP, API, EDI et middleware', 'Mettre en place des release trains et des processus évolutifs', 'Réduire les erreurs grâce à des transmissions et une documentation claires'] },
        { title: 'Processus & livraison', bullets: ['Standardiser les processus pour une livraison reproductible', 'Rédiger une documentation réellement utilisée', 'Optimiser de bout en bout les processus côté client'] },
      ],
    },
    certifications: {
      heading: 'Certification',
      items: [{ title: 'PMP — Project Management Professional (13 avril 2026)', body: 'Certification reconnue mondialement en pilotage de projet structuré et livraison à grande échelle.' }],
    },
    others: {
      heading: 'Focus',
      items: [
        { title: 'Mes priorités actuelles', bullets: ['IA et données – projets avec Claude et agent prompting', 'Flux de données, structure des données et intégration à grande échelle', 'Livraison technique et intégration de systèmes', 'Faire le lien entre analyse métier et développement'] },
        { title: 'Ouvert aux postes de', bullets: ['Technical Product Owner', 'Business Analyst', 'Chef de projet', 'Data Analyst', 'Spécialiste Data Analytics'] },
      ],
    },
    freetime: { heading: 'Hors du travail', items: ['Fitness', 'Jiu-jitsu brésilien', 'Code'] },
    languages: { heading: 'Langues', items: ['Allemand — Langue maternelle', 'Suisse allemand — Langue maternelle', 'Anglais — Courant (niveau professionnel)', 'Turc — Niveau conversationnel', 'Coréen — Notions de base'] },
    contact: { heading: 'Contact', strong: 'Parlons-en.', body: 'Le plus rapide est de m\'écrire sur LinkedIn – j\'y suis actif régulièrement.', cta: 'Message sur LinkedIn ↗' },
    footer: { madeIn: 'Fabriqué en Suisse', privacy: 'Confidentialité', imprint: 'Mentions légales' },
    ui: { menu: 'Menu', toggleTheme: 'Basculer mode clair / sombre', skip: 'Aller au contenu' },
  },

  it: {
    meta: {
      title: 'Teoman Lam · Technical Product Owner & IT PM, Zurigo',
      description: 'Technical Product Owner certificato PMP a Zurigo: 5 anni di progetti ERP, EDI e integrazione B2B nella regione DACH – flussi di dati, automazione.',
    },
    nav: { experience: 'Esperienza', skills: 'Competenze', education: 'Formazione', certifications: 'Certificazione', others: 'Focus', contact: 'Contatto' },
    pills: ['ERP & EDI', 'Flussi di dati', 'Automazione', 'Integrazione', 'Leadership tecnica'],
    hero: {
      badge: 'Technical Product Owner · Zurigo · PMP',
      h1: 'Trasformo flussi di dati complessi in sistemi che scalano.',
      tagline: [
        'Sono Teo. Da cinque anni guido progetti tecnici per brand dell\'automotive, dell\'outdoor, della logistica retail e della moda – attualmente come Product Owner ERP & Logistica in BLACKROLL.',
        'Il mio lavoro sta dove i processi aziendali incontrano i dati: automatizzo ciò che rallenta i team, strutturo i dati affinché i sistemi comunichino tra loro e costruisco processi che scalano nella regione DACH.',
      ],
      cta: 'Contattami',
    },
    figures: [
      { value: '30%', label: 'di fatturato B2B in più grazie agli ordini automatizzati via EDI' },
      { value: '2\'500+', label: 'partner retail nella regione DACH su un\'unica piattaforma B2B automatizzata' },
      { value: '100%', label: 'di supporto manuale in meno per i resi B2C in Svizzera' },
      { value: '50–60%', label: 'di overhead in meno nei team di sviluppo grazie a una leadership chiara' },
    ],
    education: {
      heading: 'Formazione',
      items: [
        { school: 'ZHAW Winterthur, School of Management and Law', period: 'Settembre 2025 – Presente · Bachelor of Science (BSc), Informatica gestionale', grade: 'Voto attuale: 5.25 / 6.0' },
        { school: 'Informatikmittelschule IMS-T (Sviluppo software), BWZ Rapperswil-Jona', period: 'Agosto 2017 – Luglio 2021 · Maturità professionale tecnica', grade: 'Voto: 5.0 / 6.0' },
      ],
    },
    experience: {
      heading: 'Esperienza',
      items: [
        { role: 'Product Owner ERP & Logistica', company: 'BLACKROLL AG', period: 'Gennaio 2025 – Presente · Remoto', bullets: ['Introdotti ordini EDI e automazione B2B in oltre 2.500 punti vendita in Germania e Austria.', 'Fatturato B2B aumentato del 30% grazie a integrazioni scalabili e processi più snelli.', 'Gestione dei resi completamente automatizzata – lavoro manuale del customer service azzerato.', 'Introdotti documentazione di integrazione, release train e processi di team che riducono gli attriti nei passaggi di consegna.'] },
        { role: 'IT Project Manager', company: 'FIREGROUP', period: 'Maggio 2022 – Giugno 2024 · Ibrido', bullets: ['Realizzati relaunch digitali e configuratori di prodotto per brand automotive, outdoor e d\'arredamento.', 'Guidati team di cinque specialisti con budget fino a sei cifre.', 'Focus su workflow dei clienti, qualità dell\'integrazione e redditività dei progetti.'] },
        { role: 'Project Manager', company: 'Onebyte AG', period: 'Agosto 2021 – Maggio 2022 · In sede', bullets: ['Responsabile end-to-end di progetti web con budget fino a cinque cifre.', 'Realizzate soluzioni multilingue (i18n) per una grande catena svizzera di palestre.', 'Coordinati sviluppatori frontend, full-stack e backend.'] },
        { role: 'Junior Project Manager & Web Developer', company: 'Netmaster (Schweiz) AG', period: 'Agosto 2020 – Luglio 2021 · In sede', bullets: ['Supporto alle operazioni web, all\'hosting e all\'assistenza tecnica ai clienti.', 'Mantenuti online e performanti diversi ambienti dei clienti.'] },
      ],
    },
    skills: {
      heading: 'Competenze',
      items: [
        { title: 'Leadership tecnica', bullets: ['Guidare team di sviluppo dal kickoff al go-live', 'Tradurre gli obiettivi di business in priorità tecniche chiare', 'Creare processi di team che rendono la delivery ripetibile'] },
        { title: 'Flussi & struttura dei dati', bullets: ['Progettare flussi di dati che collegano ERP e sistemi dei partner', 'Strutturare i dati perché restino coerenti tra i sistemi', 'Definire processi sui dati che tutto il team può seguire'] },
        { title: 'Integrazione & scalabilità', bullets: ['Integrare sistemi tramite ERP, API, EDI e middleware', 'Impostare release train e processi scalabili', 'Ridurre gli errori con passaggi di consegna e documentazione chiari'] },
        { title: 'Processi & delivery', bullets: ['Standardizzare i processi per una delivery ripetibile', 'Scrivere documentazione che viene davvero usata', 'Ottimizzare end-to-end i processi rivolti ai clienti'] },
      ],
    },
    certifications: {
      heading: 'Certificazione',
      items: [{ title: 'PMP — Project Management Professional (13 aprile 2026)', body: 'Certificazione riconosciuta a livello mondiale per la guida strutturata dei progetti e la delivery su larga scala.' }],
    },
    others: {
      heading: 'Focus',
      items: [
        { title: 'Su cosa mi concentro', bullets: ['AI e dati – progetti con Claude e agent prompting', 'Flussi di dati, struttura dei dati e integrazione su larga scala', 'Delivery tecnica e integrazione di sistemi', 'Collegare business analysis e sviluppo'] },
        { title: 'Aperto a ruoli come', bullets: ['Technical Product Owner', 'Business Analyst', 'Project Manager', 'Data Analyst', 'Data Analytics Specialist'] },
      ],
    },
    freetime: { heading: 'Fuori dal lavoro', items: ['Fitness', 'Brazilian Jiu-Jitsu', 'Coding'] },
    languages: { heading: 'Lingue', items: ['Tedesco — Madrelingua', 'Svizzero tedesco — Madrelingua', 'Inglese — Fluente (livello professionale)', 'Turco — Conversazionale', 'Coreano — Base'] },
    contact: { heading: 'Contatto', strong: 'Parliamone.', body: 'Il modo più rapido per contattarmi è LinkedIn – sono attivo regolarmente.', cta: 'Scrivimi su LinkedIn ↗' },
    footer: { madeIn: 'Fatto in Svizzera', privacy: 'Privacy', imprint: 'Note legali' },
    ui: { menu: 'Menu', toggleTheme: 'Cambia modalità chiara / scura', skip: 'Vai al contenuto' },
  },

  ja: {
    meta: {
      title: 'テオマン・ラム｜テクニカルプロダクトオーナー（チューリッヒ）',
      description: 'チューリッヒ拠点のPMP認定テクニカルプロダクトオーナー。DACH地域でERP・EDI・B2B統合プロジェクトを5年間リード。データフローと自動化が専門。',
    },
    nav: { experience: '職歴', skills: 'スキル', education: '学歴', certifications: '資格', others: 'フォーカス', contact: 'お問い合わせ' },
    pills: ['ERP & EDI', 'データフロー', '自動化', 'システム統合', 'テクニカルリーダーシップ'],
    hero: {
      badge: 'Technical Product Owner · チューリッヒ · PMP',
      h1: '複雑なデータフローを、スケールするシステムへ。',
      tagline: [
        'テオです。5年間、自動車・アウトドア・リテール物流・ファッションのブランドで技術プロジェクトを率いてきました。現在はBLACKROLLでERP・物流担当のプロダクトオーナーを務めています。',
        'ビジネスプロセスとデータが交わる領域が私の仕事です。チームの足かせになる作業を自動化し、システム同士がつながるようデータを構造化し、DACH地域全体でスケールするプロセスを構築します。',
      ],
      cta: 'お問い合わせ',
    },
    figures: [
      { value: '30%', label: 'EDIによる受注処理の自動化でB2B売上が増加' },
      { value: '2\'500+', label: 'DACH地域の小売パートナーを一つの自動化B2Bプラットフォームに統合' },
      { value: '100%', label: 'スイスのB2C返品対応における手作業サポートを削減' },
      { value: '50–60%', label: '明確なリーダーシップで開発チームのオーバーヘッドを削減' },
    ],
    education: {
      heading: '学歴',
      items: [
        { school: 'ZHAW ウィンタートゥール校、マネジメント・法学部', period: '2025年9月 – 現在 · 理学士（BSc）、ビジネス情報技術', grade: '現在の成績: 5.25 / 6.0' },
        { school: 'Informatikmittelschule IMS-T（ソフトウェア開発）、BWZ Rapperswil-Jona', period: '2017年8月 – 2021年7月 · 技術系連邦職業バカロレア（FVB）', grade: '成績: 5.0 / 6.0' },
      ],
    },
    experience: {
      heading: '職歴',
      items: [
        { role: 'プロダクトオーナー ERP & ロジスティクス', company: 'BLACKROLL AG', period: '2025年1月 – 現在 · リモート', bullets: ['ドイツ・オーストリアの2,500以上の小売拠点にEDI受注とB2B自動化を導入。', 'スケーラブルな統合とプロセスのスリム化でB2B売上を30%向上。', '返品処理を完全自動化し、カスタマーサービスの手作業をゼロに。', '統合ドキュメント、リリーストレイン、チームプロセスを導入し、引き継ぎの摩擦を削減。'] },
        { role: 'ITプロジェクトマネージャー', company: 'FIREGROUP', period: '2022年5月 – 2024年6月 · ハイブリッド', bullets: ['自動車・アウトドア・家具ブランド向けにデジタルリニューアルと製品コンフィギュレーターを提供。', '5名のスペシャリストのチームと6桁規模の予算を管理。', '顧客ワークフロー、統合品質、プロジェクト収益性を重視。'] },
        { role: 'プロジェクトマネージャー', company: 'Onebyte AG', period: '2021年8月 – 2022年5月 · オンサイト', bullets: ['5桁規模の予算のウェブプロジェクトをエンドツーエンドで担当。', 'スイスの大手フィットネスチェーン向けに多言語（i18n）ソリューションを提供。', 'フロントエンド、フルスタック、バックエンドの開発者を調整。'] },
        { role: 'ジュニアプロジェクトマネージャー & ウェブデベロッパー', company: 'Netmaster (Schweiz) AG', period: '2020年8月 – 2021年7月 · オンサイト', bullets: ['ウェブ運用、ホスティング、顧客向け技術サポートを支援。', '複数の顧客環境の稼働とパフォーマンスを維持。'] },
      ],
    },
    skills: {
      heading: 'スキル',
      items: [
        { title: 'テクニカルリーダーシップ', bullets: ['キックオフから本番稼働まで開発チームをリード', 'ビジネス目標を明確な技術的優先事項に落とし込む', 'デリバリーを再現可能にするチームプロセスを構築'] },
        { title: 'データフロー & データ構造', bullets: ['ERPとパートナーシステムをつなぐデータフローを設計', 'システム間で一貫性が保たれるようデータを構造化', 'チーム全員が従えるデータプロセスを定義'] },
        { title: '統合 & スケーリング', bullets: ['ERP・API・EDI・ミドルウェアによるシステム統合', 'リリーストレインとスケーラブルなプロセスの構築', '明確な引き継ぎとドキュメントでエラーを削減'] },
        { title: 'プロセス & デリバリー', bullets: ['再現可能なデリバリーのためのプロセス標準化', '実際に使われるドキュメントの作成', '顧客向けプロセスのエンドツーエンド最適化'] },
      ],
    },
    certifications: {
      heading: '資格',
      items: [{ title: 'PMP — プロジェクトマネジメント・プロフェッショナル（2026年4月13日）', body: '体系的なプロジェクトリーダーシップと大規模デリバリーに関する国際的に認められた資格。' }],
    },
    others: {
      heading: 'フォーカス',
      items: [
        { title: '現在のフォーカス', bullets: ['AIとデータ — Claudeを使ったプロジェクトとエージェントプロンプティング', 'データフロー、データ構造、大規模な統合', 'テクニカルデリバリーとシステム統合', 'ビジネス分析と開発の橋渡し'] },
        { title: '希望する職種', bullets: ['テクニカルプロダクトオーナー', 'ビジネスアナリスト', 'プロジェクトマネージャー', 'データアナリスト', 'データアナリティクススペシャリスト'] },
      ],
    },
    freetime: { heading: 'オフの時間', items: ['フィットネス', 'ブラジリアン柔術', 'コーディング'] },
    languages: { heading: '言語', items: ['ドイツ語 — 母国語', 'スイスドイツ語 — 母国語', '英語 — ビジネスレベル', 'トルコ語 — 日常会話', '韓国語 — 基礎'] },
    contact: { heading: 'お問い合わせ', strong: 'お気軽にどうぞ。', body: 'LinkedInが最も早い連絡手段です。定期的にチェックしています。', cta: 'LinkedInでメッセージ ↗' },
    footer: { madeIn: 'スイス製', privacy: 'プライバシー', imprint: '運営者情報' },
    ui: { menu: 'メニュー', toggleTheme: 'ライト／ダークモード切替', skip: '本文へスキップ' },
  },

  ko: {
    meta: {
      title: '테오만 람 · 테크니컬 프로덕트 오너 & IT PM (취리히)',
      description: '취리히 기반 PMP 인증 테크니컬 프로덕트 오너. DACH 지역에서 5년간 ERP·EDI·B2B 통합 프로젝트 리드. 데이터플로우와 자동화 전문.',
    },
    nav: { experience: '경력', skills: '스킬', education: '학력', certifications: '자격증', others: '포커스', contact: '연락처' },
    pills: ['ERP & EDI', '데이터플로우', '자동화', '시스템 통합', '기술 리더십'],
    hero: {
      badge: 'Technical Product Owner · 취리히 · PMP',
      h1: '복잡한 데이터플로우를 확장 가능한 시스템으로.',
      tagline: [
        '테오입니다. 5년간 자동차, 아웃도어, 리테일 물류, 패션 브랜드의 기술 프로젝트를 이끌어 왔으며, 현재 BLACKROLL에서 ERP·물류 프로덕트 오너로 일하고 있습니다.',
        '제 일은 비즈니스 프로세스와 데이터가 만나는 곳에 있습니다. 팀의 속도를 늦추는 일을 자동화하고, 시스템이 서로 연결되도록 데이터를 구조화하며, DACH 지역 전반으로 확장되는 프로세스를 만듭니다.',
      ],
      cta: '연락하기',
    },
    figures: [
      { value: '30%', label: 'EDI 기반 주문 자동화로 늘어난 B2B 매출' },
      { value: '2\'500+', label: '하나의 자동화 B2B 플랫폼에 연결된 DACH 지역 리테일 파트너' },
      { value: '100%', label: '스위스 B2C 반품의 수작업 지원 업무 감소' },
      { value: '50–60%', label: '명확한 리더십으로 줄인 개발팀 오버헤드' },
    ],
    education: {
      heading: '학력',
      items: [
        { school: 'ZHAW 빈터투어, 경영·법학부', period: '2025년 9월 – 현재 · 이학사(BSc), 비즈니스 정보기술', grade: '현재 성적: 5.25 / 6.0' },
        { school: 'Informatikmittelschule IMS-T (소프트웨어 개발), BWZ Rapperswil-Jona', period: '2017년 8월 – 2021년 7월 · 연방 직업 바칼로레아(FVB) 기술', grade: '성적: 5.0 / 6.0' },
      ],
    },
    experience: {
      heading: '경력',
      items: [
        { role: '프로덕트 오너 ERP & 물류', company: 'BLACKROLL AG', period: '2025년 1월 – 현재 · 원격', bullets: ['독일·오스트리아 2,500개 이상 리테일 매장에 EDI 주문과 B2B 자동화 도입.', '확장 가능한 통합과 간소화된 프로세스로 B2B 매출 30% 성장.', '반품 처리를 완전 자동화해 고객 서비스 수작업을 0으로.', '통합 문서, 릴리스 트레인, 팀 프로세스를 도입해 인수인계 마찰 감소.'] },
        { role: 'IT 프로젝트 매니저', company: 'FIREGROUP', period: '2022년 5월 – 2024년 6월 · 하이브리드', bullets: ['자동차·아웃도어·가구 브랜드의 디지털 리뉴얼과 제품 컨피규레이터 구축.', '5명의 전문가 팀과 최대 6자리 규모 예산 관리.', '고객 워크플로우, 통합 품질, 프로젝트 수익성에 집중.'] },
        { role: '프로젝트 매니저', company: 'Onebyte AG', period: '2021년 8월 – 2022년 5월 · 현장', bullets: ['최대 5자리 규모 예산의 웹 프로젝트를 엔드투엔드로 책임.', '스위스 대형 피트니스 체인을 위한 다국어(i18n) 솔루션 구축.', '프론트엔드, 풀스택, 백엔드 개발자 조율.'] },
        { role: '주니어 프로젝트 매니저 & 웹 개발자', company: 'Netmaster (Schweiz) AG', period: '2020년 8월 – 2021년 7월 · 현장', bullets: ['웹 운영, 호스팅, 고객 기술 지원 업무 지원.', '여러 고객 환경의 가동 시간과 성능 유지.'] },
      ],
    },
    skills: {
      heading: '스킬',
      items: [
        { title: '기술 리더십', bullets: ['킥오프부터 서비스 오픈까지 개발팀 리드', '비즈니스 목표를 명확한 기술 우선순위로 전환', '반복 가능한 딜리버리를 위한 팀 프로세스 구축'] },
        { title: '데이터플로우 & 데이터 구조', bullets: ['ERP와 파트너 시스템을 잇는 데이터플로우 설계', '시스템 간 일관성을 유지하도록 데이터 구조화', '팀 전체가 따를 수 있는 데이터 프로세스 정의'] },
        { title: '통합 & 확장', bullets: ['ERP, API, EDI, 미들웨어를 통한 시스템 통합', '릴리스 트레인과 확장 가능한 프로세스 구축', '명확한 인수인계와 문서화로 오류 감소'] },
        { title: '프로세스 & 딜리버리', bullets: ['반복 가능한 딜리버리를 위한 프로세스 표준화', '실제로 쓰이는 문서 작성', '고객 접점 프로세스의 엔드투엔드 최적화'] },
      ],
    },
    certifications: {
      heading: '자격증',
      items: [{ title: 'PMP — 프로젝트 관리 전문가 (2026년 4월 13일)', body: '체계적인 프로젝트 리더십과 대규모 딜리버리에 대한 국제 공인 자격증.' }],
    },
    others: {
      heading: '포커스',
      items: [
        { title: '현재 집중하는 분야', bullets: ['AI와 데이터 — Claude 프로젝트와 에이전트 프롬프팅', '데이터플로우, 데이터 구조, 대규모 통합', '기술 딜리버리와 시스템 통합', '비즈니스 분석과 개발의 연결'] },
        { title: '희망 직무', bullets: ['테크니컬 프로덕트 오너', '비즈니스 분석가', '프로젝트 매니저', '데이터 분석가', '데이터 분석 전문가'] },
      ],
    },
    freetime: { heading: '업무 외 시간', items: ['피트니스', '브라질리언 주짓수', '코딩'] },
    languages: { heading: '언어', items: ['독일어 — 모국어', '스위스 독일어 — 모국어', '영어 — 유창함 (비즈니스 수준)', '터키어 — 일상 회화', '한국어 — 기초'] },
    contact: { heading: '연락처', strong: '편하게 연락 주세요.', body: '가장 빠른 연락 방법은 LinkedIn입니다. 정기적으로 확인하고 있습니다.', cta: 'LinkedIn으로 메시지 ↗' },
    footer: { madeIn: '스위스에서 제작', privacy: '개인정보', imprint: '운영자 정보' },
    ui: { menu: '메뉴', toggleTheme: '라이트 / 다크 모드 전환', skip: '본문으로 건너뛰기' },
  },

  tr: {
    meta: {
      title: 'Teoman Lam · Teknik Ürün Sahibi & BT Proje Yöneticisi',
      description: 'Zürih\'te PMP sertifikalı teknik ürün sahibi: DACH bölgesinde 5 yıllık ERP, EDI ve B2B entegrasyon projeleri – veri akışları ve otomasyon.',
    },
    nav: { experience: 'Deneyim', skills: 'Beceriler', education: 'Eğitim', certifications: 'Sertifika', others: 'Odak', contact: 'İletişim' },
    pills: ['ERP & EDI', 'Veri Akışları', 'Otomasyon', 'Entegrasyon', 'Teknik Liderlik'],
    hero: {
      badge: 'Technical Product Owner · Zürih · PMP',
      h1: 'Karmaşık veri akışlarını ölçeklenen sistemlere dönüştürüyorum.',
      tagline: [
        'Ben Teo. Beş yıldır otomotiv, outdoor, perakende lojistiği ve moda markaları için teknik projeler yönetiyorum – şu anda BLACKROLL\'da ERP & Lojistik Ürün Sahibi olarak.',
        'İşim, iş süreçlerinin veriyle buluştuğu yerde: Ekipleri yavaşlatan işleri otomatikleştiriyor, sistemlerin birbiriyle konuşabilmesi için veriyi yapılandırıyor ve DACH bölgesinde ölçeklenen süreçler kuruyorum.',
      ],
      cta: 'İletişime geç',
    },
    figures: [
      { value: '30%', label: 'EDI ile otomatikleşen sipariş süreçleri sayesinde daha fazla B2B gelir' },
      { value: '2\'500+', label: 'DACH bölgesinde tek bir otomatik B2B platformundaki perakende iş ortağı' },
      { value: '100%', label: 'İsviçre\'deki B2C iadelerinde daha az manuel destek yükü' },
      { value: '50–60%', label: 'net liderlik sayesinde geliştirme ekiplerinde daha az ek yük' },
    ],
    education: {
      heading: 'Eğitim',
      items: [
        { school: 'ZHAW Winterthur, İşletme ve Hukuk Fakültesi', period: 'Eylül 2025 – Devam Ediyor · Bilim Lisansı (BSc), İşletme Bilişim Teknolojisi', grade: 'Mevcut Not: 5.25 / 6.0' },
        { school: 'Informatikmittelschule IMS-T (Yazılım Geliştirme), BWZ Rapperswil-Jona', period: 'Ağustos 2017 – Temmuz 2021 · Federal Mesleki Bakalorya (FVB) teknik', grade: 'Not: 5.0 / 6.0' },
      ],
    },
    experience: {
      heading: 'Deneyim',
      items: [
        { role: 'Ürün Sahibi ERP & Lojistik', company: 'BLACKROLL AG', period: 'Ocak 2025 – Devam Ediyor · Uzaktan', bullets: ['Almanya ve Avusturya\'daki 2.500\'den fazla perakende noktasına EDI siparişleri ve B2B otomasyonu getirdim.', 'Ölçeklenebilir entegrasyonlar ve sadeleşmiş süreçlerle B2B gelirini %30 artırdım.', 'İade süreçlerini tamamen otomatikleştirdim – müşteri hizmetlerindeki manuel iş sıfıra indi.', 'Entegrasyon dokümantasyonu, release train\'ler ve ekip süreçleri kurarak devir teslimlerdeki sürtünmeyi azalttım.'] },
        { role: 'BT Proje Müdürü', company: 'FIREGROUP', period: 'Mayıs 2022 – Haziran 2024 · Hibrit', bullets: ['Otomotiv, outdoor ve mobilya markaları için dijital yenilemeler ve ürün yapılandırıcıları hayata geçirdim.', 'Beş uzmandan oluşan ekipleri ve altı haneli bütçeleri yönettim.', 'Müşteri iş akışlarına, entegrasyon kalitesine ve proje kârlılığına odaklandım.'] },
        { role: 'Proje Müdürü', company: 'Onebyte AG', period: 'Ağustos 2021 – Mayıs 2022 · Yerinde', bullets: ['Beş haneli bütçeye kadar web projelerinin uçtan uca sorumluluğunu üstlendim.', 'Büyük bir İsviçre spor salonu zinciri için çok dilli (i18n) çözümler geliştirdim.', 'Frontend, full-stack ve backend geliştiricilerini koordine ettim.'] },
        { role: 'Junior Proje Müdürü & Web Geliştirici', company: 'Netmaster (Schweiz) AG', period: 'Ağustos 2020 – Temmuz 2021 · Yerinde', bullets: ['Web operasyonlarına, barındırmaya ve teknik müşteri desteğine katkı verdim.', 'Birden fazla müşteri ortamını çevrimiçi ve hızlı tuttum.'] },
      ],
    },
    skills: {
      heading: 'Beceriler',
      items: [
        { title: 'Teknik Liderlik', bullets: ['Geliştirme ekiplerini başlangıçtan canlıya alışa kadar yönetmek', 'İş hedeflerini net teknik önceliklere dönüştürmek', 'Teslimatı tekrarlanabilir kılan ekip süreçleri kurmak'] },
        { title: 'Veri Akışları & Veri Yapısı', bullets: ['ERP ve iş ortağı sistemlerini bağlayan veri akışları tasarlamak', 'Veriyi sistemler arasında tutarlı kalacak şekilde yapılandırmak', 'Tüm ekibin izleyebileceği veri süreçleri tanımlamak'] },
        { title: 'Entegrasyon & Ölçeklendirme', bullets: ['ERP, API, EDI ve ara katman yazılımıyla sistem entegrasyonu', 'Release train\'ler ve ölçeklenebilir süreçler kurmak', 'Net devir teslim ve dokümantasyonla hataları azaltmak'] },
        { title: 'Süreç & Teslimat', bullets: ['Tekrarlanabilir teslimat için süreçleri standartlaştırmak', 'Gerçekten kullanılan dokümantasyon yazmak', 'Müşteriye dönük süreçleri uçtan uca optimize etmek'] },
      ],
    },
    certifications: {
      heading: 'Sertifika',
      items: [{ title: 'PMP — Proje Yönetimi Profesyoneli (13 Nisan 2026)', body: 'Yapılandırılmış proje liderliği ve büyük ölçekli teslimat alanında uluslararası tanınan sertifika.' }],
    },
    others: {
      heading: 'Odak',
      items: [
        { title: 'Odaklandığım alanlar', bullets: ['Yapay zeka ve veri — Claude projeleri ve ajan yönlendirme', 'Veri akışları, veri yapısı ve büyük ölçekli entegrasyon', 'Teknik teslimat ve sistem entegrasyonu', 'İş analizi ile yazılım geliştirme arasında köprü kurmak'] },
        { title: 'Açık olduğum pozisyonlar', bullets: ['Teknik Ürün Sahibi', 'İş Analisti', 'Proje Müdürü', 'Veri Analisti', 'Veri Analitiği Uzmanı'] },
      ],
    },
    freetime: { heading: 'İş Dışında', items: ['Fitness', 'Brezilya Jiu-Jitsu', 'Kodlama'] },
    languages: { heading: 'Diller', items: ['Almanca — Anadil', 'İsviçre Almancası — Anadil', 'İngilizce — Akıcı (iş düzeyinde)', 'Türkçe — Anadil', 'Korece — Temel'] },
    contact: { heading: 'İletişim', strong: 'Konuşalım.', body: 'Bana ulaşmanın en hızlı yolu LinkedIn – orada düzenli olarak aktifim.', cta: 'LinkedIn\'den mesaj gönder ↗' },
    footer: { madeIn: 'İsviçre\'de Yapıldı', privacy: 'Gizlilik', imprint: 'Künye' },
    ui: { menu: 'Menü', toggleTheme: 'Açık / koyu mod değiştir', skip: 'İçeriğe geç' },
  },
};
