// window.init = (id, len, cb) => {
//   console.log(hello);
//   let frag = document.createDocumentFragment();
//   for (i = 0; i < len; i++) {
//     const inp = document.createElement("input");
//     input.type = "text";
//     input.id = `id-${index + 1}`;
//     frag.appendChild(inp);
//   }
//   id.appendChild(frag);

//   id.addEventListener("input", (event) => {});

//   document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("id-1").focus();
//   });
// };

// var pinSdk = (() => {
//   function init(options, cb) {
//     console.log(options, cb);
//     let frag = document.createDocumentFragment();
//     for (i = 0; i < options.len; i++) {
//       const inp = document.createElement("input");
//       inp.type = "text";
//       inp.id = `id-${i + 1}`;
//       frag.appendChild(inp);
//     }
//     document.getElementById(options.id).appendChild(frag);
//     document.addEventListener("input", (event) => {
//       if (event.target.id.includes("id-")) console.log(event.target.value);
//     });
//   }

//   return {
//     init,
//   };
// })();

var pinSdk = (() => {
  function init(options, cb) {
    let frag = document.createDocumentFragment();

    // Keep track of input values
    let values = Array(options.len).fill("");

    for (let i = 0; i < options.len; i++) {
      const inp = document.createElement("input");
      inp.type = "text";
      inp.id = `id-${i + 1}`;
      inp.maxLength = 1; // Limit input to one character
      inp.style.width = "30px"; // Optional styling for better alignment

      frag.appendChild(inp);
    }

    document.getElementById(options.id).appendChild(frag);
    const firstInput = document.getElementById("id-1");
    if (firstInput) {
      firstInput.focus();
    }

    // Handle input event
    document.getElementById(options.id).addEventListener("input", (event) => {
      if (event.target.id.includes("id-")) {
        const value = event.target.value;

        // Only allow single-digit integers
        if (!/^\d$/.test(value)) {
          event.target.value = ""; // Clear invalid input
          return;
        }
        let i = parseInt(event.target.id.split("-")[1]);
        values[i - 1] = value; // Update the value array

        // Move focus to the next input if not the last one
        const nextInput = document.getElementById(`id-${i + 1}`);
        if (nextInput) {
          nextInput.focus();
        } else {
          // If it's the last input, call the callback with all values
          cb(values.join(""));
        }
      }
    });
  }

  return {
    init,
  };
})();
