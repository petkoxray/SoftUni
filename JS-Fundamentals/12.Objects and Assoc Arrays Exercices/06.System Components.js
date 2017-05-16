function solve(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let [system, component, subComponent] = input[i].split(/ \| /);

        if (!result.has(system))
            result.set(system, new Map());
        
        if (!result.get(system).has(component))
            result.get(system).set(component, []);

        result.get(system).get(component).push(subComponent);
    }

    function orderSystem(a, b) {
        let result = b[1].size - a[1].size;
        if (result === 0)
            result = a[0].localeCompare(b[0]);
        return result;
    }

    let resultArr = [...result].sort(orderSystem);
    
    for(let [system, components] of resultArr) {
        console.log(system);
        let orderedComponents = [...components].sort(orderSystem);
        for(let [component, subComponents] of orderedComponents) {
            console.log(`||${component}`);
            subComponents.forEach(x => console.log(`||||${x}`));
        }
    }
}

solve([
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'
]);