import { MainHomeTemplate } from './HomeTemplateStyles'

import { BannerHome } from '../organisms'

/**
 * Template para la página de inicio.
 * 
 * Este componente define la estructura principal para la página de inicio
 * de la aplicación de inventario.
 * 
 * @returns {JSX.Element} Plantilla para la página de inicio
 */
const HomeTemplate: React.FC = () => {
  return (
    <MainHomeTemplate>
      <BannerHome />
    </MainHomeTemplate>
  )
}

export default HomeTemplate
