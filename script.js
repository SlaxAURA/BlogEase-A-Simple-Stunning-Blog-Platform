// === script.js ===
function addPost() {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const gradeInput = document.getElementById("grade");

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const grade = gradeInput.value;

  if (!title || !content || !grade) {
    alert("Please fill in all fields: title, content, and grade.");
    return;
  }

  const postCard = document.createElement("div");
  postCard.className = "post-card";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const para = document.createElement("p");
  para.textContent = content;

  const tag = document.createElement("div");
  tag.classList.add("tag");

  if (grade === "Beginner") tag.classList.add("beginner");
  if (grade === "Intermediate") tag.classList.add("intermediate");
  if (grade === "Advanced") tag.classList.add("advanced");

  tag.textContent = grade;

  const delBtn = document.createElement("button");
  delBtn.className = "flutter-btn";
  delBtn.textContent = "🗑 Delete";
  delBtn.onclick = () => postCard.remove();

  postCard.appendChild(heading);
  postCard.appendChild(para);
  postCard.appendChild(tag);
  postCard.appendChild(delBtn);

  document.getElementById("posts").prepend(postCard);

  titleInput.value = "";
  contentInput.value = "";
  gradeInput.selectedIndex = 0;
}

// Light/Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  modeToggle.textContent = isDark ? "☀️ Light Mode" : "🌗 Dark Mode";
});