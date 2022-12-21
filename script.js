//your code here
let itemInput = document.getElementById('item-name-input'); 
let priceInput = document.getElementById('price-price-input'); 

let button = document.getElementById('add'); 
let table = document.getElementById('table');
let total = document.getElementById('total');

let priceArr = [];
function addItem()
{
    let item = itemInput.value;
    let price = priceInput.value;
    let sum = 0;

    if(item !=='' && price !=="")
    {
        let row = document.createElement('tr');
        priceArr.push(parseInt(price));

        row.innerHTML = `<td>${item} </td> <td>${price}</td>`
        for(let i=0;i<priceArr.length;i++)
        {
            sum+=priceArr[i];
        }
        console.log(sum);
        table.append(row);
        table.innerText = sum;
        item = '';
        price = '';
    }
}
button.addEventListener('click',addItem)

