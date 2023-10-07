import { styled } from "..";

export const  HomeContainer = styled('main', {
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))', 
  marginLeft: 'auto',
  minHeight: 656

})


export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7645d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
        transform: 'translateY(0%)',
        opacity: 1,
    }
  },

})


export const Footer = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',


  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0,0,0, 0.6)',
  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2 ease-in-out',

  strong: {
    fontSize: '$lg',
    color: '$gray100'
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300'
  },

  div: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'flex-start',
     gap: 4
  },
})

export const ContainerCart = styled('button', {
  width: '3.5rem',
  height: '3.5rem',


  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.75rem',
  border: 0,
  borderRadius: '6px',
  background: '$green500',
  zIndex: 99,

  cursor: 'pointer',

  svg: {
    color: '$white'
  },

  '&:hover': {
    background: '$green300'
  }
})