const productImgSrc = document.getElementById("product-img").src;
let selectedColor = null; // Variable to store the matched color from the double option
let slanted = false;
let threex = false;

document.querySelectorAll('[data-option="pocket"]').forEach((option) => {
  option.addEventListener("click", function () {
    const pocketValue = option.getAttribute("data-value");
    const colorNames = [
      "red",
      "maroon",
      "green",
      "black",
      "dgray",
      "navy",
      "purple",
      "cc",
      "lgray",
      "white",
      "brown",
      "blue",
    ];

    // Get the src of the product image
    const productImgSrc = document.getElementById("product-img").src;

    if (pocketValue === "3x") {
          document.getElementById("prev").style.display = "block";


      // Extract the filename from the src
      const filename = productImgSrc.split("/").pop();
      // Extract the substring starting from the eighth character
      const substringPath = filename.slice(7);

      // Find the first matching color name in the order it appears
      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (firstColorFound) {
        selectedColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("product-overlay");
        const productOverlaySlanted = document.getElementById(
          "product-overlay-slanted"
        );
        productOverlay.src = `/assets/img/3x/${selectedColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        productOverlaySlanted.style.display = "none";
        localStorage.setItem("slantedPocket", false);
        localStorage.setItem("threexPocket", true);
      }
    }

    // Hide overlay when the option selected is not '3x'
    if (pocketValue == "2x") {

      document.getElementById("prev").style.display = "block";
      document.getElementById("product-overlay-slanted").style.display = "none";
      document.getElementById("product-overlay").style.display = "none";


    }

    if (pocketValue == "slanted") {
      document.getElementById("prev").style.display = "block";

      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"

      // Extract the substring starting from the eighth character
      const substringPath = filename.slice(7);

      // Find the first matching color name in the order it appears
      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (firstColorFound) {
        selectedColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById(
          "product-overlay-slanted"
        );
        productOverlay.src = `/assets/img/Slanted/${selectedColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay").style.display = "none";
        localStorage.setItem("slantedPocket", true);
        localStorage.setItem("threexPocket", false);
      }
    }
  });
});

let ventColor = null; // Variable to store the matched color from the double option

document.querySelectorAll('[data-option="vent"]').forEach((option) => {
  option.addEventListener("click", function () {
    const pocketValue = option.getAttribute("data-value");
    const colorNames = [
      "red",
      "blue",
      "maroon",
      "green",
      "black",
      "lgray",
      "navy",
      "purple",
      "cc",
      "white",
      "brown",
      "dgray",
    ];

    // Get the src of the product image
    const productImgSrc = document.getElementById("product-img").src;

    if (pocketValue === "center") {
      document.getElementById("hole-overlay").style.display = "none";

      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (firstColorFound) {
        ventColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("product-overlay");
        productOverlay.src = `/assets/img/Vents/Center/${ventColor}.jpg`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }
    if (pocketValue === "side") {
      document.getElementById("hole-overlay").style.display = "none";

      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (firstColorFound) {
        ventColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("product-overlay");
        productOverlay.src = `/assets/img/Vents/Side/${ventColor}.jpg`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }
  });
});

function but() {




  let holeColor = null; // Variable to store the matched color from the double option
  document.querySelectorAll('[data-option="button"]').forEach((option) => {
    option.addEventListener("click", function () {
      const pocketValue = option.getAttribute("data-value");
      const colorNames = [
        "red",
        "blue",
        "maroon",
        "green",
        "black",
        "navy",
        "purple",
        "cc",
        "dgray",
        "white",
        "brown",
        "lgray",
      ];

      // Get the src of the product image
      const productImgSrc = document.getElementById("product-img").src;

      if (pocketValue === "1button") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
      }

      if (pocketValue === "2button") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
      }

      if (pocketValue === "6button") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
        }
      }
    });
  });
}

