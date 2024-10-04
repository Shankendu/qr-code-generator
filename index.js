let qr_image = document.getElementById("img");
let inpValue = document.getElementById("inputVal");
let color = document.getElementById("color");
let bgColor = document.getElementById("bgColor");
let btn = document.getElementById("btn");
let container = document.getElementById("container");
let regex = /([a-f0-9]{6}|[a-f0-9]{3})/;

btn.addEventListener("click", () => {
  if (inpValue.value == "") {
    alert("Please enter the link.");
  } else if (color.value == "") {
    alert("Please enter the color.");
  } else if (!color.value.toLowerCase().match(regex)) {
    alert("Enter color in HEX");
  } else if (!bgColor.value.toLowerCase().match(regex)) {
    alert("Enter background color in HEX");
  } else if (bgColor.value == "") {
    alert("Please enter the background color.");
  } else {
    let value = inpValue.value;
    let url = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&margin=5&size=150x150&color=${color.value.toLowerCase()}&bgcolor=${bgColor.value.toLowerCase()}`;
    qr_image.setAttribute("src", url);
    inpValue.value = "";
    document.body.style.backgroundImage = `linear-gradient(45deg, #${color.value.toLowerCase()}, #${bgColor.value.toLowerCase()})`;
    container.style.boxShadow = `#${color.value}66 5px 5px,
    #${color.value}4d 10px 10px, #${color.value}33 15px 15px,
    #${color.value}1a 20px 20px, #${color.value}0d 25px 25px`;
    btn.style.backgroundColor = `#${bgColor.value.toLowerCase()}`;
    btn.style.colorolor = `#${color.value.toLowerCase()}`;
    color.value = ""
    bgColor.value = ""
  }
});