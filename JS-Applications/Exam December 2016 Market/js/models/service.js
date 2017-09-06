let service = (() => {
    function getAllProducts() {
        return requester.get('appdata', 'products', 'kinvey');
    }
    
    function getUser(id) {
        return requester.get('user',  id, 'kinvey');
    }

    function getProductById(id) {
        return requester.get('appdata', 'products/' + id, 'kinvey');
    }

    function updateCart(id, userData) {
        return requester.update('user', id, 'kinvey', userData)
    }

    return {
        getAllProducts,
        getUser,
        getProductById,
        updateCart
    }
})();