// F4kFiles - The World's Most Questionable File Converter 💀

// Show a warning message when page loads
window.onload = function() {
    alert("⚠ WARNING: This site may be too advanced for your brain. Proceed at your own risk. 💀");
};

// Simulated file upload
function uploadFile() {
    let fileInput = document.getElementById("fileInput");
    let statusMsg = document.getElementById("statusMsg");

    if (fileInput.files.length === 0) {
        alert("💀 Bruh, select a file first.");
        return;
    }

    let fileName = fileInput.files[0].name;
    statusMsg.innerHTML = `🚀 Uploading ${fileName}... Please wait...`;
    statusMsg.style.color = "yellow";

    // Fake "loading" effect
    setTimeout(() => {
        statusMsg.innerHTML = "✅ File uploaded successfully! Converting...";
        statusMsg.style.color = "cyan";

        // More fake loading
        setTimeout(() => {
            statusMsg.innerHTML = `🔥 Your file has been converted. Click the giant non-sketchy button below to download.`;
            statusMsg.style.color = "lime";

            // Create a fake download button
            let downloadBtn = document.createElement("button");
            downloadBtn.innerHTML = "⬇ Download Now ⬇";
            downloadBtn.style.background = "red";
            downloadBtn.style.color = "white";
            downloadBtn.style.fontSize = "20px";
            downloadBtn.style.padding = "15px";
            downloadBtn.style.border = "3px solid yellow";
            downloadBtn.onclick = function() {
                alert("💀 Haha, you really thought?");
            };
            document.body.appendChild(downloadBtn);
        }, 3000);
    }, 2000);
}

// Glitch effect for the page title
setInterval(() => {
    let originalTitle = "F4kFiles - Totally Legit File Converter";
    let glitchTitle = "F4kFiles - 🔥 GET FREE FILE CONVERSION NOW 🔥";
    document.title = document.title === originalTitle ? glitchTitle : originalTitle;
}, 1000);

// Moving cursor effect to make users paranoid
document.addEventListener("mousemove", function(e) {
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
    let errors = ["Windows has encountered a fatal error!", "Your computer is overheating!", "Self-destruct sequence activated!", "You have been hacked!"];
    if (Math.random() > 0.8) { // 20% chance to trigger an error
        alert(errors[Math.floor(Math.random() * errors.length)]);
    }
}, 15000);
