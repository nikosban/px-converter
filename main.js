document.querySelector("#conv").addEventListener('click', run)

function run() {
    let px =  document.querySelector("#px-value").value
    let base = document.querySelector("#base-sz").value

    let rem = px / base;

    document.querySelector("#rem-value").value = rem;
}