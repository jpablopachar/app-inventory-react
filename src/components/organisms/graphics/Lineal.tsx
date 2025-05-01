import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { JSX } from 'react'
import { Line } from 'react-chartjs-2'

import { LinealContainer, LinealContentCards } from './LinealStyles'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

/**
 * Propiedades para el componente Lineal.
 *
 * @property {object} graphicData - Datos formateados para el gráfico de línea ChartJS
 * @property {Array<{icon: JSX.Element, description: string, total: number | string}>} data
 * - Arreglo de datos a mostrar en la lista
 * @property {string} title - Título que describe los datos mostrados
 */
interface LinealProps {
  graphicData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor?: string | string[]
      borderColor?: string | string[]
      fill?: boolean
      tension?: number
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
 * Componente que muestra un gráfico de línea junto con una lista detallada de los valores.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.graphicData - Datos formateados para el gráfico de línea
 * @param {Array} props.data - Datos para mostrar en la lista de elementos
 * @param {string} props.title - Título descriptivo para la sección de datos
 *
 * @returns {JSX.Element} Un componente con visualización gráfica
 * lineal y listado detallado de datos
 */
const Lineal: React.FC<LinealProps> = ({ graphicData, data, title }) => {
  const style = {
    width: '400px',
  }

  return (
    <LinealContainer>
      <section>
        <Line data={graphicData} style={style} />
      </section>
      <section>
        <h2>
          {title}
          {' '}
          por categoría
        </h2>
        {data.map((item, index) => (
          <LinealContentCards key={index}>
            <div className="contentDescripcion">
              <span>{item.icon}</span>
              <span className="description">{item.description}</span>
            </div>
            <span>{item.total}</span>
          </LinealContentCards>
        ))}
      </section>
    </LinealContainer>
  )
}

export default Lineal
