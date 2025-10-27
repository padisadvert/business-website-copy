let contents = document.getElementById("contents");
let i;
i = 0;

document.getElementById("menu-btn").addEventListener("click",()=>{
    if (i == 0) {
      i = 1;
      document.getElementById("menu").classList.remove("non-active");
      document.getElementById("menu-btn").style.backgroundImage = "url("+"/cancel-menu.svg"+")";
    } else {
      i = 0;
      document.getElementById("menu").classList.add("non-active");
      document.getElementById("menu-btn").style.backgroundImage = "url("+"menu.svg"+")";
    }
})

document.querySelectorAll(".change").forEach((cng) => {
  cng.addEventListener("click", () => {
    document.getElementById("menu").classList.add("non-active");
    document.getElementById("menu-btn").style.backgroundImage = "url(" + "menu.svg" + ")";
  })
})
