$(() => {
    Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('index.html', displayHome);
        this.get('#/home', displayHome);

        //Login and logout Page
        this.get('#/login', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: "./templates/partials/header.hbs",
                footer: "./templates/partials/footer.hbs"
            }).then(function () {
                this.partial("./templates/login/loginPage.hbs")
            });
        });
        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            auth.login(username, password).then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('Login successful');
                ctx.redirect('#/home');
            }).catch(auth.handleError);
        });
        this.get('#/logout', function (ctx) {
            auth.logout().then(function (info) {
                sessionStorage.clear();
                auth.showInfo('Logout successful');
                ctx.redirect('#/home');
            }).catch(auth.handleError);
        });

        //Register Page
        this.get('#/register', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: "./templates/partials/header.hbs",
                footer: "./templates/partials/footer.hbs"
            }).then(function () {
                this.partial("./templates/register/registerPage.hbs")
            });
        });
        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let name = ctx.params.name;

            auth.register(username, password, name).then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('User registration successful.');
                ctx.redirect('#/home');
            }).catch(auth.handleError);
        });

        //My Messages
        this.get('#/myMessages', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            messengerService.getMyMessages(sessionStorage.getItem('username')).then((messages) => {
                messages.forEach((m) => {
                    m.sender = formatSender(m.sender_name, m.sender_username);
                    m.date = formatDate(m._kmd.lmt);
                });
                ctx.messages = messages;
                ctx.loadPartials({
                    header: './templates/partials/header.hbs',
                    footer: './templates/partials/footer.hbs',
                    message: './templates/messages/message.hbs'
                }).then(function () {
                    this.partial('./templates/messages/myMessages.hbs');
                });
            });
        });

        //send Message
        this.get('#/sendMessage', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            messengerService.getAllUsers().then((users) => {
                users.forEach((u) => {
                    u.displayName = formatSender(u.name, u.username);
                });
                ctx.users = users;
                ctx.loadPartials({
                    header: './templates/partials/header.hbs',
                    footer: './templates/partials/footer.hbs',
                }).then(function () {
                    this.partial('./templates/messages/sendMessage.hbs')
                });
            }).catch(auth.handleError);
        });
        this.post('#/sendMessage', function (ctx) {
            let senderUsername = sessionStorage.getItem('username');
            let senderName = sessionStorage.getItem('name');
            let recepientUsername = $('option:selected').val();
            let text = ctx.params.text;
            messengerService.sendMessage(senderUsername, senderName || null, recepientUsername, text)
                .then(() => {
                    auth.showInfo('Message sent.');
                    ctx.redirect('#/myMessages');
                }).catch(auth.handleError);
        });

        //Archive Messages
        this.get('#/archiveMessages', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            messengerService.getArchiveMessages(sessionStorage.getItem('username'))
                .then((messages) => {
                    messages.forEach((m) => {
                        m.timestamp = formatDate(m._kmd.lmt);
                    });
                    ctx.messages = messages;
                    ctx.loadPartials({
                        header: './templates/partials/header.hbs',
                        footer: './templates/partials/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/messages/archiveMessages.hbs').then(() => {
                            $('button').click(function () {
                                let id = $(this).attr('data-id');
                                $(this).parent().parent().fadeOut('slow',() => {
                                    deleteMessage(id);
                                });
                            });
                        });
                    });
                }).catch(auth.handleError);

        });

        function displayHome(ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/partials/header.hbs',
                footer: './templates/partials/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/homePage.hbs')
            });
        }

        function deleteMessage(id) {
            messengerService.deleteMessage(id).then(() => {
                auth.showInfo('Message deleted');
                ctx.redirect('#/archiveMessages');
            }).catch(auth.handleError);
        }

        function formatDate(dateISO8601) {
            let date = new Date(dateISO8601);
            if (Number.isNaN(date.getDate()))
                return '';
            return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
                "." + date.getFullYear() + ' ' + date.getHours() + ':' +
                padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

            function padZeros(num) {
                return ('0' + num).slice(-2);
            }
        }

        function formatSender(name, username) {
            if (!name)
                return username;
            else
                return username + ' (' + name + ')';
        }


    }).run();
});