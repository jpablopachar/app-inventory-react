import { useState } from 'react'

import { ContentFilter, TemplateContainer } from './TemplateStyles'

import vacio from '../../assets/vacio.json'
import { TitleStyles } from '../atoms'
import { AnimationLottie, BtnFilter } from '../molecules'
import { Header, PersonalTable, RegisterPersonal, Searcher } from '../organisms'

import { Personal } from '@/interfaces'
import { useBrandStore } from '@/store'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente PersonalTemplate.
 * 
 * @interface PersonalTemplateProps
 * @property {Personal[] | null} data - Lista de objetos de tipo
 * Personal o null si no hay datos disponibles.
 */
interface PersonalTemplateProps {
  data: Personal[] | null
}

/**
 * Componente de plantilla para la gestión de personal.
 *
 * Este componente organiza la interfaz de usuario para mostrar, filtrar y registrar personal.
 * Incluye un formulario de registro, filtros, buscador y una tabla con la información del personal.
 *
 * @component
 * @param {PersonalTemplateProps} props - Propiedades del componente.
 * @param {Personal[]} props.data - Lista de objetos de personal a mostrar en la tabla.
 *
 * @returns {JSX.Element} Elemento JSX que representa la plantilla de personal.
 */
const PersonalTemplate: React.FC<PersonalTemplateProps> = ({ data }) => {
  const { setSearcher } = useBrandStore()

  const [state, setState] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [action, setAction] = useState('')
  const [dataSelect, setDataSelect] = useState<Personal | null>(null)

  /**
   * Alterna el estado del formulario de registro, abre o cierra el modal correspondiente,
   * establece la acción actual como 'Nuevo' y limpia los datos seleccionados.
   *
   * @function
   * @returns {void} No retorna ningún valor.
   */
  const newRegister = (): void => {
    setOpenRegister(!openRegister)
    setAction('New')
    setDataSelect(null)
  }

  return (
    <TemplateContainer>
      {openRegister && (
        <RegisterPersonal
          dataSelect={dataSelect}
          onClose={() => setOpenRegister(!openRegister)}
          action={action}
        />
      )}
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFilter>
          <TitleStyles>Personal</TitleStyles>
          <BtnFilter
            task={newRegister}
            textColor="#353535"
            icon={<iconsAndVars.addIcon />}
          />
        </ContentFilter>
      </section>
      <section className="area2">
        <Searcher setSearcher={setSearcher} />
      </section>
      <section className="main">
        {data!.length == 0 && (
          <AnimationLottie height="300" width="300" animation={vacio} />
        )}
        <PersonalTable
          personal={data}
          setOpenRegister={setOpenRegister}
          setDataSelect={setDataSelect}
          setAction={setAction}
        />
      </section>
    </TemplateContainer>
  )
}

export default PersonalTemplate
