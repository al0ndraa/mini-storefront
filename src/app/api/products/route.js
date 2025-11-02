export async function GET(){
const products = [
    {id: 'p1', name: 'Laptop', price:1200, category:'Electronics', stock:5},
    {id: 'p2', name: 'Deskchair', price:100, category:'Furniture', stock:2},
    {id: 'p3', name: 'Phone', price:1500, category:'Electronics', stock:1},
    {id: 'p4', name: 'Pizza', price:20, category:'Food', stock:100},
    {id: 'p5', name: 'Glasses', price:150, category:'Accessories', stock:3},
    {id: 'p6', name: 'Bracelete', price:80, category:'Accessories', stock:4},
    {id: 'p7', name: 'Watch', price:500, category:'Accessories', stock:6},
    {id: 'p8', name: 'Quesadilla', price:50, category:'Food', stock:7},
];
return Response.json(products);
}