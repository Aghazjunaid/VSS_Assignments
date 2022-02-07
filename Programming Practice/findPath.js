// Algorithm
// step-1 check for valid arguments
// step-2 split the path into array
// step-3 loop through the path
// step-4 if object is undefined and null return undefined
// step-5 else if you get key in object modify the object
// step-5 when loop ends return object


/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    let splitData = path.split('.');
        for (var i = 0; i < splitData.length; i++) {
        
            if (object === undefined || object == null){
                return undefined;  
            } else{
                object = object[splitData[i]];
            }
        }
        return object;
}


console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
