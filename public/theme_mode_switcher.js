// Set theme mode to local storage.
function set_theme_mode(theme_mode) {
    localStorage.setItem("theme_mode", theme_mode)
    return
}


// Initial theme mode is set to dark.
function set_initial_theme_mode() {

    set_theme_mode("dark")
    change_theme("light", "dark")

    return
}

// Changes each element class from dark to light and vice versa (which applies the dark/light theme).
function change_theme(change_from, change_to) {
    document.querySelectorAll("." + change_from).forEach((element) => {
        element.setAttribute("class", element.className.replace(change_from, change_to))
    })

    return
}

// Toggles theme mode (both icon displayed and actual colours shown).
function toggle_theme_mode() {

    if (document.querySelector(".theme_switcher").src.indexOf("icon-moon.svg") != -1) {
        document.querySelector(".theme_switcher").src = "./images/icon-sun.svg"
        change_theme("light", "dark")
        set_theme_mode("dark")
    }
    else {
        document.querySelector(".theme_switcher").src = "./images/icon-moon.svg"
        change_theme("dark", "light")
        set_theme_mode("light")
    }

    return
}

set_initial_theme_mode()