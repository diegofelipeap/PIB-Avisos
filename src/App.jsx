import DayCard from "./components/DayCard";
import styled from "styled-components";

const AppContainer = styled.div`
    background-color: #fff;
    color: #4b3832; // tom de café
    padding: 2rem;
    text-align: center;
`;

// Dados dos dias e eventos >>> QUINTA-FEIRA, ARRAY VAZIO = "sem eventos" no retorno.
const weeklyEvents = [
  {
    day: "Segunda-feira",
    events: [{ name: "PGO", time: "19:00", location: "Casa do irmão Ryann" }]
  },
  {
    day: "Terça-feira",
    events: [{ name: "PGM", time: "19:30", location: "Casa do irmão Ryann" }]
  },
  {
    day: "Quarta-feira",
    events: [{ name: "Culto de Oração e Doutrina", time: "19:30", location: "PIB Penedo" }]
  },

  { 
    day: "Quinta-feira",
    events: []
  },
  {
    day: "Sexta-feira",
    events: [{ name: "Grupo de Louvor, ensaio", time: "19:30", location: "PIB Penedo" }]
  },
  {
    day: "Sábado",
    events: [{ name: "Evangelismo", time: "16:00", location: "Praça 12 de Abril" },
    { name: "Evangelismo", time: "20:30", location: "PIB Penedo" },
    ]
  },
  {
    day: "Domingo",
    events: [
      { name: "Escola Dominical", time: "09:00", location:"PIB Penedo" },
      { name: "Culto de Celebração", time: "19:00", location: "PIB Penedo" }
    ]
  },
];

function App() {
  return (
    <AppContainer>
      <h1>PIB Avisos ⛪</h1>
      <div className="days-container">
        {weeklyEvents.map(({ day, events }) => (
          <DayCard key={day} day={day} events={events} />
        ))}
      </div>
    </AppContainer>
  );
}

export default App;
