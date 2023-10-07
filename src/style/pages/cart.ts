import { styled } from "..";

export const ContainerCart = styled('div', {
    width: '30rem',
    height: '100vh',
    zIndex: 99,

    padding: '3rem',

    variants: {
        display: {
            true: {display: 'flex'},
            false: {display: 'none'}
        },
    },

    
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',

  
    position: 'absolute',
    right: 0,

    background: '$gray800',
    boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',

    svg: {
        alignSelf: 'flex-end',
        cursor: 'pointer',
        marginBottom: '1.5rem'
    }
})

export const TitleCart = styled('h1', {
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: '160%',

    color: '$gray100'
})


export const ContainerItensToCart = styled('div', {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '1.5rem',

    p: {
        fontSize: '1.1rem',
        marginTop: '2rem'
    }

})


export const Product = styled('div', {
    width: '100%',
   

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem'
})

export const ContainerImageProduct = styled('div', {
   width: '100%',
   maxWidth: '5.92425rem',
   height: '5.92425rem',
   background: 'linear-gradient(180deg, #1ea483 0%, #7645d4 100%)',
   borderRadius: 8,
   padding: '0.25rem',
   marginTop: '4rem',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',


   img: {
     objectFit: 'cover'
   }
})

export const ContainerTextProduct = styled('div', {
    width: '100%',

    
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',

    marginTop: '3.8rem',


    h1: {
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: '160%'
    },

    h3: {
        fontSize: '1.125rem',
        fontWeight: 700,
        lineHeight: '160%'
    },

    p: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '160%',

        marginTop: '0.5rem',

        color: '$green500',

        cursor: 'pointer'
    }
})


export const Footer = styled('div', {
     marginTop: 'auto'
})


export const ContainerPrice = styled('div', {
     display: 'flex',
     flexDirection: 'column',
     gap: '0.4375rem',

    '.quantity': {
        h3: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '160%',

            color: '$gray300'
        }
    },

    '.total': {
      '.text-total': {
           fontSize: '1.125rem',
           fontWeight: 700,
           lineHeight: '160%',

           color: '$gray100'
       },

       h1: {
           fontSize: '1.5rem',
           fontWeight: 700,
           lineHeight: '140%',

           color: '$gray100'
       }
    }

})

export const ContainerFinalPrice = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})


export const BuyButton = styled('button', {
   width: '100%',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   border: 0,
   borderRadius: 8,

   marginTop: '3.4375rem',
   padding: '1.25rem 2rem',

   fontSize: '1.125rem',
   fontWeight: 700,
   lineHeight: '160%',

   color: '$white',

   background: '$green500',

   cursor: 'pointer',

   '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
 },
})