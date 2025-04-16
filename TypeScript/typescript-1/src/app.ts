const p = document.getElementById("text");
if (!p) throw new Error("Element #text not found!");
p.textContent = "Hello TypeScript!";