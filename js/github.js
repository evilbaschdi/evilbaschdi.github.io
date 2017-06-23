var repos = {
        "async": true,
        "crossDomain": true,
        "url": 'https://api.github.com/users/evilbaschdi/repos',
        "method": 'GET',
        "headers": {
                "cache-control": 'no-cache'
            }
    };
var rowElementCounter = 1;
$.each(
    repos,
    function(i, repo) {
        const repoName = repo.name;
        const spanCardTitle = $('<span />').addClass('card-title').append(repoName);
        const divCardContentWhiteText = $('<div />').addClass('card-content').addClass('white-text');

        const divCardGreyDarken1 = $('<div />').addClass('card').addClass('grey').addClass('darken-1');
        const divColS12M4 = $('<div />').addClass('col').addClass('s12').addClass('m4');

        const divRow = $('<div />').addClass('row');
        divCardContentWhiteText.append(spanCardTitle);
        divCardGreyDarken1.append(divCardContentWhiteText);
        divColS12M4.append(divCardGreyDarken1);
        divRow.append(divColS12M4);
        // Append the new div to whatever your container is
        $('#reposDiv').append(divRow);
    });