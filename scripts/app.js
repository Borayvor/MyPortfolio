$(() => {
    let data = [
        {
            name: "JavaScriptUI DOM TeamWork",
            link: "http://best.telerikacademy.com/projects/28/Backgammon"
        },
        {
            name: "JavaScript Applications TeamWork",
            link: "http://best.telerikacademy.com/projects/69/Sazerac-Analytics"
        },
        {
            name: "Slice and Dice Course project",
            link: "http://best.telerikacademy.com/projects/167/Small-cuisine"
        }
    ];

    $.get(`./templates/link.handlebars`)
        .done((templ) => {
            let template = Handlebars.compile(templ);
            let html = template(data);
            $('#content').html(html);
        });
});