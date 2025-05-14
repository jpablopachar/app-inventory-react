import { Personal } from '@/interfaces'

interface PersonalTableProps {
  personal: Personal[] | null
  setOpenRegister: (value: boolean) => void
  setDataSelect: (value: Personal | null) => void
  setAction: (value: string) => void
}

const PersonalTable: React.FC<PersonalTableProps> = () => {
  return (
    <div>PersonalTable</div>
  )
}

export default PersonalTable
