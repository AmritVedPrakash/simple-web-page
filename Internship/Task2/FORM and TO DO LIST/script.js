// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.textContent = "Please enter a valid email address!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";

    // Clear form
    document.getElementById("contactForm").reset();
});

// To-Do List
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
