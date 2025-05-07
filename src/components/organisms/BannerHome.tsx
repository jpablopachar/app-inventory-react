import { BannerHomeContainer, SocialContent } from './BannerHomeStyles'

import { CardCompanyData } from '../molecules'

import { iconsAndVars } from '@/styles'

/**
 * Componente BannerHome
 *
 * Muestra un banner de bienvenida para la aplicación StockPRO, incluyendo el icono de la empresa,
 * un mensaje introductorio y una breve descripción de la funcionalidad principal de la aplicación.
 * Además, presenta tarjetas informativas sobre los dispositivos compatibles (PC, Celular, Laptop)
 * y elementos SVG decorativos para mejorar la apariencia visual.
 *
 * @component
 * @returns {JSX.Element} El banner de bienvenida para la página principal.
 */
const BannerHome: React.FC = () => {
  return (
    <BannerHomeContainer>
      <div className="content-wrapper-context">
        <span className="title">
          {<iconsAndVars.companyIcon />}
          Bienvenido a StockPRO
        </span>
        <div className="content-text">
          StockPRO te ayuda a tener un control de tus inventarios desde
          cualquier dispositivo.
        </div>
        <SocialContent>
          <CardCompanyData
            title="PC"
            img="https://i.ibb.co/m6W7qdH/ordenador-personal.png"
          ></CardCompanyData>
          <CardCompanyData
            title="Celular"
            img="https://i.ibb.co/VMyZzy6/telefono-inteligente-2.png"
          ></CardCompanyData>
          <CardCompanyData
            title="Laptop"
            img="https://i.ibb.co/kJ6dYm6/ordenador-portatil.png"
          ></CardCompanyData>
        </SocialContent>
      </div>
      <div className="contentSvg">
        <svg
          className="opacity-0 group-hover:opacity-100 transform-gpu transition-all will-change-auto duration-600 ease-in-out"
          viewBox="0 0 492 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_934_1718)">
            <path
              d="M436.631 215.884C513.562 314.19 490.786 459.853 385.76 541.232C280.733 622.611 133.227 608.889 56.2961 510.583C-20.6352 412.277 2.14047 266.613 107.167 185.234C212.193 103.855 359.699 117.578 436.631 215.884Z"
              fill="#C300E2"
            ></path>
            <path
              d="M436.631 285.2C513.562 383.506 490.786 529.169 385.76 610.548C280.733 691.927 133.227 678.205 56.2961 579.899C-20.6352 481.593 2.14047 335.93 107.167 254.551C212.193 173.172 359.699 186.894 436.631 285.2Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_934_1718"
              x="-120.728"
              y="0.703659"
              width="734.383"
              height="794.376"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="65.7243"
                result="effect1_foregroundBlur_934_1718"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
      <svg
        className="grids"
        viewBox="0 0 492 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.40"
          d="M526 1L-34 1.00005M526 27.25L-34 27.2501M526 53.5L-34 53.5001M526 79.75L-34 79.7501M526 106L-34 106M526 132.25L-34 132.25M526 158.5L-34 158.5M526 184.75L-34 184.75M526 211L-34 211M526 237.25L-34 237.25M526 263.5L-34 263.5M526 289.75L-34 289.75M526 316L-34 316M-29.625 1V316M-3.375 1V316M22.875 1V316M49.125 1V316M75.375 1V316M101.625 1V316M127.875 1V316M154.125 1V316M180.375 1V316M206.625 1V316M232.875 1V316M259.125 1V316M285.375 1V316M311.625 1V316M337.875 1V316M364.125 1V316M390.375 1V316M416.625 1V316M442.875 1V316M469.125 1V316M495.375 1V316M521.625 1V316"
          stroke="url(#paint0_radial_932_3040)"
          strokeWidth="0.5"
        />
        <defs>
          <radialGradient
            id="paint0_radial_932_3040"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(246 158.5) rotate(90) scale(212.625 212.625)"
          >
            <stop offset="0.343728" stopColor="white" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </BannerHomeContainer>
  )
}

export default BannerHome
