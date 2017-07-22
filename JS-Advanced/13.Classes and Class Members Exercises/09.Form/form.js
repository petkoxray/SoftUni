let result = (function() {

    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this.value = $(this._elements[0]).val();
            this._invalidSymbols = regex;
            this.elements.on('input',((event) => {
                this.value = $(event.target).val();
            }));
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;

            for (let el of this.elements) {
                $(el).val(value);
            }
        }

        get elements() {
            return this._elements;
        }

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor(...textboxes) {
            if (textboxes.some(t => !(t instanceof Textbox))) {
                throw new Error("Some of the constructor arguments are not a Textbox");
            }

            this._element = $('<div>').addClass('form');
            this._textboxes = textboxes;
            for (let textbox of textboxes) {
                this._element.append($(textbox.selector));
            }
        }

        submit() {
            let isAllValid = true;
            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    $(textbox.value).css('border', '2px solid green');
                } else {
                    $(textbox.value).css('border', '2px solid red');
                    isAllValid = false;
                }
            }

            return isAllValid;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");
