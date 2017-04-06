/* globals Handlebars */

$(() => {
    let data = [
        {
            name: 'JavaScriptUI DOM TeamWork',
            link: 'http://best.telerikacademy.com/projects/28/Backgammon'
        },
        {
            name: 'JavaScript Applications TeamWork',
            link: 'http://best.telerikacademy.com/projects/69/Sazerac-Analytics'
        },
        {
            name: 'Slice and Dice Course project',
            link: 'http://best.telerikacademy.com/projects/167/Small-cuisine'
        },
        {
            name: 'ASP.NET MVC Course project',
            link: 'http://best.telerikacademy.com/projects/382/For-free-time'
        },
        {
            name: 'Angular 2 Course project',
            link: 'http://best.telerikacademy.com/projects/446/Adventure-in-ten-photos'
        },
        {
            name: 'ASP.NET MVC Course project - 2017',
            link: 'http://best.telerikacademy.com/projects/597/Photo-school'
        }
    ];

    $.get('./templates/link.handlebars')
        .done((templ) => {
            let template = Handlebars.compile(templ);
            let html = template(data);
            $('#content').html(html);
        });
});