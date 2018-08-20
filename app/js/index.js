document.addEventListener("DOMContentLoaded", () => {
  fetch("http://www.json-generator.com/api/json/get/cpTmnSrPCa?indent=2")
    .then(response => response.json())
    .then(dataArray => {
      if (dataArray == undefined || dataArray == null || dataArray == [])
        return;

      let container = document.getElementsByClassName("container");

      for (const index of dataArray.slice(0, 15).keys()) {
        container[0].appendChild(
          getTemlate(dataArray[index].name, dataArray[index].picture, dataArray[index].about, dataArray[index].email, dataArray[index].isActive)
        );
      }
    });
});

function getTemlate(name, image, about, email, isActive) {
  const col = document.createElement("div");

  col.innerHTML =

    `<div class="card">
                <div class="card-header">
                    <img src="${image}" alt="avatar">
                    <p>${name}</p>
                </div>
                <div class="card-body">
                    <p class="card-text">${about}</p>
                </div>
                <div class="card-footer">
                    <div class="follow">
                        <img src="static/img/bookmark.png">
                        <p>Follow</p>
                    </div>
                    <div class="mail">
                        <a href="#">${email}</a>
                    </div>
                    <div class="Active"></div>
                </div>
            </div>`;

  col.classList.add("col-sm-6");

  return col;
}
