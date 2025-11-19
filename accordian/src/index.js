let app = document.getElementById("app");
let data = [
  {
    header: "Introduction",
    details: "This section provides an overview of the topic.",
  },
  {
    header: "Features",
    details: "Lists the main features and benefits.",
  },
  {
    header: "Usage",
    details: "Explains how to use the application step by step.",
  },
  {
    header: "Conclusion",
    details: "Summarizes the content and key takeaways.",
  },
];

app.addEventListener("click", (event) => handleAccordian(event));
function handleAccordian(event) {
  let elemId = event.target.id;
  console.log("event", event.target.id);
  if (elemId && elemId.startsWith("header")) {
    let item = document.getElementById(`detail-${elemId.split("-")[1]}`);
    if (item.classList.contains("open")) {
      item.classList.remove("open");
    } else {
      item.classList.add("open");
    }
  }
}

data.forEach((item, index) => {
  let frag = document.createDocumentFragment();
  let createHeader = document.createElement("div");
  createHeader.id = `header-${index}`;
  createHeader.className = "header";
  createHeader.textContent = item.header;
  frag.appendChild(createHeader);
  let createDetails = document.createElement("div");
  createDetails.id = `detail-${index}`;
  createDetails.className = "details";
  createDetails.textContent = item.details;
  frag.appendChild(createDetails);
  app.append(frag);
});
