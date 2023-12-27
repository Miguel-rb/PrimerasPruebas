let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener("click", function(e){
    //  console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if (styles.contains("sub")){
            count--;
        } else if (styles.contains("reset")){
            count = 0;
        } else {
            count++;
        }

        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black";
        }

        value.textContent = count;
        // console.log(count);
    })

})