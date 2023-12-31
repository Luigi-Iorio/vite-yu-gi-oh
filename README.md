# Vite Yu-Gi-Oh

### Parte 1

### Introduzione

Questo progetto è stato creato utilizzando Vite, Vue e Sass. Gli obiettivi di questa repo sono:

- Replicare un layout basato su uno screenshot fornito
- Popolare dinamicamente i vari elementi della pagina web

### Descrizione

Nel processo di caricamento della pagina, viene effettuata una chiamata AJAX all'[API](https://db.ygoprodeck.com/api/v7/cardinfo.php) contente informazioni sulle carte di Yu Gi Oh. I dati restituiti vengono utilizzati per generare dinamicamente le card in pagina.

### Nota

_(Per evitare attese e/o rallentamenti nelle richieste, è stato diminuito il numero di risultati sfruttando i parametri num e offset)_

_num(15): Per ottenere 15 carte, offsset(0): Per inziare ad ottenere le carte dalla posizione 0_

### Layout di riferimento

![Design di riferimento](src/assets/img/Screenshot.png)

### Parte 2

### Intoduzione

In questa seconda parte dell'esercizio è stata aggiunta una nuova funzionalità che consente agli utenti di filtrare i risultati tramite una select in base all'archetipo delle carte.

### Descrizione

Per implementare questa funzione, le opzioni di questa select vengono popolate in modo dinamico attraverso una chiamata all'endpoint dell'API fornito: [https://db.ygoprodeck.com/api/v7/archetypes.php](https://db.ygoprodeck.com/api/v7/archetypes.php).

Quando un utente seleziona un valore dalla lista, viene effettuata una chiamata all'[API](https://db.ygoprodeck.com/api/v7/cardinfo.php) (dati Yu-Gi-Oh) utilizzando l'archetipo selezionato come parametro, in questo modo vengono visualizzate solo le carte appartenenti all'archetipo desiderato.

### Nota

_Per avere un numero di carte più ampio anche dopo il filtro tramite la select, il parametro num è stato aumentato a 100_
