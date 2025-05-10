/**
 * Propiedades para el componente BrandTemplate.
 * 
 * @property {any} data - Datos asociados a la plantilla de marca.
 * El tipo puede ser especificado según la estructura de los datos utilizados.
 */
interface BrandTemplateProps {
  data: any
}

const BrandTemplate: React.FC<BrandTemplateProps> = ({ data }) => {
  return (
    <div>BrandTemplate</div>
  )
}

export default BrandTemplate
