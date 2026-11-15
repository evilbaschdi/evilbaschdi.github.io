const translations = {
  de: {
    pages: {
      home: {
        title: "//sebastian walter | evilbaschdi",
        description: "Sebastian Walter, Softwareentwickler mit einer Vorliebe für sauberen Code, .NET und innovative Lösungen."
      },
      links: {
        title: "//sebastian walter | evilbaschdi | Links",
        description: "Meine Social-Media-Profile und professionellen Links. Kontaktiere mich auf GitHub, LinkedIn, Mastodon, Bluesky und weiteren Plattformen."
      },
      terminal: {
        title: "//sebastian walter | evilbaschdi",
        description: "Sebastian Walters Portfolio als interaktives Terminal."
      }
    },
    "language.label": "Sprache",
    "theme.dark": "Dunkles Design",
    "theme.light": "Helles Design",
    "brand.alt": "Sebastian Walter | evilbaschdi",
    "nav.label": "Hauptnavigation",
    "nav.info": "Info",
    "nav.coding": "Coding",
    "nav.social": "Social",
    "nav.development": "Entwicklung",
    "nav.legal": "Rechtliches",
    "nav.links": "Links",
    "footer.top": "Nach oben",
    "section.info": "INFO",
    "section.coding": "CODING",
    "home.about.first": "Mein Name ist Sebastian Walter. Ich bin leidenschaftlicher Softwareentwickler mit einer Vorliebe für sauberen Code und innovative Lösungen.",
    "home.about.second": "Ich habe eine Begeisterung dafür entwickelt, komplexen Problemstellungen mit eleganten und funktionalen Anwendungen zu begegnen.",
    "home.about.third": "Ich bin spezialisiert auf die Entwicklung von .NET-Anwendungen und habe Erfahrung in der gesamten Software-Entwicklungspipeline, von der Konzeption bis zur Bereitstellung.",
    "home.about.fourth": "In meiner Freizeit, wenn ich nicht gerade programmiere, höre und mache ich gerne Musik und interessiere mich für gutes Essen.",
    "home.coding": "Als .NET-Entwickler konzentriere ich mich auf robuste Backend-Lösungen und moderne Desktop-Anwendungen.",
    "home.projects": "Alle meine privaten Projekte findet ihr auf GitHub (siehe „Links“).",
    "skills.languages": "Sprachen & Frameworks:",
    "skills.api": "API & Schnittstellen:",
    "skills.cloud": "Cloud (Azure):",
    "skills.desktop": "Desktop UI:",
    "skills.databases": "Datenbanken:",
    "skills.tools": "Tools & Prinzipien:",
    "skills.projects": "Projekte:",
    "links.button": "Links",
    "links.home": "Homepage",
    "links.social": "SOCIAL",
    "links.development": "ENTWICKLUNG",
    "legal.button": "📄 Rechtliches",
    "legal.imprint": "Impressum",
    "legal.imprint.heading": "Angaben gemäß § 5 DDG",
    "legal.email": "E-Mail:",
    "legal.privacy": "Datenschutzerklärung",
    "legal.privacy.first": "Beim Besuch dieser Webseite werden durch den Provider automatisch technische Daten (z.B. IP-Adresse, Browsertyp, Uhrzeit des Zugriffs) in Server-Logfiles gespeichert. Diese Daten dienen ausschließlich der technischen Überwachung und werden nicht an Dritte weitergegeben.",
    "legal.privacy.second": "Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Es erfolgt keine Weitergabe an Dritte.",
    "legal.privacy.rights": "Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten. Bei Fragen wenden Sie sich bitte an die oben genannte E-Mail-Adresse.",
    "terminal.prompt": "besucher@homepage:~$",
    "terminal.published": "Veröffentlicht mit"
  },
  en: {
    pages: {
      home: {
        title: "//sebastian walter | evilbaschdi",
        description: "Sebastian Walter, software developer with a passion for clean code, .NET, and innovative solutions."
      },
      links: {
        title: "//sebastian walter | evilbaschdi | Links",
        description: "My social profiles, developer accounts, and professional networks on Bluesky, GitHub, LinkedIn, and more."
      },
      terminal: {
        title: "//sebastian walter | evilbaschdi",
        description: "Sebastian Walter's portfolio as an interactive terminal."
      }
    },
    "language.label": "Language",
    "theme.dark": "Dark mode",
    "theme.light": "Light mode",
    "brand.alt": "Sebastian Walter | evilbaschdi",
    "nav.label": "Main navigation",
    "nav.info": "About",
    "nav.coding": "Development",
    "nav.social": "Social",
    "nav.development": "Development",
    "nav.legal": "Legal",
    "nav.links": "Links",
    "footer.top": "Back to top",
    "section.info": "ABOUT",
    "section.coding": "DEVELOPMENT",
    "home.about.first": "My name is Sebastian Walter. I am a software developer with a passion for clean code and innovative solutions.",
    "home.about.second": "I enjoy turning complex challenges into elegant, functional applications.",
    "home.about.third": "I specialize in .NET application development and have experience across the software development lifecycle, from concept to deployment.",
    "home.about.fourth": "In my free time, when I am not programming, I enjoy listening to and making music, and exploring good food.",
    "home.coding": "As a .NET developer, I focus on robust backend solutions and modern desktop applications.",
    "home.projects": "You can find all of my personal projects on GitHub (see “Links”).",
    "skills.languages": "Languages & frameworks:",
    "skills.api": "APIs & interfaces:",
    "skills.cloud": "Cloud (Azure):",
    "skills.desktop": "Desktop UI:",
    "skills.databases": "Databases:",
    "skills.tools": "Tools & principles:",
    "skills.projects": "Projects:",
    "links.button": "Links",
    "links.home": "Home page",
    "links.social": "SOCIAL",
    "links.development": "DEVELOPMENT",
    "legal.button": "📄 Legal information",
    "legal.imprint": "Legal notice",
    "legal.imprint.heading": "Information pursuant to Section 5 DDG",
    "legal.email": "Email:",
    "legal.privacy": "Privacy policy",
    "legal.privacy.first": "When you visit this website, the hosting provider automatically stores technical data (such as your IP address, browser type, and time of access) in server log files. This data is used solely for technical monitoring and is not shared with third parties.",
    "legal.privacy.second": "If you contact us by email, your details are stored to process your inquiry and are not shared with third parties.",
    "legal.privacy.rights": "You have the right to access, correct, and delete your stored data. If you have any questions, please use the email address above.",
    "terminal.prompt": "visitor@homepage:~$",
    "terminal.published": "Published with"
  }
};

