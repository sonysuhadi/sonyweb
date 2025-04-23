// Simulasi login
function login() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  if (phone === "081387047210" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "beranda.html";
  } else {
    alert("Login gagal. Nomor HP atau password salah.");
  }
}

// Cek status login
function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "login.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
