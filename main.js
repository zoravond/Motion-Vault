/* =====================================================================
   MOTION VAULT - IDEATEST SMAN 62 JAKARTA
   Semua data konten ada di bagian atas file ini. Edit di sini saja,
   tidak perlu menyentuh file HTML. Perhatikan tanda koma (,) antar item.
   ===================================================================== */

// ===== UBAH ATAU TAMBAH BANK MOSI DI SINI =====
// id: harus unik & sama dengan kunci di MOTION_ANALYSIS_DATA
// category: Ekonomi | Politik/HI | Sosial-Budaya | Hukum/HAM | Teknologi/Lingkungan
// level: Pemula | Menengah | Lanjut
const MOTIONS_DATA = [
  {id:"m1",title:"Dewan ini akan melarang penggunaan media sosial bagi anak di bawah 16 tahun",category:"Teknologi/Lingkungan",level:"Menengah"},
  {id:"m2",title:"Dewan ini percaya bahwa pemerintah harus menerapkan Universal Basic Income",category:"Ekonomi",level:"Lanjut"},
  {id:"m3",title:"Dewan ini akan menghapus hukuman mati",category:"Hukum/HAM",level:"Menengah"},
  {id:"m4",title:"Dewan ini akan memprioritaskan energi terbarukan di atas pertumbuhan ekonomi jangka pendek",category:"Teknologi/Lingkungan",level:"Menengah"},
  {id:"m5",title:"Dewan ini percaya bahwa sanksi ekonomi adalah alat diplomasi yang efektif",category:"Politik/HI",level:"Lanjut"},
  {id:"m6",title:"Dewan ini akan mewajibkan pendidikan karakter berbasis budaya lokal di sekolah",category:"Sosial-Budaya",level:"Pemula"},
  {id:"m7",title:"Dewan ini akan mengizinkan pemilihan umum dengan usia pemilih 16 tahun",category:"Politik/HI",level:"Pemula"},
  {id:"m8",title:"Dewan ini percaya bahwa kecerdasan buatan harus diatur ketat oleh negara",category:"Teknologi/Lingkungan",level:"Lanjut"}
];

