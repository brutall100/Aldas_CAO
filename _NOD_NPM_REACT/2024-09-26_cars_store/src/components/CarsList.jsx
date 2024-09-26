import './CarsList.css';

const CarsList = ({ cars }) => {
  return (
    <section className="cars-list-container">
      <h2 className="cars-list-title">Automobilių Sąrašas</h2>
      <div className="cars-list">
        {cars.map((car, index) => (
          <article key={index} className="car-item">
            <header className="car-header">
              <h3 className="car-heading">{car.brand} - {car.model}</h3>
              <p className="base-price">Bazinė kaina: <span>€{car.basePrice}</span></p>
            </header>
            
            <section className="additional-services">
              <h4>Papildomos paslaugos:</h4>
              <ul>
                <li>Variklio tipas: {car.engineType} <span>+€{car.additionalCost}</span></li>
                <li>Spalva: {car.color} <span>+€{car.colorCost}</span></li>
              </ul>
              <p className="total-additional">Viso už papildomas paslaugas: <span>+€{car.additionalCost + car.colorCost}</span></p>
            </section>
            
            <section className="discounts">
              <h4>Nuolaidos:</h4>
              <ul>
                <li>Kilometražas: <span>-€{car.kmDiscountAmount}</span></li>
                <li>Spec nuolaida: <span>-€{car.formDiscountAmount}</span></li>
              </ul>
              <p className="total-discount">Visa nuolaida: <span>-€{car.kmDiscountAmount + car.formDiscountAmount}</span></p>
            </section>

            <section className="final-price">
              <p>Galutinė kaina be PVM: <span>€{car.finalPrice}</span></p>
              <p>PVM (21%): <span>€{car.VAT}</span></p>
              <p className="final-price-vat">Galutinė kaina su PVM: <span>€{car.finalPriceWithVAT}</span></p>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CarsList;






