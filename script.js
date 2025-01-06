const container = document.getElementById("container");
const hoverAllButton = document.getElementById("hoverAllButton");
const colors = ["#056CF2", "#05AFF2", "#F2E205", "#F28705", "#A62103"];
const SQUARES = 500;

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = (square) => {
  const color = getRandomColor();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (square) => {
    setTimeout(() => {
      square.style.background = "#1d1d1d";
      square.style.boxShadow = "0 0 2px #000";
    }, 300); 
  };
  

for (let i = 0; i < SQUARES; i++) {
    
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  square.addEventListener("touchstart", () => setColor(square));
  square.addEventListener("touchend", () => removeColor(square));

  container.appendChild(square);
}

hoverAllButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square, index) => {
      setTimeout(() => {
        setColor(square);
      }, index * 10);
    });
  
    setTimeout(() => {
      squares.forEach(square => {
        removeColor(square);
      });
    }, 6000);
  });
  