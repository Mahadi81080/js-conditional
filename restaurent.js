const age = 45;
const price = 500;
if(age <= 12){
    console.log('you can eat for free');
}
else if(age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payamount = price - discount;
    console.log(payamount)
}
else if(age >= 50){
    // 25% discount
    const discount = price * 25 / 100;
    const payamount = price - discount;
    console.log(payamount)
}
else if(age >= 40){
    // 18% discount
    const discount = price * 18 / 100;
    const payamount = price - discount;
    console.log(payamount)
}
else{
    console.log(price)
}