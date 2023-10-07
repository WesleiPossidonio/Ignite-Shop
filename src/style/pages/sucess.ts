import { relative } from "path";
import { styled } from "..";

export const SucessesContainer = styled('main', {
   display: "flex",
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',

   margin: '0 auto',
   height: '656', 
   

   h1: {
       fontSize: '$2xl',
       color: '$gray100',
       marginTop: '2.915625rem'
   }, 

   p: {
      fontSize: '$xl',
      color: '$gray300',
      maxWidth: 560,
      textAlign: 'center',
      marginTop: '2rem', 
      lineHeight: 1.4
   }, 

   a: {
      display: 'block',
      marginTop: '5rem',
      fontSize: '$lg',
      color: '$green500',
      textDecoration: 'none',
      fontWeight: 'bold',

      '&:hover': {
        color: '$green300',
      }
   }


})

export const ContainerImages = styled('section', {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   
   
   'div + div': {
      marginLeft: 'calc(-140px / 2)',
   }
})

export const ImageContainer = styled('div', {
   width: '8,125rem',
   height: '8,125rem',

   background: 'linear-gradient(180deg, #1ea483 0%, #7645d4 100%)',
   borderRadius: '50%',
   padding: '0.25rem',
   marginTop: '4rem',
   position: 'relative',
   

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',


   img: {
     objectFit: 'cover'
   }
})