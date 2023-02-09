import { AiFillNotification } from "react-icons/ai";

export default function ListarFrases(props) {
  var cond1 = false;
  var newTexto = [];
  props.texto.forEach((ele1) => {
    ele1.forEach((ele2) => newTexto.push([ele2.txt_ingles, ele2.txt_espanhol]));
  });

  const hablar = (texting) => {
    let navegador = navigator.userAgent;
    if (navegador.toLowerCase().indexOf("android") > 0) {
      alert("no compatible con Android");
    } else {
      const synth = window.speechSynthesis;
      const speech = new SpeechSynthesisUtterance(texting);
      const voices = synth.getVoices();
      const elejido = voices.find((ele) => ele.name.indexOf("en-US") > -1);

      console.log(" elegido ", elejido);

      speech.voice = elejido;
      speechSynthesis.speak(speech);
    }
  };

  if (cond1) {
    return (
      <>
        {props.texto.forEach((ele1) =>
          ele1.forEach((ele2) => console.log(ele2.txt_ingles))
        )}{" "}
      </>
    );
  } else {
    return (
      <>
        {newTexto.map((ele, ind) => (
          <div className="card bg-light">
            <div key={"cb-" + ind} className="card-body">
              <h5 key={"h5-" + ind} className="card-title text-primary">
                <AiFillNotification onClick={() => hablar(ele[0])} /> {ele[0]}
              </h5>
              <p className="card-text text-info">{ele[1]}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}
