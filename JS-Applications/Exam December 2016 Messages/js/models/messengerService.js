let messengerService = (() => {
    function getMyMessages(username) {
        return requester.get('appdata', 'messages' + `?query={"recipient_username":"${username}"}`, 'kinvey');
    }

    function getUsers() {
        return requester.get('user', '', 'kinvey');
    }

    function sendMessage(sender, receiver, text) {
        let data = {
            sender_username: sender,
            recipient_username: receiver,
            text: text
        };

        return requester.post('appdata', 'messages', 'kinvey', data);
    }

    function getArchiveMessages(username) {
        return requester.get('appdata', 'messages' + `?query={"sender_username":"${username}"}`, 'kinvey');
    }

    return {
        getMyMessages,
        getUsers,
        sendMessage,
        getArchiveMessages
    }
})();