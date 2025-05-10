import { ClimbingBoxLoader } from 'react-spinners'

import { SpinnerContainer } from './SpinnerStyles'

import { useOperationsStore } from '@/store'

/**
 * Componente Spinner.
 *
 * Este componente muestra un spinner de carga utilizando el componente `ClimbingBoxLoader`.
 * El color del spinner se obtiene del estado global a través del hook `useOperationsStore`.
 *
 * @component
 * @returns {JSX.Element} Un contenedor con el spinner animado.
 */
const Spinner: React.FC = () => {
  const { categoryColor } = useOperationsStore()

  return (
    <SpinnerContainer>
      <ClimbingBoxLoader color={categoryColor} size={'100%'} />
    </SpinnerContainer>
  )
}

export default Spinner
