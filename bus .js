let age = 18;
let vara = 800;
if(age < 10){
    console.log("free");
}
else if(vara >=800){
    let discount = vara * 50/100;
    let students = vara - discount;
    console.log(students);
}
else if( age >= 60){
    let discount = vara * 15/100;
    let citizens = vara - discount;
    console.log(citizens);
}
else{
    console.log(vara);
}






    const price = 4000;
if(price >= 5000){
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price > 2500){
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}