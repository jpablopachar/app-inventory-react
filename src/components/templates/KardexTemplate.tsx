import { useState } from 'react'

import { ContentFilter, TemplateContainer } from './TemplateStyles'

import { TitleStyles } from '../atoms'
import { BtnSave } from '../molecules'
import { Header, Searcher, Tabs } from '../organisms'

import { Kardex, Product } from '@/interfaces'
import { useKardexStore } from '@/store'
import { iconsAndVars } from '@/styles'

interface KardexTemplateProps {
  data: Product[] | null
}

const KardexTemplate: React.FC<KardexTemplateProps> = ({ data }) => {
  const { setSearcher } = useKardexStore()

  const [state, setState] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [action, setAction] = useState('')
  const [dataSelect, setDataSelect] = useState<Kardex | null>(null)
  const [type, setType] = useState('')

  const newInput = (): void => {
    setOpenRegister(true)
    setAction('entrada')
  }

  const newOutput = (): void => {
    setOpenRegister(true)
    setAction('salida')
  }

  return (
    <TemplateContainer>
      {/* {openRegistro && (
        <RegistrarSalidaEntrada tipo={tipo}
          dataSelect={dataSelect}
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
        />
      )} */}
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFilter>
          <TitleStyles>Kardex</TitleStyles>
          <BtnSave
            title="Entrada"
            bgColor="#52de65"
            icon={<iconsAndVars.rightArrowIcon />}
            task={newInput}
          />
          <BtnSave title="Salida" bgColor="#fb6661" task={newOutput} />
        </ContentFilter>
      </section>
      <section className="area2">
        <Searcher setSearcher={setSearcher} />
      </section>
      <section className="main">
        <Tabs />
      </section>
    </TemplateContainer>
  )
}

export default KardexTemplate
