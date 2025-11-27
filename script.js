// PERSONAL LINKS
const facebookLink = "https://facebook.com/YOUR_USERNAME";
const instagramLink = "https://www.instagram.com/emmanuelekem3?igsh=Z2dkZzE4NHlycnNl";
const twitterLink = "https://twitter.com/YOUR_USERNAME";
const tiktokLink = "https://www.tiktok.com/@general_360gh?_r=1&_t=ZM-91kbQJ7AdBo";

const whatsappNumber = "233358070603";
const phoneNumber = "233358070603";
const emailAddress = "e152357@gmail.com";

// SOCIAL LINKS
document.getElementById("facebook").onclick = () => window.open(facebookLink, "_blank");
document.getElementById("instagram").onclick = () => window.open(instagramLink,"_https://www.instagram.com/emmanuelekem3?igsh=Z2dkZzE4NHlycnNl");
document.getElementById("twitter").onclick = () => window.open(twitterLink, "_blank");
document.getElementById("tiktok").onclick = () => window.open(tiktokLink, "_https://www.tiktok.com/@general_360gh?_r=1&_t=ZM-91kbQJ7AdBo");

// CONTACT
document.getElementById("whatsapp").onclick = () => window.open(`https://wa.me/${whatsappNumber}`, "_blank");
document.getElementById("call").onclick = () => window.location.href = `tel:${phoneNumber}`;
document.getElementById("email").onclick = () => window.location.href = `mailto:${emailAddress}`;
document.getElementById("contactBtn").onclick = () => window.location.href = `mailto:${emailAddress}`;

// DARK MODE
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");

    // Change icon
    let icon = document.querySelector("#themeToggle i");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
};
