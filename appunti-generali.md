### Shader:
insieme di istruzioni(algoritmi) che descrivono come la luce va a colpire un determinato oggetto 3d virtuale. Di conseguenza, gli shader determinano l'apparenza di un determinato oggetto 3d.

### Mesh 
si ottiene combinando una figura geometrica con un "materiale", il quale si occupa di curare l'apparenza della figura (how it looks). Dall'interno del mesh, non si vede il mesh stesso: infatti il motore renderizza solo un lato del triangolo.

### Camera 
è il punto di vista dell'osservatore. La scena può esistere senza camera ma non potrà essere vista da nessuno. Ci sono tipi differenti di camera. Si deve sempre impostare il position(x,y,z) rotation e scale della camera, altrimenti la camera verrà messa al centro della scena.

### Renderer
è il motore che disegna sulla tela (canvas) in base alle istruzioni da noi fornite.
Quando diamo il comando di render, tutte le nostre istruzioni vengono applicate. Istruzioni piazzate dopo il render non avranno effetto.

### Bundler
è uno strumento a cui si da in input una serie di file (html, css, js, scss, ts, immagini etc), ottenendo in cambio un pacchetto(bundle) ottimizzato per il web.
Inoltre, possiamo inserirci all'interno del processo di bundling (pipeline) per eseguire ottimizzazioni, rendere il nostro codice compatibile con browser puiù vecchi, aggiungere supporto per i moduli, importare codice da librerie, pubblicare il nostro codice(deploy).
Tutte queste azioni, eseguite senza bundler, sono lunghe e complesse. Ci affidiamo a questo strumento per renderle più semplici e poterci concentrare sulla risoluzione di problemi non strutturali.
Perchè webpack
Usiamo webpack perchè è il più popolare, rodato, ha una buona community dietro ed è mantenuto. Di contro, la curva di apprendimento per l'uso/configurazione è abbastanza ripida all'inizio.

