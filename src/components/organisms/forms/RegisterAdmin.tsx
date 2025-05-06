import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

/**
 * Propiedades para el componente RegisterAdmin.
 *
 * @property {boolean} state - Estado booleano que indica si el formulario está activo o visible.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setState
 * - Función para actualizar el estado del formulario.
 */
interface RegisterAdminProps {
  state?: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterAdmin: React.FC<RegisterAdminProps> = ({ state, setState }) => {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <div>RegisterAdmin</div>
  )
}

export default RegisterAdmin
