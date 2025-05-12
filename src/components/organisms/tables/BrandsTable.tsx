import { Brand } from '@/interfaces'

/**
 * Propiedades para el componente BrandsTable.
 *
 * @property {Brand[] | null} data - Lista de marcas a mostrar en
 * la tabla. Puede ser nulo si no hay datos disponibles.
 * @property {(value: boolean) => void} setOpenRegister - Función
 * para controlar la apertura o cierre del formulario de registro de marcas.
 * @property {(value: any) => void} setDataSelect - Función para
 * establecer la marca seleccionada en la tabla.
 * @property {(value: string) => void} setAction - Función para
 * definir la acción actual (por ejemplo, 'editar', 'eliminar', etc.).
 */
interface BrandsTableProps {
  data: Brand[] | null
  setOpenRegister: (value: boolean) => void
  setDataSelect: (value: any) => void
  setAction: (value: string) => void
}

const BrandsTable: React.FC<BrandsTableProps> = () => {
  return (
    <div>BrandsTable</div>
  )
}

export default BrandsTable
