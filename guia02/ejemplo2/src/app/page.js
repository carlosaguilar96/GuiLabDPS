import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Equipos = ({equipos}) => {
  return (
    <div className={styles.container_list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container_list} key={jugador.id}>
                <div class="row">
                  <div class="col-4">
                    <img src={jugador.imagen} class="img-fluid"/>
                  </div>
                  <div class="col-8">
                    <strong>{jugador.nombre}</strong>
                    <p>Altura: {jugador.Altura}m<br></br>Peso: {jugador.Peso}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData=[
    {
      "id":1,"nombre":"Real Madrid",
      "plantilla":[
        {"id": 1,"nombre":"Jude Bellingham","Altura":"1.86","Peso":"75Kg", "imagen":"img/BELLINGHAM.jpg"},
        {"id": 2,"nombre":"Luka Modrić","Altura":"1.72","Peso":"66Kg", "imagen":"img/MODRIC.jpg"},
        {"id": 3,"nombre":"Kylian Mbappé","Altura":"1.78","Peso":"75Kg", "imagen":"img/MBAPPE.jpg"}
      ]
    },
    {"id": 2,
      "nombre": "Barcelona",
      "plantilla":[
      {"id": 1,"nombre":"Frenkie de Jong","Altura":"1.81","Peso":"74Kg", "imagen":"img/FRENKIE_DE_JONG.jpg"},
      {"id": 2,"nombre":"Robert Lewandowski","Altura":"1.85","Peso":"81Kg", "imagen":"img/LEWANDOWSKI.jpg"},
      {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg", "imagen":"img/GAVI.jpg"}
      ]}
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData}/>
      </div>
    </main>
  );
}