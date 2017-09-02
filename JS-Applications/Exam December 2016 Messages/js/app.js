$(() => {
    Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        $(document).on({
            ajaxStart: function () {
                $("#loadingBox").show();
            },
            ajaxStop: function () {
                $("#loadingBox").hide();
            }
        });

        //Home
        this.get('index.html', displayHome);
        this.get('#/home', displayHome);

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

        //Login Page
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
                let formatedMessages;
                for (let m of messages) {
                    m.date = formatDate(m._kmd.lmt);

                }
                ctx.loadPartials({
                    header: './templates/partials/header.hbs',
                    footer: './templates/partials/footer.hbs',
                    message: './templates/messages/message.hbs'
                }).then(function () {
                    this.partial('./templates/messages/myMessages.hbs')
                });
            });

        });

        //Send message
        this.get('#/sendMessage', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            messengerService.getUsers().then((users) => {
                ctx.users = users;
                ctx.loadPartials({
                    header: './templates/partials/header.hbs',
                    footer: './templates/partials/footer.hbs',
                }).then(function () {
                    this.partial('./templates/messages/sendMessage.hbs')
                });
            });
        });

        this.post('#/sendMessage', function (ctx) {
            let sender = sessionStorage.getItem('username');
            let receiver = $('option:selected').val();
            let text = ctx.params.text;
            messengerService.sendMessage(sender, receiver, text).then(() => {
               auth.showInfo('Message send successful');
            }).catch(auth.handleError);
        });

        //Archive messages
        this.get('#/archiveMessages', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            messengerService.getArchiveMessages(sessionStorage.getItem('username')).then((messages) => {
                ctx.messages = messages;
                ctx.loadPartials({
                    header: './templates/partials/header.hbs',
                    footer: './templates/partials/footer.hbs',
                }).then(function () {
                    this.partial('./templates/messages/archiveMessages.hbs')
                });
            });
        });

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