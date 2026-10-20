
/* ============================================================
   MOTION VAULT — script.js
   Mengurus: navbar, footer, reveal on scroll, render data.js
   ============================================================ */
(function () {
  "use strict";
  const D = window.MV_DATA || {};

  /* ---------- SVG ICONS ---------- */
  const ICONS = {
    ig: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zm0 11a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm8.4-11.3a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z"/></svg>',
    yt: '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.6V8.4l6.3 3.6z"/></svg>',
    wa: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 2 .5 4 1.5 5.7L.5 23.5l6-1.4A11.4 11.4 0 0 0 12 23.5 11.5 11.5 0 0 0 12 .5zm0 21a9.4 9.4 0 0 1-4.8-1.3l-.4-.2-3.6.9 1-3.5-.3-.4a9.5 9.5 0 1 1 8.1 4.5zm5.2-7.1c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1-.2.2-.4.2-.7.1a7.7 7.7 0 0 1-3.8-3.3c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>',
    drive: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6l7 12-7 6H9l-7-6z"/><path d="M9 3l3 6M15 3l-3 6M2 15h20"/></svg>',
    arrow: '<svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    play: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>',
    camera: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><rect x="2" y="6" width="20" height="14" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6l1.5-2.5h5L16 6"/></svg>',
  };

  /* ---------- NAVBAR + FOOTER ---------- */
  const LINKS = [
    ["index.html", "Beranda"],
    ["tentang.html", "Tentang"],
    ["kepengurusan.html", "Kepengurusan"],
    ["pembicara.html", "Pembicara"],
    ["arel.html", "A.R.E.L"],
    ["bank-mosi.html", "Bank Mosi"],
    ["bedah-mosi.html", "Bedah Mosi"],
    ["dokumentasi.html", "Dokumentasi"],
    ["kontak.html", "Kontak", true],
  ];
  const current = location.pathname.split("/").pop() || "index.html";
  const K = D.kontak || {};

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav-wrap">
        <a href="index.html" class="logo"><span class="logo-slash"></span>MOTION&nbsp;<span>VAULT</span></a>
        <nav class="nav-links" id="navLinks">
          ${LINKS.map(([h, t, cta]) =>
            `<a href="${h}" class="${h === current ? "active" : ""} ${cta ? "nav-cta" : ""}">${t}</a>`).join("")}
        </nav>
        <button class="theme-btn" id="themeBtn" aria-label="Ganti tema terang/gelap" title="Ganti tema"><svg class="i-moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg><svg class="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>
        <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>`;
    header.querySelector("#themeBtn").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("mv-theme", next); } catch (e) {}
    });
    const burger = header.querySelector("#burger");
    const nav = header.querySelector("#navLinks");
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => { burger.classList.remove("open"); nav.classList.remove("open"); }));
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="logo" style="margin-bottom:16px"><span class="logo-slash"></span>MOTION&nbsp;<span>VAULT</span></a>
            <p>Arsip digital ekskul debat <b style="color:#fff">IDEATEST</b> — rumah bagi argumen, rebuttal, dan generasi pembicara muda.</p>
            <div class="socials">
              <a href="${K.instagram || "#"}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.ig}</a>
              <a href="${K.youtube || "#"}" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.yt}</a>
              <a href="https://wa.me/${(K.whatsapp1 || {}).nomor || ""}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.wa}</a>
            </div>
          </div>
          <div>
            <h4>Navigasi</h4>
            <div class="f-links">${LINKS.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</div>
          </div>
          <div>
            <h4>Kontak Person</h4>
            <div class="wa-row">
              ${[K.whatsapp1, K.whatsapp2].filter(Boolean).map(w => `
                <a href="https://wa.me/${w.nomor}" target="_blank" rel="noopener">
                  <span class="wa-ic">${ICONS.wa}</span>
                  <span><b style="color:#fff">${w.label}</b><br>${w.tampil}</span>
                </a>`).join("")}
              <a href="${K.instagram || "#"}" target="_blank" rel="noopener">
                <span class="wa-ic">${ICONS.ig}</span>
                <span><b style="color:#fff">Instagram</b><br>${K.instagramUser || ""}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 <b>IDEATEST</b> — Motion Vault. All rights reserved.</span>
          <span>Think · Argue · Prevail</span>
        </div>
      </div>`;
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  const io = new IntersectionObserver(es =>
    es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* ---------- BACK TO TOP ---------- */
  const top = document.createElement("button");
  top.className = "to-top"; top.innerHTML = ICONS.arrow.replace('class="arr"','class="arr" style="transform:rotate(-90deg)"');
  top.setAttribute("aria-label", "Kembali ke atas");
  document.body.appendChild(top);
  addEventListener("scroll", () => top.classList.toggle("show", scrollY > 600));
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- RENDER: STATS ---------- */
  const statsEl = document.getElementById("mv-stats");
  if (statsEl && D.stats) {
    const s = D.stats;
    statsEl.innerHTML = `
      <div class="stat reveal"><div class="n" data-n="${s.anggota}">0</div><div class="t">Anggota Aktif</div></div>
      <div class="stat reveal d1"><div class="n" data-n="${s.prestasi}">0</div><div class="t">Prestasi</div></div>
      <div class="stat reveal d2"><div class="n" data-n="${s.mosi}">0</div><div class="t">Mosi Terkumpul</div></div>
      <div class="stat reveal d3"><div class="n"><em data-n="${s.tahun}">0</em></div><div class="t">Tahun Berdiri</div></div>`;
    statsEl.querySelectorAll("[data-n]").forEach(el => {
      const target = +el.dataset.n; let cur = 0; const step = Math.max(1, Math.ceil(target / 60));
      const t = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(t); } el.textContent = cur + (target >= 100 ? "+" : ""); }, 22);
    });
    statsEl.querySelectorAll(".reveal").forEach(el => io.observe(el));
  }

  /* ---------- RENDER: KEPENGURUSAN ---------- */
  const org = document.getElementById("mv-org");
  if (org && D.kepengurusan) {
    const g = D.kepengurusan;
    const initials = n => n.replace(/[[\]]/g, "").split(" ").map(w => w[0] || "").slice(0, 2).join("").toUpperCase();
    const node = (p, lead) => `
      <div class="org-node ${lead ? "lead" : ""}">
        ${p.foto ? `<img src="${p.foto}" alt="${p.nama}" style="width:78px;height:78px;border-radius:50%;object-fit:cover;margin:0 auto 12px;border:3px solid var(--red)">`
                 : `<div class="avatar-ph">${initials(p.nama || "?")}</div>`}
        <div class="role">${p.peran}</div><div class="name">${p.nama}</div>${p.kelas ? `<div class="cls">${p.kelas}</div>` : ""}
      </div>`;
    const [ketua, ...staf] = g.inti;
    org.innerHTML = `
      <div class="org-top">${node(ketua, true)}<div class="org-line"></div></div>
      <div class="org-row" style="margin-bottom:56px">${staf.map(p => node(p)).join("")}</div>
      ${g.divisi.map(dv => `
        <div class="div-block reveal in"><span class="section-tag">// Divisi</span><h3>${dv.nama}</h3>
        ${dv.sub.map(sb => `${sb.nama ? `<div class="sub-title">${sb.nama}</div>` : ""}<div class="org-row">${sb.anggota.map(p => node(p)).join("")}</div>`).join("")}</div>`).join("")}`;
  }

  /* ---------- RENDER: BANK MOSI ---------- */
  const bank = document.getElementById("mv-bank");
  if (bank && D.bankMosi) {
    const chipsEl = document.getElementById("mv-bank-chips");
    const cats = ["Semua", ...new Set(D.bankMosi.map(m => m.kategori))];
    let curCat = "Semua", q = "";
    const render = cat => {
      curCat = cat;
      bank.innerHTML = D.bankMosi.filter(m => (cat === "Semua" || m.kategori === cat) && m.mosi.toLowerCase().includes(q)).map(m => `
        <div class="card motion-card reveal in">
          <span class="cat">// ${m.kategori}</span>
          <p class="motion">"${m.mosi}"</p>
          <div class="meta"><span class="tag">${m.tingkat}</span><span class="tag tag-red">Tersedia via Drive</span></div>
          <a class="drive-link" href="${m.link}" target="_blank" rel="noopener">Buka File ${ICONS.drive}</a>
        </div>`).join("");
    };
    if (chipsEl) {
      chipsEl.innerHTML = cats.map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}">${c}</button>`).join("");
      chipsEl.addEventListener("click", e => {
        if (!e.target.classList.contains("chip")) return;
        chipsEl.querySelectorAll(".chip").forEach(ch => ch.classList.remove("active"));
        e.target.classList.add("active"); render(e.target.textContent);
      });
    }
    const sb = document.getElementById("mv-bank-search");
    if (sb) sb.addEventListener("input", e => { q = e.target.value.toLowerCase().trim(); render(curCat); });
    render("Semua");
  }

  /* ---------- RENDER: BEDAH MOSI ---------- */
  const bedah = document.getElementById("mv-bedah");
  if (bedah && D.bedahMosi) {
    bedah.innerHTML = D.bedahMosi.map(a => `
      <div class="acc">
        <button class="acc-head">
          <span><span class="date">${a.tanggal}</span><h3>${a.judul}</h3></span>
          <span class="acc-icon"></span>
        </button>
        <div class="acc-body"><div class="acc-body-inner">
          <p style="margin-top:18px">${a.ringkas}</p>
          ${a.isi.map(s => s.poin ? `
            <h4>${s.sub}</h4>
            <div class="${s.sub.toLowerCase().includes("pro") && s.sub.toLowerCase().includes("kontra") ? "" : ""}" ></div>
            <ul class="tick-list">${s.poin.map(p => `<li>${p}</li>`).join("")}</ul>` : `
            <h4>${s.sub}</h4><p>${s.teks}</p>`).join("")}
        </div></div>
      </div>`).join("");
    bedah.addEventListener("click", e => {
      const head = e.target.closest(".acc-head"); if (!head) return;
      const acc = head.parentElement, body = acc.querySelector(".acc-body");
      const open = acc.classList.toggle("open");
      body.style.maxHeight = open ? body.scrollHeight + "px" : 0;
    });
    // buka accordion pertama
    const first = bedah.querySelector(".acc");
    if (first) { first.classList.add("open"); const b = first.querySelector(".acc-body"); b.style.maxHeight = b.scrollHeight + "px"; }
  }

  /* ---------- RENDER: DOKUMENTASI ---------- */
  const gal = document.getElementById("mv-gallery");
  if (gal && D.dokumentasi) {
    gal.innerHTML = D.dokumentasi.map(d => `
      <a class="gal-card reveal in" href="${d.link}" target="_blank" rel="noopener">
        <div class="thumb">${ICONS.camera}</div>
        ${d.jenis === "Video" ? `<span class="play">${ICONS.play}</span>` : ""}
        <div class="gal-cap"><span>${d.jenis} · ${d.tahun}</span><h4>${d.judul}</h4></div>
      </a>`).join("");
  }

  /* ---------- KONTAK: isi link otomatis + form WA ---------- */
  const setHref = (id, href) => { const el = document.getElementById(id); if (el) el.href = href; };
  if (K.kontak !== undefined) {}
  if (D.kontak) {
    setHref("mv-ig", D.kontak.instagram);
    setHref("mv-yt", D.kontak.youtube);
    setHref("mv-wa1", "https://wa.me/" + D.kontak.whatsapp1.nomor);
    setHref("mv-wa2", "https://wa.me/" + D.kontak.whatsapp2.nomor);
    ["ig", "yt", "wa1", "wa2"].forEach(k => {
      const t = document.getElementById("mv-" + k + "-text");
      if (t) t.textContent = D.kontak[{ ig: "instagramUser", yt: "youtubeUser", wa1: "whatsapp1", wa2: "whatsapp2" }[k]]
        ? (k === "wa1" || k === "wa2" ? D.kontak[{wa1:"whatsapp1",wa2:"whatsapp2"}[k]].tampil : D.kontak[{ig:"instagramUser",yt:"youtubeUser"}[k]]) : "";
    });
  }
  const waForm = document.getElementById("mv-wa-form");
  if (waForm) {
    waForm.addEventListener("submit", e => {
      e.preventDefault();
      const nama = waForm.nama.value.trim(), pesan = waForm.pesan.value.trim();
      const tujuan = document.getElementById("mv-wa-target").value;
      const nomor = tujuan === "2" ? D.kontak.whatsapp2.nomor : D.kontak.whatsapp1.nomor;
      const text = encodeURIComponent(`Halo IDEATEST! Saya ${nama || "-"}. ${pesan}`);
      window.open(`https://wa.me/${nomor}?text=${text}`, "_blank");
    });
  }
})();
