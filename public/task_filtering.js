// Removes a chosen filter.
function remove_old_filter_chosen() {
        
    if (document.querySelector(".chosen") != null) {
        document.querySelector(".chosen").setAttribute("class", "filter")
    }

    return
}

// Displays a specific set of tasks depending on whether they're completed or not
// and whether they should be displayed or not.
function specific_tasks_display(querySelectorString, display_style) {

    let specific_tasks = document.querySelectorAll(querySelectorString)
    specific_tasks.forEach((task) => {
        task.style.display = display_style
    })

    return
}

// Applies filter to hide not needed tasks.
function filter_chosen_tasks(element_clicked, type_of_tasks) {

    remove_old_filter_chosen()
    element_clicked.setAttribute("class", "filter chosen")
    specific_tasks_display(".task", "none")

    if (type_of_tasks == "incomplete") {
        specific_tasks_display(".task[data-completed='false']", "flex")
    }
    else if (type_of_tasks == "complete") {
        specific_tasks_display(".task[data-completed='true']", "flex")
    }
    else {
        specific_tasks_display(".task", "flex")
    }

    return
}

// Removes all completed tasks from the document.
function remove_completed_tasks() {

    document.querySelectorAll(".task[data-completed='true']").forEach((task) => {
        task.remove()
    })

    return
}

// Updates the tasks remaining counter.
function update_tasks_remaining() {
    document.getElementsByClassName("tasks_remaining")[0].innerHTML = String(document.querySelectorAll(".task[data-completed='false']").length) + " items left"
    return
}

setInterval(update_tasks_remaining, 100)