function handler(inputs) {
    console.log("Handler running ...");
    var inputs = JSON.parse(inputs);
    
    for (var key in inputs) {
        if (key === 'string') console.log(key, "=", inputs[key]);
        if (key === 'file' ) {
            var file = Buffer.from(inputs.file, 'base64').toString();
            console.log("file:\n", JSON.parse(file));
        }
        if (key === 'json' || key === 'yaml') {
            console.log(key, "=", inputs[key]);
            p = JSON.parse(inputs[key]);
            console.log(key, ":", p);
            console.log("    object.key:", p.object.key);
            console.log("    object.array[2].integer:", p.object.array[2].integer);
        }
    }
}

handler(process.argv[2]);
