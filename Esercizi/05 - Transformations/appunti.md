# Position
Position si occupa di piazzare un punto nello spazio 3D.

Il costruttore della classe position viene invocato passandogli tre valori: x y z.
X-> asse orizzontale. Il +1 manda a dx rispetto ad una telecamera posizionata di default
Y-> asse verticale Il +1 manda in alto rispetto ad una telecamera posizionata di default
Z-> asse della profondità, avvicina l'oggetto ad una telecamera posizionata di default

Possiamo settare la position di un oggetto3D con il metodo .set();

# Scale
Position si occupa di determinare la scala di un punto nello spazio 3D.

Il costruttore della classe Scale viene invocato passandogli tre valori: x y z.
X-> asse orizzontale. Il +1 allarga a dx rispetto ad una telecamera posizionata di default
Y-> asse verticale Il +1 allarga in alto rispetto ad una telecamera posizionata di default
Z-> asse della profondità, allarga l'oggetto verso una telecamera posizionata di default

Possiamo settare la Scale di un oggetto3D con il metodo .set();

# Rotation
Rotation si occupa di determinare la rotazione di un punto nello spazio 3D.

Rotation e Quaternion sono correlati: modificare uno modificherà l'altro.

Il costruttore della classe Rotation viene invocato passandogli tre valori: x y z.
X-> asse orizzontale. Il +1 ruota verso dx rispetto ad una telecamera posizionata di default
Y-> asse verticale Il +1 ruota verso l' alto rispetto ad una telecamera posizionata di default
Z-> asse della profondità, ruota l'oggetto verso una telecamera posizionata di default

Possiamo settare la Rotation di un oggetto3D con il metodo .set();

Gli oggetti possono ruotare su una o più assi contemporanemente.
Tuttavia, così facendo, si rischia di incappare in degli errori logici. Supponendo di partire da un momento neutro, con:
- x = 0
- y = 0
- z = 0
- t(tempo) = 0
Io inizio a ruotare sull'asse x il mio oggetto 3d, fino a t = 1.
Quando t = 1 il valore di y è cambiato, perchè l'oggetto ha ruotato.
Di conseguenza, la rotazione sull'asse y non sarà quella che avevo previsto in t = 0.

A volte, a causa di questo scompenso nelle rotazioni, si può avere una situazione di stallo, chiamata Gimbal lock, nella quale un'asse rimane bloccata.

Per fare sì che gli oggetti(compresa la telecamera) si muovano come intendiamo noi, si può chiamare, prima delle istruzioni di rotazione, il metodo
`object.rotation.reorder()`, passandogli come parametri una stringa dell'ordine in cui vogliamo si risolvano le rotazioni delle assi ( ad esempio, "YZX").

Per risolvere questa problematica, sono stati inventati i Quaternion.

# Quaternion
Il Quaternion è una rappresentazione matematica della rotazione, interconnessa con la Rotation.
Solitamente si usa questo quando si vuole ruotare un oggetto 3D.

# Vettori
I Vettori sono classi che gestiscono dei punti in uno spazio tridimensionale.
Position e Scale ereditano da Vector3, di conseguenza sono dei vettori: il loro scopo è gestire un punto nello spazio 3d.

Possiamo, attraverso vari metodi, ottenere informazioni spaziali sui nostri vettori.

# Euleri
Gli Euleri sono classi che gestiscono la rotazione di punti nello spazio 3D.
Rotation eredita da Euler, potendo così ruotare il punto nello spazio 3D.

Possiamo, attraverso vari metodi, ottenere informazioni spaziali sui nostri vettori.

## Il concetto di unità per i Vector
Possiamo pensare alle unità come preferiamo: 1 blocco, 1 mattone, 1 palazzo, 1 centimetro, 1 metro. Dipende tutto da quello che stiamo costruendo, e dalla scala che adottiamo.

## Il concetto di unità per gli Euleri
Per quanto riguarda gli Euleri, l'unità di misura è espressa in Radianti. Su google si trova come convertire da gradi a radianti.
Per girare di 180° un oggetto 3D si dovrà utilizzare pigreco.

# Un aiuto per visualizzare gli assi sul piano 3d
AxesHelper mostra delle linee colorate, materializzando di fatto le assi.

# Metodo lookAt
Il metodo `lookAt()` ruota l'oggetto in modo tale che le sue faccie `-z` puntino al `Vector3` che gli abbiamo indicato.
In pratica, è un modo comodo per far guardare un oggetto in un determinato punto.

# Gruppi
Possiamo raggruppare all'interno di uno stesso contenitore uno o più oggetti 3d. Facendolo, possiamo raggrupparli logicamente e spostarli tutti assieme. Ad esempio, una casa avrà tutti i blocchi logici all'interno dello stesso gruppo, e a sua volta sarà suddivisa in fondamenta, piano terra, primo piano etc