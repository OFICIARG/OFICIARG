document.addEventListener("DOMContentLoaded", () => {
    showSection("inicio");
    cargarOficios();
  });
  
  function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
  }
  
  function showSection(id) {
    document.querySelectorAll(".seccion").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo(0, 0);
  }
  
  function cargarOficios() {
    const oficios = [
      {
        nombre: "Carpintero",
        imagen: "img/carpintero.jpg",
        profesionales: ["Juan Herrera", "María Maderas"]
      },
      {
        nombre: "Electricista",
        imagen: "img/electricista.jpg",
        profesionales: ["Luis Volt", "Ana Corriente"]
      },
      {
        nombre: "Pintor",
        imagen: "img/pintor.jpg",
        profesionales: ["Carlos Color", "Laura Brocha"]
      },
      {
        nombre: "Cerrajero",
        imagen: "img/cerrajero.jpg",
        profesionales: ["Sergio Llaves", "Nora Puerta"]
      }
    ];
  
    const container = document.getElementById("oficios-container");
    container.innerHTML = "";
  
    oficios.forEach(oficio => {
      const col = document.createElement("div");
      col.className = "col-md-4";
  
      col.innerHTML = `
        <div class="card-oficio p-3">
          <img src="${oficio.imagen}" alt="${oficio.nombre}" />
          <h5>${oficio.nombre}</h5>
          <p>👤 ${oficio.profesionales[0]}<br>👤 ${oficio.profesionales[1]}</p>
        </div>
      `;
      container.appendChild(col);
    });
  }
  