import { AiOutlineBarcode, AiOutlineCalculator } from 'react-icons/ai'
import { BiBellMinus, BiSave, BiUserCircle } from 'react-icons/bi'
import {
  BsArrowDown,
  BsArrowUpShort,
  BsBarChartLine,
  BsCalendarCheck,
  BsEmojiLaughing,
  BsGoogle,
  BsQuestionCircle,
} from 'react-icons/bs'
import { CgMathPlus } from 'react-icons/cg'
import { CiMoneyBill, CiPalette } from 'react-icons/ci'
import { DiCodepen } from 'react-icons/di'
import {
  FaBalanceScale,
  FaBuilding,
  FaReact,
  FaRegMoneyBillAlt,
} from 'react-icons/fa'
import { FcPicture } from 'react-icons/fc'
import { GrCaretNext, GrFormPrevious } from 'react-icons/gr'
import { HiOutlineChartPie } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import {
  MdAlternateEmail,
  MdDriveFileRenameOutline,
  MdExitToApp,
  MdOutlineBorderAll,
  MdOutlineCategory,
} from 'react-icons/md'
import {
  RiCloseLine,
  RiDeleteBin2Line,
  RiEditLine,
  RiLockPasswordLine,
  RiSettings3Line,
  RiStockLine,
  RiVipCrownFill,
} from 'react-icons/ri'
import { SlGraph } from 'react-icons/sl'
import {
  TbBrandBitbucket,
  TbBrandSupabase,
  TbReportAnalytics,
} from 'react-icons/tb'

import logo from '../assets/inventariosLogo.png'

/**
 * @constant
 * @name iconsAndVars
 * @description
 * Objeto que agrupa todos los íconos utilizados en la aplicación
 * junto con variables de estilo y constantes de diseño.
 * Incluye referencias a componentes de íconos, colores, tamaños,
 * breakpoints, sombras, y otros valores reutilizables
 * para mantener la coherencia visual y facilitar el mantenimiento del código.
 *
 * @property {React.ComponentType} reportsIcon - Ícono para reportes.
 * @property {React.ComponentType} companyIcon - Ícono para empresa.
 * @property {React.ComponentType} categoriesIcon - Ícono para categorías.
 * @property {React.ComponentType} brandIcon - Ícono para marca.
 * @property {React.ComponentType} sellingPriceIcon - Ícono para precio de venta.
 * @property {React.ComponentType} purchasePriceIcon - Ícono para precio de compra.
 * @property {React.ComponentType} internalCodeIcon - Ícono para código interno.
 * @property {React.ComponentType} barcodeIcon - Ícono para código de barras.
 * @property {React.ComponentType} minimumStockIcon - Ícono para stock mínimo.
 * @property {React.ComponentType} stockIcon - Ícono para stock.
 * @property {React.ComponentType} nameIcon - Ícono para nombre.
 * @property {React.ComponentType} emailIcon - Ícono para correo electrónico.
 * @property {React.ComponentType} passwordIcon - Ícono para contraseña.
 * @property {string} sidebarWidth - Ancho del sidebar principal.
 * @property {string} sidebarWidthInitial - Ancho inicial del sidebar.
 * @property {string} smSpacing - Espaciado pequeño.
 * @property {string} mdSpacing - Espaciado mediano.
 * @property {string} lgSpacing - Espaciado grande.
 * @property {string} xlSpacing - Espaciado extra grande.
 * @property {string} xxlSpacing - Espaciado extra extra grande.
 * @property {string} borderRadius - Radio de borde estándar.
 * @property {React.ComponentType} colorPaletteIcon - Ícono de paleta de colores.
 * @property {React.ComponentType} emojiIcon - Ícono de emoji.
 * @property {React.ComponentType} tableEditIcon - Ícono para editar en tablas.
 * @property {React.ComponentType} tableDeleteIcon - Ícono para eliminar en tablas.
 * @property {string} incomeColor - Color para ingresos.
 * @property {string} incomeBgColor - Color de fondo para ingresos.
 * @property {string} expenseColor - Color para egresos.
 * @property {string} expenseBgColor - Color de fondo para egresos.
 * @property {string} errorColor - Color para errores.
 * @property {string} successColor - Color para éxito.
 * @property {string} bpMaggie - Breakpoint Maggie.
 * @property {string} bpLisa - Breakpoint Lisa.
 * @property {string} bpBart - Breakpoint Bart.
 * @property {string} bpMarge - Breakpoint Marge.
 * @property {string} bpHomer - Breakpoint Homer.
 * @property {string} primaryColor - Color primario de la aplicación.
 * @property {string} boxShadowGray - Sombra gris estándar.
 * @property {React.ComponentType} downArrowIcon - Flecha hacia abajo.
 * @property {React.ComponentType} crownIcon - Ícono de corona.
 * @property {React.ComponentType} userIcon - Ícono de usuario.
 * @property {React.ComponentType} settingsIcon - Ícono de configuración.
 * @property {React.ComponentType} logoutIcon - Ícono de cerrar sesión.
 * @property {React.ComponentType} emptyPhotoIcon - Ícono de foto vacía.
 * @property {string} green - Color verde estándar.
 * @property {string} red - Color rojo estándar.
 * @property {React.ComponentType} addIcon - Ícono para agregar.
 * @property {React.ComponentType} supabaseIcon - Ícono de Supabase.
 * @property {React.ComponentType} reactIcon - Ícono de React.
 * @property {React.ComponentType} longDownArrow - Flecha larga hacia abajo.
 * @property {React.ComponentType} longUpArrow - Flecha larga hacia arriba.
 * @property {React.ComponentType} balanceIcon - Ícono de balanza.
 * @property {any} logo - Logo de la aplicación.
 * @property {React.ComponentType} googleIcon - Ícono de Google.
 * @property {React.ComponentType} closeIcon - Ícono de cerrar.
 * @property {React.ComponentType} saveIcon - Ícono de guardar.
 * @property {React.ComponentType} helpIcon - Ícono de ayuda.
 * @property {React.ComponentType} pieChartIcon - Ícono de gráfico circular.
 * @property {React.ComponentType} linearChartIcon - Ícono de gráfico lineal.
 * @property {React.ComponentType} barsChartIcon - Ícono de gráfico de barras.
 * @property {React.ComponentType} calculatorIcon - Ícono de calculadora.
 * @property {React.ComponentType} checkIcon - Ícono de verificación.
 * @property {string} secondaryColor - Color secundario de la aplicación.
 * @property {React.ComponentType} rightArrowIcon - Flecha hacia la derecha.
 * @property {string} selectorColor - Color para selectores.
 * @property {string} bgRgba - Color de fondo en formato rgba.
 * @property {React.ComponentType} prevIcon - Ícono de anterior.
 * @property {React.ComponentType} nextIcon - Ícono de siguiente.
 * @property {React.ComponentType} allIcon - Ícono de mostrar todo.
 */
