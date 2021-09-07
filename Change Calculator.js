//Object bank
const Bank500 = new Object(500);
const Bank100 = new Object(100);
const Bank50 = new Object(50);
const Bank20 = new Object(20);
const Bank10 = new Object(10);
const Bank5 = new Object(5);
const Bank2 = new Object(2);
const Bank1= new Object(1);

const nameOfBank = [Bank500 , Bank100 , Bank50 , Bank20 , Bank10 , Bank5,Bank2 , Bank1]
let numOfBank = [Bank500s = 0 , Bank100s = 0 , Bank50s = 0, Bank20s = 0 , Bank10s = 0, Bank5s = 0 , Bank2s = 0 , Bank1s = 0];

// calculate
function calculate(price , customerMoney){
    console.log("Price is = " + price)
    console.log("Money is = " + customerMoney);
    console.log("Change is = " + (price - customerMoney))
    console.log("Change Calculator");
    let total = customerMoney - price;
if(total >= 500){
    numOfBank[0] += Math.floor(total/500);
    total -= numOfBank[0]*500;
}
if(total >= 100){
    numOfBank[1] += Math.floor(total/100);
    total -= numOfBank[1]*100;
}
if(total >= 50){
    numOfBank[2] += Math.floor(total/50);
    total -= numOfBank[2]*50;
}
if(total >= 20){
    numOfBank[3] += Math.floor(total/20);
    total -= numOfBank[3]*20;
}
if(total >= 10){
    numOfBank[4] += Math.floor(total/10);
    total -= numOfBank[4]*10;
}
if(total >= 5){
    numOfBank[5] += Math.floor(total/5);
    total -= numOfBank[5]*5;
}
if(total >= 2){
    numOfBank[6] += Math.floor(total/2);
    total -= numOfBank[6]*2;
}
if(total >= 1){
    numOfBank[7] += Math.floor(total/1);
    total -= numOfBank[7]*1;
}
print();
}

function print(){
    var ans = '';
    for(let i = 0; i < nameOfBank.length; i++){
        ans += `Bank ${nameOfBank[i]} : ${numOfBank[i]} \n`;
    }
    console.log(ans);
}
calculate(500,1200);


