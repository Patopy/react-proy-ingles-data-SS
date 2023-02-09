import ListarFrases from "./ListarFrases";

export default function Home(props) {
  return (
    <div>
      <h2>Frases en Ingles</h2>
      <ListarFrases texto={props.texto} />
    </div>
  );
}
