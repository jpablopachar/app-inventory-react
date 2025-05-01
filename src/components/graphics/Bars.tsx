import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { JSX } from 'react'
import { Bar } from 'react-chartjs-2'

import { BarsContainer, ContentCards } from './BarsStyles'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

/**
 * Propiedades para el componente Bars.
 *
 * @property {object} graphicData - Datos formateados para el gráfico de barras ChartJS
 * @property {Array<{icon: JSX.Element, description: string, total: number | string}>} data
 * - Arreglo de datos a mostrar en la lista
 * @property {string} titulo - Título que describe los datos mostrados
 */
interface BarsProps {
  graphicData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
    }[]
  }
  data: {
    icon: JSX.Element
    description: string
    total: number | string
  }[]
  title: string
}

/**
 * Componente que muestra un gráfico de barras junto con una lista detallada de los valores.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.graphicData - Datos formateados para el gráfico de barras
 * @param {Array} props.data - Datos para mostrar en la lista de elementos
 * @param {string} props.title - Título descriptivo para la sección de datos
 *
 * @returns {JSX.Element} Un componente con visualización gráfica y listado detallado de datos
 */
const Bars: React.FC<BarsProps> = ({ graphicData, data, title }) => {
  const style = {
    width: '400px',
  }

  return (
    <BarsContainer>
      <section>
        <Bar data={graphicData} style={style} />
      </section>
      <section>
        <h2>
          {title}
          {' '}
          por categoría
        </h2>
        {data.map((item, index) => (
          <ContentCards key={index}>
            <div className="contentDescripcion">
              <span>{item.icon}</span>
              <span className="description">{item.description}</span>
            </div>
            <span>{item.total}</span>
          </ContentCards>
        ))}
      </section>
    </BarsContainer>
  )
}

export default Bars
