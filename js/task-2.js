function CheckAndGetNumber (){
    let firstNumber = parseFloat(document.getElementsByClassName('firstNumber')[0].value);
    let secondNumber =  parseFloat(document.getElementsByClassName('secondNumber')[0].value);
    if(isNaN(firstNumber) || isNaN(secondNumber))
    {
        alert('itsnt Number!')
        return
    }

    return [firstNumber, secondNumber]
}

let SumHandler = function()
{   
    let Numbers = CheckAndGetNumber();
    if(Numbers === undefined)
    {
        return;
    }

    document.getElementsByClassName('result')[0].textContent = Numbers[0] + Numbers[1];
};

let difHandler = function()
{   
    let Numbers = CheckAndGetNumber();
    if(Numbers === undefined)
    {
        return;
    }
    document.getElementsByClassName('result')[0].textContent = Numbers[0] - Numbers[1];
};
let mulHandler = function()
{   
    let Numbers = CheckAndGetNumber();
    if(Numbers === undefined)
    {
        return;
    }
    document.getElementsByClassName('result')[0].textContent = Numbers[0] * Numbers[1];
};
let divHandler = function()
{   
    let Numbers = CheckAndGetNumber();
    if(Numbers === undefined)
    {
        return;
    }
    document.getElementsByClassName('result')[0].textContent = Numbers[0] / Numbers[1];
};

function SetupOperations()
{
    document.getElementsByClassName('+')[0].addEventListener('click', SumHandler);
    document.getElementsByClassName('-')[0].addEventListener('click', difHandler);
    document.getElementsByClassName('/')[0].addEventListener('click', divHandler);
    document.getElementsByClassName('*')[0].addEventListener('click', mulHandler);
}

SetupOperations();


