function showSuccessToast() {
  toast({
    title: "Thành công!",
    message:
      "Gửi mail thành công, chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
    type: "success",
    duration: 5000,
  });
}
function showInfoToast() {
  toast({
    title: "Thất bại!",
    message: "Vui lòng điền đầy đủ thông tin.",
    type: "info",
    duration: 5000,
  });
}
(function () {
  emailjs.init("oGf2xSghLt1ka_BVe");
})();
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    content: document.getElementById("content").value,
  };
  const serviceID = "service_jv500u5";
  const templateID = "template_f68zv0n";
  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("content").value = "";
    document.querySelector(".modal").setAttribute("style", "display: none;");
    showSuccessToast();
  });
}
const REQUIRED_FIELD = "Vui lòng điền vào form.";
const EMAIL_FORMAT = "Vui lòng điền đúng format của email.";
const regression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var validator = new Validator({
  form: document.getElementById("form"),
  rules: {
    content: {
      validate: (val) => (val ? " " : REQUIRED_FIELD),
    },
    name: {
      validate: (val) => (val ? " " : REQUIRED_FIELD),
    },
    email: {
      validate: (val) =>
        val ? (regression.test(val) ? " " : EMAIL_FORMAT) : REQUIRED_FIELD,
    },
  },
});

validator.form.onsubmit = (evn) => {
  evn.preventDefault();
  var valid = {
    content: false,
    name: false,
    email: false,
  };
  const values = validator.getValues();
  // check message errors
  if (validator.errorMessages) {
    for (const key in validator.errorMessages) {
      $(`.modal-form-right-${key}-errors`).text(validator.errorMessages[key]);
    }
  }
  for (const key in validator.errorMessages) {
    valid[key] = validator.errorMessages[key] == " " ? true : false;
  }
  if (valid.content && valid.name && valid.email) {
    sendMail();
  } else {
    showInfoToast();
  }
};

validator.form.onreset = (evn) => {
  const data = validator.reset();
  console.log(data);
  document.getElementById("info").innerHTML = JSON.stringify(data, null, 2);
  console.log(validator.errorMessages);
  if (validator.errorMessages) {
    document.getElementById("error").innerHTML = JSON.stringify(
      validator.errorMessages,
      null,
      2
    );
  }
};
