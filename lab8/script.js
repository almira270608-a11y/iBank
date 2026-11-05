// ===== 1. click: мәтін және сынып өзгереді =====
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("theme-alt");
  btn.classList.toggle("active");
  const isAlt = document.body.classList.contains("theme-alt");
  btn.textContent = isAlt ? "Жарық тақырып" : "Күңгірт тақырып";
});

// ===== 2. input: таңба санауышы және кеңес =====
const field = document.getElementById("field");
const counter = document.getElementById("counter");
const hint = document.getElementById("hint");

field.addEventListener("input", function (event) {
  const len = event.target.value.length;
  counter.textContent = String(len);

  hint.classList.remove("warn", "ok");
  if (len === 0) {
    hint.textContent = "Мәтін енгізуді бастаңыз.";
  } else if (len < 20) {
    hint.textContent = "Тым қысқа, жалғастырыңыз.";
    hint.classList.add("warn");
  } else if (len < 90) {
    hint.textContent = "Жақсы ұзындық.";
    hint.classList.add("ok");
  } else {
    hint.textContent = "Лимитке жақындады!";
    hint.classList.add("warn");
  }
});

// ===== 3. submit: бет қайта жүктелмейді =====
const form = document.getElementById("form");
const status = document.getElementById("status");
const userName = document.getElementById("userName");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // беттің қайта жүктелуін тоқтатады
  const name = userName.value.trim();
  status.textContent = "Мәртебе: «" + name + "» деректері жіберілді (" +
    new Date().toLocaleTimeString() + ").";
  status.classList.add("success");
  form.reset();
});

// ===== 4. Сервер жауабы (JSON) =====
const serverBtn = document.getElementById("serverBtn");
const serverOut = document.getElementById("serverOut");

serverBtn.addEventListener("click", function () {
  serverOut.textContent = "Жүктелуде...";
  fetch("server/hello.php")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      serverOut.textContent = JSON.stringify(data, null, 2);
    })
    .catch(function (err) {
      serverOut.textContent =
        "Қате: " + err.message +
        "\nСайтты 'php -S localhost:8000' арқылы ашыңыз (Live Server PHP орындамайды).";
    });
});
