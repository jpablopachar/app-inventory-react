import { Personal } from '@/interfaces'

interface RegisterPersonalProps {
  dataSelect: Personal | null
  onClose: () => void
  action: string
}

const RegisterPersonal: React.FC<RegisterPersonalProps> = ({ dataSelect, onClose, action }) => {
  return (
    <div>RegisterPersonal</div>
  )
}

export default RegisterPersonal
