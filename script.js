// assets/js/main.js

// document.addEventListener("DOMContentLoaded", () => {
//     const menuButton = document.getElementById("menu-btn");
//     const navOptions = document.getElementById("mobile-nav-list");
//     menuButton.addEventListener("click", () => {
//         if (navOptions.classList.contains("open")) {
//             navOptions.classList.remove("open");
//             menuButton.textContent = "☰"; // Change to menu icon
//         } else {
//             navOptions.classList.add("open");
//             menuButton.textContent = "✖"; // Change to cross icon
//         }
//     });
    
// });
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-btn");
    const navOptions = document.getElementById("mobile-nav-list");
    const navItems = document.querySelectorAll(".mobile-nav-item");

    menuButton.addEventListener("click", () => {
        toggleMenu();
    });

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navOptions.classList.contains("open")) {
                toggleMenu();
            }
        });
    });

    function toggleMenu() {
        if (navOptions.classList.contains("open")) {
            navOptions.classList.remove("open");
            menuButton.textContent = "☰"; // Change to menu icon
        } else {
            navOptions.classList.add("open");
            menuButton.textContent = "✖"; // Change to cross icon
        }
    }
});
