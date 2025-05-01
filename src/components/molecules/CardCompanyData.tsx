import { CardCompanyDataContainer } from './CardCompanyDataStyles'

/**
 * Propiedades para el componente CardCompanyData.
 *
 * @property {string} title - Título o etiqueta que describe el dato de la empresa.
 * @property {string | number} value - Valor asociado al título, puede ser texto o número.
 * @property {string} [img] - (Opcional) URL de la imagen representativa del dato.
 */
interface CardCompanyDataProps {
  title: string
  value: string | number
  img?: string
}

/**
 * Componente CardCompanyData
 *
 * Muestra una tarjeta con información de la empresa, incluyendo un título, un valor y una imagen
 * opcional.
 *
 * @component
 * @param {CardCompanyDataProps} props - Propiedades del componente.
 * @param {string} props.title - Título o nombre del dato de la empresa a mostrar.
 * @param {string | number} props.value - Valor asociado al título, puede ser texto o número.
 * @param {string} [props.img] - URL de la imagen opcional que se mostrará junto al valor.
 *
 * @returns {JSX.Element} Un componente visual que presenta los datos de la empresa en formato de
 * tarjeta.
 */
const CardCompanyData: React.FC<CardCompanyDataProps> = ({
  title,
  value,
  img,
}) => {
  return (
    <CardCompanyDataContainer>
      <div className="card">
        <div className="pricing-block-content">
          <p className="pricing-plan">{title}</p>
          <div
            className="price-value"
            data-currency="$ USD"
            data-currency-simple="USD"
          >
            <p className="price-number">{value}</p>
            {img && <img src={img} />}
          </div>
        </div>
      </div>
    </CardCompanyDataContainer>
  )
}

export default CardCompanyData
