/* Set the count to 0 */
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

/* Calls a function for each button that set the class called by the event for every click on the respective button */
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList; console.log(e.currentTarget.classList)

        /* Based on the class called, the count is updated */
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        /* I put some color to style numbers above or below zero */
        if(count < 0) {
            value.style.color = "orange";
        } else if(count > 0) {
            value.style.color = "lightblue";
        } else {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})