import "./Player.css";
export default function Player({ title, score, current, active }) {
  // Destructurin props en los argumentos de la funcion
  //console.log(props);

  const classCSS = ["player"];
  if (active) classCSS.push("player--active");
  if (score >= 100) classCSS.push("player--winner");

  return (
    <section className={classCSS.join(" ")}>
      <h2 className="name">{title}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{current}</p>
      </div>
    </section>
  );
}