const themeToggle = document.getElementById("theme-toggle");

function setLanguage(language) {
  const content = translations[language];
  const page = content.pages[document.body.dataset.page];

  document.documentElement.lang = language;
  document.title = page.title;

  const description = document.querySelector("[data-page-description]");
  if (description) {
    description.content = page.description;
  }

  const openGraphDescription = document.querySelector('meta[property="og:description"]');
  if (openGraphDescription) {
    openGraphDescription.content = page.description;
  }

  const openGraphLocale = document.querySelector('meta[property="og:locale"]');
  if (openGraphLocale) {
    openGraphLocale.content = language === "de" ? "de_DE" : "en_US";
  }

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = content[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute("aria-label", content[element.dataset.i18nAriaLabel]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    element.setAttribute("alt", content[element.dataset.i18nAlt]);
  });

  document.querySelectorAll(".language-switch button").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  const themeLabel = content[`theme.${document.documentElement.dataset.theme}`];
  themeToggle.setAttribute("aria-label", themeLabel);
  themeToggle.title = themeLabel;
  document.dispatchEvent(new CustomEvent("site-language-change", { detail: { language } }));
}

function setTheme(theme, persist = true) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-checked", String(isDark));
  themeToggle.querySelector("span").textContent = isDark ? "☾" : "☀";

  const themeLabel = translations[document.documentElement.lang][`theme.${theme}`];
  themeToggle.setAttribute("aria-label", themeLabel);
  themeToggle.title = themeLabel;
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#202020" : "#f3f4ed";
  if (persist) {
    localStorage.setItem("evilbaschdi-theme", theme);
  }
}

const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || "de"];
const preferredLanguage = browserLanguages
  .map(language => language.split("-")[0].toLowerCase())
  .find(language => language === "de" || language === "en") ?? "de";

document.querySelectorAll(".language-switch button").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelectorAll(".collapsible-header").forEach(button => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.classList.toggle("active", !expanded);
    button.nextElementSibling.classList.toggle("active", !expanded);
  });
});

document.querySelectorAll('.site-navigation a[href="#legal"]').forEach(link => {
  link.addEventListener("click", () => {
    const legalButton = document.getElementById("legal");
    if (legalButton?.getAttribute("aria-expanded") !== "true") {
      legalButton.click();
    }
  });
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear().toString();
}

setLanguage(preferredLanguage);
setTheme(localStorage.getItem("evilbaschdi-theme") === "light" ? "light" : "dark", false);
