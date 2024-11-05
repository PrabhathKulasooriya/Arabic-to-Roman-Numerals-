const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
    {value: 1000, numeral: "M"},
    {value: 900, numeral: "CM"},
    {value: 500, numeral: "D"},
    {value: 400, numeral: "CD"},
    {value: 100, numeral: "C"},
    {value: 90, numeral: "XC"},
    {value: 50, numeral: "L"},
    {value: 40, numeral: "XL"},
    {value: 10, numeral: "X"},
    {value: 9, numeral: "IX"},
    {value: 5, numeral: "V"},
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"},
]

const convertNumber =(input)=>{
    let romanNumeral = "";
    for(const numeral of romanNumerals){
        while(input>=numeral.value){
            romanNumeral += numeral.numeral;
            input -= numeral.value;
        }
    }
    return romanNumeral;
}


const checkUserInput = () => {
    const inputInt = parseInt(input.value);
    if(!input.value || isNaN(inputInt)){
        output.textContent = "Please enter a valid number";
        return;
    }
    if(inputInt>3999){
       output.textContent = "Please enter a number less than or equal to 3999" ;
        return;
    }
    if(inputInt<1){
        output.textContent="Please enter a number greater than or equal to 1";
        return;
    }
    output.textContent = convertNumber(inputInt); 
    input.value = "";
}

convertBtn.addEventListener("click", () => {
    checkUserInput();
});

input.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        checkUserInput();
    }
})