function fab() {
  let holeColor = null; // Variable to store the matched color from the double option
  document.querySelectorAll('[data-option="fabric"]').forEach((option) => {
    option.addEventListener("click", function () {
      const pocketValue = option.getAttribute("data-value");
      const colorNames = [
        "red",
        "blue",
        "maroon",
        "green",
        "black",
        "navy",
        "purple",
        "cc",
        "dgray",
        "white",
        "brown",
        "lgray",
      ];

      // Get the src of the product image
      const productImgSrc = document.getElementById("product-img").src;

      if (pocketValue === "navy") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }

      if (pocketValue === "green") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }

      if (pocketValue === "dgray") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }

      if (pocketValue === "purple") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }

      if (pocketValue === "red") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }

      if (pocketValue === "maroon") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }

      if (pocketValue === "black") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }

      if (pocketValue === "blue") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }
      if (pocketValue === "cc") {
        const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
        const substringPath = filename.slice(7);

        let firstColorFound = null;
        for (let color of colorNames) {
          const index = substringPath.indexOf(color);
          if (
            index !== -1 &&
            (firstColorFound === null || index < firstColorFound.index)
          ) {
            firstColorFound = { color, index };
          }
        }

        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "1"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "2"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
        if (
          firstColorFound &&
          !["white", "brown", "lgray"].includes(firstColorFound.color) &&
          filename[0] === "6"
        ) {
          holeColor = firstColorFound.color;

          // Display the overlay image for the selected color
          const productOverlay = document.getElementById("hole-overlay");
          productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
          productOverlay.style.display = "block";
          document.getElementById("product-overlay-slanted").style.display =
            "none";
            document.getElementById("product-overlay").style.display =
            "none";
        }
      }
      if (pocketValue === "white") {
        document.getElementById("hole-overlay").style.display =
            "none";
      }
      if (pocketValue === "lgray") {
        document.getElementById("hole-overlay").style.display =
            "none";
      }
      if (pocketValue === "brown") {
        document.getElementById("hole-overlay").style.display =
            "none";
      }


      
    });
  });
}



// let holeColor = null; // Variable to store the matched color from the double option
let holeColor = null; // Variable to store the matched color from the double option



document.querySelectorAll('[data-option="hole"]').forEach((option) => {
  option.addEventListener("click", function () {
    const pocketValue = option.getAttribute("data-value");
    const colorNames = [
      "red",
      "blue",
      "maroon",
      "green",
      "black",
      "navy",
      "purple",
      "cc",
      "dgray",
      "white",
      "brown",
      "lgray",
    ];

    // Get the src of the product image
    const productImgSrc = document.getElementById("product-img").src;

    if (pocketValue === "red") {
      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "1"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "2"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "6"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }

    if (pocketValue === "orange") {
      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "1"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "2"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "6"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }

    if (pocketValue === "gray") {
      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "1"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "2"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "6"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }
    if (pocketValue === "purple") {
      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "1"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "2"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "6"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }

    if (pocketValue === "pink") {
      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "1"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "2"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "6"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }

    if (pocketValue === "white") {
      const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
      const substringPath = filename.slice(7);

      let firstColorFound = null;
      for (let color of colorNames) {
        const index = substringPath.indexOf(color);
        if (
          index !== -1 &&
          (firstColorFound === null || index < firstColorFound.index)
        ) {
          firstColorFound = { color, index };
        }
      }

      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "1"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }

      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "2"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
      if (
        firstColorFound &&
        !["white", "brown", "lgray"].includes(firstColorFound.color) &&
        filename[0] === "6"
      ) {
        holeColor = firstColorFound.color;

        // Display the overlay image for the selected color
        const productOverlay = document.getElementById("hole-overlay");
        productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
        productOverlay.style.display = "block";
        document.getElementById("product-overlay-slanted").style.display =
          "none";
      }
    }
  });
});

// Object to store user selections
const userSelections = {
  button: null,
  fabric: null,
  lining: null,
  hole: null,
  pocket: null,
  thread: null,
  vent: null,
};

const options = document.querySelectorAll(".option");
const previewImage = document.getElementById("product-img");

// Function to switch between steps
const steps = document.querySelectorAll(".step-content");
const progressSteps = document.querySelectorAll(".step");
let currentStep = 0;

function showStep(step) {
  // Hide all steps and only display the active one
  steps.forEach((content, index) => {
    content.classList.toggle("active", index === step);
  });

  // Update the progress bar (highlight active steps)
  progressSteps.forEach((stepElem, index) => {
    stepElem.classList.toggle("active", index <= step);
  });
}

