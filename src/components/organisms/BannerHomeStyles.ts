import styled from 'styled-components'

import { Device } from '@/styles'

export const BannerHomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid #6b6b6b;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat, repeat;
  overflow: hidden;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;

  .grids {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: 0.6s;
  }

  .contentSvg {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: -500px;
    opacity: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    border: 1px solid #4d4d4d;

    .contentSvg {
      bottom: -100px;
      opacity: 1;
    }

    .grids {
      transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
        skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
      color: red;
    }
  }

  @media ${Device.laptop} {
    width: 100%;
  }

  .content-wrapper-context {
    padding: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 30px;
      font-weight: 700;
      gap: 10px;
      display: flex;
      align-items: center;
    }

    .content-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.7em;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .content-wrapper-img {
    padding: 20px;
    width: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -25px;
    object-position: center;
    animation: float 1.8s ease-in-out infinite alternate;
    margin-left: 10px;

    @media ${Device.tablet} {
      width: 80px;
    }

    @media ${Device.laptop} {
      width: 80px;
    }

    @media ${Device.desktop} {
      width: 120px;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(15px);
    }
  }
`

export const SocialContent = styled.section`
  display: flex;
  gap: 10px;
  padding-top: 15px;
  flex-wrap: wrap;
  cursor: pointer;

  a {
    transition: 0.3s;
    color: #fff;
    font-size: 18px;
  }

  a {
    &:hover {
      transform: translateY(-8px);
    }
  }
`

export const Phrase = styled.span`
  display: none;
  font-weight: 650;

  @media ${Device.desktop} {
    font-size: 20px;
    display: block;
  }
`
