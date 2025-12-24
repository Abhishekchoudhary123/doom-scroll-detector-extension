async function checkIntent() {
  const text = document.getElementById("reason").value;
  const title = document.title;

  const res = await fetch("http://localhost:3000/classify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, title })
  });

  const data = await res.json();

  if (data.result === "STUDY") {
    document.getElementById("focus-guard").remove();
  } else {
    blurScreen();
    document.getElementById("result").innerText =
      "AI thinks this is distraction 👀";
  }
}
let scrollCount = 0;
let lastScroll = Date.now();

window.addEventListener("scroll", () => {
  const now = Date.now();
  if (now - lastScroll < 300) {
    scrollCount++;
  } else {
    scrollCount = 0;
  }

  if (scrollCount > 15) {
    showScrollWarning();
  }

  lastScroll = now;
});

function showScrollWarning() {
  alert("⚠️ Doom scrolling detected. Back to goal?");
  scrollCount = 0;
}
