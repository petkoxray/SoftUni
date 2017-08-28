function startApp() {
    const app = Sammy('#app', function () {

        this.use('Handlebars', 'hbs');

        $(document).on({
            ajaxStart: function () {
                $("#loadingBox").show();
            },
            ajaxStop: function () {
                $("#loadingBox").hide();
            }
        });

        //Get home page/market page
        this.get('market.html', displayHome);
        this.get('#/home', displayHome);

        function displayHome(ctx) {
            ctx.isAnonymous = sessionStorage.getItem('username') === null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
               this.partial("./templates/home/homePage.hbs")
            });
        }

        //Login Page
        this.get('#/login', function (ctx) {
            ctx.isAnonymous = sessionStorage.getItem('username') === null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
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
            ctx.isAnonymous = sessionStorage.getItem('username') === null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
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
            ctx.isAnonymous = sessionStorage.getItem('username') === null;
            ctx.username = sessionStorage.getItem('username');

            marketService.getProducts().then(function (products) {
                for (let prd of products) {
                    prd['price'] = Number(prd['price']).toFixed(2);
                }

                ctx.products = products;
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    product: "./templates/shop/product.hbs"
                }).then(function () {
                    this.partial("./templates/shop/shopPage.hbs").then(() => {
                        $('button').click(purchaseProduct);
                    });
                });
            }).then(auth.handleError);

            function purchaseProduct() {
                let id = $(this).attr('data-id');
                marketService.getProduct(id).then((product) => {
                    marketService.getUser().then((userInfo) => {
                        if (userInfo['cart'] === undefined) {
                            userInfo['cart'] = {};
                        }

                        if (userInfo['cart'].hasOwnProperty(id)) {
                            ++userInfo['cart'][id]['quantity'];
                        } else {
                            userInfo['cart'][id] = {
                                quantity: 1,
                                product: {
                                    name: product.name,
                                    description: product.description,
                                    price: product.price
                                }
                            }
                        }

                        marketService.updateUser(userInfo).then(() => {
                            auth.showInfo('Product added to the cart!')
                        });
                    });
                });
            }
        });

        //Cart Page
        this.get('#/cart', displayCart);

        function displayCart(ctx) {
            ctx.isAnonymous = sessionStorage.getItem('username') === null;
            ctx.username = sessionStorage.getItem('username');

            marketService.getUser().then((userInfo) => {
                let cart = userInfo.cart;
                let cartProducts = [];
                for (let id in cart) {
                    let current = {};
                    current['_id'] = id;
                    current['quantity'] = cart[id]['quantity'];
                    current['name'] = cart[id]['product']['name'];
                    current['description'] = cart[id]['product']['description'];
                    current['totalPrice'] = (cart[id]['product']['price'] * cart[id]['quantity']).toFixed(2);

                    cartProducts.push(current);
                }

                ctx.cartProducts = cartProducts;
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    cartProduct: "./templates/cart/cartProduct.hbs"
                }).then(function () {
                    this.partial("./templates/cart/cartPage.hbs").then(() => {
                        $('button').click(function () {
                            let id = $(this).attr('data-id');
                            --userInfo['cart'][id]['quantity'];
                            if (Number(userInfo['cart'][id]['quantity']) <= 0) {
                                delete userInfo['cart'][id];
                            }
                            marketService.updateUser(userInfo).then(() => {
                                displayCart(ctx);
                            });
                        });
                    });
                });
            });
        }
    });

    app.run();
}