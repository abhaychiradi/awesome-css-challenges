const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key == "Enter") {
    setInterval(() => {
      e.target.value = "";
    }, 10);
    RandomPicker();
  }
});

function createTags(input) {
  var tags = input.split(",");
  tags = tags.filter((tags) => tags.trim() != "").map((tags) => tags.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}

function RandomPicker() {
  const times = 30;

  const interval = setInterval(() => {
    const RandomTag = PickRandom();

    tagHighlight(RandomTag);
    setTimeout(() => {
      tagUnHighlight(RandomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const RandomTag = PickRandom();
      tagHighlight(RandomTag);
    }, 100);
  }, times * 100);
}

function PickRandom() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function tagHighlight(tag) {
  tag.classList.add("highlight");
}

function tagUnHighlight(tag) {
  tag.classList.remove("highlight");
}
