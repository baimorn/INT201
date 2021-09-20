const pound = 0.453592 //กำหนดค้าให้ pound = 0.453592 ใช้ const เพราะกำหนดเป็น final เปลี่ยนค่าไม่ได้
const inch = 0.0254 //กำหนดค้าให้ inch = 0.0254 ใช้ const เพราะกำหนดเป็น final เปลี่ยนค่าไม่ได้

function getBMI (poundtokg, inchtometer){ //function ชื่อ getBMI รับค่า poundtokg, inchtometer
    let weight = poundtokg * pound //กำหนดให้ weight คำนวณ poundtokg * pound
    let height = inchtometer * inch //กำหนดให้ height คำนวณ poundtokg * pound
    return weight / Math.pow(height,2) //สูตรการหา BMI = kg / m^2
}

console.log(getBMI(36.5,39)) //16.871807182141648
console.log(getBMI(42.2,40)) //18.543445036890073
console.log(getBMI(20,32)) //13.731816526133052

getBMI(36.5,39);
 