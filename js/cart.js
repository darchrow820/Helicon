const productsBtn = document.querySelectorAll(".product__btn");
const fullPrice = document.querySelector(".price__total-sum");

let price = 0;

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, "");
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};

const plusFullPrice = (currentPrice) => {
  return (price += currentPrice);
};

const printFullPrice = () => {
  fullPrice.textContent = `${normalPrice(price)} ₽`;
};

productsBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let parent = self.closest(".product");
    let priceNumber = parseInt(
      priceWithoutSpaces(parent.querySelector(".product__price").textContent)
    );

    plusFullPrice(priceNumber);
    printFullPrice();
    self.disabled = true;
  });
});
