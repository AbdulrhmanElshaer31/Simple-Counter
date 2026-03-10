//define constans
const counter_field = document.getElementById("counter-field");
const increase_btn = document.getElementById("btn");
const decrease_btn = document.getElementById("btn2");
const reset_btn = document.getElementById("btn3");
increase_btn.addEventListener("click", () => {
  let count = counter_field.textContent;
  count++;
  counter_field.textContent = count;
  console.log(count);
});

decrease_btn.addEventListener("click", () => {
  let count = counter_field.textContent;
  count--;
  counter_field.textContent = count;
  console.log(count);
});


reset_btn.addEventListener("click", () => {
  
  counter_field.textContent = 0;
});

