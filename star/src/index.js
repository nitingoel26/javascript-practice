let rating = 0;

starRating.addEventListener("mouseover", (event) => {
  const ctarget = event.target;
  console.log(ctarget.id);
  if (ctarget.id.includes("star")) {
    let ind = ctarget.id.split("-")?.[1];
    for (let i = 1; i <= parseInt(ind); i++) {
      document.getElementById(`star-${i}`).classList.add("rated");
    }
    for (let i = parseInt(ind) + 1; i <= 5; i++) {
      document.getElementById(`star-${i}`).classList.remove("rated");
    }
  }
});
starRating.addEventListener("mouseout", (event) => {
  for (let i = 1; i <= rating; i++) {
    document.getElementById(`star-${i}`).classList.add("rated");
  }
  for (let i = rating + 1; i <= 5; i++) {
    document.getElementById(`star-${i}`).classList.remove("rated");
  }
});

starRating.addEventListener("click", (event) => {
  const ctarget = event.target;
  console.log(ctarget.id);
  if (ctarget.id.includes("star")) {
    let ind = ctarget.id.split("-")?.[1];
    rating = parseInt(ind);
    for (let i = 1; i <= parseInt(ind); i++) {
      document.getElementById(`star-${i}`).classList.add("rated");
    }
    for (i = parseInt(ind) + 1; i <= 5; i++) {
      document.getElementById(`star-${i}`).classList.remove("rated");
    }
  }
});
