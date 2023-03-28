let mapRandom = new Map;
mapRandom.set('key1', 'value1');
mapRandom.set('key2', 'value2');
mapRandom.set('key3', 'value3');
mapRandom.set('key4', 'value4');

for (let [name, property] of mapRandom.entries()) {
    console.log(`Ключ - ${name}, значение - ${property}`);
}