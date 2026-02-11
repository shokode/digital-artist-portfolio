// ===============================
// Dark mode toggle + image switch
// ===============================
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const heroImage = document.getElementById("heroImage");

toggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  if (isDark) {
    // 🌸 ダークモード
    icon.src = "./img/AMWS3.png";        // 桜文鳥
    heroImage.src = "./img/AMWS1.png";     // ダーク用ヒーロー
  } else {
    // 🐦 ライトモード
    icon.src = "./img/AMWSdarkpng.png";  // 白文鳥
    heroImage.src = "./img/AMWS2png.png";     // ライト用ヒーロー
  }
});


// ===============================
// Fade-up observer
// ===============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

// =================================================
// Works shuffle
// =================================================

// 拡張子混在OK
const WORK_IMAGES = [
  "./img/work_01.png",
  "./img/work_02.png",
  "./img/work_03.png",
  "./img/work_04.png",
  "./img/work_05.png",
  "./img/work_06.png",
  "./img/work_07.png",
  "./img/work_08.png",
  "./img/work_09.png",
  "./img/work_10.png",
  "./img/work_11.gif",
  "./img/work_12.png",
  "./img/work_13.png",
  "./img/work_14.png",
  "./img/work_15.png",
  "./img/work_16.png",
  "./img/work_17.png",
  "./img/work_18.png",
  "./img/work_19.png",
  "./img/work_20.png",
  "./img/work_21.png",
  "./img/work_22.png",
  "./img/work_23.png",
];

const SHOW_COUNT = 6;
const worksGrid = document.getElementById("worksGrid");
const shuffleBtn = document.getElementById("shuffleBtn");

// Fisher–Yates shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderWorks() {
  worksGrid.innerHTML = "";

  const selected = shuffle(WORK_IMAGES).slice(0, SHOW_COUNT);

  selected.forEach((src, i) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 fade-up";
    col.style.transitionDelay = `${i * 0.08}s`;

    col.innerHTML = `
      <div class="work-item">
        <img src="${src}" alt="" loading="lazy">
      </div>
    `;

    worksGrid.appendChild(col);
    observer.observe(col);
  });
}

// 初期表示
renderWorks();

// 🔄 再シャッフル
shuffleBtn.addEventListener("click", renderWorks);
