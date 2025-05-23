import { investments } from './data.js';
import { InvestmentCard } from './components/InvestmentCard.js';
 
const investmentsGrid = document.querySelector('.investments');
 
investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');



function tratarEvento() {
  alert('Eita mofi, aperte não')
}
window.tratarEvento = tratarEvento