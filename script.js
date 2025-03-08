// F4kFiles - The World's Most Questionable File Converter 💀

// ConvertAPI Key (Replace with your own)
const CONVERT_API_KEY = "secret_ImtBAGDSu8z2y1sl";

// Show a warning message when page loads
window.onload = function () {
    alert("⚠ WARNING: This site may be too advanced for your brain. Proceed at your own risk. 💀");
};

// Event listener for convert button
document.getElementById("convertBtn").addEventListener("click", () => {
    convertFile();
});

// Function to upload & convert file
async function convertFile() {
    let fileInput = document.getElementById("fileInput");
    let formatSelect = document.getElementById("formatSelect");
    let statusMsg = document.getElementById("statusMsg");

    if (fileInput.files.length === 0) {
        alert("💀 Bruh, select a file first.");
        return;
    }

    let file = fileInput.files[0];
    let fileFormat = formatSelect.value;

    statusMsg.innerHTML = `🚀 Uploading ${file.name}... Please wait...`;
    statusMsg.style.color = "yellow";

    let formData = new FormData();
    formData.append("file", file);

    try {
        let response = await fetch(`https://v2.convertapi.com/convert/${fileFormat}?Secret=${CONVERT_API_KEY}`, {
            method: "POST",
            body: formData
        });

        let data = await response.json();

        if (data.Files && data.Files.length > 0) {
            let downloadLink = data.Files[0].Url;
            statusMsg.innerHTML = `🔥 Your file has been converted. Click below to download.`;
            statusMsg.style.color = "lime";

            let downloadBtn = document.createElement("a");
            downloadBtn.href = downloadLink;
            downloadBtn.innerHTML = "⬇ Download Now ⬇";
            downloadBtn.style.background = "red";
            downloadBtn.style.color = "white";
            downloadBtn.style.fontSize = "20px";
            downloadBtn.style.padding = "15px";
            downloadBtn.style.border = "3px solid yellow";
            downloadBtn.style.textDecoration = "none";
            downloadBtn.style.display = "block";
            downloadBtn.style.textAlign = "center";
            downloadBtn.style.marginTop = "20px";
            document.body.appendChild(downloadBtn);
        } else {
            throw new Error("Conversion failed.");
        }
    } catch (error) {
        statusMsg.innerHTML = `❌ Error: ${error.message}`;
        statusMsg.style.color = "red";
    }
}

// Glitch effect for the page title
setInterval(() => {
    let originalTitle = "F4kFiles - Totally Legit File Converter";
    let glitchTitle = "F4kFiles - 🔥 GET FREE FILE CONVERSION NOW 🔥";
    document.title = document.title === originalTitle ? glitchTitle : originalTitle;
}, 1000);

// Moving cursor effect to make users paranoid
document.addEventListener("mousemove", function (e) {
    let cursorTrail = document.createElement("div");
    cursorTrail.className = "cursor-trail";
    cursorTrail.style.left = `${e.pageX}px`;
    cursorTrail.style.top = `${e.pageY}px`;
    document.body.appendChild(cursorTrail);
    setTimeout(() => {
        cursorTrail.remove();
    }, 500);
});

// Fake Bitcoin mining to scare users
setInterval(() => {
    console.log("⛏️ Mining Bitcoins... (jk, but you got scared right?)");
}, 5000);

// Random fake error pop-ups
setInterval(() => {
    let errors = [
        "Windows has encountered a fatal error!",
        "Your computer is overheating!",
        "Self-destruct sequence activated!",
        "You have been hacked!"
    ];
    if (Math.random() > 0.8) {
        alert(errors[Math.floor(Math.random() * errors.length)]);
    }
}, 15000);
