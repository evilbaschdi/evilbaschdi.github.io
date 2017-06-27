$(document).ready(
    function() {
        const reposCall = {
                "async": true,
                "crossDomain": true,
                "url": 'https://api.github.com/users/evilbaschdi/repos',
                "method": 'GET'

            };
        var elementCounter = 1;
        var rowElementCounter = 1;
        var rowCounter = 1;
        var divRow = $('<div />').addClass('row').attr('id', 'repoRow' + rowCounter);

        $.ajax(reposCall).done(
                function(response) {
                    $.each(
                        response.sort(
                            function(a, b) {
                                return new Date(b.pushed_at) - new Date(a.pushed_at);
                            }),
                        function(i, repo) {

                            const spanCardTitle = $('<span />').addClass('card-title').append(repo.fork ? repo.name + ' (forked)' : repo.name);
                            const pLight = $('<p />').addClass('light').append(repo.description);

                            const divNoClass = $('<div />');

                            var link = '';
                            var linkText = ';';
                            if (repo.homepage === null || repo.homepage.trim() === '') {
                                linkText = 'Repository';
                                link = repo.html_url;
                            }
                            else {
                                linkText = 'GitHub Homepage';
                                link = repo.homepage;
                            }

                            const aBtnWavesEffectWavesLightGreyDarken4 = $('<a />').addClass('btn').addClass('waves-effect').addClass('waves-light').addClass('grey')
                                .addClass('darken-4')
                                .attr('href', link)
                                .attr('target', '_blank')
                                .attr('rel', 'noopener')
                                .append(linkText);
                            const iMaterialIconsRight = $('<i />').addClass('material-icons').addClass('right').append('code');

                            const divCardContentWhiteText = $('<div />').addClass('card-content').addClass('white-text');
                            const divCardActionWhiteText = $('<div />').addClass('card-action').addClass('white-text');

                            const divCardGreyDarken1 = $('<div />').addClass('card').addClass('grey').addClass('darken-1');
                            const divColS12M4 = $('<div />').addClass('col').addClass('s12').addClass('m4').attr('id', 'element' + elementCounter + '_' + repo.name);

                            divCardContentWhiteText.append(spanCardTitle);
                            divCardContentWhiteText.append(pLight);
                            divCardGreyDarken1.append(divCardContentWhiteText);

                            aBtnWavesEffectWavesLightGreyDarken4.append(iMaterialIconsRight);
                            divNoClass.append(aBtnWavesEffectWavesLightGreyDarken4);
                            divCardActionWhiteText.append(divNoClass);
                            divCardGreyDarken1.append(divCardActionWhiteText);
                            divColS12M4.append(divCardGreyDarken1);
                            const comment = $('<!-- ' + repo.name + ' -->');
                            divRow.append(comment);
                            divRow.append(divColS12M4);

                            rowElementCounter++;
                            var rest = parseInt(response.length) - parseInt(elementCounter);
                            if (rest < 2 || rowElementCounter === 4) {
                                rowElementCounter = 1;
                                rowCounter++;
                                $('#reposDiv').append(divRow);
                                divRow = $('<div />').addClass('row').attr('id', 'repoRow' + rowCounter);
                            }
                            elementCounter++;
                        });
                }
            );

    });