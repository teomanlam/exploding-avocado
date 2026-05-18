export type Lang = 'en' | 'de' | 'fr' | 'it' | 'ja' | 'ko' | 'tr';

export const langMeta: Record<Lang, { label: string; path: string; flag: string }> = {
  en: { label: 'EN', path: '/',     flag: 'gb' },
  de: { label: 'DE', path: '/de/', flag: 'de' },
  fr: { label: 'FR', path: '/fr/', flag: 'fr' },
  it: { label: 'IT', path: '/it/', flag: 'it' },
  ja: { label: 'JA', path: '/ja/', flag: 'jp' },
  ko: { label: 'KO', path: '/ko/', flag: 'kr' },
  tr: { label: 'TR', path: '/tr/', flag: 'tr' },
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
  footer: { madeIn: string };
}

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'Teoman Lam | Dataflows & Technical Delivery',
      description: 'IT Project Manager and technical delivery lead based in the DACH region. Specializing in dataflows, data structure, and process scaling.',
    },
    nav: { education: 'Education', experience: 'Experience', skills: 'Skills', certifications: 'Certifications', others: 'Others', contact: 'Contact' },
    pills: ['Technical Leadership', 'Dataflows', 'Data Structure', 'Integration', 'Scaling'],
    hero: {
      badge: 'Technical Leadership · Dataflows · Data Structure',
      h1: 'Leading technical teams to build and scale dataflows with strong data structure and integration discipline.',
      tagline: [
        'I am Teo. For five years I have led technical projects across automotive, outdoor, retail logistics and fashion brands. I transitioned into business process optimization and built processes that scale internationally, mainly in the DACH region.',
        'My core focus is automation and optimizing data structures and dataflows.',
      ],
      cta: "Let's connect",
    },
    figures: [
      { value: '30%', label: 'B2B revenue increase through fully automated order processes (EDI)' },
      { value: "2'500+", label: 'Retail members (DACH) supported by an integrated B2B onboarding and automation solution' },
      { value: '100%', label: 'Reduction in Swiss B2C returns support effort through complete automation' },
      { value: '50–60%', label: 'Average overhead reduction in development teams through effective team leadership' },
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
        { role: 'Product Owner ERP & Logistics', company: 'BLACKROLL AG', period: 'January 2025 – Present · Remote', bullets: ['Led EDI procurement automation and B2B rollout for 2,500+ locations in Germany and Austria.', 'Delivered 30% revenue growth through scalable integration and process improvements.', 'Automated returns handling across all dimensions, eliminating manual customer care effort.', 'Built integration documentation, release trains, and team processes to reduce handoff friction.'] },
        { role: 'IT Project Manager', company: 'FIREGROUP', period: 'May 2022 – June 2024 · Hybrid', bullets: ['Delivered digital relaunches and product configurators for automotive, outdoor, and furniture clients.', 'Managed teams of 5 specialists and budgets up to six figures.', 'Focused on customer-facing workflows, integration quality, and project profitability.'] },
        { role: 'Project Manager', company: 'Onebyte AG', period: 'August 2021 – May 2022 · On-site', bullets: ['Led end-to-end delivery for web projects with up to five-figure budgets.', 'Delivered localized i18n solutions for a major Swiss gym chain.', 'Coordinated developers across frontend, full stack, and backend workstreams.'] },
        { role: 'Junior Project Manager & Web Developer', company: 'Netmaster (Schweiz) AG', period: 'August 2020 – July 2021 · On-site', bullets: ['Supported web project operations, hosting stability, and client technical support.', 'Maintained uptime and performance for multiple customer environments.'] },
      ],
    },
    skills: {
      heading: 'Skills',
      items: [
        { title: 'Technical Leadership', bullets: ['Leading technical teams through delivery and integration', 'Aligning stakeholders, engineers, and business goals', 'Driving execution with clear technical ownership', 'Building team processes for repeatable delivery'] },
        { title: 'Dataflows & Structure', bullets: ['Designing and scaling dataflows across systems', 'Structuring data for consistency and integration', 'Defining technical data process workflows', 'Supporting data-driven operations with clean architecture'] },
        { title: 'Integration & Scaling', bullets: ['Systems integration across ERP, APIs, and middleware', 'Process scaling and release train definition', 'Operational handoff and documentation systems', 'Quality and error reduction in technical workflows'] },
        { title: 'Process & Delivery', bullets: ['Scalable process definition', 'Technical documentation and knowledge base design', 'Standardization for repeatable delivery', 'Customer-facing process optimization'] },
      ],
    },
    certifications: {
      heading: 'Certifications',
      items: [{ title: 'PMP — Project Management Professional (13 April 2026)', body: 'Certified in structured project leadership and large-scale delivery.' }],
    },
    others: {
      heading: 'Focus & Interests',
      items: [
        { title: 'Career focus', bullets: ['AI and Data — Claude projects and agent prompting', 'Dataflows, data structure, and integration scaling', 'Technical delivery and systems integration', 'Business analysis and data-technical collaboration'] },
        { title: 'Seeking roles', bullets: ['Business analyst', 'Data analyst', 'Technical product owner', 'Project manager', 'Data analytics specialist'] },
      ],
    },
    freetime: { heading: 'Freetime', items: ['Fitness', 'Brazilian Jiu Jitsu', 'Coding'] },
    languages: { heading: 'Languages', items: ['German — Native', 'Swiss German — Native', 'English — Negotiation safe', 'Türkçe — Conversational', 'Korean — Basic'] },
    contact: { heading: 'Contact', strong: 'Happy to chat anytime.', body: 'I am available on LinkedIn and regularly active.', cta: 'Visit LinkedIn ↗' },
    footer: { madeIn: 'Made in Switzerland' },
  },

  de: {
    meta: {
      title: 'Teoman Lam | Datenflüsse & Technische Lieferung',
      description: 'IT-Projektmanager und technischer Lieferleiter im DACH-Raum. Spezialisiert auf Datenflüsse, Datenstruktur und Prozessskalierung.',
    },
    nav: { education: 'Ausbildung', experience: 'Erfahrung', skills: 'Fähigkeiten', certifications: 'Zertifizierungen', others: 'Weiteres', contact: 'Kontakt' },
    pills: ['Technische Führung', 'Datenflüsse', 'Datenstruktur', 'Integration', 'Skalierung'],
    hero: {
      badge: 'Technische Führung · Datenflüsse · Datenstruktur',
      h1: 'Technische Teams führen, um Datenflüsse mit starker Datenstruktur und Integrationsdisziplin aufzubauen und zu skalieren.',
      tagline: [
        'Ich bin Teo. Seit fünf Jahren leite ich technische Projekte in den Bereichen Automotive, Outdoor, Retail-Logistik und Mode. Ich habe mich auf Geschäftsprozessoptimierung spezialisiert und Prozesse aufgebaut, die international skalieren – hauptsächlich im DACH-Raum.',
        'Mein Kernfokus liegt auf Automatisierung sowie der Optimierung von Datenstrukturen und Datenflüssen.',
      ],
      cta: 'Kontakt aufnehmen',
    },
    figures: [
      { value: '30%', label: 'B2B-Umsatzsteigerung durch vollautomatisierte Bestellprozesse (EDI)' },
      { value: "2'500+", label: 'Retail-Mitglieder (DACH) unterstützt durch eine integrierte B2B-Onboarding- und Automatisierungslösung' },
      { value: '100%', label: 'Reduktion des Supportaufwands für Schweizer B2C-Retouren durch vollständige Automatisierung' },
      { value: '50–60%', label: 'Durchschnittliche Overhead-Reduktion in Entwicklungsteams durch effektive Teamführung' },
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
        { role: 'Product Owner ERP & Logistik', company: 'BLACKROLL AG', period: 'Januar 2025 – Heute · Remote', bullets: ['Leitete die EDI-Beschaffungsautomatisierung und den B2B-Rollout für 2.500+ Standorte in Deutschland und Österreich.', 'Erzielte 30% Umsatzwachstum durch skalierbare Integration und Prozessverbesserungen.', 'Automatisierte die Retourenabwicklung vollständig und eliminierte den manuellen Kundenservice-Aufwand.', 'Erstellte Integrationsdokumentation, Release-Trains und Teamprozesse zur Reduzierung von Übergabereibungen.'] },
        { role: 'IT-Projektmanager', company: 'FIREGROUP', period: 'Mai 2022 – Juni 2024 · Hybrid', bullets: ['Lieferte digitale Relaunches und Produktkonfiguratoren für Automotive-, Outdoor- und Möbelkunden.', 'Führte Teams von 5 Spezialisten mit Budgets bis zu sechsstelligen Beträgen.', 'Fokus auf kundenseitige Workflows, Integrationsqualität und Projektrentabilität.'] },
        { role: 'Projektmanager', company: 'Onebyte AG', period: 'August 2021 – Mai 2022 · Vor Ort', bullets: ['Leitete End-to-End-Lieferung für Webprojekte mit Budgets bis fünfstellig.', 'Realisierte lokalisierte i18n-Lösungen für eine grosse Schweizer Fitnessstudio-Kette.', 'Koordinierte Entwickler über Frontend-, Full-Stack- und Backend-Workstreams.'] },
        { role: 'Junior Projektmanager & Web Developer', company: 'Netmaster (Schweiz) AG', period: 'August 2020 – Juli 2021 · Vor Ort', bullets: ['Unterstützte Webprojektbetrieb, Hosting-Stabilität und technischen Kundensupport.', 'Sicherte Uptime und Performance für mehrere Kundenumgebungen.'] },
      ],
    },
    skills: {
      heading: 'Fähigkeiten',
      items: [
        { title: 'Technische Führung', bullets: ['Technische Teams durch Lieferung und Integration führen', 'Stakeholder, Ingenieure und Geschäftsziele abstimmen', 'Umsetzung mit klarer technischer Verantwortung vorantreiben', 'Teamprozesse für wiederholbare Lieferung aufbauen'] },
        { title: 'Datenflüsse & Struktur', bullets: ['Datenflüsse systemübergreifend entwerfen und skalieren', 'Daten für Konsistenz und Integration strukturieren', 'Technische Datenprozess-Workflows definieren', 'Datengetriebene Operationen mit sauberer Architektur unterstützen'] },
        { title: 'Integration & Skalierung', bullets: ['Systemintegration über ERPs, APIs und Middleware', 'Prozessskalierung und Release-Train-Definition', 'Operative Übergabe und Dokumentationssysteme', 'Qualitäts- und Fehlerreduktion in technischen Workflows'] },
        { title: 'Prozess & Lieferung', bullets: ['Skalierbare Prozessdefinition', 'Technische Dokumentation und Wissensbasisdesign', 'Standardisierung für wiederholbare Lieferung', 'Kundenseitige Prozessoptimierung'] },
      ],
    },
    certifications: {
      heading: 'Zertifizierungen',
      items: [{ title: 'PMP — Project Management Professional (13. April 2026)', body: 'Zertifiziert in strukturierter Projektführung und grossmassstäblicher Lieferung.' }],
    },
    others: {
      heading: 'Fokus & Interessen',
      items: [
        { title: 'Karrierefokus', bullets: ['KI und Daten — Claude-Projekte und Agent-Prompting', 'Datenflüsse, Datenstruktur und Integrationsskalierung', 'Technische Lieferung und Systemintegration', 'Geschäftsanalyse und datentechnische Zusammenarbeit'] },
        { title: 'Gesuchte Stellen', bullets: ['Business Analyst', 'Datenanalyst', 'Technical Product Owner', 'Projektmanager', 'Data Analytics Spezialist'] },
      ],
    },
    freetime: { heading: 'Freizeit', items: ['Fitness', 'Brasilianisches Jiu Jitsu', 'Programmieren'] },
    languages: { heading: 'Sprachen', items: ['Deutsch — Muttersprache', 'Schweizerdeutsch — Muttersprache', 'Englisch — Verhandlungssicher', 'Türkisch — Konversationsniveau', 'Koreanisch — Grundkenntnisse'] },
    contact: { heading: 'Kontakt', strong: 'Jederzeit gesprächsbereit.', body: 'Ich bin auf LinkedIn verfügbar und regelmässig aktiv.', cta: 'LinkedIn besuchen ↗' },
    footer: { madeIn: 'Hergestellt in der Schweiz' },
  },

  fr: {
    meta: {
      title: 'Teoman Lam | Flux de données & Livraison technique',
      description: "Chef de projet IT et responsable de livraison technique dans la région DACH. Spécialisé dans les flux de données, la structure des données et la mise à l'échelle.",
    },
    nav: { education: 'Formation', experience: 'Expérience', skills: 'Compétences', certifications: 'Certifications', others: 'Autres', contact: 'Contact' },
    pills: ['Leadership technique', 'Flux de données', 'Structure des données', 'Intégration', 'Mise à l\'échelle'],
    hero: {
      badge: 'Leadership technique · Flux de données · Structure des données',
      h1: "Diriger des équipes techniques pour construire et faire évoluer des flux de données avec une solide structure de données et une discipline d'intégration.",
      tagline: [
        "Je suis Teo. Depuis cinq ans, je dirige des projets techniques dans les secteurs automobile, outdoor, logistique retail et mode. Je me suis spécialisé dans l'optimisation des processus métier et j'ai construit des processus qui s'adaptent à l'international, principalement dans la région DACH.",
        "Mon objectif principal est l'automatisation et l'optimisation des structures de données et des flux de données.",
      ],
      cta: 'Prenons contact',
    },
    figures: [
      { value: '30%', label: "Augmentation du chiffre d'affaires B2B grâce à des processus de commande entièrement automatisés (EDI)" },
      { value: "2'500+", label: "Membres retail (DACH) soutenus par une solution intégrée d'onboarding B2B et d'automatisation" },
      { value: '100%', label: "Réduction de l'effort de support B2C suisse grâce à une automatisation complète des retours" },
      { value: '50–60%', label: "Réduction moyenne des frais généraux dans les équipes de développement grâce à un leadership d'équipe efficace" },
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
        { role: 'Product Owner ERP & Logistique', company: 'BLACKROLL AG', period: 'Janvier 2025 – Présent · Remote', bullets: ["Dirigé l'automatisation des achats EDI et le déploiement B2B pour 2 500+ sites en Allemagne et en Autriche.", "Généré 30% de croissance du chiffre d'affaires grâce à une intégration évolutive et des améliorations de processus.", "Automatisé le traitement des retours sur toutes les dimensions, éliminant l'effort manuel du service client.", "Créé la documentation d'intégration, les trains de livraison et les processus d'équipe pour réduire les frictions."] },
        { role: 'Chef de projet IT', company: 'FIREGROUP', period: 'Mai 2022 – Juin 2024 · Hybride', bullets: ['Livré des relances digitales et des configurateurs de produits pour des clients automobile, outdoor et ameublement.', 'Géré des équipes de 5 spécialistes avec des budgets à six chiffres.', "Axé sur les workflows clients, la qualité d'intégration et la rentabilité des projets."] },
        { role: 'Chef de projet', company: 'Onebyte AG', period: 'Août 2021 – Mai 2022 · Sur site', bullets: ["Dirigé la livraison end-to-end pour des projets web avec des budgets à cinq chiffres.", 'Livré des solutions i18n localisées pour une grande chaîne de salles de sport suisse.', 'Coordonné les développeurs frontend, full stack et backend.'] },
        { role: 'Chef de projet junior & Développeur web', company: 'Netmaster (Schweiz) AG', period: 'Août 2020 – Juillet 2021 · Sur site', bullets: ["Soutenu les opérations de projets web, la stabilité de l'hébergement et le support technique client.", 'Maintenu la disponibilité et les performances pour plusieurs environnements clients.'] },
      ],
    },
    skills: {
      heading: 'Compétences',
      items: [
        { title: 'Leadership technique', bullets: ["Diriger des équipes techniques dans la livraison et l'intégration", 'Aligner les parties prenantes, les ingénieurs et les objectifs métier', "Piloter l'exécution avec une propriété technique claire", 'Construire des processus d\'équipe pour une livraison reproductible'] },
        { title: 'Flux de données & Structure', bullets: ['Concevoir et faire évoluer les flux de données entre systèmes', "Structurer les données pour la cohérence et l'intégration", 'Définir les workflows de processus de données techniques', 'Soutenir les opérations pilotées par les données avec une architecture propre'] },
        { title: "Intégration & Mise à l'échelle", bullets: ['Intégration de systèmes via ERP, APIs et middleware', 'Mise à l\'échelle des processus et définition des trains de livraison', 'Systèmes de transfert opérationnel et de documentation', 'Réduction des erreurs et amélioration de la qualité dans les workflows techniques'] },
        { title: 'Processus & Livraison', bullets: ['Définition de processus évolutifs', 'Documentation technique et conception de base de connaissances', 'Standardisation pour une livraison reproductible', 'Optimisation des processus côté client'] },
      ],
    },
    certifications: {
      heading: 'Certifications',
      items: [{ title: 'PMP — Project Management Professional (13 avril 2026)', body: 'Certifié en gestion de projet structurée et livraison à grande échelle.' }],
    },
    others: {
      heading: 'Focus & Intérêts',
      items: [
        { title: 'Focus carrière', bullets: ["IA et données — projets Claude et agent prompting", "Flux de données, structure des données et mise à l'échelle de l'intégration", 'Livraison technique et intégration de systèmes', 'Analyse métier et collaboration données-technique'] },
        { title: 'Postes recherchés', bullets: ['Analyste métier', 'Analyste de données', 'Product Owner technique', 'Chef de projet', 'Spécialiste en analyse de données'] },
      ],
    },
    freetime: { heading: 'Temps libre', items: ['Fitness', 'Jiu Jitsu brésilien', 'Programmation'] },
    languages: { heading: 'Langues', items: ['Allemand — Langue maternelle', 'Alémanique — Langue maternelle', 'Anglais — Niveau négociation', 'Turc — Niveau conversationnel', 'Coréen — Notions de base'] },
    contact: { heading: 'Contact', strong: 'Disponible pour échanger à tout moment.', body: 'Je suis disponible sur LinkedIn et régulièrement actif.', cta: 'Visiter LinkedIn ↗' },
    footer: { madeIn: 'Fabriqué en Suisse' },
  },

  it: {
    meta: {
      title: 'Teoman Lam | Flussi di dati & Consegna tecnica',
      description: 'Project Manager IT e responsabile di consegna tecnica nella regione DACH. Specializzato in flussi di dati, struttura dei dati e scalabilità dei processi.',
    },
    nav: { education: 'Formazione', experience: 'Esperienza', skills: 'Competenze', certifications: 'Certificazioni', others: 'Altro', contact: 'Contatto' },
    pills: ['Leadership tecnica', 'Flussi di dati', 'Struttura dei dati', 'Integrazione', 'Scalabilità'],
    hero: {
      badge: 'Leadership tecnica · Flussi di dati · Struttura dei dati',
      h1: "Guidare team tecnici per costruire e scalare i flussi di dati con una solida struttura dei dati e disciplina di integrazione.",
      tagline: [
        "Sono Teo. Da cinque anni guido progetti tecnici nel settore automotive, outdoor, logistica retail e moda. Mi sono specializzato nell'ottimizzazione dei processi aziendali e ho costruito processi che scalano a livello internazionale, principalmente nella regione DACH.",
        "Il mio focus principale è l'automazione e l'ottimizzazione delle strutture dati e dei flussi di dati.",
      ],
      cta: 'Connettiamoci',
    },
    figures: [
      { value: '30%', label: "Aumento del fatturato B2B attraverso processi d'ordine completamente automatizzati (EDI)" },
      { value: "2'500+", label: 'Membri retail (DACH) supportati da una soluzione integrata di onboarding B2B e automazione' },
      { value: '100%', label: 'Riduzione dello sforzo di supporto B2C svizzero grazie alla completa automazione dei resi' },
      { value: '50–60%', label: 'Riduzione media dei costi generali nei team di sviluppo grazie a una leadership efficace' },
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
        { role: 'Product Owner ERP & Logistica', company: 'BLACKROLL AG', period: 'Gennaio 2025 – Presente · Remoto', bullets: ["Guidato l'automazione degli acquisti EDI e il rollout B2B per 2.500+ sedi in Germania e Austria.", 'Generato il 30% di crescita dei ricavi attraverso integrazione scalabile e miglioramenti dei processi.', "Automatizzato la gestione dei resi su tutte le dimensioni, eliminando lo sforzo manuale del servizio clienti.", 'Creato documentazione di integrazione, release train e processi di team per ridurre le frizioni.'] },
        { role: 'IT Project Manager', company: 'FIREGROUP', period: 'Maggio 2022 – Giugno 2024 · Ibrido', bullets: ['Consegnato rilanci digitali e configuratori di prodotto per clienti automotive, outdoor e arredamento.', 'Gestito team di 5 specialisti con budget fino a sei cifre.', "Focus sui flussi di lavoro lato cliente, qualità dell'integrazione e redditività del progetto."] },
        { role: 'Project Manager', company: 'Onebyte AG', period: 'Agosto 2021 – Maggio 2022 · In sede', bullets: ['Guidato la consegna end-to-end per progetti web con budget fino a cinque cifre.', 'Consegnato soluzioni i18n localizzate per una grande catena svizzera di palestre.', 'Coordinato sviluppatori frontend, full stack e backend.'] },
        { role: 'Junior Project Manager & Web Developer', company: 'Netmaster (Schweiz) AG', period: 'Agosto 2020 – Luglio 2021 · In sede', bullets: ["Supportato le operazioni di progetto web, la stabilità dell'hosting e il supporto tecnico ai clienti.", 'Mantenuto uptime e prestazioni per più ambienti cliente.'] },
      ],
    },
    skills: {
      heading: 'Competenze',
      items: [
        { title: 'Leadership tecnica', bullets: ["Guidare team tecnici attraverso la consegna e l'integrazione", 'Allineare stakeholder, ingegneri e obiettivi aziendali', 'Guidare l\'esecuzione con chiara ownership tecnica', 'Costruire processi di team per una consegna ripetibile'] },
        { title: 'Flussi di dati & Struttura', bullets: ['Progettare e scalare i flussi di dati tra sistemi', "Strutturare i dati per coerenza e integrazione", 'Definire flussi di lavoro di processo dati tecnici', 'Supportare operazioni data-driven con architettura pulita'] },
        { title: 'Integrazione & Scalabilità', bullets: ['Integrazione di sistemi tramite ERP, API e middleware', 'Scalabilità dei processi e definizione del release train', 'Sistemi di trasferimento operativo e documentazione', 'Riduzione di qualità ed errori nei flussi di lavoro tecnici'] },
        { title: 'Processo & Consegna', bullets: ['Definizione di processi scalabili', 'Documentazione tecnica e progettazione della knowledge base', 'Standardizzazione per consegna ripetibile', 'Ottimizzazione dei processi lato cliente'] },
      ],
    },
    certifications: {
      heading: 'Certificazioni',
      items: [{ title: 'PMP — Project Management Professional (13 aprile 2026)', body: 'Certificato in gestione strutturata dei progetti e consegna su larga scala.' }],
    },
    others: {
      heading: 'Focus & Interessi',
      items: [
        { title: 'Focus carriera', bullets: ['AI e dati — progetti Claude e agent prompting', "Flussi di dati, struttura dei dati e scalabilità dell'integrazione", 'Consegna tecnica e integrazione di sistemi', 'Analisi aziendale e collaborazione dati-tecnica'] },
        { title: 'Ruoli ricercati', bullets: ['Analista aziendale', 'Analista dati', 'Technical product owner', 'Project manager', 'Specialista in analisi dati'] },
      ],
    },
    freetime: { heading: 'Tempo libero', items: ['Fitness', 'Brazilian Jiu Jitsu', 'Programmazione'] },
    languages: { heading: 'Lingue', items: ['Tedesco — Madrelingua', 'Svizzero tedesco — Madrelingua', 'Inglese — Livello negoziazione', 'Turco — Conversazionale', 'Coreano — Base'] },
    contact: { heading: 'Contatto', strong: 'Disponibile a chattare in qualsiasi momento.', body: 'Sono disponibile su LinkedIn e regolarmente attivo.', cta: 'Visita LinkedIn ↗' },
    footer: { madeIn: 'Fatto in Svizzera' },
  },

  ja: {
    meta: {
      title: 'テオマン・ラム | データフロー & テクニカルデリバリー',
      description: 'DACHリージョンを拠点とするITプロジェクトマネージャー・テクニカルデリバリーリード。データフロー、データ構造、プロセスのスケーリングを専門とする。',
    },
    nav: { education: '学歴', experience: '職歴', skills: 'スキル', certifications: '資格', others: 'その他', contact: 'お問い合わせ' },
    pills: ['テクニカルリーダーシップ', 'データフロー', 'データ構造', 'インテグレーション', 'スケーリング'],
    hero: {
      badge: 'テクニカルリーダーシップ · データフロー · データ構造',
      h1: '強力なデータ構造と統合規律を持つデータフローを構築・拡張するための技術チームをリード。',
      tagline: [
        '私はテオです。過去5年間、自動車、アウトドア、小売物流、ファッションブランドにわたる技術プロジェクトをリードしてきました。ビジネスプロセスの最適化に転向し、主にDACH地域で国際的にスケールするプロセスを構築しました。',
        '私の中心的なフォーカスは、自動化とデータ構造・データフローの最適化です。',
      ],
      cta: 'つながりましょう',
    },
    figures: [
      { value: '30%', label: 'EDIによる完全自動化された注文プロセスを通じたB2B売上増加' },
      { value: "2'500+", label: '統合されたB2BオンボーディングおよびオートメーションソリューションによってサポートされたDACHの小売メンバー' },
      { value: '100%', label: '完全な自動化によるスイスB2C返品サポート工数の削減' },
      { value: '50–60%', label: '効果的なチームリーダーシップによる開発チームの平均オーバーヘッド削減' },
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
        { role: 'プロダクトオーナー ERP & ロジスティクス', company: 'BLACKROLL AG', period: '2025年1月 – 現在 · リモート', bullets: ['ドイツとオーストリアの2,500以上の拠点向けにEDI調達自動化とB2Bロールアウトをリード。', 'スケーラブルな統合とプロセス改善により30%の売上成長を実現。', 'あらゆる側面での返品処理を自動化し、手動のカスタマーケア工数を排除。', '統合ドキュメント、リリーストレイン、チームプロセスを構築してハンドオフの摩擦を削減。'] },
        { role: 'ITプロジェクトマネージャー', company: 'FIREGROUP', period: '2022年5月 – 2024年6月 · ハイブリッド', bullets: ['自動車、アウトドア、家具クライアント向けのデジタルリローンチとプロダクトコンフィギュレーターを納品。', '5名のスペシャリストチームと6桁の予算を管理。', '顧客向けワークフロー、統合品質、プロジェクト収益性に注力。'] },
        { role: 'プロジェクトマネージャー', company: 'Onebyte AG', period: '2021年8月 – 2022年5月 · オンサイト', bullets: ['5桁の予算を持つウェブプロジェクトのエンドツーエンドデリバリーをリード。', 'スイスの大手フィットネスチェーン向けにローカライズされたi18nソリューションを納品。', 'フロントエンド、フルスタック、バックエンドの開発者を調整。'] },
        { role: 'ジュニアプロジェクトマネージャー & ウェブデベロッパー', company: 'Netmaster (Schweiz) AG', period: '2020年8月 – 2021年7月 · オンサイト', bullets: ['ウェブプロジェクト運営、ホスティング安定性、クライアント技術サポートを支援。', '複数の顧客環境の稼働時間とパフォーマンスを維持。'] },
      ],
    },
    skills: {
      heading: 'スキル',
      items: [
        { title: 'テクニカルリーダーシップ', bullets: ['デリバリーと統合を通じて技術チームをリード', 'ステークホルダー、エンジニア、ビジネス目標を整合', '明確な技術的オーナーシップで実行を推進', '再現可能なデリバリーのためのチームプロセスを構築'] },
        { title: 'データフロー & 構造', bullets: ['システム間でデータフローを設計・スケール', '一貫性と統合のためにデータを構造化', '技術的なデータプロセスワークフローを定義', 'クリーンなアーキテクチャでデータ駆動型オペレーションを支援'] },
        { title: 'インテグレーション & スケーリング', bullets: ['ERP、API、ミドルウェアにわたるシステム統合', 'プロセスのスケーリングとリリーストレインの定義', '運用ハンドオフとドキュメントシステム', '技術的ワークフローにおける品質とエラーの削減'] },
        { title: 'プロセス & デリバリー', bullets: ['スケーラブルなプロセス定義', '技術ドキュメントとナレッジベース設計', '再現可能なデリバリーのための標準化', '顧客向けプロセスの最適化'] },
      ],
    },
    certifications: {
      heading: '資格',
      items: [{ title: 'PMP — プロジェクトマネジメント・プロフェッショナル（2026年4月13日）', body: '構造化されたプロジェクトリーダーシップと大規模デリバリーの認定資格。' }],
    },
    others: {
      heading: 'フォーカス & 興味',
      items: [
        { title: 'キャリアフォーカス', bullets: ['AIとデータ — Claudeプロジェクトとエージェントプロンプティング', 'データフロー、データ構造、統合スケーリング', 'テクニカルデリバリーとシステム統合', 'ビジネス分析とデータ技術コラボレーション'] },
        { title: '希望職種', bullets: ['ビジネスアナリスト', 'データアナリスト', 'テクニカルプロダクトオーナー', 'プロジェクトマネージャー', 'データアナリティクススペシャリスト'] },
      ],
    },
    freetime: { heading: '趣味', items: ['フィットネス', 'ブラジリアン柔術', 'コーディング'] },
    languages: { heading: '言語', items: ['ドイツ語 — 母国語', 'スイスドイツ語 — 母国語', '英語 — ビジネスレベル', 'トルコ語 — 日常会話', '韓国語 — 基礎'] },
    contact: { heading: 'お問い合わせ', strong: 'いつでもお気軽にどうぞ。', body: 'LinkedInで定期的に活動しています。', cta: 'LinkedInを見る ↗' },
    footer: { madeIn: 'スイス製' },
  },

  ko: {
    meta: {
      title: '테오만 람 | 데이터플로우 & 기술 납품',
      description: 'DACH 지역을 기반으로 하는 IT 프로젝트 매니저 겸 기술 납품 리드. 데이터플로우, 데이터 구조 및 프로세스 확장 전문.',
    },
    nav: { education: '학력', experience: '경력', skills: '스킬', certifications: '자격증', others: '기타', contact: '연락처' },
    pills: ['기술 리더십', '데이터플로우', '데이터 구조', '통합', '확장'],
    hero: {
      badge: '기술 리더십 · 데이터플로우 · 데이터 구조',
      h1: '강력한 데이터 구조와 통합 규율을 통해 데이터플로우를 구축하고 확장하는 기술팀 리드.',
      tagline: [
        '저는 테오입니다. 5년간 자동차, 아웃도어, 소매 물류 및 패션 브랜드에 걸쳐 기술 프로젝트를 이끌었습니다. 비즈니스 프로세스 최적화로 전환하여 주로 DACH 지역에서 국제적으로 확장 가능한 프로세스를 구축했습니다.',
        '저의 핵심 초점은 자동화와 데이터 구조 및 데이터플로우 최적화입니다.',
      ],
      cta: '연락하기',
    },
    figures: [
      { value: '30%', label: 'EDI를 통한 완전 자동화된 주문 프로세스로 B2B 매출 증가' },
      { value: "2'500+", label: '통합 B2B 온보딩 및 자동화 솔루션으로 지원된 DACH 소매 회원' },
      { value: '100%', label: '완전 자동화를 통한 스위스 B2C 반품 지원 공수 절감' },
      { value: '50–60%', label: '효과적인 팀 리더십을 통한 개발 팀 평균 오버헤드 절감' },
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
        { role: '프로덕트 오너 ERP & 물류', company: 'BLACKROLL AG', period: '2025년 1월 – 현재 · 원격', bullets: ['독일과 오스트리아 2,500개 이상 지점을 위한 EDI 구매 자동화 및 B2B 롤아웃 주도.', '확장 가능한 통합과 프로세스 개선을 통해 30% 매출 성장 달성.', '모든 차원에서 반품 처리를 자동화하여 수동 고객 서비스 공수를 제거.', '핸드오프 마찰을 줄이기 위한 통합 문서, 릴리즈 트레인, 팀 프로세스 구축.'] },
        { role: 'IT 프로젝트 매니저', company: 'FIREGROUP', period: '2022년 5월 – 2024년 6월 · 하이브리드', bullets: ['자동차, 아웃도어, 가구 클라이언트를 위한 디지털 리론칭 및 제품 구성기 납품.', '5명의 전문가 팀과 6자리 예산 관리.', '고객 대면 워크플로우, 통합 품질 및 프로젝트 수익성에 집중.'] },
        { role: '프로젝트 매니저', company: 'Onebyte AG', period: '2021년 8월 – 2022년 5월 · 현장', bullets: ['5자리 예산 웹 프로젝트의 엔드투엔드 납품 주도.', '스위스 주요 헬스클럽 체인을 위한 현지화된 i18n 솔루션 납품.', '프론트엔드, 풀스택, 백엔드 워크스트림 전반의 개발자 조율.'] },
        { role: '주니어 프로젝트 매니저 & 웹 개발자', company: 'Netmaster (Schweiz) AG', period: '2020년 8월 – 2021년 7월 · 현장', bullets: ['웹 프로젝트 운영, 호스팅 안정성 및 클라이언트 기술 지원.', '여러 고객 환경의 가동 시간과 성능 유지.'] },
      ],
    },
    skills: {
      heading: '스킬',
      items: [
        { title: '기술 리더십', bullets: ['납품과 통합을 통해 기술팀 리드', '이해관계자, 엔지니어, 비즈니스 목표 정렬', '명확한 기술적 소유권으로 실행 추진', '반복 가능한 납품을 위한 팀 프로세스 구축'] },
        { title: '데이터플로우 & 구조', bullets: ['시스템 간 데이터플로우 설계 및 확장', '일관성과 통합을 위한 데이터 구조화', '기술적 데이터 프로세스 워크플로우 정의', '깔끔한 아키텍처로 데이터 기반 운영 지원'] },
        { title: '통합 & 확장', bullets: ['ERP, API, 미들웨어 전반의 시스템 통합', '프로세스 확장 및 릴리즈 트레인 정의', '운영 핸드오프 및 문서화 시스템', '기술 워크플로우의 품질 및 오류 절감'] },
        { title: '프로세스 & 납품', bullets: ['확장 가능한 프로세스 정의', '기술 문서화 및 지식 베이스 설계', '반복 가능한 납품을 위한 표준화', '고객 대면 프로세스 최적화'] },
      ],
    },
    certifications: {
      heading: '자격증',
      items: [{ title: 'PMP — 프로젝트 관리 전문가 (2026년 4월 13일)', body: '구조화된 프로젝트 리더십 및 대규모 납품 인증.' }],
    },
    others: {
      heading: '포커스 & 관심사',
      items: [
        { title: '커리어 포커스', bullets: ['AI와 데이터 — Claude 프로젝트 및 에이전트 프롬프팅', '데이터플로우, 데이터 구조 및 통합 확장', '기술적 납품 및 시스템 통합', '비즈니스 분석 및 데이터-기술 협업'] },
        { title: '희망 직무', bullets: ['비즈니스 분석가', '데이터 분석가', '기술 프로덕트 오너', '프로젝트 매니저', '데이터 분석 전문가'] },
      ],
    },
    freetime: { heading: '취미', items: ['피트니스', '브라질리언 주짓수', '코딩'] },
    languages: { heading: '언어', items: ['독일어 — 모국어', '스위스 독일어 — 모국어', '영어 — 비즈니스 협상 수준', '터키어 — 일상 회화', '한국어 — 기초'] },
    contact: { heading: '연락처', strong: '언제든지 연락 주세요.', body: 'LinkedIn에서 정기적으로 활동하고 있습니다.', cta: 'LinkedIn 방문 ↗' },
    footer: { madeIn: '스위스에서 제작' },
  },

  tr: {
    meta: {
      title: 'Teoman Lam | Veri Akışları & Teknik Teslimat',
      description: 'DACH bölgesinde faaliyet gösteren IT Proje Yöneticisi ve teknik teslimat lideri. Veri akışları, veri yapısı ve süreç ölçeklendirme konusunda uzmanlaşmış.',
    },
    nav: { education: 'Eğitim', experience: 'Deneyim', skills: 'Beceriler', certifications: 'Sertifikalar', others: 'Diğer', contact: 'İletişim' },
    pills: ['Teknik Liderlik', 'Veri Akışları', 'Veri Yapısı', 'Entegrasyon', 'Ölçeklendirme'],
    hero: {
      badge: 'Teknik Liderlik · Veri Akışları · Veri Yapısı',
      h1: 'Güçlü veri yapısı ve entegrasyon disipliniyle veri akışları oluşturmak ve ölçeklendirmek için teknik ekiplere liderlik etmek.',
      tagline: [
        'Ben Teo\'yum. Beş yıldır otomotiv, outdoor, perakende lojistik ve moda markalarında teknik projelere liderlik ediyorum. İş süreci optimizasyonuna geçiş yaptım ve ağırlıklı olarak DACH bölgesinde uluslararası ölçekte büyüyen süreçler oluşturdum.',
        'Temel odak noktam, veri yapıları ve veri akışlarının otomasyonu ve optimizasyonudur.',
      ],
      cta: 'Bağlanalım',
    },
    figures: [
      { value: '30%', label: 'Tamamen otomatik sipariş süreçleri (EDI) sayesinde B2B gelir artışı' },
      { value: "2'500+", label: 'Entegre B2B katılım ve otomasyon çözümüyle desteklenen DACH perakende üyeleri' },
      { value: '100%', label: 'Tam otomasyon sayesinde İsviçre B2C iade destek yükünde azalma' },
      { value: '50–60%', label: 'Etkili ekip liderliği sayesinde geliştirme ekiplerinde ortalama genel gider azalması' },
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
        { role: 'Ürün Sahibi ERP & Lojistik', company: 'BLACKROLL AG', period: 'Ocak 2025 – Devam Ediyor · Uzaktan', bullets: ['Almanya ve Avusturya\'daki 2.500+ lokasyon için EDI tedarik otomasyonu ve B2B rollout\'una liderlik etti.', 'Ölçeklenebilir entegrasyon ve süreç iyileştirmeleriyle %30 gelir artışı sağladı.', 'Tüm boyutlarda iade işlemlerini otomatikleştirerek manuel müşteri hizmetleri yükünü ortadan kaldırdı.', 'Devir sürtünmesini azaltmak için entegrasyon dokümantasyonu, sürüm trenleri ve ekip süreçleri oluşturdu.'] },
        { role: 'BT Proje Müdürü', company: 'FIREGROUP', period: 'Mayıs 2022 – Haziran 2024 · Hibrit', bullets: ['Otomotiv, outdoor ve mobilya müşterileri için dijital yeniden lansmanlar ve ürün yapılandırıcılar teslim etti.', '5 uzmandan oluşan ekipleri ve altı haneli bütçeleri yönetti.', 'Müşteriye yönelik iş akışları, entegrasyon kalitesi ve proje kârlılığına odaklandı.'] },
        { role: 'Proje Müdürü', company: 'Onebyte AG', period: 'Ağustos 2021 – Mayıs 2022 · Yerinde', bullets: ['Beş haneli bütçeli web projeleri için uçtan uca teslimat yaptı.', 'Büyük bir İsviçre spor salonu zinciri için yerelleştirilmiş i18n çözümleri teslim etti.', 'Frontend, full stack ve backend ekiplerindeki geliştiricileri koordine etti.'] },
        { role: 'Junior Proje Müdürü & Web Geliştirici', company: 'Netmaster (Schweiz) AG', period: 'Ağustos 2020 – Temmuz 2021 · Yerinde', bullets: ['Web projesi operasyonlarını, barındırma kararlılığını ve müşteri teknik desteğini destekledi.', 'Birden fazla müşteri ortamında çalışma süresi ve performansı sürdürdü.'] },
      ],
    },
    skills: {
      heading: 'Beceriler',
      items: [
        { title: 'Teknik Liderlik', bullets: ['Teslimat ve entegrasyon süreçlerinde teknik ekiplere liderlik etmek', 'Paydaşları, mühendisleri ve iş hedeflerini uyumlu hale getirmek', 'Net teknik sahiplikle uygulamayı yönlendirmek', 'Tekrarlanabilir teslimat için ekip süreçleri oluşturmak'] },
        { title: 'Veri Akışları & Yapısı', bullets: ['Sistemler arasında veri akışları tasarlamak ve ölçeklendirmek', 'Tutarlılık ve entegrasyon için veri yapılandırmak', 'Teknik veri süreci iş akışları tanımlamak', 'Temiz mimariyle veri odaklı operasyonları desteklemek'] },
        { title: 'Entegrasyon & Ölçeklendirme', bullets: ['ERP, API ve ara katman yazılımı üzerinden sistem entegrasyonu', 'Süreç ölçeklendirme ve sürüm treni tanımı', 'Operasyonel devir ve dokümantasyon sistemleri', 'Teknik iş akışlarında kalite ve hata azaltımı'] },
        { title: 'Süreç & Teslimat', bullets: ['Ölçeklenebilir süreç tanımı', 'Teknik dokümantasyon ve bilgi tabanı tasarımı', 'Tekrarlanabilir teslimat için standardizasyon', 'Müşteriye yönelik süreç optimizasyonu'] },
      ],
    },
    certifications: {
      heading: 'Sertifikalar',
      items: [{ title: 'PMP — Proje Yönetimi Profesyoneli (13 Nisan 2026)', body: 'Yapılandırılmış proje liderliği ve büyük ölçekli teslimat alanında sertifikalı.' }],
    },
    others: {
      heading: 'Odak & İlgi Alanları',
      items: [
        { title: 'Kariyer Odağı', bullets: ['Yapay Zeka ve Veri — Claude projeleri ve ajan yönlendirme', 'Veri akışları, veri yapısı ve entegrasyon ölçeklendirme', 'Teknik teslimat ve sistem entegrasyonu', 'İş analizi ve veri-teknik iş birliği'] },
        { title: 'Aranan Pozisyonlar', bullets: ['İş analisti', 'Veri analisti', 'Teknik ürün sahibi', 'Proje müdürü', 'Veri analitiği uzmanı'] },
      ],
    },
    freetime: { heading: 'Boş Zaman', items: ['Fitness', 'Brezilya Jiu Jitsu', 'Kodlama'] },
    languages: { heading: 'Diller', items: ['Almanca — Anadil', 'İsviçre Almancası — Anadil', 'İngilizce — Müzakere düzeyi', 'Türkçe — Anadil', 'Korece — Temel'] },
    contact: { heading: 'İletişim', strong: 'Her zaman sohbet etmekten mutluluk duyarım.', body: 'LinkedIn\'de düzenli olarak aktifim.', cta: 'LinkedIn\'i Ziyaret Et ↗' },
    footer: { madeIn: 'İsviçre\'de Yapıldı' },
  },
};
