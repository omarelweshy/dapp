import { ic_blog } from "../../declarations/ic_blog";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with ic_blog actor, calling the greet method
  const greeting = await ic_blog.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
