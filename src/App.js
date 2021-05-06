
import './App.css';
import TicketWizard from './components/TicketWizard/TicketWizard'
import { steps, defaultData } from './data/data'

export default function App() {
  return (
    <>
      <main>
        <TicketWizard {...{steps, defaultData}}/>
      </main>
    </>
  );
}
