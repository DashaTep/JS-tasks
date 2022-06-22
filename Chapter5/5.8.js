let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

let readSet = new WeakSet();

readSet.add(messages[0]);

let dateMap = new WeakMap(); //WeakMap используется в качестве дополнительного хранилища данных, храним дату прочтения сообщения 
dateMap.set(messages[0], new Date());
