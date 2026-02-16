const categiries = document.querySelector("#categories");
const links = categiries.querySelectorAll("li.item");

console.log("Кількість категорій:", links.length);

links.forEach (link => {
    const title = link.querySelector("h2");
    console.log(title.textContent);

    const countli = link.querySelectorAll("li");
    console.log(countli.length);
});
