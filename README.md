# Introduzione a HTML, CSS e JavaScript

## Cos'è l'HTML
HTML, o **HyperText Markup Language**, è il linguaggio utilizzato per creare la struttura delle pagine web. Funziona tramite dei "tag" che definiscono diversi elementi del contenuto.

### Concetti Base dell'HTML
- **HTML come linguaggio di markup**: L'HTML è composto da "tag" che racchiudono il contenuto e ne definiscono il significato e la struttura.
- **Tag principali**:
  - `<html>`: il contenitore principale che racchiude l'intero documento.
  - `<head>`: contiene le informazioni sulla pagina, come il titolo e i link ai fogli di stile.
  - `<body>`: la parte visibile all'utente, dove sono inseriti testi, immagini, link, ecc.

### Creazione di una Pagina HTML di Base
```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Mia Prima Pagina Web</title>
</head>
<body>
    <h1>Benvenuto sulla mia prima pagina HTML!</h1>
    <p>Questa è una breve introduzione all'HTML.</p>
</body>
</html>
```

- **Visualizzazione nel Browser**: Una volta scritto il codice HTML in un editor (come Visual Studio Code), puoi visualizzarlo aprendo il file in un browser.

### Charset e Meta Tag
- **Charset UTF-8**: Permette di visualizzare correttamente i caratteri accentati e simboli speciali.
- **Meta Tag `viewport`**: Adatta la larghezza della pagina al dispositivo in uso, utile per creare pagine responsive.

## Cos'è il CSS
CSS, o **Cascading Style Sheets**, è un linguaggio per aggiungere stili alla tua pagina HTML. Permette di modificare l'aspetto degli elementi come colori, dimensioni dei testi, spaziatura e altro.

### Collegamento di un Foglio di Stile CSS
Per aggiungere il CSS al tuo documento HTML:
```html
<link rel="stylesheet" href="stile.css">
```

### Applicare Stili CSS
Puoi applicare stili agli elementi utilizzando il tag selezionato, classi e ID.

#### Esempio di stile di base
Nel file `stile.css`:
```css
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}

p {
    color: #666;
}
```

### ID e Classi
- **ID**: Un identificatore unico per un singolo elemento. Si usa il simbolo `#`.
- **Classe**: Assegnabile a più elementi. Si usa il simbolo `.`.
  
#### Esempio di selettori
```html
<p id="speciale">Questo è un paragrafo speciale</p>
<p class="comune">Questo è un paragrafo comune</p>
```

Nel CSS:
```css
#speciale {
    color: blue;
}

.comune {
    color: green;
}
```

### Debugging del CSS
Utilizza la console del browser (F12) per vedere come vengono applicati gli stili e risolvere eventuali problemi.

## Cos'è JavaScript
JavaScript è un linguaggio di scripting che permette di rendere le pagine web interattive.

### Concetti Base di JavaScript
- **Variabili**: Memorizzano valori. Esempio:
  ```javascript
  let nome = "Leonardo";
  const eta = 20;
  ```
- **Funzioni**: Blocchi di codice che eseguono azioni.
  ```javascript
  function saluto() {
      alert("Ciao, " + nome + "!");
  }
  ```

### Manipolazione del DOM
Il **DOM (Document Object Model)** consente a JavaScript di manipolare la struttura HTML.

#### Selezionare e Modificare Elementi
```javascript
document.getElementById("speciale").style.color = "red";
```

### Eventi e Funzioni
JavaScript può ascoltare eventi come `click`, `mouseover`, `keydown`, ecc.

#### Esempio di Evento `click`
```javascript
document.getElementById("bottone").addEventListener("click", function() {
    alert("Hai cliccato il bottone!");
});
```

### Cicli e Condizioni
I cicli e le condizioni permettono di eseguire azioni ripetute o in base a criteri specifici.

#### Condizioni
```javascript
if (eta >= 18) {
    console.log("Sei maggiorenne.");
} else {
    console.log("Sei minorenne.");
}
```

#### Ciclo `for`
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Numero: " + i);
}
```

## Pubblicazione su GitHub
### Inizializzare un Repository
In Visual Studio Code:
1. Crea un nuovo repository.
2. Aggiungi il file con `git add .`
3. Fai commit e push per aggiornare il codice online.

### Commit e Push
Fai commit regolari con messaggi chiari:
```bash
git commit -m "Aggiunta della funzione di saluto"
git push
```

## Compiti per Pratica

1. **Studiare** i concetti su W3Schools (HTML, CSS, JavaScript).
2. **Fare Esercizi** per consolidare le conoscenze.
3. **Creare un Repository su GitHub** per il progetto di esempio.
4. **Pubblicare il codice** su GitHub per una revisione.