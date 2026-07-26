console.log("Lawless SMP Website");

const copyButton = document.getElementById("copy-ip");

if (copyButton) {

    copyButton.addEventListener("click", function (event) {

        event.preventDefault();

        navigator.clipboard.writeText("lawlesssmp.net");

        copyButton.textContent = "✓ Copied!";

        setTimeout(() => {

            copyButton.textContent = "Copy Server IP";

        }, 2000);

    });

}