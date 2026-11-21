import { IM } from "./images-data.js";

      const STORE = "images/store.jpg";
      const $ = (s) => document.querySelector(s),
        mk = (a, f) => a.map(f).join("");
      $("#mq").innerHTML = mk([0, 1], () =>
        mk(
          [
            "Agro-based food products",
            "Fast moving consumer goods",
            "South India distribution",
            "Own manufacturing",
            "BSE SME · 534708",
            "Chennai, since 2010",
          ],
          (x) => x + "<span>✦</span>",
        ),
      );
      $("#pil").innerHTML = mk(
        [
          [
            "01",
            "Customer Satisfaction",
            "Putting customers at the centre of how we grow.",
          ],
          [
            "02",
            "Market Understanding",
            "Reading demand to shape our food products business.",
          ],
          [
            "03",
            "Sustainable Practices",
            "Building a business designed to last.",
          ],
        ],
        (a) =>
          `<div class="pill"><s>${a[0]}</s><h3>${a[1]}</h3><p>${a[2]}</p></div>`,
      );
      $("#bento").innerHTML = mk(
        [
          [
            "Our background",
            "The company was incorporated on 29 September 2010 as RCL Retail Private Limited. It was renamed Shanti Guru Industries Limited on 19 October 2022. The registered office is in Chennai, Tamil Nadu.",
          ],
          [
            "Our business",
            "We run exclusive retail outlets for agro-based food products and fast moving consumer goods. Our current line of business is the trading of food products.",
          ],
          [
            "Our mission",
            "To maximise shareholder value and customer satisfaction and lead our segment, by understanding consumer tastes and preferences and setting world-class standards.",
          ],
          [
            "Our vision",
            "To be a trusted name in food retail and trading, known for quality, reliability and responsible growth.",
          ],
        ],
        (a) => `<div class="card rv"><h3>${a[0]}</h3><p>${a[1]}</p></div>`,
      );
      const P = [
        [
          "esse-himalaya",
          "Himalaya",
          "ESSE Cigarette",
          "Distributed across South India.",
        ],
        [
          "esse-change",
          "Change",
          "ESSE Cigarette",
          "Distributed across South India.",
        ],
        [
          "esse-prime",
          "Prime",
          "ESSE Cigarette",
          "Distributed across South India.",
        ],
        [
          "esse-special-gold",
          "Special Gold",
          "ESSE Cigarette",
          "Distributed across South India.",
        ],
        [
          "imli-spicy-imli",
          "Spicy Imli",
          "Imli",
          "Spicy imli (tamarind), packed in a 40-piece box.",
        ],
        [
          "imli-masala-imli",
          "Masala Imli",
          "Imli",
          "Sweet and spicy masala imli, packed in a 40-piece box.",
        ],
        [
          "pan-masala",
          "Pan Masala",
          "Our brand",
          "Premium pan masala, packed in 10 g pouches.",
        ],
        [
          "soya-chunks",
          "Soya Chunks",
          "Food product",
          "A plant-based protein food product made by us.",
        ],
      ];
      const pc = (a, i) =>
        `<div class="pc"><img src="${IM[a[0]]}" alt="${a[1]}" loading="lazy"><div><small>${a[2]}</small><h3>${a[1]}</h3><p>${a[3]}</p></div></div>`;
      (() => {
        const PC = {
            "esse-himalaya": "#2c3e5b",
            "esse-change": "#135b86",
            "esse-special-gold": "#675332",
            "pan-masala": "#500f8a",
            "esse-prime": "#674f32",
            "soya-chunks": "#7c4e1d",
            "imli-spicy-imli": "#703f29",
            "imli-masala-imli": "#566d2c",
          },
          tags = ["Distributed \u00b7 South India", "Manufactured by us"],
          R = $("#pst"),
          src = (a) => IM[a[0]];
        R.innerHTML = P.map(
          (a, i) =>
            `<article class="pcd" style="--c:${PC[a[0]]};--i:${i}"><span class="pbg">${a[1]}</span><div class="pl"><span class="ptag">${tags[i < 4 ? 0 : 1]}</span><div><small>${a[2]}</small><h3>${a[1]}</h3><p>${a[3]}</p></div><div class="prow"><a class="btn" href="contact.html">Enquire now</a><span class="pnum">0${i + 1} / 0${P.length}</span></div></div><div class="prx"><span class="pring"></span><img src="${src(a)}" alt="${a[1]}" loading="lazy"></div></article>`,
        ).join("");
        const C = [...R.children];
        const fit = () =>
          C.forEach((c) => {
            const b = c.querySelector(".pbg"),
              r = document.createRange();
            b.style.fontSize = "100px";
            r.selectNodeContents(b);
            const w = r.getBoundingClientRect().width;
            if (w)
              b.style.fontSize =
                Math.min(
                  (100 * (c.clientWidth - 48)) / w,
                  c.clientHeight * 0.55,
                ) + "px";
          });
        const io = new IntersectionObserver(
          (es) =>
            es.forEach((e) => {
              if (e.isIntersecting) e.target.classList.add("on");
            }),
          { threshold: 0.3 },
        );
        C.forEach((c) => io.observe(c));
        let tk = 0;
        const upd = () => {
          tk = 0;
          C.forEach((c, k) => {
            const n = C[k + 1];
            if (!n) return;
            const st = parseFloat(getComputedStyle(c).top) || 0,
              h = c.offsetHeight,
              p = Math.max(
                0,
                Math.min(1, 1 - (n.getBoundingClientRect().top - st) / h),
              );
            c.style.setProperty("--dim", (p * 0.5).toFixed(3));
            c.style.transform = "scale(" + (1 - p * 0.05).toFixed(4) + ")";
          });
        };
        addEventListener(
          "scroll",
          () => {
            tk || (tk = requestAnimationFrame(upd));
          },
          { passive: true },
        );
        addEventListener("resize", () => {
          fit();
          upd();
        });
        fit();
        upd();
        document.fonts && document.fonts.ready.then(fit);
      })();
      $("#feats").innerHTML = mk(
        [
          [
            "Regional reach",
            "Our trading network distributes products across South India, supporting trade partners with dependable supply.",
          ],
          [
            "Own manufacturing",
            "Beyond trading, we manufacture products under our own name, giving us direct control over what we offer.",
          ],
          [
            "Consistency and care",
            "We serve our customers with consistency, quality and care in everything we trade and make.",
          ],
        ],
        (a) =>
          `<div class="card rv"><h3 style="font-size:1.6rem">${a[0]}</h3><p>${a[1]}</p></div>`,
      );
      const D = (i, n, r, c, x) =>
        `<div class="dir rv"><i>${i}</i><h3>${n}</h3><b>${r}</b><p>${c}${x ? "<br>" + x : ""}</p></div>`;
      $("#dirs").innerHTML =
        D(
          "SS",
          "Mr. Sarthak Sanghvi",
          "Executive Director",
          "Whole-time Director",
        ) +
        D(
          "BD",
          "Mr. Bharat Kumar Dughar",
          "Non-Executive Director",
          "Independent Director",
          "Appointed 5 April 2024",
        ) +
        D(
          "SS",
          "Ms. Sarika S. Sanghvi",
          "Non-Executive Director",
          "Woman Director",
          "Additional Director from 25 August 2025",
        ) +
        D(
          "SC",
          "Mr. Santosh Choudannanavar",
          "Non-Executive Director",
          "Independent Director",
          "Additional Director, appointed 25 August 2025",
        );
      $("#kmp").innerHTML =
        D(
          "SS",
          "Mr. Shripal Veeramchand Sanghvi",
          "Chief Financial Officer",
          "Appointed as CFO with effect from 25 August 2025",
        ) +
        D(
          "MA",
          "Mr. Manish Agarwal",
          "Company Secretary &amp; Compliance Officer",
          "Appointed with effect from 26 February 2024",
        );
      (() => {
        const b = document.getElementById("board");
        if (!b) return;
        b.querySelectorAll(".sub").forEach((e) => e.classList.add("rv"));
        if (
          matchMedia("(prefers-reduced-motion:reduce)").matches ||
          !matchMedia("(hover:hover)").matches
        )
          return;
        b.querySelectorAll(".dir").forEach((c) => {
          c.addEventListener("pointermove", (e) => {
            const r = c.getBoundingClientRect(),
              x = (e.clientX - r.left) / r.width,
              y = (e.clientY - r.top) / r.height;
            c.style.setProperty("--mx", x * 100 + "%");
            c.style.setProperty("--my", y * 100 + "%");
            c.style.transform =
              "perspective(900px) rotateX(" +
              (0.5 - y) * 9 +
              "deg) rotateY(" +
              (x - 0.5) * 11 +
              "deg) translateY(-6px)";
          });
          c.addEventListener("pointerleave", () => {
            c.style.transform = "";
          });
        });
      })();
      const SC = "Mr. Santosh Choudannanavar",
        BD = "Mr. Bharat Kumar Dughar",
        SS = "Mr. Sarthak Sanghvi",
        NI = "Non-Executive Independent Director",
        WT = "Whole-time Executive Director";
      const C = {
        "Audit Committee": [
          [SC, "Chairman", NI],
          [BD, "Member", NI],
          [SS, "Member", WT],
        ],
        "Nomination & Remuneration": [
          [SC, "Chairman", NI],
          [BD, "Member", NI],
          ["Ms. Sarika S. Sanghvi", "Member", "Non-Executive Woman Director"],
        ],
        "Stakeholders Relationship": [
          [SC, "Chairman", NI],
          [BD, "Member", NI],
          [SS, "Member", WT],
        ],
        "Risk Management": [
          [SS, "Chairman", WT],
          [SC, "Member", NI],
          [BD, "Member", NI],
        ],
      };
      const ini = (n) => {
        const w = n
          .replace(/^(Mr|Ms)\.\s*/, "")
          .split(" ")
          .filter(Boolean);
        return (
          w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")
        ).toUpperCase();
      };
      const show = (k) => {
        $("#cmh").innerHTML =
          "<h4>" + k + "</h4><span>" + C[k].length + " members</span>";
        $("#tb").innerHTML = C[k]
          .map(
            (r) =>
              '<tr><td data-l="Director"><div class="cmwho"><i>' +
              ini(r[0]) +
              "</i><span>" +
              r[0] +
              '</span></div></td><td data-l="Position"><span class="cmbadge' +
              (r[1] === "Chairman" ? " ch" : "") +
              '">' +
              r[1] +
              '</span></td><td data-l="Category">' +
              r[2] +
              "</td></tr>",
          )
          .join("");
        document.querySelectorAll("#tabs button").forEach((b) => {
          const o = b.dataset.k === k;
          b.classList.toggle("on", o);
          b.setAttribute("aria-selected", o);
        });
      };
      $("#tabs").innerHTML = Object.keys(C)
        .map(
          (k) =>
            '<button type="button" role="tab" data-k="' +
            k +
            '"><span>' +
            k +
            "</span><em>" +
            C[k].length +
            "</em></button>",
        )
        .join("");
      $("#tabs").onclick = (e) => {
        const b = e.target.closest("button");
        b && show(b.dataset.k);
      };
      show("Audit Committee");
      const TL = [
        [
          "25 August 2025",
          [
            "Appointed Mr. Shripal Veeramchand Sanghvi as Chief Financial Officer",
            "Appointed Ms. Sarika S. Sanghvi as Additional Director (Woman Director)",
            "Appointed Mr. Santosh Choudannanavar as Additional Director (Independent)",
            "Resigned Mr. Mahipal Sanghvi as Chief Financial Officer",
            "Resigned Mr. Jayaraman Madhu Suthan as Non-Executive Director",
          ],
        ],
        [
          "5 April 2024",
          ["Appointed Mr. Bharat Kumar Dughar as Independent Director"],
        ],
        [
          "26 February 2024",
          [
            "Appointed Mr. Manish Agarwal as Company Secretary &amp; Compliance Officer",
          ],
        ],
      ];
      $("#tl").innerHTML = TL.map((g) => {
        const p = g[0].split(" ");
        return (
          '<div class="rgr rv"><div class="rgd"><span>' +
          p[0] +
          " " +
          p[1] +
          "</span><b>" +
          p[2] +
          '</b></div><ul class="rge">' +
          g[1]
            .map((x) => {
              const m = x.match(/^(Appointed|Resigned)\s+(.*?)\s+as\s+(.*)$/),
                ap = m[1] === "Appointed";
              return (
                '<li><span class="rgt ' +
                (ap ? "in" : "out") +
                '">' +
                (ap ? "Appointment" : "Resignation") +
                "</span><div><strong>" +
                m[2] +
                "</strong><small>" +
                m[3] +
                "</small></div></li>"
              );
            })
            .join("") +
          "</ul></div>"
        );
      }).join("");
      const U = "https://shantiguruindustries.com/";
      (() => {
        const ic = {
          fin: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
          pie: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9h9"/>',
          mega: '<path d="M3 11v3l12 5V6L3 11z"/><path d="M15 9a3 3 0 010 6M6 15l1 5h3l-1-4"/>',
          cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
          shield:
            '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5L16 9.5"/>',
          doc: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
        };
        

const G = [
  [
    "Reports &amp; disclosures",
    [
      [
        "fin",
        "Financial",
        "Annual reports, half-yearly financial results and related party transactions.",
        "investors.html",
      ],
      [
        "pie",
        "Shareholding pattern",
        "Quarterly details of who holds our shares.",
        "investors.html",
      ],
      [
        "mega",
        "Public notices",
        "Statutory notices and announcements.",
        "investors.html",
      ],
    ],
  ],
  [
    "Governance &amp; compliance",
    [
      [
        "cal",
        "Meetings",
        "Notices and records of board and general meetings.",
        "investors.html",
      ],
      [
        "shield",
        "Code of conduct",
        "The standards of ethics we follow in every decision.",
        "investors.html",
      ],
      [
        "doc",
        "Policies",
        "Corporate governance and compliance policies.",
        "investors.html",
      ],
    ],
  ],
];


$("#tiles").innerHTML = G.map(
  (g) =>
    '<div class="ivg"><h4>' +
    g[0] +
    "</h4>" +
    g[1]
      .map(
        (a) =>
          '<a class="ivr" href="' +
          a[3] +
          '"><span class="ivi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
          ic[a[0]] +
          '</svg></span><span><b>' +
          a[1] +
          '</b><small>' +
          a[2] +
          '</small></span><i>→</i></a>'
      )
      .join("") +
    "</div>"
).join("");

        $("#tiles").innerHTML = G.map(
          (g) =>
            '<div class="ivg"><h4>' +
            g[0] +
            "</h4>" +
            g[1]
              .map(
                (a) =>
                  '<a class="ivr" href="' +
                  a[3] +
                  '" target="_blank" rel="noopener"><span class="ivi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
                  ic[a[0]] +
                  '</svg></span><span class="ivt"><span class="ivh3">' +
                  a[1] +
                  '</span><span class="ivp">' +
                  a[2] +
                  '</span></span><span class="iva" aria-hidden="true">&nearr;</span></a>',
              )
              .join("") +
            "</div>",
        ).join("");
      })();
      $("#f").onsubmit = (e) => {
        e.preventDefault();
        const d = new FormData(e.target);
        location.href =
          "mailto:rclretail@gmail.com?subject=" +
          encodeURIComponent(d.get("t") + " from " + d.get("n")) +
          "&body=" +
          encodeURIComponent(
            d.get("m") +
              "\n\n" +
              d.get("n") +
              "\n" +
              d.get("e") +
              "\n" +
              d.get("p"),
          );
      };
      $("#shot").src = STORE;
      document.documentElement.style.setProperty("--st", "url(" + STORE + ")");
      (() => {
        const st = $("#stmt");
        st.innerHTML = st.textContent
          .trim()
          .split(/\s+/)
          .map((w) => `<span class="wd">${w}</span>`)
          .join(" ");
        const wd = [...st.children],
          pl = $("#pil"),
          ps = [...pl.children],
          ab = $("#abp"),
          bg = $("#bgw"),
          sec = document.querySelector(".about"),
          cl = (v) => Math.min(1, Math.max(0, v));
        const up = () => {
          const vh = innerHeight,
            r = st.getBoundingClientRect(),
            p = cl((vh * 0.85 - r.top) / (r.height + vh * 0.3));
          wd.forEach(
            (w, i) =>
              (w.style.opacity = 0.16 + 0.84 * cl(p * wd.length * 1.12 - i)),
          );
          const q = pl.getBoundingClientRect(),
            g = cl((vh * 0.72 - q.top) / q.height);
          pl.style.setProperty("--pg", g);
          ps.forEach((e, i) =>
            e.classList.toggle("on", g >= 1 || g > (i + 0.25) / ps.length),
          );
          const s = sec.getBoundingClientRect(),
            t = cl(-s.top / (s.height - vh * 0.5));
          ab.style.transform = `scaleX(${t})`;
          {
            const k = bg.getBoundingClientRect(),
              m = cl((vh - k.top) / (vh + k.height));
            const e = cl((m - 0.08) / 0.42),
              z = 1 - Math.pow(1 - e, 3);
            bg.style.setProperty("--f", z * 100 + "%");
            bg.style.transform = `translateX(${(1 - z) * 80}%)`;
          }
        };
        addEventListener("scroll", up, { passive: true });
        addEventListener("resize", up);
        up();
      })();
      (() => {
        const ic = [
          '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>',
          '<path d="M3 7h18l-2 12H5L3 7zM8 7a4 4 0 018 0"/>',
          '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
          '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
        ];
        const cs = [...document.querySelectorAll("#bento .card")],
          cio = new IntersectionObserver(
            (es) =>
              es.forEach((e) => {
                if (e.isIntersecting) {
                  e.target.classList.add("in");
                  cio.unobserve(e.target);
                }
              }),
            { threshold: 0.2 },
          );
        cs.forEach((c, i) => {
          c.classList.remove("rv");
          c.style.transitionDelay =
            (i % 2) * 0.15 +
            (i > 1) * 0.15 +
            "s," +
            ((i % 2) * 0.15 + (i > 1) * 0.15) +
            "s,0s,0s";
          c.insertAdjacentHTML(
            "afterbegin",
            '<span class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
              ic[i % 4] +
              '</svg></span><span class="n">0' +
              (i + 1) +
              "</span>",
          );
          c.addEventListener("mousemove", (e) => {
            const r = c.getBoundingClientRect();
            c.style.setProperty("--x", e.clientX - r.left + "px");
            c.style.setProperty("--y", e.clientY - r.top + "px");
          });
          cio.observe(c);
        });
        const s2 = document.getElementById("shot2");
        if (s2 && !matchMedia("(prefers-reduced-motion: reduce)").matches)
          addEventListener(
            "scroll",
            () => {
              const r = s2.getBoundingClientRect();
              if (r.bottom > 0 && r.top < innerHeight)
                s2.style.setProperty(
                  "--py",
                  (r.top + r.height / 2 - innerHeight / 2) * -0.06 + "px",
                );
            },
            { passive: true },
          );
      })();
      (() => {
        const b = document.getElementById("bento");
        if (!b) return;
        const it = [...b.querySelectorAll(".card")].map((c) => [
          c.querySelector("h3").textContent,
          c.querySelector("p").textContent,
        ]);
        const ic = [
          '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>',
          '<path d="M3 7h18l-2 12H5L3 7zM8 7a4 4 0 018 0"/>',
          '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
          '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
        ];
        b.className = "bento acc";
        b.innerHTML = it
          .map(
            (a, i) =>
              '<div class="ap" tabindex="0"><span class="nm">0' +
              (i + 1) +
              '</span><svg class="bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round">' +
              ic[i % 4] +
              '</svg><span class="vt">' +
              a[0].replace("Our ", "") +
              '</span><div class="bd"><h3>' +
              a[0] +
              "</h3><p>" +
              a[1] +
              '</p></div><i class="pr"></i></div>',
          )
          .join("");
        const ps = [...b.children];
        let cur = 0,
          t;
        const set = (i) => {
            cur = i;
            ps.forEach((p, k) => {
              p.classList.remove("on");
              if (k == i) {
                void p.offsetWidth;
                p.classList.add("on");
              }
            });
          },
          nx = () => set((cur + 1) % ps.length),
          run = () => {
            clearInterval(t);
            t = setInterval(() => {
              if (!b.classList.contains("hold") && b.classList.contains("in"))
                nx();
            }, 6000);
          };
        set(0);
        run();
        ps.forEach((p, i) => {
          p.addEventListener("mouseenter", () => {
            if (matchMedia("(hover:hover)").matches && cur != i) set(i);
            b.classList.add("hold");
          });
          p.addEventListener("click", () => {
            set(i);
            run();
          });
          p.addEventListener("focus", () => {
            set(i);
            run();
          });
        });
        b.addEventListener("mouseleave", () => {
          b.classList.remove("hold");
          run();
        });
        new IntersectionObserver(
          (es, o) =>
            es.forEach((e) => {
              if (e.isIntersecting) {
                b.classList.add("in");
                o.disconnect();
              }
            }),
          { threshold: 0.25 },
        ).observe(b);
      })();
      (() => {
        const b = document.getElementById("bento");
        if (!b) return;
        const fit = () => {
          const vs = [...b.querySelectorAll(".vt")];
          vs.forEach((v) => {
            v.style.fontSize = v.style.letterSpacing = "";
          });
          if (innerWidth <= 768) return;
          const p = b.querySelector(".ap");
          if (!p) return;
          const av = p.clientHeight - 92;
          vs.forEach((v) => {
            v.style.fontSize = "40px";
            v.style.letterSpacing = "0px";
          });
          const L = Math.max(...vs.map((v) => v.offsetHeight));
          if (!L) return;
          const F = Math.min((40 * av) / L, (p.clientWidth || 150) - 24);
          vs.forEach((v) => {
            v.style.fontSize = F + "px";
            v.style.letterSpacing = "0px";
          });
          vs.forEach((v) => {
            const n = v.textContent.length;
            v.style.letterSpacing =
              Math.max(0, (av - v.offsetHeight) / (n - 1)) + "px";
          });
        };
      })();
      document.querySelectorAll("#bento .vt").forEach((v) => {
        const w = v.textContent.trim();
        v.setAttribute("aria-label", w);
        v.textContent = w;
      });
      // progress, reveal, counters, cursor, card glow
      const bar = $("#bar"),
        hs = $("#hs"),
        trk = $("#trk");
      const sc = () => {
        bar.style.transform = `scaleX(${scrollY / (document.body.scrollHeight - innerHeight)})`;
      };
      addEventListener("scroll", sc, { passive: true });
      addEventListener("resize", sc);
      sc();
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add("in");
            io.unobserve(e.target);
            const n = e.target.querySelectorAll("[data-n]");
            n.forEach((b) => {
              const T = +b.dataset.n,
                t0 = performance.now(),
                st = T > 9999 ? 0 : 2000;
              const f = (t) => {
                const k = Math.min(1, (t - t0) / 1400);
                b.textContent = Math.round(
                  st + (T - st) * (1 - Math.pow(1 - k, 3)),
                );
                k < 1 && requestAnimationFrame(f);
              };
              requestAnimationFrame(f);
            });
          }),
        { threshold: 0.15 },
      );
      document.querySelectorAll(".rv").forEach((el, i) => {
        el.style.transitionDelay = (i % 4) * 70 + "ms";
        io.observe(el);
      });
      const cur = $("#cur");
      addEventListener("pointermove", (e) => {
        cur.style.left = e.clientX - 17 + "px";
        cur.style.top = e.clientY - 17 + "px";
        cur.classList.toggle("h", !!e.target.closest("a,button,.pc,.card"));
        const c = e.target.closest(".card");
        if (c) {
          const b = c.getBoundingClientRect();
          c.style.setProperty("--x", e.clientX - b.left + "px");
          c.style.setProperty("--y", e.clientY - b.top + "px");
        }
      });
      document.addEventListener("pointermove", (e) => {
        const c = e.target.closest(".pc");
        if (c) {
          const b = c.getBoundingClientRect();
          c.style.transform = `perspective(700px) rotateY(${((e.clientX - b.left) / b.width - 0.5) * 10}deg) rotateX(${-((e.clientY - b.top) / b.height - 0.5) * 8}deg)`;
        }
      });
      document.addEventListener("pointerout", (e) => {
        const c = e.target.closest && e.target.closest(".pc");
        if (c) c.style.transform = "";
      });
      // WebGL hero (plain WebGL, no libraries, no CDN): a ring of the real product packs floating in 3D around a trading globe,
      // lit by a saffron light that follows the pointer. Falls back to hiding the canvas if WebGL is unavailable.
      (() => {
        const cv = $("#gl"),
          H = $("#hero"),
          fb = () => {
            cv.style.display = "none";
          };
        let gl = null;
        const opt = { antialias: true, alpha: true };
        try {
          gl =
            cv.getContext("webgl2", opt) ||
            cv.getContext("webgl", opt) ||
            cv.getContext("experimental-webgl", opt);
        } catch (e) {}
        if (!gl) return fb();
        const W2 =
          typeof WebGL2RenderingContext !== "undefined" &&
          gl instanceof WebGL2RenderingContext;
        cv.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          fb();
        });
        /* ---- tiny matrix helpers (column-major) ---- */
        const F = (a) => new Float32Array(a),
          mul = (a, b) => {
            const o = new Float32Array(16);
            for (let c = 0; c < 4; c++)
              for (let r = 0; r < 4; r++) {
                let s = 0;
                for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
                o[c * 4 + r] = s;
              }
            return o;
          },
          mm = (...a) => a.reduce(mul),
          tr = (x, y, z) => F([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]),
          sc = (k) => F([k, 0, 0, 0, 0, k, 0, 0, 0, 0, k, 0, 0, 0, 0, 1]),
          rx = (a) => {
            const c = Math.cos(a),
              s = Math.sin(a);
            return F([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]);
          },
          ry = (a) => {
            const c = Math.cos(a),
              s = Math.sin(a);
            return F([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]);
          },
          rz = (a) => {
            const c = Math.cos(a),
              s = Math.sin(a);
            return F([c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
          },
          basis = (x, y, z) =>
            F([
              x[0],
              x[1],
              x[2],
              0,
              y[0],
              y[1],
              y[2],
              0,
              z[0],
              z[1],
              z[2],
              0,
              0,
              0,
              0,
              1,
            ]),
          persp = (fov, asp, n, f) => {
            const q = 1 / Math.tan(fov / 2);
            return F([
              q / asp,
              0,
              0,
              0,
              0,
              q,
              0,
              0,
              0,
              0,
              (f + n) / (n - f),
              -1,
              0,
              0,
              (2 * f * n) / (n - f),
              0,
            ]);
          },
          inv = (m) => {
            const a00 = m[0],
              a01 = m[1],
              a02 = m[2],
              a03 = m[3],
              a10 = m[4],
              a11 = m[5],
              a12 = m[6],
              a13 = m[7],
              a20 = m[8],
              a21 = m[9],
              a22 = m[10],
              a23 = m[11],
              a30 = m[12],
              a31 = m[13],
              a32 = m[14],
              a33 = m[15],
              b00 = a00 * a11 - a01 * a10,
              b01 = a00 * a12 - a02 * a10,
              b02 = a00 * a13 - a03 * a10,
              b03 = a01 * a12 - a02 * a11,
              b04 = a01 * a13 - a03 * a11,
              b05 = a02 * a13 - a03 * a12,
              b06 = a20 * a31 - a21 * a30,
              b07 = a20 * a32 - a22 * a30,
              b08 = a20 * a33 - a23 * a30,
              b09 = a21 * a32 - a22 * a31,
              b10 = a21 * a33 - a23 * a31,
              b11 = a22 * a33 - a23 * a32,
              d =
                1 /
                (b00 * b11 -
                  b01 * b10 +
                  b02 * b09 +
                  b03 * b08 -
                  b04 * b07 +
                  b05 * b06);
            return F([
              (a11 * b11 - a12 * b10 + a13 * b09) * d,
              (a02 * b10 - a01 * b11 - a03 * b09) * d,
              (a31 * b05 - a32 * b04 + a33 * b03) * d,
              (a22 * b04 - a21 * b05 - a23 * b03) * d,
              (a12 * b08 - a10 * b11 - a13 * b07) * d,
              (a00 * b11 - a02 * b08 + a03 * b07) * d,
              (a32 * b02 - a30 * b05 - a33 * b01) * d,
              (a20 * b05 - a22 * b02 + a23 * b01) * d,
              (a10 * b10 - a11 * b08 + a13 * b06) * d,
              (a01 * b08 - a00 * b10 - a03 * b06) * d,
              (a30 * b04 - a31 * b02 + a33 * b00) * d,
              (a21 * b02 - a20 * b04 - a23 * b00) * d,
              (a11 * b07 - a10 * b09 - a12 * b06) * d,
              (a00 * b09 - a01 * b07 + a02 * b06) * d,
              (a31 * b01 - a30 * b03 - a32 * b00) * d,
              (a20 * b03 - a21 * b01 + a22 * b00) * d,
            ]);
          },
          V = {
            add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
            sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
            mul: (a, k) => [a[0] * k, a[1] * k, a[2] * k],
            len: (a) => Math.hypot(a[0], a[1], a[2]),
            nrm: (a) => {
              const l = Math.hypot(a[0], a[1], a[2]) || 1;
              return [a[0] / l, a[1] / l, a[2] / l];
            },
            dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
            crs: (a, b) => [
              a[1] * b[2] - a[2] * b[1],
              a[2] * b[0] - a[0] * b[2],
              a[0] * b[1] - a[1] * b[0],
            ],
          };
        /* ---- shaders: one program, lighting/texture switched by uniforms. Colours are treated as linear and encoded to sRGB at the end ---- */
        const VS =
            "attribute vec3 aP;attribute vec3 aN;attribute vec2 aU;uniform mat4 uM,uVP;varying vec3 vW,vN;varying vec2 vU;void main(){vec4 w=uM*vec4(aP,1.);vW=w.xyz;vN=mat3(uM)*aN;vU=aU;gl_Position=uVP*w;}",
          FS =
            "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec3 vW,vN;varying vec2 vU;uniform vec3 uC,uPL;uniform float uOp,uLit,uTex,uEmi,uPI;uniform sampler2D uT;\n" +
            "void main(){vec3 b=uC;if(uTex>.5)b=pow(texture2D(uT,vU).rgb,vec3(2.2));vec3 col=b;\n" +
            "if(uLit>.5){vec3 n=normalize(vN),l1=normalize(vec3(0.,4.,8.)),l2=normalize(vec3(-6.,2.,-5.));vec3 pl=uPL-vW;float dd=length(pl);pl/=dd;float at=pow(max(1.-dd/14.,0.),1.4);\n" +
            "vec3 irr=vec3(.55)+vec3(.8)*max(dot(n,l1),0.)+vec3(.784,.333,.239)*max(dot(n,l2),0.)+vec3(1.,.624,.11)*uPI*at*max(dot(n,pl),0.);col=b*irr+b*uEmi;}\n" +
            "gl_FragColor=vec4(pow(col,vec3(1./2.2)),uOp);}";
        const sh = (t, s) => {
            const o = gl.createShader(t);
            gl.shaderSource(o, s);
            gl.compileShader(o);
            return gl.getShaderParameter(o, gl.COMPILE_STATUS) ? o : null;
          },
          vs = sh(gl.VERTEX_SHADER, VS),
          fs = sh(gl.FRAGMENT_SHADER, FS);
        if (!vs || !fs) return fb();
        const pg = gl.createProgram();
        gl.attachShader(pg, vs);
        gl.attachShader(pg, fs);
        gl.bindAttribLocation(pg, 0, "aP");
        gl.bindAttribLocation(pg, 1, "aN");
        gl.bindAttribLocation(pg, 2, "aU");
        gl.linkProgram(pg);
        if (!gl.getProgramParameter(pg, gl.LINK_STATUS)) return fb();
        gl.useProgram(pg);
        const U = {};
        [
          "uM",
          "uVP",
          "uC",
          "uPL",
          "uOp",
          "uLit",
          "uTex",
          "uEmi",
          "uPI",
          "uT",
        ].forEach((k) => (U[k] = gl.getUniformLocation(pg, k)));
        for (let i = 0; i < 3; i++) gl.enableVertexAttribArray(i);
        gl.uniform1i(U.uT, 0);
        /* ---- geometry builders ---- */
        const G0 = () => ({ p: [], n: [], u: [], i: [] });
        function box(w, h, d) {
          const x = w / 2,
            y = h / 2,
            z = d / 2,
            g = G0(),
            Q = [
              [
                [1, 0, 0],
                [x, -y, z],
                [x, -y, -z],
                [x, y, -z],
                [x, y, z],
              ],
              [
                [-1, 0, 0],
                [-x, -y, -z],
                [-x, -y, z],
                [-x, y, z],
                [-x, y, -z],
              ],
              [
                [0, 1, 0],
                [-x, y, z],
                [x, y, z],
                [x, y, -z],
                [-x, y, -z],
              ],
              [
                [0, -1, 0],
                [-x, -y, -z],
                [x, -y, -z],
                [x, -y, z],
                [-x, -y, z],
              ],
              [
                [0, 0, 1],
                [-x, -y, z],
                [x, -y, z],
                [x, y, z],
                [-x, y, z],
              ],
              [
                [0, 0, -1],
                [x, -y, -z],
                [-x, -y, -z],
                [-x, y, -z],
                [x, y, -z],
              ],
            ],
            uv = [0, 0, 1, 0, 1, 1, 0, 1];
          Q.forEach((q, f) => {
            for (let k = 0; k < 4; k++) {
              g.p.push(...q[k + 1]);
              g.n.push(...q[0]);
              g.u.push(uv[k * 2], uv[k * 2 + 1]);
            }
            g.i.push(f * 4, f * 4 + 1, f * 4 + 2, f * 4, f * 4 + 2, f * 4 + 3);
          });
          return g;
        }
        function sphere(w, h) {
          const g = G0(),
            gr = [];
          let k = 0;
          for (let iy = 0; iy <= h; iy++) {
            const row = [],
              v = iy / h;
            for (let ix = 0; ix <= w; ix++) {
              const u = ix / w,
                x = -Math.cos(u * 2 * Math.PI) * Math.sin(v * Math.PI),
                y = Math.cos(v * Math.PI),
                z = Math.sin(u * 2 * Math.PI) * Math.sin(v * Math.PI);
              g.p.push(x, y, z);
              g.n.push(x, y, z);
              g.u.push(u, 1 - v);
              row.push(k++);
            }
            gr.push(row);
          }
          for (let iy = 0; iy < h; iy++)
            for (let ix = 0; ix < w; ix++) {
              const a = gr[iy][ix + 1],
                b = gr[iy][ix],
                c = gr[iy + 1][ix],
                d = gr[iy + 1][ix + 1];
              if (iy !== 0) g.i.push(a, b, d);
              if (iy !== h - 1) g.i.push(b, c, d);
            }
          return g;
        }
        function wire(g) {
          const seen = new Set(),
            L = [],
            pk = (i) =>
              [0, 1, 2]
                .map((j) => String(Math.round(g.p[i * 3 + j] * 1e4) + 0))
                .join(",");
          for (let t = 0; t < g.i.length; t += 3)
            for (let e = 0; e < 3; e++) {
              const a = g.i[t + e],
                b = g.i[t + ((e + 1) % 3)],
                ka = pk(a),
                kb = pk(b),
                key = ka < kb ? ka + "|" + kb : kb + "|" + ka;
              if (ka !== kb && !seen.has(key)) {
                seen.add(key);
                L.push(a, b);
              }
            }
          return { p: g.p, n: g.n, u: g.u, i: L };
        }
        function torus(R, r, rs, ts) {
          const g = G0();
          for (let j = 0; j <= rs; j++)
            for (let i = 0; i <= ts; i++) {
              const u = (i / ts) * 2 * Math.PI,
                v = (j / rs) * 2 * Math.PI,
                x = (R + r * Math.cos(v)) * Math.cos(u),
                y = (R + r * Math.cos(v)) * Math.sin(u),
                z = r * Math.sin(v);
              g.p.push(x, y, z);
              g.n.push(...V.nrm([x - R * Math.cos(u), y - R * Math.sin(u), z]));
              g.u.push(i / ts, j / rs);
            }
          for (let j = 1; j <= rs; j++)
            for (let i = 1; i <= ts; i++) {
              const a = (ts + 1) * j + i - 1,
                b = (ts + 1) * (j - 1) + i - 1,
                c = (ts + 1) * (j - 1) + i,
                d = (ts + 1) * j + i;
              g.i.push(a, b, d, b, c, d);
            }
          return g;
        }
        function tube(f, df, seg, rad, rs) {
          const g = G0();
          let N = null;
          for (let i = 0; i <= seg; i++) {
            const u = i / seg,
              P = f(u),
              T = V.nrm(df(u));
            if (!N) {
              N = V.nrm(V.crs(T, Math.abs(T[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0]));
            } else {
              N = V.nrm(V.sub(N, V.mul(T, V.dot(N, T))));
            }
            const B = V.crs(T, N);
            for (let j = 0; j <= rs; j++) {
              const a = (j / rs) * 2 * Math.PI,
                n = V.add(V.mul(N, Math.cos(a)), V.mul(B, Math.sin(a)));
              g.p.push(...V.add(P, V.mul(n, rad)));
              g.n.push(...n);
              g.u.push(u, j / rs);
            }
          }
          for (let i = 0; i < seg; i++)
            for (let j = 0; j < rs; j++) {
              const a = i * (rs + 1) + j,
                b = (i + 1) * (rs + 1) + j;
              g.i.push(a, b, a + 1, b, b + 1, a + 1);
            }
          return g;
        }
        function ringG(ri, ro, n) {
          const g = G0();
          for (let i = 0; i <= n; i++) {
            const a = (i / n) * 2 * Math.PI,
              c = Math.cos(a),
              s = Math.sin(a);
            g.p.push(ri * c, ri * s, 0, ro * c, ro * s, 0);
            g.n.push(0, 0, 1, 0, 0, 1);
            g.u.push(0, 0, 1, 1);
          }
          for (let i = 0; i < n; i++) {
            const a = 2 * i;
            g.i.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
          }
          return g;
        }
        const buf = (t, d) => {
          const b = gl.createBuffer();
          gl.bindBuffer(t, b);
          gl.bufferData(t, d, gl.STATIC_DRAW);
          return b;
        };
        const mk = (g, mode) => ({
          pb: buf(gl.ARRAY_BUFFER, F(g.p)),
          nb: buf(gl.ARRAY_BUFFER, F(g.n)),
          ub: buf(gl.ARRAY_BUFFER, F(g.u)),
          ib: buf(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(g.i)),
          n: g.i.length,
          mode: mode || gl.TRIANGLES,
        });
        function draw(m, M, o, first, count) {
          gl.bindBuffer(gl.ARRAY_BUFFER, m.pb);
          gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
          gl.bindBuffer(gl.ARRAY_BUFFER, m.nb);
          gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
          gl.bindBuffer(gl.ARRAY_BUFFER, m.ub);
          gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 0, 0);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, m.ib);
          gl.uniformMatrix4fv(U.uM, false, M);
          gl.uniform3fv(U.uC, o.c || [1, 1, 1]);
          gl.uniform1f(U.uOp, o.a == null ? 1 : o.a);
          gl.uniform1f(U.uLit, o.lit ? 1 : 0);
          gl.uniform1f(U.uTex, o.tex ? 1 : 0);
          gl.uniform1f(U.uEmi, o.emi || 0);
          if (o.tex) gl.bindTexture(gl.TEXTURE_2D, o.tex);
          gl.drawElements(
            m.mode,
            count == null ? m.n : count,
            gl.UNSIGNED_SHORT,
            (first || 0) * 2,
          );
        }
        const st = (blend, dw, cullFront) => {
          blend ? gl.enable(gl.BLEND) : gl.disable(gl.BLEND);
          gl.depthMask(!!dw);
          if (cullFront) {
            gl.enable(gl.CULL_FACE);
            gl.cullFace(gl.FRONT);
          } else gl.disable(gl.CULL_FACE);
        };
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.blendFuncSeparate(
          gl.SRC_ALPHA,
          gl.ONE_MINUS_SRC_ALPHA,
          gl.ONE,
          gl.ONE_MINUS_SRC_ALPHA,
        );
        gl.clearColor(0, 0, 0, 0);
        /* ---- scene ---- */
        const R = 3.1,
          PK = 1.05,
          HY = 1.2,
          GS = 1.05,
          GY = 2.1,
          RY = -0.45,
          imgs = Object.values(IM),
          sideC = [0.141, 0.208, 0.169],
          bx = mk(box(1.15 * PK, 1.44 * PK, 0.14 * PK)),
          tor = mk(torus(R + 0.15, 0.012, 8, 160)),
          s48 = mk(sphere(48, 32)),
          s12 = mk(sphere(12, 12)),
          wf = mk(wire(sphere(24, 16)), gl.LINES),
          rg = mk(ringG(0.05, 0.062, 32));
        const aniso = gl.getExtension("EXT_texture_filter_anisotropic");
        const packs = imgs.map((src, i) => {
          const t = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, t);
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            1,
            1,
            0,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            new Uint8Array([36, 53, 43, 255]),
          );
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          const im = new Image();
          im.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, t);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.RGBA,
              gl.RGBA,
              gl.UNSIGNED_BYTE,
              im,
            );
            if (W2) {
              gl.generateMipmap(gl.TEXTURE_2D);
              gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_MIN_FILTER,
                gl.LINEAR_MIPMAP_LINEAR,
              );
            }
            if (aniso)
              gl.texParameterf(
                gl.TEXTURE_2D,
                aniso.TEXTURE_MAX_ANISOTROPY_EXT,
                Math.min(
                  8,
                  gl.getParameter(aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                ),
              );
          };
          im.src = src;
          return { a: (i / imgs.length) * Math.PI * 2, s: 1, t };
        });
        const GR = 1,
          ll = (la, lo, r) => {
            const p = ((90 - la) * Math.PI) / 180,
              t = ((lo + 180) * Math.PI) / 180;
            return [
              -r * Math.sin(p) * Math.cos(t),
              r * Math.cos(p),
              r * Math.sin(p) * Math.sin(t),
            ];
          };
        const PT = {
            Chennai: [13.08, 80.27],
            Dubai: [25.2, 55.3],
            Singapore: [1.35, 103.8],
            Rotterdam: [51.9, 4.5],
            "New York": [40.7, -74],
            Lagos: [6.5, 3.4],
            Sydney: [-33.9, 151.2],
            Shanghai: [31.2, 121.5],
            Mombasa: [-4, 39.7],
          },
          pos = {};
        Object.keys(PT).forEach((k) => (pos[k] = ll(PT[k][0], PT[k][1], GR)));
        const lk = [
          ["Chennai", "Dubai"],
          ["Chennai", "Singapore"],
          ["Chennai", "Rotterdam"],
          ["Chennai", "New York"],
          ["Chennai", "Lagos"],
          ["Chennai", "Sydney"],
          ["Chennai", "Shanghai"],
          ["Chennai", "Mombasa"],
          ["Dubai", "Rotterdam"],
          ["Singapore", "Shanghai"],
          ["Rotterdam", "New York"],
          ["Mombasa", "Lagos"],
          ["Singapore", "Sydney"],
          ["Dubai", "Mombasa"],
        ];
        const links = lk.map(([a, b], i) => {
          const p1 = pos[a],
            p2 = pos[b],
            d = V.len(V.sub(p1, p2)),
            m = V.add(p1, p2),
            cs = V.len(m) / 2,
            c = V.mul(V.nrm(m), 2 * (1.1 + 0.12 * d) - cs),
            f = (u) =>
              V.add(
                V.add(V.mul(p1, (1 - u) * (1 - u)), V.mul(c, 2 * (1 - u) * u)),
                V.mul(p2, u * u),
              ),
            df = (u) =>
              V.add(
                V.mul(V.sub(c, p1), 2 * (1 - u)),
                V.mul(V.sub(p2, c), 2 * u),
              );
          return {
            mesh: mk(tube(f, df, 48, 0.007, 5)),
            f,
            o: i * 0.17,
            v: 0.1 + (i % 3) * 0.03,
            c: a == "Chennai" ? [1, 0.824, 0.478] : [1, 0.561, 0.42],
          };
        });
        const nodes = Object.keys(pos).map((k, i) => {
          const h = k == "Chennai",
            p = pos[k],
            z = V.nrm(p),
            x = V.nrm(V.crs(Math.abs(z[1]) > 0.99 ? [1, 0, 0] : [0, 1, 0], z));
          return {
            p,
            r: h ? 0.06 : 0.04,
            o: i * 0.11,
            B: basis(x, V.crs(z, x), z),
            c: h ? [0.482, 0.827, 0.537] : [1, 0.945, 0.816],
            rc: h ? [0.482, 0.827, 0.537] : [1, 0.69, 0.18],
          };
        });
        let px = 0.4,
          py = 0.3,
          mx = 0,
          my = 0,
          vis = true,
          vw = 1,
          vh = 1,
          asp = 1,
          dist = 10,
          wx = 0,
          wy = 0,
          VP = F(16),
          hov = -1,
          nd = null;
        H.addEventListener("pointermove", (e) => {
          const b = H.getBoundingClientRect();
          px = ((e.clientX - b.left) / b.width) * 2 - 1;
          py = -(((e.clientY - b.top) / b.height) * 2 - 1);
          nd = [px, py];
        });
        H.addEventListener("pointerleave", () => (nd = null));
        new IntersectionObserver((e) => (vis = e[0].isIntersecting)).observe(H);
        const rs = () => {
          const w = H.clientWidth,
            h = H.clientHeight,
            pr = Math.min(devicePixelRatio || 1, 2);
          asp = w / h;
          dist =
            w <= 768
              ? Math.max(15, (w <= 480 ? 14.5 : 17) / asp)
              : Math.max(10.8, 18.4 / asp);
          cv.width = Math.max(1, Math.round(w * pr));
          cv.height = Math.max(1, Math.round(h * pr));
          VP = mul(
            persp((38 * Math.PI) / 180, asp, 0.1, 50),
            tr(0, -0.6, -dist),
          );
          vh = 2 * dist * Math.tan((19 * Math.PI) / 180);
          vw = vh * asp;
          wx = w <= 768 ? 0 : vw * 0.16;
          wy = w <= 768 ? vh * (w <= 480 ? 0.255 : 0.235) : 0.12;
        };
        new ResizeObserver(rs).observe(H);
        rs();
        const t0 = performance.now(),
          TF = Math.tan((19 * Math.PI) / 180),
          HB = [0.575 * PK, 0.72 * PK, 0.07 * PK];
        // ray vs pack (oriented box, tested in the pack's local space)
        const hit = (M, O, D) => {
          const Mi = inv(M),
            o = [0, 1, 2].map(
              (j) =>
                Mi[j] * O[0] + Mi[4 + j] * O[1] + Mi[8 + j] * O[2] + Mi[12 + j],
            ),
            d = [0, 1, 2].map(
              (j) => Mi[j] * D[0] + Mi[4 + j] * D[1] + Mi[8 + j] * D[2],
            );
          let a = -1e9,
            b = 1e9;
          for (let j = 0; j < 3; j++) {
            if (Math.abs(d[j]) < 1e-9) {
              if (Math.abs(o[j]) > HB[j]) return -1;
              continue;
            }
            let t1 = (-HB[j] - o[j]) / d[j],
              t2 = (HB[j] - o[j]) / d[j];
            if (t1 > t2) [t1, t2] = [t2, t1];
            a = Math.max(a, t1);
            b = Math.min(b, t2);
          }
          return a <= b && b >= 0 ? Math.max(a, 0) : -1;
        };
        (function L() {
          requestAnimationFrame(L);
          if (!vis) return;
          const t = (performance.now() - t0) / 1000;
          mx += (px - mx) * 0.05;
          my += (py - my) * 0.05;
          const wg = tr(wx, wy, 0),
            ringM = mm(wg, tr(0, RY, 0), ry(t * 0.16 + mx * 1.3)),
            gt = mm(wg, tr(0, GY, 0), rz(0.41)),
            globe = mm(gt, ry(Math.PI + 0.17), sc(GS));
          const pm = (p) => {
            const i = packs.indexOf(p);
            return mm(
              ringM,
              tr(
                Math.sin(p.a) * R,
                Math.sin(t * 0.9 + i * 1.3) * 0.1,
                Math.cos(p.a) * R,
              ),
              ry(p.a),
              sc(p.s),
            );
          };
          // hover: nearest pack under the pointer grows a little
          hov = -1;
          if (nd) {
            const O = [0, 0.6, dist],
              D = [nd[0] * TF * asp, nd[1] * TF, -1];
            let best = 1e9;
            packs.forEach((p, i) => {
              const h = hit(pm(p), O, D);
              if (h >= 0 && h < best) {
                best = h;
                hov = i;
              }
            });
          }
          packs.forEach((p, i) => {
            p.s += ((hov === i ? 1.22 : 1) - p.s) * 0.12;
          });
          gl.viewport(0, 0, cv.width, cv.height);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          gl.uniformMatrix4fv(U.uVP, false, VP);
          gl.uniform3f(U.uPL, px * vw * 0.45, py * vh * 0.45 + 1, 3.5);
          gl.uniform1f(U.uPI, 2.4 + Math.sin(t * 2) * 0.4);
          // opaque: packs, globe core, port markers, cargo
          st(false, true, false);
          packs.forEach((p) => {
            const M = pm(p);
            draw(bx, M, { c: sideC, lit: 1 }, 0, 24);
            draw(bx, M, { tex: p.t, lit: 1, emi: 0.14 }, 24, 6);
            draw(bx, M, { tex: p.t, lit: 1, emi: 0.14 }, 30, 6);
          });
          draw(s48, globe, { c: [0.071, 0.239, 0.169] });
          nodes.forEach((n) =>
            draw(s12, mm(globe, tr(...n.p), sc(n.r)), { c: n.c }),
          );
          links.forEach((l) =>
            draw(s12, mm(globe, tr(...l.f((l.o + t * l.v) % 1)), sc(0.03)), {
              c: [1, 0.945, 0.816],
            }),
          );
          // trade links, then the see-through layers
          st(true, true, false);
          links.forEach((l) => draw(l.mesh, globe, { c: l.c, a: 0.9 }));
          st(true, false, true);
          draw(s48, mm(gt, sc(1.2 * GS)), { c: [0.122, 0.478, 0.302], a: 0.1 });
          st(true, false, false);
          draw(
            wf,
            mm(globe, sc(1.002)),
            { c: [0.812, 0.91, 0.847], a: 0.22 },
            0,
            wf.n,
          );
          nodes.forEach((n) => {
            const k = (t * 0.6 + n.o) % 1;
            draw(rg, mm(globe, tr(...n.p), n.B, sc(1 + k * 3)), {
              c: n.rc,
              a: 0.9 * (1 - k),
            });
          });
          [-HY, HY].forEach((y) =>
            draw(tor, mm(ringM, tr(0, y, 0), rx(Math.PI / 2)), {
              c: [0.722, 0.525, 0.169],
              a: 0.85,
            }),
          );
        })();
      })();
