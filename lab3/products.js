const products = [
    {id:1, name:'marker',qty:100,price:15},
    {id:2, name:'copy',qty:1000,price:40},
    {id:3,name:'pencil',qty:50000,price:10},
    {id:4,name:'pen',qty:200,price:20},
]

let nextId = 5;

export const getAllProducts = () => {
    return products;
}

export const addProducts  = (item) => {
    item.id = nextId;
    nextId++;
    products.push(item);

};
export const deleteProducts = (pid) => {
    const item = products.findIndex((prd)=>prd.id === pid );
    if(item == -1)
        return false;

    products.splice(item,1);
    console.log("products remaining:", products);
    return true;
};