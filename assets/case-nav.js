/* Shared top nav for the three case studies in 손예진 포트폴리오.
   Replaces each kit's own tab row with: 손예진 포트폴리오 · 01 Luckin · 02 Spoany · 03 Matter Lab */
(function () {
  var CASES = [
    ["spoany", "01 Spoany Studio", "spoany"],
    ["matter-lab", "02 Matter Lab", "matter"],
    ["luckin", "03 Luckin Campaign", "luckin-campaign"],
    ["pueon", "04 PueON!", "pueon"]
  ];
  var here = location.pathname.split("/").filter(Boolean);
  var cur = "";
  for (var i = 0; i < CASES.length; i++) if (here.indexOf(CASES[i][0]) !== -1) cur = CASES[i][0];

  var css = document.createElement("style");
  css.textContent =
    ".syj-home{font-weight:600!important;opacity:1!important;margin-right:6px}" +
    ".syj-home{font-size:12px;letter-spacing:.02em;padding:8px 4px;white-space:nowrap;align-self:center}" +
    ".syj-sep{width:1px;align-self:center;height:16px;background:currentColor;opacity:.25;margin:0 6px;flex:none}";
  document.head.appendChild(css);

  function render() {
    var tabs = document.getElementById("tabs");
    if (!tabs) return;
    var html = '<span class="syj-home">손예진 포트폴리오</span><span class="syj-sep" aria-hidden="true"></span>';
    for (var i = 0; i < CASES.length; i++) {
      var k = CASES[i][0];
      html += '<a href="../' + k + '/" data-k="' + CASES[i][2] + '"' + (k === cur ? ' aria-current="page"' : "") + ">" + CASES[i][1] + "</a>";
    }
    tabs.innerHTML = html;
  }
  render();
  // the kits re-render on hash change; keep our nav in place
  window.addEventListener("hashchange", function () { setTimeout(render, 0); });
})();
