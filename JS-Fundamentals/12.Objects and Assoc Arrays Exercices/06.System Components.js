function solve(input) {
    let systems = new Map();

    for (let i = 0; i < input.length; i++) {
        let [system, components, subComponents] = input[i].split(' | ');

        if (!systems.has(system))
            systems.set(system, new Map());
        if (!systems.get(system).has(components))
            systems.get(system).set(components, []);
        systems.get(system).get(components).push(subComponents);
    }

    let sortedSystems = [...systems.entries()].sort(sortSystems);

    for (let [name, components] of sortedSystems) {
        console.log(name);
        let sortedComponents = [...components].sort(sortComponents);
        for (let [name, subcomponents] of sortedComponents) {
            console.log('|||' + name);
            subcomponents.forEach(s => console.log('||||||' + s));
        }
    }

    function sortSystems(a, b) {
        return b[1].size - a[1].size || a[0].localeCompare(b[0]);
    }
    function sortComponents(a, b) {
        return b[1].length - a[1].length;
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





















