/* Démo : un tri à bulles exécuté pas à pas, avec le code surligné. */
(function () {
  const root = document.getElementById("demo-tri");
  if (!root) return;
  const barres = root.querySelector(".tri-barres");
  const msg = root.querySelector(".tri-msg");
  const code = root.querySelector(".tri-code");
  const btnEtape = root.querySelector("[data-etape]");
  const btnReset = root.querySelector("[data-reset]");

  const INIT = [5, 2, 8, 3, 9, 1, 7, 4];
  let t, i, j, fini, phase; // phase : "compare" puis "echange"

  const LIGNES = [
    "pour i de 0 à n−2 :",
    "    pour j de 0 à n−2−i :",
    "        si t[j] > t[j+1] :",
    "            échanger t[j] et t[j+1]",
  ];

  function reset() {
    t = INIT.slice(); i = 0; j = 0; fini = false; phase = "compare";
    msg.textContent = "Cliquez sur « Étape suivante » pour comparer les deux premières cases.";
    rendre(-1, -1, 0);
    surligner(-1);
  }

  function rendre(a, b, fixes) {
    const max = Math.max(...t);
    barres.innerHTML = t.map((v, k) => {
      const cls = (k === a || k === b) ? "compare" : (k >= t.length - fixes ? "fixe" : "");
      return `<div class="${cls}" style="height:${(v / max) * 100}%"><span>${v}</span></div>`;
    }).join("");
  }

  function surligner(n) {
    code.innerHTML = LIGNES.map((l, k) => `<span class="${k === n ? "cur" : ""}">${l}</span>`).join("\n");
  }

  function etape() {
    if (fini) return;
    if (phase === "compare") {
      rendre(j, j + 1, i);
      surligner(2);
      if (t[j] > t[j + 1]) {
        msg.textContent = `On compare ${t[j]} et ${t[j + 1]} : ${t[j]} est plus grand, on les échange.`;
        phase = "echange";
      } else {
        msg.textContent = `On compare ${t[j]} et ${t[j + 1]} : déjà dans l’ordre, on avance.`;
        avancer();
      }
    } else {
      [t[j], t[j + 1]] = [t[j + 1], t[j]];
      rendre(j, j + 1, i);
      surligner(3);
      msg.textContent = `Échange fait : ${t[j]} puis ${t[j + 1]}.`;
      phase = "compare";
      avancer();
    }
  }

  function avancer() {
    j++;
    if (j > t.length - 2 - i) {
      j = 0; i++;
      if (i >= t.length - 1) {
        fini = true;
        rendre(-1, -1, t.length);
        surligner(-1);
        msg.textContent = "Tableau trié. Le plus grand élément « remonte » à chaque passage, comme une bulle.";
      } else {
        msg.textContent += ` Fin du passage ${i} : le plus grand des restants est à sa place.`;
      }
    }
  }

  btnEtape.addEventListener("click", etape);
  btnReset.addEventListener("click", reset);
  reset();
})();
