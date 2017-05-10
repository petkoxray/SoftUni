function solve(input) {
    let count = 1;
    let result = [];
     for (let i = 0; i < input.length; i++) {
         if (input[i] == 'add')
            result.push(count);
        else
            result.pop();
        count++;
     }

     if (result.length > 0) 
        console.log(result.join('\n'));
    else
        console.log('Empty');     
}

solve(['remove','remove','remove']);