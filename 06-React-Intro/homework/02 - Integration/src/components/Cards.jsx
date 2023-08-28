import Card from './Card';

export default function Cards({characters}) {
   return (
   <div>
      {characters.map(element => {
      return (
      <Card
      key={element.id}
      image={element.image}
      id={element.id}
      name={element.name}
      status={element.status}
      species={element.species}
      gender={element.gender}
      onClose={() => window.alert("Emulamos que se cierra la card")}
      origin={element.origin.name}
            />)
})}
   </div>
   )
}
