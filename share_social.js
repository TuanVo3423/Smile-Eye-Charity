const popup = document.querySelector(".popup");
const modal_share_close = document.querySelector(".modal_share_close");
const modal_share_field = document.querySelector(".modal_share_field");
const input = document.querySelector(".modal_share_input");
const copy_btn = document.querySelector(".modal_share_copy_btn");
const modal_share = document.querySelector(".modal_share");

const share_btn = document.querySelector(".main_envent_header_icon");
share_btn.addEventListener("click", () => {});

const test = document.querySelector(".modal_share_content");
share_btn.addEventListener("click", () => {
  modal_share.classList.toggle("show");
});

// viewBtn.onclick = () => {
//   modal_share.classList.toggle("show");
//   popup.classList.toggle("show");
// };
modal_share_close.onclick = () => {
  modal_share.classList.toggle("show");
};

copy_btn.addEventListener("click", () => {
  input.select(); //select input value
  if (document.execCommand("copy")) {
    //if the selected text is copied
    modal_share_field.classList.add("active");
    copy_btn.innerText = "Copied";
    setTimeout(() => {
      window.getSelection().removeAllRanges(); //remove selection from page
      modal_share_field.classList.remove("active");
      copy_btn.innerText = "Copy";
    }, 3000);
  }
});

window.onclick = function (event) {
  if (event.target == modal_share) {
    $(".modal_share").attr("style", "display: none;");
  }
};

$("#share").jsSocials({
  url: "https://smile-eye-charity.vercel.app",
  text: "Cùng chung tay vì một xã hội không còn những khoảng cách về kinh tế, điều kiện và giáo dục.",
  showLabel: true,
  shares: [
    "twitter",
    { share: "facebook", showLabel: true },
    { share: "linkedin", showLabel: true },
    { share: "pinterest", showLabel: true },
  ],
});
