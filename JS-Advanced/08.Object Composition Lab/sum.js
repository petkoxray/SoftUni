function getModel() {
    let first, second, result;
    return {
        init: (num1,num2,resulted) => {
            first = $(num1);
            second = $(num2);
            result = $(resulted);
        },
        add: () => result.val(Number(first.val()) + Number(second.val())),
        subtract: () => result.val(Number(first.val()) - Number(second.val()))
    }
}