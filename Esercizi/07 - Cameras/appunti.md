# Telecamere
`Camera` è una classe astratta. Tutte le telecamere di ThreeJs ereditano da questa.
`ArrayCamera` è una telecamera che permette di avere più punti di vista della stessa scena contemporaneamente. Di conseguenza potrà essere utile in giochi dove ci sono delle telecamere, come metal gear solid ad esempio, oppure nei multiplayer quando si gioca con lo stesso schermo.
`StereoCamera` è usata per creare gli effetti stile VR, oppure per gli occhiali 3D
`CubeCamera` è un cubo che riflette l'ambiente intorno a sè su ogni faccia.
`OrthoGraphicCamera` renderizza la scena ma senza prospettiva, stile Age of Empire
`PerspectiveCamera` renderizza la scena con una prospettiva classica

## Perspective Camera
- La perspective camera ha come primo parametro il FOV( field of view ), espresso in gradi. Il FOV si apre in verticale. Un giusto range per il FOV è 45/75. Bisogna regolarsi in base alla necessità.
- Il secondo parametro è il ratio. Il ratio si ottiene dal rapporto di x/y.
- Il terzo parametro è `near`. Tutti gli oggetti che hanno un vettore position **minore**, non verranno mostrati. Usare 0.1 per avere un render del cubo da vicino senza che scompaia.
- Il quarto parametro è `far`. Tutti gli oggetti che hanno un vettore position **maggiore**, non verranno mostrati.
Usare 100 per avere un render degli oggetti abbastanza distanti. Chiaramente, si può ri-tarare per casi specifici.

Nota bene: non usare parametri estremi (0.00001 e 999999) altrimenti gli z-index degli oggetti cominceranno a compenetrarsi. 
## OrthoGraphic Camera
La telecamera ortografica disegna un rettangolo usando i parametri left, right, top e bottom
- left indica dove si troverà la x del lato sinistro
- right indica dove si troverà la x del lato destro
- top indica dove si troverà la y del lato superiore
- bottom indica dove si troverà la x del lato inferiore

Dato che la camera ortografica non rispetta le proporzioni della prospettiva, un elemento distante sarà grande tanto quanto lo stesso elemento più vicino.

Per risolvere questo problema di deformazione, dobbiamo moltiplicare i parametri left e right per il nostro `aspectRatio`(x/y)

# Muovere la telecamera
Per muovere la telecamera ci affidiamo all'eventlistener mousemove.

Con il mousemove abbiamo in tempo reale la posizione del nostro mouse: sia la x che la y.

Per evitare di fare calcoli complessi quando andiamo a capire dove si trova il nostro cursore, possiamo ridurre in un range 0-1 la nostra problematica: dividendo la x del nostro cursore per la width del nostro canvas, abbiamo un numero che tende a 0 quando andiamo verso sinistra ed un numero che tende ad 1 quando andiamo verso destra.
Sottraiamo -0.5 a questo rapporto per avere dei numeri positivi e dei numeri negativi.

`cursor.x = (event.clientX / sizes.width) - 0.5;`

Così facendo potremmo immediatamente capire quanto il nostro cursore sia distante dal centro della scena inquadrata dalla telecamera.

Per aggiornare la posizione della telecamera, dobbiamo inserire il comando all'interno del nsotro loop.

`camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;`
`camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;`
`camera.position.y = cursor.y * 5;`

# Altri modi di muovere la telecamera
Per muovere la telecamera, threejs ha molti controls built in. Basta andare su threejs e digitare `controls`