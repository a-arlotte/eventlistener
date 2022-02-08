const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");



grandparent.addEventListener("click", e => {
    console.log("Grandparent Bubble");

});
parent.addEventListener("click", e => {
    console.log("Parent Bubble");

});
child.addEventListener("click", e => {
    console.log("Child Bubble");
});