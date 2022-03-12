let ulNode = document.getElementById("ulId")
let li = ulNode.childNodes;
console.log(li)

let childNodesArr = Array.from(li)
let mapLi = childNodesArr.map(t => {return t.innerText})
mapLi = mapLi.filter(function( element ) {
    return element !== undefined;
 });
console.log(mapLi)