// ===== UBAH BEDAH MOSI DI SINI =====
// Kunci = id mosi. Isi: background, aff, opp, clash (daftar), args {aff:[], opp:[]}
const MOTION_ANALYSIS_DATA = {
  m1:{background:"Anak usia remaja menghabiskan rata-rata beberapa jam sehari di media sosial. Status quo: batas usia 13 tahun di platform, dengan penegakan lemah.",
    aff:"Pemerintah wajib melindungi anak dari dampak psikologis dan eksploitasi data lewat pelarangan resmi.",
    opp:"Larangan tidak efektif, mudah dihindari, dan memutus akses anak ke informasi dan komunitas.",
    clash:["Efektivitas penegakan larangan","Perlindungan kesehatan mental vs hak akses informasi","Peran orang tua vs negara"],
    args:{aff:["Algoritma dirancang membuat kecanduan","Anak belum matang menimbang risiko privasi"],opp:["Anak berpindah ke platform gelap yang tak diawasi","Literasi digital lebih efektif daripada larangan"]}},
  m2:{background:"Otomatisasi dan ketimpangan membuat sebagian orang rentan kehilangan penghasilan. UBI memberi transfer tunai rutin tanpa syarat kepada seluruh warga.",
    aff:"UBI menjamin kebutuhan dasar dan memberi kebebasan memilih pekerjaan.",
    opp:"UBI membebani anggaran, memicu inflasi, dan dapat menurunkan insentif bekerja.",
    clash:["Kemampuan fiskal negara","Dampak pada insentif kerja","Universal vs bantuan tepat sasaran"],
    args:{aff:["Memutus kemiskinan ekstrem secara langsung","Mengurangi birokrasi bansos"],opp:["Dana lebih efektif untuk layanan publik","Risiko inflasi menggerus nilai transfer"]}},
  m3:{background:"Indonesia masih mengenal pidana mati untuk kejahatan tertentu seperti narkotika dan terorisme. Pembahasan ulang muncul bersama KUHP baru.",
    aff:"Hak hidup tidak boleh dicabut negara, dan risiko salah vonis tidak bisa dipulihkan.",
    opp:"Hukuman mati menjadi efek jera dan keadilan bagi korban kejahatan paling berat.",
    clash:["Efek jera: terbukti atau tidak","Risiko kesalahan peradilan","Keadilan bagi korban vs hak terpidana"],
    args:{aff:["Putusan salah tidak bisa dikoreksi","Hak hidup bersifat non-derogable"],opp:["Kejahatan luar biasa butuh sanksi maksimal","Menjaga rasa keadilan masyarakat"]}},
  m4:{background:"Transisi energi menuntut investasi besar, sementara banyak negara berkembang masih bergantung pada batu bara untuk pertumbuhan.",
    aff:"Kerusakan iklim merugikan ekonomi jauh lebih besar dalam jangka panjang.",
    opp:"Menekan pertumbuhan jangka pendek merugikan rakyat miskin yang butuh lapangan kerja.",
    clash:["Biaya jangka pendek vs jangka panjang","Keadilan bagi negara berkembang","Kesiapan teknologi dan infrastruktur"],
    args:{aff:["Energi terbarukan membuka industri dan kerja baru","Menghindari kerugian bencana iklim"],opp:["Listrik murah menopang industri","Transisi bertahap lebih realistis"]}},
  m5:{background:"Sanksi ekonomi dipakai negara dan lembaga internasional untuk menekan perilaku negara lain tanpa perang.",
    aff:"Sanksi menekan elit pengambil keputusan tanpa kekerasan militer.",
    opp:"Sanksi lebih sering menyengsarakan warga sipil dan memperkuat rezim yang dituju.",
    clash:["Efektivitas mengubah perilaku","Dampak kemanusiaan","Alternatif diplomasi lain"],
    args:{aff:["Alternatif lebih murah dari konflik bersenjata","Memberi sinyal norma internasional"],opp:["Rezim mencari mitra dagang baru","Rakyat biasa paling terdampak"]}},
  m6:{background:"Kurikulum sering dinilai terlalu akademis, sementara nilai budaya lokal kurang mendapat ruang di sekolah.",
    aff:"Pendidikan karakter berbasis budaya lokal menguatkan identitas dan kohesi sosial.",
    opp:"Kewajiban seragam berisiko menyeragamkan budaya dan menambah beban kurikulum.",
    clash:["Identitas vs keberagaman","Beban kurikulum","Kualitas pelaksanaan oleh guru"],
    args:{aff:["Melestarikan budaya yang terancam punah","Membangun rasa memiliki"],opp:["Budaya setiap daerah berbeda, sulit diseragamkan","Guru belum siap dari sisi pelatihan"]}},
  m7:{background:"Usia pemilih di Indonesia saat ini 17 tahun atau sudah menikah. Beberapa negara menurunkan batas menjadi 16 tahun.",
    aff:"Remaja 16 tahun terdampak kebijakan dan sudah mampu berpartisipasi politik.",
    opp:"Kematangan politik belum cukup dan rentan dimobilisasi pihak tertentu.",
    clash:["Kematangan politik remaja","Hak partisipasi vs perlindungan","Konsistensi batas usia hukum lain"],
    args:{aff:["Membangun kebiasaan memilih sejak dini","Remaja membayar pajak dan terdampak keputusan"],opp:["Risiko manipulasi lewat media sosial","Usia dewasa hukum yang tidak sinkron"]}},
  m8:{background:"AI generatif berkembang cepat dan memunculkan isu deepfake, bias algoritma, hak cipta, dan hilangnya pekerjaan.",
    aff:"Regulasi ketat mencegah kerugian sebelum terjadi dan melindungi hak warga.",
    opp:"Regulasi ketat menghambat inovasi dan tertinggal dari perkembangan teknologi.",
    clash:["Inovasi vs perlindungan","Kemampuan negara mengawasi","Regulasi nasional di tengah teknologi global"],
    args:{aff:["Deepfake mengancam demokrasi dan privasi","Akuntabilitas jelas saat terjadi kerugian"],opp:["Perusahaan pindah ke negara longgar","Regulasi cepat usang"]}}
};

