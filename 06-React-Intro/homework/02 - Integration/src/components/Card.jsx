export default function Card({onClose, name, status, species, gender, origin, image}) {
   return (
      <div>
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <button onClick={onClose}>X</button>
         <img src={image} alt={name} /> 
      </div>
   );
}

