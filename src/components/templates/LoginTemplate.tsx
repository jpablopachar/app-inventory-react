import { useMutation } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginTemplateContainer } from './LoginTemplate.styles'

import logo from '../../assets/inventarioslogo.png'

import { ThemeContext } from '@/context'
import { register } from '@/services'

const LoginTemplate: React.FC = () => {
  const navigate = useNavigate()

  const themeContext = useContext(ThemeContext)

  const { setThemeUse } = themeContext!

  const mutation = useMutation({
    mutationFn: register,
  })

  const [state, setState] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [initialState, setInitialState] = useState(false)

  setThemeUse('light')

  return (
    <LoginTemplateContainer>
      <div className="contentLogo">
        <img src={logo} alt="Logo" />
        <span>StockPRO</span>
      </div>
    </LoginTemplateContainer>
  )
}

export default LoginTemplate
