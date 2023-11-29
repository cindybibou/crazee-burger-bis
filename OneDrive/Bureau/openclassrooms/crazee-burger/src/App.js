import { useState } from "react"

function App() {
  //State(état,données): définitions de données dynamiques que l'on va projeter sur notre affichage
const [prenom, setPrenom] = useState("Arthur")
//Je définis un state que j'initialise avec la chaîne de caractère "Vi".
//Que je récupère dans une variable prénom
//Que je ne pourrais modifier que avec sa fonction dédiée setPrenom.
const [count, setCount] = useState(1)



//Comportements.On va définir de manière arbitraire ce qu'ils vont faire au niveau des instructions
//Via un évènement
const handleClick = () => {
  setCount(count + 1) //Le setter reçoit en paramètre la new valeur du state
} 



  //Affichage (Render)Eléments d'affichage sur lesquels on va brancher des comportements
return (
  <div>
    <h1>Bonjour {prenom} </h1>
    <p>{count}</p>
    <button onClick={handleClick}>Incrémenter</button>
  </div>
)
}



export default App
