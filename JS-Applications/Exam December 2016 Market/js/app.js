$(() => {
    Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('market.html', displayHome);
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

        //Shop page
        this.get('#/shop', function (ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            service.getAllProducts().then((products) => {
                products.forEach((p) => {
                    p.price = Number(p.price).toFixed(2);
                });
                ctx.products = products;

                ctx.loadPartials({
                    header: './templates/partials/header.hbs',
                    footer: './templates/partials/footer.hbs',
                    product: './templates/shop/product.hbs',
                }).then(function () {
                    this.partial('./templates/shop/shopPage.hbs').then(() => {
                        $('button').click(purchaseProduct);
                    });

                    function purchaseProduct() {
                        let productId = $(this).attr('data-id');
                        let userId = sessionStorage.getItem('id');
                        let productPromise = service.getProductById(productId);
                        let userPromise = service.getUser(userId);
                        Promise.all([productPromise, userPromise]).then(([product, user]) => {
                            if (!user['cart']) {
                                user['cart'] = {};
                            }
                            if (!user['cart'][productId]) {
                                user['cart'][productId] = {};
                                user['cart'][productId]['quantity'] = 0;
                                user['cart'][productId]['product'] = {};
                                user['cart'][productId]['product']['name'] = product['name'];
                                user['cart'][productId]['product']['price'] = product['price'];
                                user['cart'][productId]['product']['description'] = product['description'];
                            }

                            ++user['cart'][productId]['quantity'];
                            service.updateCart(userId, user).then(() => {
                                auth.showInfo('Product purchased');
                                ctx.redirect('#/cart');
                            });
                        });
                    }

                });
            }).catch(auth.handleError);
        });

        //Cart page
        this.get('#/cart', displayProduct);

        function displayProduct(ctx) {
            ctx.isAuth = sessionStorage.getItem('username') !== null;
            ctx.username = sessionStorage.getItem('username');

            service.getUser(sessionStorage.getItem('id')).then((user) => {
                let cart = [];
                for (let p in user.cart) {
                    let product = {};
                    product['name'] = user.cart[p]['product']['name'];
                    product['description'] = user.cart[p]['product']['description'];
                    product['quantity'] = user.cart[p]['quantity'];
                    product['totalPrice'] = user.cart[p]['quantity'] * user.cart[p]['product']['price'];
                    product['_id'] = p;
                    cart.push(product);
                }
                ctx.cartProducts = cart;

                ctx.loadPartials({
                    header: './templates/partials/header.hbs',
                    footer: './templates/partials/footer.hbs',
                    cartProduct: './templates/cart/cartProduct.hbs',
                }).then(function () {
                    this.partial('./templates/cart/cartPage.hbs').then(() => {
                        $('button').click(discardProduct);
                    });
                });

                function discardProduct() {
                    let productId = $(this).attr('data-id');
                    user.cart[productId]['quantity']--;
                    if (user.cart[productId]['quantity'] === 0) {
                        delete user.cart[productId];
                    }
                    service.updateCart(user._id, user).then(() => {
                        ctx.render(displayProduct(ctx));
                    });
                }
            });
        }

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


    }).run();
});