import { Link } from 'react-router-dom'

import { ConfigurationTemplateContainer } from './ConfigurationTemplateStyles'

import { Message } from '../molecules'

import { DataConfiguration } from '@/utils'

/**
 * Componente de plantilla para la sección de configuración.
 *
 * Renderiza una lista de tarjetas de configuración utilizando los datos de `DataConfiguration`.
 * Cada tarjeta puede estar habilitada o deshabilitada según el estado de cada elemento.
 * Si la tarjeta está deshabilitada, el enlace no es navegable y se aplica una clase especial.
 * Incluye un mensaje visual, un ícono, título y subtítulo para cada opción de configuración.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la plantilla de configuración.
 */
const ConfigurationTemplate: React.FC = () => {
  return (
    <ConfigurationTemplateContainer>
      <div id="cards">
        {DataConfiguration.map((item, index) => {
          return (
            <Link
              to={item.state ? item.link : ''}
              className={item.state ? 'card' : 'card false'}
              key={index}
            >
              <Message state={item.state!} />
              <div className="card-content">
                <div className="card-image">
                  <img src={item.icon} />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <i className="fa-duotone fa-unicorn"></i>
                    <div className="card-info-title">
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </ConfigurationTemplateContainer>
  )
}

export default ConfigurationTemplate
