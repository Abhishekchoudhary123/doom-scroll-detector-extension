document.getElementById("save").onclick = () => {
  const goal = document.getElementById("goal").value;
  chrome.storage.sync.set({ goal });
};
