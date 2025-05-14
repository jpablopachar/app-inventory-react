import { Product } from '@/interfaces'

interface KardexTemplateProps {
  data: Product[] | null
}

const KardexTemplate: React.FC<KardexTemplateProps> = ({ data }) => {
  return (
    <div>KardexTemplate</div>
  )
}

export default KardexTemplate
