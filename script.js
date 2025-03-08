// F4kFiles - The World's Most Questionable File Converter 💀
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
    let targetFormat = formatSelect.value;
    let apiKey = "AGQfwba0hRTmcdN9qqan1z";  // Your Filestack API key

    statusMsg.innerHTML = `🚀 Uploading ${file.name}... Converting to ${targetFormat}...`;
    statusMsg.style.color = "yellow";

    // Create FormData for uploading
    let formData = new FormData();
    formData.append("fileUpload", file);

    try {
        // Step 1: Upload file to Filestack
        let uploadResponse = await fetch(`https://www.filestackapi.com/api/store/S3?key=${apiKey}`, {
            method: "POST",
            body: formData
        });

        let uploadData = await uploadResponse.json();
        if (!uploadData || !uploadData.url) {
            throw new Error("File upload failed!");
        }

        let fileUrl = uploadData.url;
        console.log("Uploaded File URL:", fileUrl);

        // Step 2: Convert the uploaded file
        let conversionUrl = `https://process.filestackapi.com/${apiKey}/output=format:${targetFormat}/${fileUrl}`;

        statusMsg.innerHTML = `✅ Conversion successful! <a href="${conversionUrl}" download>Download File</a>`;
        statusMsg.style.color = "lime";

    } catch (error) {
        console.error("Conversion Error:", error);
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
