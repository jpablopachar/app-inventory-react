import { useKardexStore, useOperationsStore, useUserStore } from '@/store'

const Tabs: React.FC = () => {
  const { userId } = useUserStore()
  const { kardexData } = useKardexStore()
  const { year, month, type, titleBtnDesMovements } = useOperationsStore()

  return (
    <div>Tabs</div>
  )
}

export default Tabs
