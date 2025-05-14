import { Personal } from '@/interfaces'

interface PersonalTemplateProps {
  data: Personal[] | null
}

const PersonalTemplate: React.FC<PersonalTemplateProps> = ({ data }) => {
  return <div>PersonalTemplate</div>
}

export default PersonalTemplate
