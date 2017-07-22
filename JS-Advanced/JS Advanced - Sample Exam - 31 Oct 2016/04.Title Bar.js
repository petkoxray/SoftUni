class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let link = $('<a>').addClass('menu-link').attr('href', href).text(name);
        this.links.push(link);
    }

    appendTo(selector) {
        let header = $('<header>').addClass('header');
        let div = $('<div>').addClass('header-row');
        let button = $('<a>').addClass('button').html('&#9776').on('click',(() => $('.drawer').toggle()));
        let span = $('<span>').addClass('title').text(this.title);
        let drawer = $('<div>').addClass('drawer');
        let nav = $('<nav>').addClass('menu');
        this.links.forEach(link => nav.append(link));
        header.append(div.append(button).append(span)).append(drawer.append(nav));
        $(selector).append(header);
    }
}