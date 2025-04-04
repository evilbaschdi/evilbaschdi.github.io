import { Octokit } from 'https://esm.sh/@octokit/core';

document.addEventListener(
    'DOMContentLoaded',
    async () => {
        const octokit = new Octokit();
        const response = await octokit.request(
            'GET /users/{user}/repos',
            {
                user: 'evilbaschdi',
                type: 'public',
                per_page: 100
            });

        let repoIndex = 1;
        let columnIndex = 1;
        let rowIndex = 1;

        const reposDiv = document.getElementById('reposDiv');
        const spinner = document.getElementById('reposDivSpinner');
        let currentRow = createRow(rowIndex);

        const repos = response.data;
        repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        repos.forEach(
            repo => {
                const repoCard = createRepoCard(repo, repoIndex);
                currentRow.appendChild(repoCard);

                columnIndex++;
                if (columnIndex > 3 || repoIndex === repos.length) {
                    reposDiv.appendChild(currentRow);
                    columnIndex = 1;
                    rowIndex++;
                    currentRow = createRow(rowIndex);
                }

                repoIndex++;
            });

        spinner.style.display = 'none';
    });

function createRow(rowIndex) {
    const row = document.createElement('div');
    row.className = 'row text-center';
    row.id = `repoRow${rowIndex}`;
    return row;
}

function createRepoCard(repo, index) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-5';
    col.id = `element${index}_${repo.name}`;

    const card = document.createElement('div');
    card.className = 'card h-100 text-white bg-dark special';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const cardTitle = document.createElement('h4');
    cardTitle.className = 'card-title';
    cardTitle.textContent = repo.fork ? `${repo.name} (forked)` : repo.name;
    cardHeader.appendChild(cardTitle);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = repo.description || '(No description, website, or topics provided.)';
    cardBody.appendChild(cardText);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const link = document.createElement('a');
    link.className = 'btn btn-light';
    link.href = repo.homepage && repo.homepage.trim() ? repo.homepage : repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = repo.archived ? 'Homepage (archived)' : 'Homepage';
    cardFooter.appendChild(link);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    col.appendChild(card);
    return col;
}