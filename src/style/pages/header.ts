import { styled } from ".."

export const ContainerHeader = styled('header', { 
    width: '100%',
    maxWidth: 1180,
    padding: '2rem 0',
    margin: '0 auto',
 
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
 })
 
 export const ButtonCart = styled('button', {
     width: '3.5rem',
     height: '3.5rem',
   
     padding: '0.75rem',
     border: 0,
     borderRadius: '6px',
     background: '$gray800',
     cursor: 'pointer',
     position: 'relative',
 
 
     span: {
       width: '1.5rem',
       position: 'absolute',
       top: '-2px',
       right: 0,
 
       marginTop: '-0.45rem',
       marginLeft: '-0.6rem',
 
       borderRadius: '50%',
 
       textAlign: 'center',
 
       fontSize: '14px',
       fontStyle: 'normal',
       fontWeight: 700,
       lineHeight: '160%',
 
       color: '#fff',
 
       background: '$green500',
     },
   
     svg: {
       color: '$gray100'
     },
 
     '&:hover': {
         opacity: 0.7
     }
 
 })