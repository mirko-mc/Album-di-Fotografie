ALBUM DI FOTOGRAFIE
ESERCIZI:
    - Crea un account su Pexels per ottenere la tua API key: https://www.pexels.com/api/new/
      Troverai la tua API key passando con mouse sulla tua immagine del profilo e cliccando su "Image and videO API"
      
    - La key va inserita negli headers cosi:
            {Authorization: "LA TUA KEY"}
    
    - Esegui una fetch su questo indirizzo https: https://api.pexels.con/v1/search?query=INSERISCIQUERY
    
    - Usando Bootstrap per velocizzare il processo e mettendo in pratica nuovi metodi degli array che hai visto a lezione, crea una nuova card per ogni immagine nel risultato dell'API.