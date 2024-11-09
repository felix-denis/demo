function rolldice() {
  const myNumber = document.getElementById("myNumber").value;
  const diceResult = document.getElementById("diceResult");
  const imgResult = document.getElementById("imgResult");
  const values = [];
  const images = [];
  for (let i = 0; i < myNumber; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="/Images/${value}.png" >`);
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  imgResult.innerHTML = images.join(``);
}
