const $ = (id) => document.getElementById(id);

const navBar = $("nav-bar");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: $("#name-input").value,
    email: $("#email-input").value,
    message: $("#textarea-message").value
  };

  try {
    const resp = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await resp.json();
    if (data.ok) {
      alert("✅ Mensaje enviado correctamente");
      form.reset();
    } else {
      alert("❌ Error: " + data.error);
    }
  } catch (err) {
    alert("❌ Error al conectar con el servidor");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navBar.classList.add("backdrop-blur-lg");
    navBar.classList.remove("bg-white");
  } else {
    navBar.classList.remove("bg-red-500");
    navBar.classList.add("bg-white");
  }
});
