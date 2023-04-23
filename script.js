const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const priceTable = document.getElementsByTagName('table')[0];
const prices = document.querySelectorAll(".price");

const getSum = () => {
	let total = 0;
	prices.forEach((price)=>{
		total += parseInt(price.innerText);
	})
	
	const td = document.createElement('td');
	td.setAttribute("id","ans");
    td.innerText = total;
	priceTable.appendChild(td);
};

getSumBtn.addEventListener("click", getSum);

