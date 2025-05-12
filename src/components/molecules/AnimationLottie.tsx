import Lottie from 'react-lottie'
import styled from 'styled-components'

/**
 * Propiedades para el componente AnimationLottie.
 *
 * @property {string} width - Ancho del área donde se renderiza la animación.
 * @property {string} height - Alto del área donde se renderiza la animación.
 * @property {any} animation - Objeto de animación Lottie a renderizar.
 */
interface AnimationLottieProps {
  width: string
  height: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animation: any
}

const AnimationLottieContainer = styled.div``

/**
 * Componente AnimationLottie
 *
 * Renderiza una animación Lottie utilizando las propiedades proporcionadas.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.width - Ancho de la animación en píxeles.
 * @param {string} props.height - Alto de la animación en píxeles.
 * @param {any} props.animation - Objeto de datos de la animación Lottie.
 *
 * @returns {JSX.Element} Un contenedor con la animación Lottie renderizada.
 */
const AnimationLottie: React.FC<AnimationLottieProps> = ({
  width,
  height,
  animation,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  }

  return (
    <AnimationLottieContainer>
      <Lottie
        options={defaultOptions}
        height={`${height}px`}
        width={`${width}px`}
        isClickToPauseDisabled
      />
    </AnimationLottieContainer>
  )
}

export default AnimationLottie
