function solve(input) {
    let cars = (function () {
        let objects = {};

        return {
            create: (name) => objects[name] = {},
            createInherit: (c2,c1) => objects[c2] = Object.create(objects[c1]),
            set: (name, key, value) => objects[name][key] = value,
            print: (name) => {
                let result = [];
                for (let prop in objects[name]) {
                    result.push(`${prop}:${objects[name][prop]}`);
                }
                console.log(result.join(', '));
            }
        };
        })();

    for (let args of input) {
        let commands = args.split(' ');
        if (commands.length > 3) {
            if (commands[0] === 'create')
                cars['createInherit'](commands[1], commands[3]);
            else
                cars['set'](commands[1],commands[2],commands[3]);
        } else {
            cars[commands[0]](commands[1]);
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);