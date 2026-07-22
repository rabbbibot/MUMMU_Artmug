const NAV = [
  { id: "intro", label: "소개", href: "index.html" },
  { id: "notice", label: "안내사항", href: "notice.html" },
  {
    id: "portfolio",
    label: "포트폴리오",
    children: [
      { id: "portfolio-female", label: "여자", href: "portfolio-female.html" },
      { id: "portfolio-male", label: "남자", href: "portfolio-male.html" },
      { id: "portfolio-other", label: "인외", href: "portfolio-other.html" },
      { id: "portfolio-sd", label: "SD", href: "portfolio-sd.html" }
    ]
  },
  {
    id: "tip",
    label: "TIP",
    children: [
      { id: "tip-model", label: "모델 셋팅", href: "tip-model.html" },
      { id: "tip-expression", label: "표정 셋팅", href: "tip-expression.html" },
      { id: "tip-external", label: "외부 프로그램", href: "tip-external.html" },
      { id: "tip-iphone", label: "아이폰 기능", href: "tip-iphone.html" }
    ]
  },
  {
    id: "model",
    label: "모델 셋팅",
    children: [
      { id: "model-vtube", label: "Vtube Studio", href: "model-vtube.html" },
      { id: "model-vbridger", label: "Vbridger", href: "model-vbridger.html" },
      { id: "model-expression", label: "표정", href: "model-expression.html" },
      { id: "model-shoost", label: "Shoost", href: "model-shoost.html" }
    ]
  }
];

const PROFILE = {
  name: "",
  logo: "images/mummu-icon.svg"
};

function currentPageId() {
  const file = location.pathname.split("/").pop() || "index.html";
  if (file === "index.html") return "intro";
  return file.replace(".html", "");
}

function renderNav(current) {
  let html = '<div class="snb-profile"><div class="snb-profile-img">';
  if (PROFILE.logo) html += `<img src="${PROFILE.logo}" alt="MUMMU">`;
  html += "</div>";
  if (PROFILE.name) html += `<span class="snb-profile-name">${PROFILE.name}</span>`;
  html += '</div><nav>';

  NAV.forEach((item) => {
    if (item.children) {
      const open = item.children.some((child) => child.id === current);
      html += `<div class="snb-dropdown${open ? " open" : ""}">`;
      html += `<span class="snb-dropdown-trigger${open ? " active" : ""}">${item.label}</span>`;
      html += '<div class="snb-dropdown-menu">';
      item.children.forEach((child) => {
        const active = child.id === current ? ' class="active"' : "";
        html += `<a href="${child.href}"${active}>${child.label}</a>`;
      });
      html += "</div></div>";
    } else {
      const active = item.id === current ? ' class="active"' : "";
      html += `<a href="${item.href}"${active}>${item.label}</a>`;
    }
  });

  return html + "</nav>";
}

const sidebar = document.querySelector(".snb");
if (sidebar) {
  sidebar.innerHTML = renderNav(currentPageId());
}

const dropdowns = document.querySelectorAll(".snb .snb-dropdown");

function closeAllDropdowns() {
  dropdowns.forEach((dd) => dd.classList.remove("open"));
}

function openDropdown(panel) {
  closeAllDropdowns();
  panel.classList.add("open");
}

dropdowns.forEach((dd) => dd.classList.remove("open"));

const activeSub = document.querySelector(".snb-dropdown-menu a.active");
if (activeSub) {
  const parent = activeSub.closest(".snb-dropdown");
  if (parent) parent.classList.add("open");
}

document.querySelectorAll(".snb-dropdown-trigger").forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const panel = trigger.closest(".snb-dropdown");
    if (!panel) return;

    if (panel.classList.contains("open")) {
      panel.classList.remove("open");
    } else {
      openDropdown(panel);
    }
  });
});
