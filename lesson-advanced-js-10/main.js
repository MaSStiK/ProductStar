function chooseFile() {
    const input = document.createElement("input")
    input.type = "file"
    input.onchange = event => {
        loadToPlayer(event.target.files[0])
    }
    input.click()
}

function processLink() {
    const link = document.getElementById("linkInput").value
    const player = document.getElementById("player")
    player.src = link
    player.load()
}

function setSongInfo(fileContent) {
    const mp3Tags = new MP3Tag(fileContent)
    mp3Tags.read()

    document.getElementById("song").textContent = mp3Tags.tags.title
    document.getElementById("artist").textContent = mp3Tags.tags.artist

    if (mp3Tags.tags.v2.APIC) { // Устанавливаем обложку если есть
        function bytesToBase64(bytes) {
            let binary = '';
            const len = bytes.length;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }

        const coverBytes = mp3Tags.tags.v2.APIC[0].data
        const coverUrl = "data:image/png;base64," + bytesToBase64(new Uint8Array(coverBytes));
        document.getElementById("cover").src = coverUrl
    } else { // Иначе картинка по умолчанию
        document.getElementById("cover").src = "./assets/player.png"
    }
}

function loadToPlayer(file) {
    const player = document.getElementById("player")

    const reader = new FileReader()
    reader.onload = event => {
        const content = event.target.result
        setSongInfo(content)
    }
    reader.readAsArrayBuffer(file)

    player.src = URL.createObjectURL(file)
    player.load()
}

function initDropZone() {
    const dropzone = document.getElementById("dropzone")

    dropzone.addEventListener("dragover", event => {
        event.preventDefault()
    })

    dropzone.addEventListener("dragenter", event => {
        event.preventDefault()
        dropzone.classList.add("highlight")
    })

    dropzone.addEventListener("dragleave", event => {
        event.preventDefault()
        if (!dropzone.contains(event.relatedTarget)) {
            dropzone.classList.remove("highlight");
        }
    })

    dropzone.addEventListener("drop", event => {
        event.preventDefault()
        event.stopPropagation()
        dropzone.classList.remove("highlight");

        const file = event.dataTransfer.files[0]
        loadToPlayer(file)
    })
}

window.onload = () => {
    initDropZone()
}