let messengerService = (() => {
    function getMyMessages(username) {
        let endpoint = `messages?query={"recipient_username":"${username}"}`;
        return requester.get('appdata', endpoint , 'kinvey');
    }

    function getArchiveMessages(username) {
        let endpoint = `messages?query={"sender_username":"${username}"}`;
        return requester.get('appdata', endpoint, 'kinvey');
    }

    function getAllUsers() {
        return requester.get('user', '', 'kinvey' );
    }

    function sendMessage(senderUsername, senderName, recepient, text) {
        let message = {
            sender_username: senderUsername,
            sender_name: senderName,
            recipient_username: recepient,
            text: text
        };

        return requester.post('appdata', 'messages', 'kinvey', message);
    }

    function deleteMessage(id) {
        return requester.remove('appdata', 'messages/' + id, 'kinvey');
    }

    return {
        getMyMessages,
        getAllUsers,
        sendMessage,
        getArchiveMessages,
        deleteMessage
    }
})();