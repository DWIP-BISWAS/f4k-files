// F4kFiles - The World's Most Questionable File Converter 💀

// Show a warning message when page loads
window.onload = function () {
    alert("⚠ WARNING: This site may be too advanced for your brain. Proceed at your own risk. 💀");
};

// Event listener for convert button
document.getElementById("convertBtn").addEventListener("click", () => {
    convertFile();
});

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

    // Create FormData
    let formData = new FormData();
    formData.append("file", file);
    formData.append("target", targetFormat);

    statusMsg.innerHTML = `🚀 Uploading ${file.name}... Converting to ${targetFormat}...`;
    statusMsg.style.color = "yellow";

    try {
        let response = await fetch("https://v2.convertapi.com/convert/" + targetFormat, {
            method: "POST",
            headers: {
                "Authorization": "Bearer secret_ImtBAGDSu8z2y1sl",  // Replace with your actual key
            },
            body: formData,
        });

        // **DEBUGGING: Print response before parsing**
        let textResponse = await response.text();
        console.log("RAW RESPONSE:", textResponse);

        let jsonResponse = JSON.parse(textResponse);

        // Check if conversion was successful
        if (!jsonResponse || !jsonResponse.file) {
            throw new Error("Conversion failed! Invalid API response.");
        }

        let downloadUrl = jsonResponse.file.url;

        statusMsg.innerHTML = `✅ Conversion successful! <a href="${downloadUrl}" download>Download File</a>`;
        statusMsg.style.color = "lime";
    } catch (error) {
        console.error("❌ ERROR:", error);
        statusMsg.innerHTML = `❌ Error: ${error.message}`;
        statusMsg.style.color = "red";
    }
}
