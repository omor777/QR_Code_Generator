window.onload = () => {
  main();
};

function main() {
  const textInput = document.getElementById("text");
  const qrCodeBtn = document.querySelector(".qr-code-btn");
  const qrCodeContainer = document.querySelector(".qr-code");
  const qrCodeGenerator = document.querySelector(".qr-code-generator");
  const image = document.querySelector(".qr-code img");

  function generateQrCode(e) {
    e.preventDefault();
    if (textInput.value) {
      qrCodeContainer.classList.add("show");
      image.src = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(
        textInput.value
      )}&format=svg`;
    } else {
      alert("Please input some text.");
    }
  }

  qrCodeGenerator.addEventListener("submit", generateQrCode);
}
