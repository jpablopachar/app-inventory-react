import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { JSX } from 'react'
import { Doughnut } from 'react-chartjs-2'

import { DonutContainer, DonutContentCards } from './DonutStyles'

ChartJS.register(ArcElement, Tooltip, Legend)

/**
 * Propiedades para el componente Donut.
 *
 * @property {object} graphicData - Datos formateados para el gráfico de dona ChartJS
 * @property {Array<{icon: JSX.Element, description: string, total: number | string}>} data
 * - Arreglo de datos a mostrar en la lista
 * @property {string} title - Título que describe los datos mostrados
 */
interface DonutProps {
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
 * Componente que muestra un gráfico de dona junto con una lista detallada de los valores.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.graphicData - Datos formateados para el gráfico de dona
 * @param {Array} props.data - Datos para mostrar en la lista de elementos
 * @param {string} props.title - Título descriptivo para la sección de datos
 *
 * @returns {JSX.Element} Un componente con visualización gráfica
 * circular y listado detallado de datos
 */
const Donut: React.FC<DonutProps> = ({ graphicData, data, title }) => {
  const style = {
    width: '400px',
  }

  return (
    <DonutContainer>
      <section>
        <Doughnut data={graphicData} style={style} />
      </section>
      <section>
        <h2>
          {title}
          {' '}
          por categoría
        </h2>
        {data.map((item, index) => (
          <DonutContentCards key={index}>
            <div className="contentDescripcion">
              <span>{item.icon}</span>
              <span className="description">{item.description}</span>
            </div>
            <span>{item.total}</span>
          </DonutContentCards>
        ))}
      </section>
    </DonutContainer>
  )
}

export default Donut
