const dialogAddUser = document.querySelector("#dialog-addUser");
const createUserButton = document.querySelector("#createUser");
const imageInput = dialogAddUser.querySelector("input#imgInput");
const escBtn = dialogAddUser.querySelector("header button.esc");
const addUserCancelBtn = dialogAddUser.querySelector("footer .cancel");
const addUserClearBtn = dialogAddUser.querySelector("footer .clear");
const addUserConfirmBtn = dialogAddUser.querySelector("footer button.confirm");
const dialogDelete = document.querySelector("#dialog-delete");
const dialogDeleteConfirmButton = dialogDelete.querySelector("#delete");
const dialogDeleteCancelButton = dialogDelete.querySelector(".cancel");
const files = [];
dialogDeleteCancelButton.addEventListener("click", (e) => {
  dialogDelete.style.display = "none";
});
dialogDeleteConfirmButton.addEventListener("mouseover", (e) => {
  e.target.style.borderColor = "#91a7ff";
});
dialogDeleteConfirmButton.addEventListener("click", () => {
  const targetEl = dialogDeleteConfirmButton.targetElement;
  targetEl.remove();
  dialogDelete.style.display = "none";
});
function removeBtnEventListen() {
  const removeUserButtons = document.querySelectorAll("section>div>button");
  removeUserButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      dialogDelete.style.display = "block";
      const selectedUserDiv = button.parentElement;
      dialogDeleteConfirmButton.targetElement = selectedUserDiv;
      const rect = button.getBoundingClientRect();
      const x = rect.x;
      const y = rect.y;
      dialogDelete.style.top = `${y - 90}px`;
      console.log(`x:${x},y:${y},${y - 90}px`);
      dialogDelete.style.left = `${x - 190}px`;
      // dialogDelete.style.transform=`translate(-35%,-50%)`
    });
  });
}
removeBtnEventListen();
createUserButton.addEventListener("click", () => {
  dialogAddUser.style.display = "flex";
  imageInput.addEventListener("change", (e) => {
    files.unshift(e.target.files[0]);
    addUserConfirmBtn.style.borderColor = "#91a7ff";
  });
});

escBtn.addEventListener("click", () => {
  dialogAddUser.style.display = "none";
});
addUserCancelBtn.addEventListener("click", () => {
  dialogAddUser.style.display = "none";
});
addUserConfirmBtn.addEventListener("click", () => {
  if (files.length > 0) {
    const file = URL.createObjectURL(files[0]);
    // console.log(file)
    const div = document.createElement("div");
    div.classList.add("userCard");
    const img = document.createElement("img");
    img.src = file;
    img.alt = " ";
    const button = document.createElement("button");
    button.textContent = "X";
    div.appendChild(img);
    div.appendChild(button);
    const sectionUserCards = document.querySelector(
      "section.section-userCards"
    );
    sectionUserCards.appendChild(div);
    dialogAddUser.style.display = "none";
    clearFile();
    removeBtnEventListen();
  }
});

addUserClearBtn.addEventListener("click", clearFile);

function clearFile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  imageInput.files = input.files;
}
