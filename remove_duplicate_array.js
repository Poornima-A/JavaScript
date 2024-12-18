function removeDuplicates(arr) {
    return arr.reduce((unique, item) => {
         return unique.includes(item) ? unique: [...unique, item];
    }, [])
 }
 const array = [5,7,8,8,9,9];
 console.log(removeDuplicates(array));