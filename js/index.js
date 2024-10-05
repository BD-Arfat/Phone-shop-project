const loadAllPhone = async (status, brandName) => {
  document.getElementById("spinner").style.display = "none";
  //   fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      brandName ? brandName : "iphone"
    }`
  );
  const data = await response.json();
  if (status) {
    displayAllPhone(data.data);
  } else {
    displayAllPhone(data.data.slice(0, 6));
  }
};

const displayAllPhone = (phones) => {
  const divContainer = document.getElementById("div-container");
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${phone.image}
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-3xl font-bold">${phone.phone_name}</h2>
    <p>${phone.slug}</p>
    <div class="card-actions">
      <button class="btn px-10 bg-green-400">Buy Now</button>
    </div>
  </div>
</div>
    `;
    divContainer.appendChild(div);
  });
};

const handleClick = () => {
  document.getElementById("spinner").style.display = "block";
  const searchText = document.getElementById("search-box").value;
  setTimeout(function () {
    loadAllPhone(false, searchText);
  }, 2000);
};

const handleAllProduct = (phone) => {
  loadAllPhone(true);
};

loadAllPhone(false, "iphone");
