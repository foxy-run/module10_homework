let x;
if (typeof x == 'number'){
    console.log('x - число')
} else if (typeof x == 'string'){
    console.log('х - строка')
} else if (typeof x == 'boolean'){
    console.log('x - логический тип')
} else {
    console.log('Тип х не определен')
}