
// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = parseFloat(entries.get("dividend"));
  const divider = parseFloat(entries.get("divider"));

  

  if (isNaN(dividend) || isNaN(divider)) {
    
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input. Please provide valid numbers.");
  } else if (divider === 0) {
    
    result.innerText = "Division not performed. Cannot divide by zero. Try again";
    console.error("Division by zero is not allowed.");
  }else {
    const divisionResult = dividend / divider;
    if (Number.isInteger(divisionResult)) {
      
      result.innerText = divisionResult;
    } else {
      
      result.innerText = divisionResult.toFixed(0);
    }
  } if(dividend === '' || divider ===''){

    result.innerText = ("Devision not performed. both values are required in inputs. try again.");
    console.error("input numbers");
 }
})
