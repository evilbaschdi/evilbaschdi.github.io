document.addEventListener('DOMContentLoaded', () => {
    const outputContainer = document.getElementById('terminal-output');
    const commands = [
        'willkommen',
        'about',
        'portfolio',
        'projekte',
        'links',
        'impressum'
    ];
    let commandIndex = 0;

    // Befehlsinhalte in einem gut strukturierten Objekt
    const commandContent = {
        'willkommen': "Willkommen auf meiner Homepage!",
        'about': "Mein Name ist Sebastian Walter. Ich bin leidenschaftlicher Softwareentwickler mit einer Vorliebe für sauberen Code und innovative Lösungen. Ich liebe es, komplexe Probleme in elegante und funktionale Anwendungen zu verwandeln. Ich bin spezialisiert auf die Entwicklung von .NET Anwendungen und habe Erfahrung in der gesamten Software-Entwicklungspipeline, von der Konzeption bis zur Bereitstellung.\n\nIn meiner Freizeit, wenn ich da nicht auch programmiere, höre und mache ich gerne Musik und interessiere mich für gutes Essen.",
        'portfolio': `Als .NET Entwickler konzentriere ich mich auf robuste Backend-Lösungen und moderne Desktop-Anwendungen.

  - **Sprachen & Frameworks:** C#, .NET (Core / Framework), ASP.NET Core
  - **API & Schnittstellen:** REST, OData, ASP.NET Web API
  - **Cloud (Azure):** Azure Functions, Azure API Management, Azure App Service
  - **Desktop UI:** Avalonia UI, WPF
  - **Datenbanken:** MS SQL Server, Entity Framework Core
  - **Tools & Prinzipien:** Git, CI/CD, Clean Architecture, SOLID`,
        'projekte': `Sämtliche meiner privaten Projekte sind auf <a href="https://github.com/evilbaschdi" target="_blank">GitHub</a> zu finden`,
        'links': `Weitere <a href="https://evilbaschdi.github.io/links" target="_blank">Links</a>.`,
        'impressum': `Angaben gemäß § 5 TMG:
Sebastian Walter
Kindergartenstraße 1
92348 Berg
E-Mail: sebwalter@gmx.net`
    };

    // Hilfsfunktion zum Erstellen einer neuen Zeile im Terminal
    function createOutputLine(content, type = 'text') {
        const line = document.createElement('div');
        line.className = 'output';
        if (type === 'command') {
            line.innerHTML = `<span class="prompt">besucher@homepage:~$</span><span class="output-command">${content}</span>`;
        } else {
            line.innerHTML = content;
        }
        outputContainer.appendChild(line);
        // Scrollt automatisch zum Ende
        window.scrollTo(0, document.body.scrollHeight);
        return line;
    }

    // Funktion für den Tipp-Effekt
    function typeText(text, element, callback) {
        if (!text || text.includes('<a')) { // Tipp-Effekt bei Links überspringen
            element.innerHTML = text;
            if (callback) callback();
            return;
        }

        let i = 0;
        const speed = 15; // Tipp-Geschwindigkeit in ms

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
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
    function executeNextCommand() {
        if (commandIndex < commands.length) {
            const command = commands[commandIndex];
            createOutputLine(command, 'command');

            setTimeout(() => {
                const outputLine = createOutputLine('');
                typeText(commandContent[command], outputLine, () => {
                    commandIndex++;
                    setTimeout(executeNextCommand, 1000); // Wartet 1 Sekunde bis zum nächsten Befehl
                });
            }, 500); // Wartet 0.5 Sekunden, bevor die Ausgabe startet
        }
    }

    // Startet die Ausführung, sobald die Seite geladen ist
    executeNextCommand();
});