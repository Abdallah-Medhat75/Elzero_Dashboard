let ticketsDiv = document.querySelector(".tickets");
let incrementH3s = document.querySelectorAll(".tickets .details .card h3")
let enabled = true;
function counting(el) {
    window.onscroll = function () {
        if (enabled) {
            if (window.scrollY >= el.offsetTop) {
                function increasing(targetEl) {
                    for (let i = 0; targetEl.length; ++i) {
                        let goal = targetEl[i].getAttribute("data");
                        let counter = setInterval(function () {
                            targetEl[i].textContent++;
                            if (targetEl[i].textContent === goal) {
                                clearInterval(counter);
                            }
                        }, 1);
                    }
                }
                enabled = false;
                increasing(incrementH3s); // This Almost Function Recursion, So The Loop Repeats It Self Due to window.oncsroll and doesn't reach lines below it
                // For Somereason everything below this function call can't be read
                console.log(enabled); // Will Not Work
            }
        }
    }
}
counting(ticketsDiv);
