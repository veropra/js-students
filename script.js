/*Creo un oggetto che descrive uno studente con le proprietà : nome, cognome, età.*/

var studente = {
    "nome": " ",
    "cognome" : " ",
    "età": " "
  };

/*Stampo a schermo attraverso il for in tutte le proprietà*/
for (var field in studente) {
console.log(field);
}

/*Creo un array di oggetti di studenti e faccio ciclare su tutti gli studenti*/
var elenco_studenti = [
  {
    "nome": "Stefano",
    "cognome" : "Bianchi",
    "età": 20
  },
  {
    "nome": "Mattia",
    "cognome" : "Mastroianni",
    "età": 31
  },
  {
    "nome": "Ilaria",
    "cognome" : "Betti",
    "età": 19
  },
]

/*ciclo tutti gli studenti e stampo per ognuno solo le proprietà nome e cognome*/
for (var i=0; i<elenco_studenti.length; i++) {
  if (elenco_studenti[i].nome && elenco_studenti[i].cognome) {
    console.log(elenco_studenti[i].nome + ' ' + elenco_studenti[i].cognome);
  }
}

/*Chiedo all'utente di aggiungere un nuovo oggetto studente inserendo nell'ordine:
nome,cognome ed età*/
var nuovo_studente = studente;

nuovo_studente.nome = prompt ("Inserisci il nome dello studente");
nuovo_studente.cognome = prompt ("Inserisci il cognome dello studente");
nuovo_studente.età = prompt ("Inserisci l'età dello studente");

elenco_studenti.push(nuovo_studente);

console.log(elenco_studenti[i]);