// Next and Previous button functionality
document.getElementById("next").addEventListener("click", () => {
  const nextButton = document.getElementById("next");
  nextButton.style.display = "none";

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
    if (currentStep == "6") {
      const nextButton = document.getElementById("next");
      nextButton.style.display = "none";
      document.getElementById("order").style.display = "block";
    }
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
  if (currentStep != "6") {
    document.getElementById("next").style.display = "block";
    document.getElementById("order").style.display = "none";

  }
  if (currentStep == 5) {
      document.getElementById("prev").style.display = "none";

  }

  

  if (currentStep == 1) {
    cust_jack = localStorage.getItem("customizedJacket");

    const colorNames = [
      "red",
      "blue",
      "maroon",
      "green",
      "black",
      "navy",
      "purple",
      "cc",
      "dgray",
      "white",
      "brown",
      "lgray",
    ];

    // Get the src of the product image
    const productImgSrc = cust_jack;

    const filename = productImgSrc.split("/").pop(); // e.g., "2buttonpurplemaroonlinewhitewhiteT.jpg"
    const substringPath = filename.slice(7);

    let firstColorFound = null;
    for (let color of colorNames) {
      const index = substringPath.indexOf(color);
      if (
        index !== -1 &&
        (firstColorFound === null || index < firstColorFound.index)
      ) {
        firstColorFound = { color, index };
      }
    }

    if (
      firstColorFound &&
      !["white", "brown", "lgray"].includes(firstColorFound.color) &&
      filename[0] === "1"
      
    ) {
      holeColor = firstColorFound.color;

      // Display the overlay image for the selected color
      const productOverlay = document.getElementById("hole-overlay");
      productOverlay.src = `/assets/img/1bh/${holeColor}.png`; // Adjust file extension if needed
      productOverlay.style.display = "block";
      document.getElementById("product-overlay-slanted").style.display =
        "none";
    }
    if (
      firstColorFound &&
      !["white", "brown", "lgray"].includes(firstColorFound.color) &&
      filename[0] === "2"
    ) {
      holeColor = firstColorFound.color;

      // Display the overlay image for the selected color
      const productOverlay = document.getElementById("hole-overlay");
      productOverlay.src = `/assets/img/2bh/${holeColor}.png`; // Adjust file extension if needed
      productOverlay.style.display = "block";
      document.getElementById("product-overlay-slanted").style.display =
        "none";
    }
    if (
      firstColorFound &&
      !["white", "brown", "lgray"].includes(firstColorFound.color) &&
      filename[0] === "6"
    ) {
      holeColor = firstColorFound.color;

      // Display the overlay image for the selected color
      const productOverlay = document.getElementById("hole-overlay");
      productOverlay.src = `/assets/img/6bh/${holeColor}.png`; // Adjust file extension if needed
      productOverlay.style.display = "block";
      document.getElementById("product-overlay-slanted").style.display =
        "none";
    }
  

    but();
  }
  if (currentStep == 0) {


    fab();

  }
});

// Immediate image update when an option is selected
options.forEach((option) => {
  option.addEventListener("click", function () {
    const optionType = option.getAttribute("data-option"); // e.g. button, fabric
    const optionValue = option.getAttribute("data-value"); // e.g. 2button, navy

    // Save the user's selection in the corresponding category
    userSelections[optionType] = optionValue;

    updatePreviewImage();
  });
});

// Update the preview image according to the selections
function updatePreviewImage() {
  let imagePath = "/assets/img/jacket/";
  const nextButton = document.getElementById("next");
  nextButton.style.display = "block";

  // Construct the image path based on selections or use 'default' if not selected yet
  imagePath += userSelections.button || "";
  imagePath += userSelections.fabric || "";
  imagePath += userSelections.lining || "";
  imagePath += userSelections.hole || "";
  imagePath += userSelections.thread || "";
  // imagePath += (userSelections.pocket || '');
  // imagePath += (userSelections.vent || '');
  imagePath += ".jpg";

  // Update the preview image src
  previewImage.src = imagePath;
  localStorage.setItem("customizedJacket", imagePath);
}

// Initial call to show the first step when the page loads
showStep(currentStep);
const finalJacketImage = "path_to_customized_jacket_image"; // Get the actual image from the canvas or process
