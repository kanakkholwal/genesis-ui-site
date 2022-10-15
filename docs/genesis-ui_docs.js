function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        const button = document.createElement('button'); button.className = 'Copyify';
        button.type = 'button'; button.innerText = 'Copy';
        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,                    leaving the button in a focused state. */
                button.blur(); button.innerText = 'Copied!';
                setTimeout(function () { button.innerText = 'Copy'; }, 2000);
            },
                function (error) { button.innerText = 'Error'; });
        });
        const pre = codeBlock.parentNode;

        pre.insertAdjacentElement("afterbegin", button);

    });
} if (navigator && navigator.clipboard) { addCopyButtons(navigator.clipboard); } else { var script = document.createElement('script'); script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js'; script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94='; script.crossOrigin = 'anonymous'; script.onload = function () { addCopyButtons(clipboard); }; document.body.appendChild(script); } function myFunction() { var copyText = document.getElementById("myInput"); copyText.select(); copyText.setSelectionRange(0, 99999); document.execCommand("copy"); var tooltip = document.getElementById("myTooltip"); tooltip.innerHTML = "Copied: " + copyText.value; }