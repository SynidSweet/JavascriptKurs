
var bytt = 0;

function KnappTryck() {
    CatMe();
}

async function CatMe() {

    var catURL = "https://cataas.com/cat?" + Date.now();
    const blob = await imageToBlob(catURL);

    document.getElementById("bild").src = URL.createObjectURL(blob);
    bytt++;

    const item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]);

    SättPåSida("Vi har nu bytt katt " + bytt + " gånger.");
}

function SättPåSida(värde) {
    document.getElementById("paragraf").innerText = värde;
    document.title = värde;
}

function imageToBlob(imageURL) {

    const img = new Image;
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");

    img.crossOrigin = "";
    img.src = imageURL;

    return new Promise(resolve => {
        img.onload = function () {

            c.width = this.naturalWidth;
            c.height = this.naturalHeight;
            ctx.drawImage(this, 0, 0);

            c.toBlob((blob) => {
            resolve(blob)
            }, "image/png", 0.75);
        };})
}

