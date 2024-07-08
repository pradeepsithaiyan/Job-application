document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.querySelector('#jobForm');

    if (jobForm) {
        jobForm.addEventListener('submit', validateJobForm);
    }
});

function validateJobForm(event) {
    event.preventDefault();
    
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const company = document.getElementById('company').value.trim();
    const location = document.getElementById('location').value.trim();
    const description = document.getElementById('description').value.trim();
    // const requirements = document.getElementById('requirements').value.trim();
    const qualification = document.getElementById('qualification').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const email = document.getElementById('email').value.trim();
    const resume = document.getElementById('resume').files[0];

    if (jobTitle === "" || company === "" || location === "" || description === "" || qualification === "" || experience === "" || email === "" || !resume) {
        alert("All fields are required!");
        return false;
    }

    if (isNaN(experience) || experience <= 0) {
        alert("Please enter a valid experience (positive number).");
        return false;
    } 

    // Validate experience to be minimum 2 years
    if (experience < 2) {
        alert("Experience must be at least 2 years."); 
        return false;
    }

    // Validate if qualification contains "B.E"
    if (!qualification.toLowerCase().includes("b.e")) {
        alert("Qualification must include 'B.E'.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@][.com]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Job registered successfully!");
    // Here you would typically submit the form to a server using AJAX or fetch API
    // Example: submitFormToServer(jobForm);
    return true;
}
