document.addEventListener('DOMContentLoaded', () => {
    const outputContainer = document.getElementById('terminal-output');
    const languageContent = {
        de: {
            commands: ['willkommen', 'about', 'portfolio', 'projekte', 'links', 'impressum'],
            content: {
                willkommen: "Willkommen auf meiner Homepage!",
                about: "Mein Name ist Sebastian Walter. Ich bin leidenschaftlicher Softwareentwickler mit einer Vorliebe für sauberen Code und innovative Lösungen. Ich liebe es, komplexe Probleme in elegante und funktionale Anwendungen zu verwandeln. Ich bin spezialisiert auf die Entwicklung von .NET Anwendungen und habe Erfahrung in der gesamten Software-Entwicklungspipeline, von der Konzeption bis zur Bereitstellung.\n\nIn meiner Freizeit, wenn ich da nicht auch programmiere, höre und mache ich gerne Musik und interessiere mich für gutes Essen.",
                portfolio: `Als .NET Entwickler konzentriere ich mich auf robuste Backend-Lösungen und moderne Desktop-Anwendungen.

  - **Sprachen & Frameworks:** C#, .NET (Core / Framework), ASP.NET Core
  - **API & Schnittstellen:** REST, OData, ASP.NET Web API
  - **Cloud (Azure):** Azure Functions, Azure API Management, Azure App Service
  - **Desktop UI:** Avalonia UI, WPF
  - **Datenbanken:** MS SQL Server, Entity Framework Core
  - **Tools & Prinzipien:** Git, CI/CD, Clean Architecture, SOLID`,
                projekte: `Sämtliche meiner privaten Projekte sind auf <a href="https://github.com/evilbaschdi" target="_blank">GitHub</a> zu finden`,
                links: `Weitere <a href="https://evilbaschdi.github.io/links" target="_blank">Links</a>.`,
                impressum: `Angaben gemäß § 5 DDG:
Sebastian Walter
Kindergartenstraße 1
92348 Berg
E-Mail: sebwalter@gmx.net`
            }
        },
        en: {
            commands: ['welcome', 'about', 'portfolio', 'projects', 'links', 'legal'],
            content: {
                welcome: "Welcome to my homepage!",
                about: "My name is Sebastian Walter. I am a software developer with a passion for clean code and innovative solutions. I enjoy turning complex challenges into elegant, functional applications. I specialize in .NET application development and have experience across the software development lifecycle, from concept to deployment.\n\nIn my free time, when I am not programming, I enjoy listening to and making music, and exploring good food.",
                portfolio: `As a .NET developer, I focus on robust backend solutions and modern desktop applications.

  - **Languages & frameworks:** C#, .NET (Core / Framework), ASP.NET Core
  - **APIs & interfaces:** REST, OData, ASP.NET Web API
  - **Cloud (Azure):** Azure Functions, Azure API Management, Azure App Service
  - **Desktop UI:** Avalonia UI, WPF
  - **Databases:** MS SQL Server, Entity Framework Core
  - **Tools & principles:** Git, CI/CD, Clean Architecture, SOLID`,
                projects: `All of my personal projects can be found on <a href="https://github.com/evilbaschdi" target="_blank">GitHub</a>.`,
                links: `More <a href="links.html" target="_blank">links</a>.`,
                legal: `Information pursuant to Section 5 DDG:
Sebastian Walter
Kindergartenstraße 1
92348 Berg
Email: sebwalter@gmx.net`
            }
        }
    };

    let activeCommands = [];
    let activeContent = {};
    let renderVersion = 0;

    // Hilfsfunktion zum Erstellen einer neuen Zeile im Terminal
    function createOutputLine(content, type = 'text') {
        const line = document.createElement('div');
        line.className = 'output';
        if (type === 'command') {
            const prompt = document.querySelector(".prompt").textContent;
            line.innerHTML = `<span class="prompt">${prompt}</span><span class="output-command">${content}</span>`;
        } else {
            line.innerHTML = content;
        }
        outputContainer.appendChild(line);
        // Scrollt automatisch zum Ende
        window.scrollTo(0, document.body.scrollHeight);
        return line;
    }

    // Funktion für den Tipp-Effekt
    function typeText(text, element, callback, version) {
        if (version !== renderVersion) return;

        if (!text || text.includes('<a')) { // Tipp-Effekt bei Links überspringen
            element.innerHTML = text;
            if (callback) callback();
            return;
        }

        let i = 0;
        const speed = 15; // Tipp-Geschwindigkeit in ms

        function type() {
            if (version !== renderVersion) return;

            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                requestAnimationFrame(() => setTimeout(type, speed));
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                if (callback) callback();
            }
        }
        type();
    }

    // Führt den nächsten Befehl aus der Liste aus
    function executeNextCommand(version, commandIndex) {
        if (version !== renderVersion || commandIndex >= activeCommands.length) return;

        const command = activeCommands[commandIndex];
        createOutputLine(command, 'command');

        setTimeout(() => {
            if (version !== renderVersion) return;

            const outputLine = createOutputLine('');
            typeText(activeContent[command], outputLine, () => {
                setTimeout(() => executeNextCommand(version, commandIndex + 1), 1000);
            }, version);
        }, 500);
    }

    // Startet die Ausführung, sobald die Seite geladen ist
    function renderTerminal(language) {
        renderVersion++;
        const selectedContent = languageContent[language] ?? languageContent.de;
        activeCommands = selectedContent.commands;
        activeContent = selectedContent.content;
        outputContainer.replaceChildren();
        executeNextCommand(renderVersion, 0);
    }

    document.addEventListener('site-language-change', event => {
        renderTerminal(event.detail.language);
    });

    renderTerminal(document.documentElement.lang);
});