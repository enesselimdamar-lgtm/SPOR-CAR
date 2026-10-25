const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModalButton = document.getElementById("close-modal");

const carDetails = {
  lamborghini: {
    title: "Lamborghini Aventador SVJ",
    text: "6.5 litrelik V12 motor, karbon fiber gövde parçaları, ISR şanzıman ve gelişmiş aerodinamik sistemlerle tanınır. Teknik değerler model sürümüne göre değişebilir."
  },
  porsche: {
    title: "Porsche 911 GT3 RS",
    text: "Atmosferik boxer motoru, pist odaklı şasisi, büyük arka kanadı ve gelişmiş aerodinamik çözümleriyle öne çıkar."
  },
  ferrari: {
    title: "Ferrari SF90 Stradale",
    text: "V8 çift turbo motorunu elektrikli motorlarla birleştiren hibrit bir süper otomobildir. Güç aktarımı ve aerodinamik tasarımı yüksek performansa odaklanır."
  },
  mclaren: {
    title: "McLaren 765LT",
    text: "4.0 litrelik çift turbo V8 motor, hafif karbon fiber bileşenler ve pist odaklı aerodinamik tasarım ile geliştirilmiştir."
  }
};

// Otomobil kartlarının detay penceresi
document.querySelectorAll(".details-button").forEach((button) => {
  button.addEventListener("click", () => {
    const car = carDetails[button.dataset.car];

    if (!car) return;

    modalTitle.textContent = car.title;
    modalText.textContent = car.text;
    modal.classList.add("open");
  });
});

// Teknik parça kartlarının detay penceresi
document.querySelectorAll(".part").forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalText.textContent = button.dataset.text;
    modal.classList.add("open");
  });
});

// Pencereyi kapatma
function closeModal() {
  modal.classList.remove("open");
}

closeModalButton.addEventListener("click", closeModal);

// Pencerenin dışına tıklayınca kapat
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Escape tuşuyla kapat
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Kaydırma sırasında kartlara görünme efekti
const cards = document.querySelectorAll(".car-card, .part");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => observer.observe(card));
}

// Görsel yüklenemezse geliştirici konsoluna uyarı
document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    console.warn("Görsel yüklenemedi:", image.src);
  });
});