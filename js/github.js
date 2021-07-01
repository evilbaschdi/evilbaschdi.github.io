$(
    async function() {
        const a = new Octokit(),
              e = await a.request('GET /users/{user}/repos', { user: 'evilbaschdi', type: 'public', per_page: 100 });
        var d = 1,
            t = 1,
            s = 1,
            n = $('<div />')
                .addClass('row')
                .addClass('text-center')
                .attr('id', 'repoRow' + s),
            p = e.data,
            r = document.getElementById('reposDivSpinner');
        p.sort(
                function(a, e) {
                    return new Date(e.pushed_at) - new Date(a.pushed_at);
                }),
            $.each(
                p,
                function(a, e) {
                    var r = '',
                        o = ';';
                    null === e.homepage || '' === e.homepage.trim() ? ((o = 'Repository'), (r = e.html_url)) : ((o = 'Homepage'), (r = e.homepage));
                    e.archived ? o += ' (archived)' : o += '';
                    const i = $('<div />').addClass('card-header'),
                          l = $('<h4 />')
                              .addClass('card-title')
                              .append(e.fork ? e.name + ' (forked)' : e.name);
                    i.append(l);
                    const c = $('<div />').addClass('card-body'),
                          C = $('<p />')
                              .addClass('card-text')
                              .append(e.description ? e.description : '(No description, website, or topics provided.)');
                    c.append(C);
                    const h = $('<div />').addClass('card-footer'),
                          m = $('<a />').addClass('btn').addClass('btn-light').attr('href', r).attr('target', '_blank').attr('rel', 'noopener').append(o);
                    h.append(m);
                    const u = $('<div />').addClass('card').addClass('h-100').addClass('text-white').addClass('bg-dark').addClass('special');
                    u.append(i), u.append(c), u.append(h);
                    const v = $('<div />')
                        .addClass('col-md-4')
                        .addClass('mb-5')
                        .attr('id', 'element' + d + '_' + e.name);
                    v.append(u),
                        n.append(v),
                        t++,
                        (parseInt(p.length) - parseInt(d) < 2 || 4 === t) &&
                            ((t = 1),
                                s++,
                                $('#reposDiv').append(n),
                                (n = $('<div />')
                                    .addClass('row')
                                    .addClass('text-center')
                                    .attr('id', 'repoRow' + s))),
                        d++;
                }),
            (r.style.display = 'none');
    });