class MailBox {
    constructor() {
        this.mailbox = [];
    }

    addMessage(subject, text) {
        let mail = {subject: subject, text: text};
        this.mailbox.push(mail);
        return this;
    }

    get messageCount() {
        return this.mailbox.length;
    }

    deleteAllMessages() {
        this.mailbox = [];
    }

    findBySubject(substr) {
        let result = [];
        for (let mail of this.mailbox) {
            if (mail.subject.includes(substr))
                result.push(mail);
        }

        return result;
    }

    toString() {
        if (this.mailbox.length === 0)
            return ' * (empty mailbox)';
        let result = '';
        for (let mail of this.mailbox) {
            result += ` * [${mail.subject}] ${mail.text}\n`;
        }

        return ' ' + result.trim();
    }
}