import { HashLoader } from 'react-spinners'

import { SpinnerLoaderContainer } from './SpinnerLoaderStyles'

/**
 * Componente SpinnerLoader
 *
 * Muestra un spinner de carga centrado utilizando el componente `HashLoader`.
 * Útil para indicar al usuario que una operación está en progreso o que se están cargando datos.
 *
 * @component
 */
const SpinnerLoader: React.FC = () => {
  return (
    <SpinnerLoaderContainer>
      <HashLoader color="#7F3CEB" size={200} />
    </SpinnerLoaderContainer>
  )
}

export default SpinnerLoader
