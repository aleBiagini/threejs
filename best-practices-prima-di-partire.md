### Imposta la scala della tua unità di misura
Quando si vanno a creare e spostare blocchi, si va ad unsare un unità (1) senza specifiche su cosa sia. è importante darsi delle regole per corstruire un mondo omogeneo.
### Imposta il pixel ratio massimo, all'initerno di un window resize
window.addEventListener("resize", ()=> {
    console.log("resizes");
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})