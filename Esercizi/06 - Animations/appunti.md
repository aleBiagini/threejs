# Animazioni
Le animazioni in js sono fatte con un meccanisimo simile allo stop-motion: muovo le cose e faccio una foto; muovo le cose e faccio una foto.
La le foto(frame) vengono fatte 60 volte al secondo.
Abbiamo bisogno di aggiornare gli oggetti e fare un render per ogni frame.
`requestAnimationFrame()` chiama una funzione specifica nel prossimo frame, che sarà appunto il nostro render.

# Funzione di loop, o TICK
Per far sì che la nostra animazione possa esistere, dobbiamo creare un loop, ossia una funzione che chiama se stessa all'infinito. Inserendo `requestAnimationFrame()` all'interno della funzione di loop abbiamo creato l'ambiente giusto per far girare la nostra animazione. Dobbiamo inserire la funzione di render all'interno del loop.

Dato la frequenza di aggiornamento dipende dalla gpu dei pc, per far sì che la nostra animazione vada ugualmente su tutti i pc, dobbiamo calcolare un delta temporale e richiamare la funzione solo quando un certo delta è raggiunto.

In alternativa, possiamo dire che la posizione di rotazione del cubo è pari al tempo trascorso dallo start dell'animazione; è necessario allora instanziare un `Clock` e richiamare `getElapsedTime()`

# Possibili animazioni
Richiamando la funzione `getElapsedTime()` all'interno di un Math.Sin(), data l'andatura del seno, avremo un effetto di animazione "fluttuante".

Combinando le due righe di codice sotto, possiamo far girare in cerchio il nostro oggetto 3d:
`mesh.position.x = Math.sin(clock.getElapsedTime());`
`mesh.position.y = Math.cos(clock.getElapsedTime());`

# Creare animazioni complesse
Per creare delle animazioni complesse, con delle timeline ben definite, è necessario usare delle librerie che ci facilitino il lavoro. Una di queste è GSAP. 
GSAP ha il suo loop interno; noi dobbiamo semplicemente chiamare il render all'interno del nostro loop e fuori dal loop il resto delle animazioni.

