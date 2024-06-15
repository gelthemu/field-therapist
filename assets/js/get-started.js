// get-started
document.addEventListener('DOMContentLoaded', (event) => {
  const getStartBtns = document.querySelectorAll('.get-started-button');
  const getStartClose = document.getElementById('get-started-close');
  const getStart = document.getElementById('get-started');

  getStartBtns.forEach(button => {
    button.addEventListener('click', () => {
      getStart.style.display = 'flex';
    });
});

  getStartClose.addEventListener('click', () => {
    getStart.style.display = 'none';
    window.scrollTo(0, 0);
  });

  window.addEventListener('click', (event) => {
      if (event.target === getStart) {
        getStart.style.display = 'none';
        window.scrollTo(0, 0);
      }
  });
});

// textarea-word-counter
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("reason");
  const charCount = document.getElementById("char-count");
  const maxChars = textarea.getAttribute("maxlength");

  textarea.addEventListener("input", () => {
    const remaining = maxChars - textarea.value.length;
    charCount.innerHTML = `${remaining}`;
  });

});

// contactForm  Popup Message
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("get-started-contactForm");
  const popup = document.getElementById("get-started-contact-popup");
  const closePopupBtn = document.getElementById(
    "get-started-contact-closePopup"
  );
  const charCount = document.getElementById("char-count");
  const reasonTextarea = document.getElementById("reason");
  const startContentWrapper = document.querySelector(".get-started-wrapper");

  if (form && popup && closePopupBtn) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const reason = document.getElementById("reason").value.trim();

      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isValidPhone = phone === "" || /^[0-9]{10,15}$/.test(phone);
      const isValidReason = reason.length >= 50 && reason.length <= 300;

      if (name && isValidEmail && isValidPhone && isValidReason) {
        const formData = new FormData(form);

        fetch(form.action, {
          method: form.method,
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              popup.style.display = "flex";
            } else {
              alert("There was an error submitting the form.");
            }
          })
          .catch((error) => {
            alert("There was an error submitting the form.");
            console.error("Error:", error);
          });
      } else {
        alert("Please enter a valid email address.");
      }
    });

    closePopupBtn.addEventListener("click", function () {
      popup.style.display = "none";
      form.reset();
      charCount.textContent = "300";
      startContentWrapper.scrollTop = 0;
    });

    reasonTextarea.addEventListener("input", function () {
      const maxLength = this.maxLength;
      const currentLength = this.value.length;
      charCount.textContent = maxLength - currentLength;
    });
  } else {
    console.error("form, popup, or close button not found.");
  }
});