export const iconsAndVars = {
  reportsIcon: TbReportAnalytics,
  companyIcon: FaBuilding,
  categoriesIcon: MdOutlineCategory,
  brandIcon: TbBrandBitbucket,
  sellingPriceIcon: FaRegMoneyBillAlt,
  purchasePriceIcon: CiMoneyBill,
  internalCodeIcon: DiCodepen,
  barcodeIcon: AiOutlineBarcode,
  minimumStockIcon: BiBellMinus,
  stockIcon: RiStockLine,
  nameIcon: MdDriveFileRenameOutline,
  emailIcon: MdAlternateEmail,
  passwordIcon: RiLockPasswordLine,
  sidebarWidth: `300px`,
  sidebarWidthInitial: `10vw`,
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `24px`,
  xlSpacing: `32px`,
  xxlSpacing: `48px`,
  borderRadius: `6px`,
  colorPaletteIcon: CiPalette,
  emojiIcon: BsEmojiLaughing,
  tableEditIcon: RiEditLine,
  tableDeleteIcon: RiDeleteBin2Line,
  incomeColor: `#53B257`,
  incomeBgColor: `#e6ffe7`,
  expenseColor: `#fe6156`,
  expenseBgColor: `#fbcbc9`,
  errorColor: `#F54E41`,
  successColor: `#9046FF`,
  bpMaggie: `15em`,
  bpLisa: `30em`,
  bpBart: `48em`,
  bpMarge: `62em`,
  bpHomer: `75em`,
  primaryColor: `#00F34A`,
  boxShadowGray: `0px 10px 15px -3px rgba(0,0,0,0.1)`,
  downArrowIcon: IoIosArrowDown,
  crownIcon: RiVipCrownFill,
  userIcon: BiUserCircle,
  settingsIcon: RiSettings3Line,
  logoutIcon: MdExitToApp,
  emptyPhotoIcon: FcPicture,
  green: `#53B257`,
  red: `#F54E41`,
  addIcon: CgMathPlus,
  supabaseIcon: TbBrandSupabase,
  reactIcon: FaReact,
  longDownArrow: BsArrowDown,
  longUpArrow: BsArrowUpShort,
  balanceIcon: FaBalanceScale,
  logo: logo,
  googleIcon: BsGoogle,
  closeIcon: RiCloseLine,
  saveIcon: BiSave,
  helpIcon: BsQuestionCircle,
  pieChartIcon: HiOutlineChartPie,
  linearChartIcon: SlGraph,
  barsChartIcon: BsBarChartLine,
  calculatorIcon: AiOutlineCalculator,
  checkIcon: BsCalendarCheck,
  secondaryColor: `#DAC1FF`,
  rightArrowIcon: IoIosArrowForward,
  selectorColor: '#BF94FF',
  bgRgba: 'rgba(210, 110, 249, 0.1)',
  prevIcon: GrFormPrevious,
  nextIcon: GrCaretNext,
  allIcon: MdOutlineBorderAll,
}
