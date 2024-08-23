const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image1.png") {
    myImage.setAttribute("src", "images/image2.jpg");
  } else {
    myImage.setAttribute("src", "images/image1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Type Shit is cool, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
}   else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Type Shit is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  