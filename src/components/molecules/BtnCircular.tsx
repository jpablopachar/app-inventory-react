import { BtnCircularContainer } from './BtnCircularStyles'

/**
 * Propiedades para el componente BtnCircular.
 *
 * @property {React.ReactNode} icon - Nombre o identificador del icono a mostrar en el botón.
 * @property {string} width - Ancho del botón (por ejemplo, '40px', '2rem').
 * @property {string} height - Alto del botón (por ejemplo, '40px', '2rem').
 * @property {string} bgColor - Color de fondo del botón (puede ser
 * un valor hexadecimal, nombre de color, etc.).
 * @property {string} textColor - Color del icono o texto dentro del botón.
 * @property {string} fontSize - Tamaño de fuente del icono o texto (por ejemplo, '1.5rem').
 * @property {string} translateX - Valor de transformación horizontal (por ejemplo, '10px', '50%').
 * @property {string} translateY - Valor de transformación vertical (por ejemplo, '10px', '50%').
 */
interface BtnCircularProps {
  icon: React.ReactNode
  width: string
  height: string
  bgColor: string
  textColor: string
  fontSize: string
  translateX: string
  translateY: string
}

/**
 * Componente de botón circular reutilizable.
 *
 * Este componente renderiza un botón circular que puede personalizarse mediante varias propiedades,
 * incluyendo el icono, dimensiones, colores, tamaño de fuente y transformaciones de posición.
 *
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.icon - Icono o contenido a mostrar dentro del botón.
 * @param {string | number} props.width - Ancho del botón.
 * @param {string | number} props.height - Alto del botón.
 * @param {string} props.bgColor - Color de fondo del botón.
 * @param {string} props.textColor - Color del texto o icono dentro del botón.
 * @param {string | number} props.fontSize - Tamaño de fuente del contenido.
 * @param {string | number} props.translateX - Desplazamiento horizontal (transformación X).
 * @param {string | number} props.translateY - Desplazamiento vertical (transformación Y).
 *
 * @returns {JSX.Element} Un botón circular personalizado.
 */
const BtnCircular: React.FC<BtnCircularProps> = ({
  icon,
  width,
  height,
  bgColor,
  textColor,
  fontSize,
  translateX,
  translateY,
}) => {
  return (
    <BtnCircularContainer
      $bgColor={bgColor}
      width={width}
      height={height}
      $translateX={translateX}
      $translateY={translateY}
      $fontSize={fontSize}
      $textColor={textColor}
    >
      <span>{icon}</span>
    </BtnCircularContainer>
  )
}

export default BtnCircular
