function main(input) {
    let apps = new Map();
    let cache = new Map();

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split('\'').filter(x => x !== '');
        if (args.length <= 2) {
            apps.set(args[1], new Map);
            continue;
        }

        if (!cache.has(args[3])) {
            cache.set(args[3], new Map);
            cache.get(args[3]).set('controllers', []);
            cache.get(args[3]).set('models', []);
            cache.get(args[3]).set('views', []);
        }

        switch(args[0]) {
            case '$controller=':
                cache.get(args[3]).get('controllers').push(args[1]);
                break;
            case '$model=':
                cache.get(args[3]).get('models').push(args[1]);
                break;
            case '$view=':
                cache.get(args[3]).get('views').push(args[1]);
                break;
        }
    }

    for (let [key, value] of cache) {
        if (apps.has(key)) {
            let controllers = cache.get(key).get('controllers').sort();
            apps.get(key).set('controllers', controllers);
            let models = cache.get(key).get('models').sort();
            apps.get(key).set('models', models);
            let views = cache.get(key).get('views').sort();
            apps.get(key).set('views', views);
        }
    }

    let objResult = {};
    let result = [...apps.entries()].sort(sortMap).forEach(kvp => {
        objResult[kvp[0]] = {
            controllers: kvp[1].get('controllers'),
            models: kvp[1].get('models'),
            views: kvp[1].get('views')
        }
    });

    console.log(JSON.stringify(objResult));

    function sortMap(a, b) {
        console.log(a[1].get('controllers').length);
        console.log(b[1].get('controllers').length);
        let result = b[1].get('controllers').length - a[1].get('controllers').length;
            if (result === 0)
                result = a[1].get('models').length - b[1].get('models').length;
            return result;
    }
}

main([
    `$controller='PHPController'&app='Language Parser'`,
    `$controller='JavaController'&app='Language Parser'`,
    `$controller='C#Controller'&app='Language Parser'`,
    `$controller='C++Controller'&app='Language Parser'`,
    `$app='Garbage Collector'`,
    `$controller='GarbageController'&app='Garbage Collector'`,
    `$controller='SpamController'&app='Garbage Collector'`,
    `$app='Language Parser'`
]);

main([
    `$app='MyApp'`,
    `$controller='My Controller'&app='MyApp'`,
    `$model='My Model'&app='MyApp'`,
    `$view='My View'&app='MyApp'`
]);