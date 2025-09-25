const $ = (id) => document.getElementById(id);
const navBar = $('nav-bar');
const submitButton = $('submit-button');

submitButton.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      try {
        const resp = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await resp.json();
        if (data.ok) {
          alert("✅ Mensaje enviado correctamente");
          e.target.reset();
        } else {
          alert("❌ Error: " + data.error);
        }
      } catch (err) {
        alert("❌ Error al conectar con el servidor");
      }
    });

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) {
        navBar.classList.add("backdrop-blur-lg");
        navBar.classList.remove("bg-white");

    } else {
        navBar.classList.remove("bg-red-500");
        navBar.classList.add("bg-white");
    };
});