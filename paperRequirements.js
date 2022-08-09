/* 
fixed: per book page requirements 
1. book1 --> 100 page
2. book2 --> 200 page
3. book3 --> 300 page

vary: quantity
*/

function bookCalculator(book1Quantity, book2Quantity, book3Quantity){
    const perbook1page = 100;
    const perbook2page = 200;
    const perbook3page = 300;
    
    const book1page = book1Quantity * perbook1page;
    const book2page = book2Quantity * perbook2page;
    const book3page = book3Quantity * perbook3page;

    const totalpage = book1page + book2page + book3page;
    return totalpage;
}

const totalpage = bookCalculator(2, 1, 2);
console.log('total page required: ', totalpage);