// ===== UBAH FOTO/VIDEO DOKUMENTASI DI SINI =====
// type: "image" atau "video". src: link gambar, atau link embed YouTube untuk video
// (contoh video: https://www.youtube.com/embed/ID_VIDEO). thumb: gambar sampul video.
// Ganti link picsum di bawah dengan foto asli (taruh di folder img/ lalu tulis "img/nama.jpg").
const GALLERY_DATA = [
  {type:"image",title:"Latihan Rutin IDEATEST",src:"https://picsum.photos/seed/ideatest1/900/600"},
  {type:"image",title:"Perlombaan Debat Antar Sekolah",src:"https://picsum.photos/seed/ideatest2/900/600"},
  {type:"video",title:"Cuplikan Final Debat",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",thumb:"https://picsum.photos/seed/ideatest3/900/600"},
  {type:"image",title:"Pelatihan LDBI",src:"https://picsum.photos/seed/ideatest4/900/600"},
  {type:"image",title:"Sesi Kumpul Pengurus",src:"https://picsum.photos/seed/ideatest5/900/600"},
  {type:"video",title:"Highlight Kegiatan NSDC",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",thumb:"https://picsum.photos/seed/ideatest6/900/600"}
];

// ===== DATA STRUKTUR PENGURUS IDEATEST =====
// Tiap grup: name, lead (opsional), subs: [{name, members:[{n:"Nama", k:"Kelas", r:"Peran"}]}]
const COMMITTEE_DATA = [
  {name:"Pengurus Inti",subs:[{name:"",members:[{n:"Mohamad Azriel Hermawansyah",k:"XI-B",r:"Ketua"},{n:"Laysa Ilarobani",k:"XI-C",r:"Sekretaris"},{n:"Resi Aryani",k:"XI-D",r:"Bendahara"}]}]},
  {name:"Divisi Diklat (Pendidikan & Pelatihan)",subs:[
    {name:"Sub-Divisi LDBI",members:[{n:"Raya Zahida",k:"XI-A",r:"Koordinator"},{n:"Farsya Nirvana",k:"XI-E",r:"Anggota"},{n:"Maira Alma Syahira",k:"XI-A",r:"Anggota"},{n:"Refan Natansyah Ramadan",k:"XI-E",r:"Anggota"},{n:"Ryanwar Khaizan",k:"XI-F",r:"Anggota"}]},
    {name:"Sub-Divisi NSDC",members:[{n:"Diva Carissa Zahira",k:"XI-C",r:"Koordinator"},{n:"Aegea Galena Yudoyono",k:"XI-E",r:"Anggota"}]}]},
  {name:"Divisi Perlombaan",subs:[{name:"",members:[{n:"Nabila Armita Rusdi",k:"XI-C",r:"Koordinator"},{n:"Naufal Rizki Angkasa",k:"XI-D",r:"Anggota"},{n:"Gerald Mora Chrisfan Doli",k:"XI-D",r:"Anggota"},{n:"Karina Dwi Aulia",k:"XI-D",r:"Anggota"}]}]},
  {name:"Divisi PDD (Publikasi, Dekorasi & Dokumentasi)",subs:[{name:"",members:[{n:"Tsamara Ufairah Azka",k:"XI-F",r:"Koordinator"},{n:"Nadia Humaira Alatas",k:"XI-B",r:"Anggota"},{n:"Rasyid Surya Pratama Ramadhan",k:"XI-F",r:"Anggota"},{n:"Farras Abiyyu Hanif",k:"XI-E",r:"Anggota"}]}]}
];

// Data tab pembicara AP Format (halaman Edukasi)
const SPEAKERS_DATA = [
  {tab:"Pembicara 1",aff:"Prime Minister",opp:"Leader of Opposition",pts:["Set-up: membuka dan membingkai debat","Definisi mosi yang jelas dan adil","Parameter: batasan debat dan model/kebijakan","Background isu dan status quo","Argumen dasar tim (konstruktif)"]},
  {tab:"Pembicara 2",aff:"Deputy Prime Minister",opp:"Deputy Leader of Opposition",pts:["Deep rebuttal terhadap argumen lawan","Defense: membela argumen tim yang diserang","Extension argument: argumen baru yang memperkuat tim"]},
  {tab:"Pembicara 3",aff:"Government Whip",opp:"Opposition Whip",pts:["Full rebuttal atas seluruh argumen lawan","Clash analysis: memetakan titik bentrokan utama","No new argument: tidak boleh membawa argumen baru"]},
  {tab:"Reply Speaker",aff:"Reply Speaker Pemerintah",opp:"Reply Speaker Oposisi",pts:["Bird's-eye view: melihat debat secara utuh","Analisis pertandingan: bandingkan klaim kedua sisi","Summary: mengapa tim kami menang (Why We Win)"]}
];

/* ===================== LOGIKA WEBSITE (tidak perlu diedit) ===================== */
const NAV = [["index.html","Beranda"],["edukasi.html","Edukasi"],["vault.html","Bank Mosi"],["dokumentasi.html","Galeri"],["pengurus.html","Pengurus"]];
const $ = (s,r=document)=>r.querySelector(s), $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const esc = s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function layout(){
  const page = location.pathname.split("/").pop() || "index.html";
  const logo = '<svg width="30" height="30" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="6" stroke="#AD2831" stroke-width="2"/><path d="M9 21V11l7 6 7-6v10" stroke="#F9F6F0" stroke-width="2.2" stroke-linejoin="round"/></svg>';
  const links = NAV.map(([h,t])=>`<a class="link ${h===page?"active":""}" href="${h}">${t}</a>`).join("");
  $("#nav").outerHTML = `<header class="nav"><div class="wrap flex items-center justify-between h-16">
    <a href="index.html" class="brand">${logo}IDEATEST</a>
    <nav class="hidden md:flex gap-1">${links}</nav>
    <button id="burger" aria-label="Menu" class="md:hidden text-3xl px-2">&#9776;</button></div>
    <nav id="mnav" class="hidden md:hidden flex-col px-4 pb-3 border-t" style="border-color:var(--line)">${links}</nav></header>`;
  $("#burger").onclick = ()=>{const m=$("#mnav");m.classList.toggle("hidden");m.classList.toggle("flex")};
  $("#footer").outerHTML = `<footer class="mt-8"><div class="wrap py-10 grid gap-8 md:grid-cols-2">
    <div><div class="brand mb-2">${logo}IDEATEST SMAN 62 Jakarta</div>
    <p class="muted text-sm max-w-md">Ekstrakurikuler debat SMAN 62 Jakarta, wadah berpikir kritis dan berargumen sehat. Motion Vault adalah arsip digital resminya.</p></div>
    <div class="text-sm space-y-2"><h4 class="text-xl font-bold">Hubungi Kami</h4>
    <a class="block muted" target="_blank" rel="noopener" href="https://www.instagram.com/ideatest62?exln=MWd2bDFucTEzenFkdw==">Instagram: @ideatest62</a>
    <a class="block muted" target="_blank" rel="noopener" href="https://wa.me/6283894248075">WhatsApp Admin 1: +62 838-9424-8075</a>
    <a class="block muted" target="_blank" rel="noopener" href="https://wa.me/6281210054796">WhatsApp Admin 2: +62 812-1005-4796</a></div></div>
    <div class="text-center text-xs muted py-4 border-t" style="border-color:var(--line)">&copy; 2026 IDEATEST SMAN 62 Jakarta</div></footer>
    <div id="overlay" class="overlay"><div class="modal relative"><span class="x" id="mx">&times;</span><div id="mbody"></div></div></div>`;
  $("#overlay").onclick = e=>{if(e.target.id==="overlay"||e.target.id==="mx")closeModal()};
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
}
function openModal(html){$("#mbody").innerHTML=html;$("#overlay").classList.add("open")}
function closeModal(){$("#overlay").classList.remove("open");setTimeout(()=>$("#mbody").innerHTML="",300)}

function observe(){
  const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
  $$(".reveal").forEach(el=>io.observe(el));
}

/* Bank Mosi */
function initVault(){
  const grid=$("#motionGrid"); if(!grid) return;
  const cats=["Semua","Ekonomi","Politik/HI","Sosial-Budaya","Hukum/HAM","Teknologi/Lingkungan"];
  let cat="Semua", q="";
  $("#chips").innerHTML = cats.map(c=>`<button class="chip ${c===cat?"on":""}" data-c="${c}">${c}</button>`).join("");
  const render=()=>{
    const list=MOTIONS_DATA.filter(m=>(cat==="Semua"||m.category===cat)&&m.title.toLowerCase().includes(q));
    grid.innerHTML = list.length ? list.map(m=>`<article class="card reveal show flex flex-col"><div class="card-head flex justify-between gap-2"><span class="badge">${esc(m.category)}</span><span class="badge" style="background:var(--line)">${esc(m.level)}</span></div>
      <div class="p-5 flex flex-col gap-4 flex-1 justify-between"><h3 class="text-xl font-bold leading-snug">${esc(m.title)}</h3><button class="btn alt self-start" data-id="${m.id}">Lihat Bedah Mosi</button></div></article>`).join("")
      : '<p class="muted col-span-full text-center py-10">Tidak ada mosi yang cocok. Coba kata kunci atau kategori lain.</p>';
  };
  $("#chips").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.dataset.c;$$(".chip").forEach(x=>x.classList.toggle("on",x===b));render()};
  $("#q").oninput=e=>{q=e.target.value.toLowerCase().trim();render()};
  grid.onclick=e=>{const b=e.target.closest("[data-id]");if(!b)return;
    const m=MOTIONS_DATA.find(x=>x.id===b.dataset.id), a=MOTION_ANALYSIS_DATA[m.id]; if(!a) return;
    const ul=arr=>`<ul class="dot">${arr.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
    openModal(`<div class="card-head pr-12"><span class="badge">${esc(m.category)}</span><h3 class="text-2xl font-bold mt-2">${esc(m.title)}</h3></div>
    <div class="p-6 space-y-5"><section><h4 class="text-xl font-bold accent">Status Quo & Background Isu</h4><p class="muted">${esc(a.background)}</p></section>
    <div class="grid md:grid-cols-2 gap-4"><section class="p-4 rounded-lg" style="background:var(--sub)"><h4 class="text-lg font-bold accent">Stance Afirmasi</h4><p class="muted text-sm">${esc(a.aff)}</p></section>
    <section class="p-4 rounded-lg" style="background:var(--sub)"><h4 class="text-lg font-bold accent">Stance Oposisi</h4><p class="muted text-sm">${esc(a.opp)}</p></section></div>
    <section><h4 class="text-xl font-bold accent">Key Clash Points</h4>${ul(a.clash)}</section>
    <section class="grid md:grid-cols-2 gap-4"><div><h4 class="text-lg font-bold">Core Arguments Afirmasi</h4>${ul(a.args.aff)}</div><div><h4 class="text-lg font-bold">Core Arguments Oposisi</h4>${ul(a.args.opp)}</div></section></div>`);
  };
  render();
}

/* Edukasi: flip cards + tab pembicara */
function initEdukasi(){
  $$(".flip").forEach(f=>f.onclick=()=>f.classList.toggle("on"));
  const tabs=$("#spTabs"); if(!tabs) return;
  let i=0, team="aff";
  const draw=()=>{
    tabs.innerHTML=SPEAKERS_DATA.map((s,k)=>`<button class="tab ${k===i?"on":""}" data-i="${k}">${s.tab}</button>`).join("");
    const s=SPEAKERS_DATA[i];
    $("#spPanel").innerHTML=`<div class="panel card p-6"><h3 class="text-2xl font-bold accent mb-3">${esc(s[team])}</h3><ul class="dot">${s.pts.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`;
    $$("[data-t]").forEach(b=>b.classList.toggle("on",b.dataset.t===team));
  };
  tabs.onclick=e=>{const b=e.target.closest(".tab");if(b){i=+b.dataset.i;draw()}};
  $$("[data-t]").forEach(b=>b.onclick=()=>{team=b.dataset.t;draw()});
  draw();
}

/* Galeri + lightbox */
function initGallery(){
  const g=$("#galleryGrid"); if(!g) return;
  g.innerHTML=GALLERY_DATA.map((x,k)=>`<div class="shot reveal" data-k="${k}" tabindex="0"><img loading="lazy" alt="${esc(x.title)}" src="${esc(x.type==="video"?x.thumb:x.src)}">
    <div class="ov"><span class="font-bold text-lg">${x.type==="video"?"&#9654; ":""}${esc(x.title)}</span></div></div>`).join("");
  const open=e=>{const s=e.target.closest(".shot");if(!s)return;const x=GALLERY_DATA[s.dataset.k];
    openModal(`<div class="p-3">${x.type==="video"?`<iframe class="w-full rounded" style="aspect-ratio:16/9" src="${esc(x.src)}" allowfullscreen></iframe>`:`<img class="w-full rounded" src="${esc(x.src)}" alt="${esc(x.title)}">`}<p class="p-3 font-bold text-lg">${esc(x.title)}</p></div>`)};
  g.onclick=open; g.onkeydown=e=>{if(e.key==="Enter")open(e)};
}

/* Pengurus */
function initCommittee(){
  const c=$("#committee"); if(!c) return;
  c.innerHTML=COMMITTEE_DATA.map(g=>`<section class="reveal mb-10"><h2 class="title">${esc(g.name)}</h2><div class="rule"></div>
    ${g.subs.map(s=>`${s.name?`<h3 class="text-xl font-bold accent mb-3">${esc(s.name)}</h3>`:""}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
    ${s.members.map(m=>`<div class="card p-4"><span class="badge">${esc(m.r)}</span><p class="font-bold text-lg mt-2 leading-snug">${esc(m.n)}</p><p class="muted text-sm">Kelas ${esc(m.k)}</p></div>`).join("")}</div>`).join("")}</section>`).join("");
}

document.addEventListener("DOMContentLoaded",()=>{layout();initVault();initEdukasi();initGallery();initCommittee();observe()});
