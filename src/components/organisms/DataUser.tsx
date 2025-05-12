import { DataUserContainer } from './DataUserStyles'

import { BtnCircular, MenuDropdownList } from '../molecules'

import { UserAuth } from '@/context'
import { closeSession } from '@/services'
import { useAuthStore } from '@/store'
import { iconsAndVars } from '@/styles'
import { DropdownUser } from '@/utils'

/**
 * Propiedades para el componente DataUser.
 *
 * @property stateConfig - Objeto de configuración del estado.
 * @property stateConfig.state - Valor booleano que indica el estado actual.
 * @property stateConfig.setState - Función para actualizar el estado.
 */
interface DataUserProps {
  stateConfig: {
    state: boolean
    setState: () => void
  }
}

/**
 * Componente que muestra la información del usuario autenticado y un menú desplegable
 * con acciones relacionadas, como cerrar sesión.
 *
 * @component
 * @param {DataUserProps} stateConfig - Objeto de configuración
 * que controla el estado del menú desplegable
 *                                      y proporciona la función para cambiar dicho estado.
 *
 * @returns {JSX.Element} Un contenedor con la imagen del usuario,
 * un icono decorativo, el correo electrónico
 * del usuario autenticado y, si el menú está abierto, una lista de acciones disponibles.
 */
const DataUser: React.FC<DataUserProps> = ({ stateConfig }) => {
  const { user } = UserAuth()

  const { signOut } = useAuthStore()

  /**
   * Maneja acciones específicas basadas en el tipo de acción proporcionada.
   *
   * @param action - Objeto que contiene información sobre la
   * acción a ejecutar. Debe tener una propiedad `type`.
   * @returns Una promesa que se resuelve cuando la acción ha sido procesada.
   *
   * Si el tipo de acción es 'Cerrar sesión', ejecuta el cierre de
   * sesión llamando a `closeSession` y luego a `signOut`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const xTypeFunction = async (action: any): Promise<void> => {
    if (action.type === 'Cerrar sesión') {
      await closeSession()

      signOut()
    }
  }

  return (
    <DataUserContainer onClick={stateConfig.setState}>
      <div className="imgContainer">
        <img src="https://i.ibb.co/kGYgRZ8/programador.png" />
      </div>
      <BtnCircular
        icon={<iconsAndVars.crownIcon />}
        width="25px"
        height="25px"
        bgColor={`linear-gradient(15deg, rgba(255, 88, 58, 0.86) 9%, #f8bf5b 100%);`}
        textColor="#ffffff"
        fontSize="11px"
        translateX="-50px"
        translateY="-12px"
      />
      <span className="nombre">{user?.email}</span>
      {stateConfig.state && (
        <MenuDropdownList
          data={DropdownUser}
          top="62px"
          task={(p) => xTypeFunction(p)}
        />
      )}
    </DataUserContainer>
  )
}

export default DataUser
