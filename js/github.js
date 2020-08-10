$(
    async function() {

        alert('ready');

        //async function requestReposFromGitHub($) {
       
        const octokit = new Octokit();
        const result = await octokit.request(
            'GET /users/{user}/repos',
            {
                user: 'evilbaschdi',
                type: 'public',
                per_page: 100
            });

        var elementCounter = 1;
        var rowElementCounter = 1;
        var rowCounter = 1;
        var divRow = $('<div />').addClass('row').addClass('text-center').attr('id', 'repoRow' + rowCounter);
        //var response = result.data;
        //alert(response.length);
        var response = result.data;
        alert(response.length);

        response.each(
                response.sort(
                    function(a, b) {
                        return new Date(b.pushed_at) - new Date(a.pushed_at);
                    }),
                function(i, repo) {
                    alert(i);
                    alert(repo.name);
                    var link = '';
                    var linkText = ';';
                    if (repo.homepage === null || repo.homepage.trim() === '') {
                        linkText = 'Repository';
                        link = repo.html_url;
                    }
                    else {
                        linkText = 'Homepage';
                        link = repo.homepage;
                    }

                    //Card Header
                    const divCardHeader = $('<div />').addClass('card-header');
                    const h4CardTitle = $('<h4 />').addClass('card-title').append(repo.fork ? repo.name + ' (forked)' : repo.name);
                    divCardHeader.append(h4CardTitle);
                    //Card Body
                    const divCardBody = $('<div />').addClass('card-body');
                    const pCardText = $('<p />').addClass('card-text').append(repo.description ? repo.description : '(No description, website, or topics provided.)');
                    divCardBody.append(pCardText);
                    //Card Footer
                    const divCardFooter = $('<div />').addClass('card-footer');
                    const aHrefBtnBtnLight = $('<a />').addClass('btn').addClass('btn-light')
                        .attr('href', link)
                        .attr('target', '_blank')
                        .attr('rel', 'noopener')
                        .append(linkText);
                    divCardFooter.append(aHrefBtnBtnLight);
                    //Card
                    const divCardH100TextWhiteBgDarkSpecial = $('<div />').addClass('card').addClass('h-100').addClass('text-white').addClass('bg-dark').addClass('special');
                    divCardH100TextWhiteBgDarkSpecial.append(divCardHeader);
                    divCardH100TextWhiteBgDarkSpecial.append(divCardBody);
                    divCardH100TextWhiteBgDarkSpecial.append(divCardFooter);
                    //Column
                    const divColMd4Mb5 = $('<div />').addClass('col-md-4').addClass('mb-5').attr('id', 'element' + elementCounter + '_' + repo.name);
                    divColMd4Mb5.append(divCardH100TextWhiteBgDarkSpecial);

                    const comment = $('<!-- ' + repo.name + ' -->');

                    divRow.append(comment);
                    divRow.append(divColMd4Mb5);

                    rowElementCounter++;
                    var rest = parseInt(response.length) - parseInt(elementCounter);
                    if (rest < 2 || rowElementCounter === 4) {
                        rowElementCounter = 1;
                        rowCounter++;
                        $('#reposDiv').append(divRow);
                        divRow = $('<div />').addClass('row').addClass('text-center').attr('id', 'repoRow' + rowCounter);
                    }
                    elementCounter++;
                },
                alert('hello')
            );
    });