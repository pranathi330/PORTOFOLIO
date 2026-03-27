// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const msg = document.getElementById("success-message");
    msg.style.color = "green";
    msg.textContent = "Message sent successfully!";
    this.reset();
});

// Skills Description
function showSkill(skill) {

    const desc = document.getElementById("skill-description");

    const skillInfo = {
        python: "Strong knowledge of Python including OOP concepts, Pandas, NumPy and Flask development.",
        html: "Experienced in building structured and semantic web pages using HTML5.",
        css: "Skilled in responsive design, Flexbox and modern UI styling.",
        js: "Knowledge of DOM manipulation and interactive web applications.",
        sql: "Understanding of SQL queries, database design and MySQL."
    };

    desc.innerText = skillInfo[skill];
}