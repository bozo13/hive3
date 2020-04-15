import { createMuiTheme } from '@material-ui/core/styles';
import OstbahnhofWoff from './assets/fonts/Ostbahnhof-Bold-Display.woff';
import GraphitRegularWoff from './assets/fonts/Graphit-Regular.woff';


const Ostbahnhof = {
  fontFamily: 'Ostbahnhof',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Ostbahnhof'),
    local('Ostbahnhof-Bold-Display'),
    url(${OstbahnhofWoff}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};


const GraphitRegular = {
  fontFamily: 'GraphitRegular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Graphit'),
    local('Graphit-Regular'),
    url(${GraphitRegularWoff}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};



const theme = createMuiTheme({

  
  typography: {
    fontFamily: ['GraphitRegular','Ostbahnhof' ].join(','),
    h1:{
      fontWeight:700,
      letterSpacing: '0.25rem',
      lineHeight: '1rem',
    },
    h2:{
      fontFamily: 'Ostbahnhof',
      fontWeight:700,
      letterSpacing: '0.25rem',
    },
    h3:{
      '&strong':{ 
        fontFamily: 'Ostbahnhof',
        fontWeight:700,
        letterSpacing: '0.25rem',
      },
      fontFamily: 'Ostbahnhof',
      fontWeight:700,
      letterSpacing: '0.25rem',
    },
  },
    palette: {
        primary: {
          main: '#FFF',

          light: '#DFA629',
          contrastText: '#232e3c',
        },
        secondary: {
          light: '#0066ff',
          main: '#DFA629',
          contrastText: '#ffcc00',
        },
        color: { 
          default:'#DFA629'
        },
        background: {
          default: '#fff',
        },
        contrastThreshold: 3,

        tonalOffset: 0.2,
      },
    overrides: {
      MuiTypography: {
        body1: {
         fontSize:'0.87rem',
         fontFamily:'GraphitRegular',
         letterSpacing: '-0.012rem',
         lineHeight: '1.55rem',
         color:'#232E3C',
        },
        p:{
          
          fontSize:'0.87rem',
          fontFamily:'GraphitRegular',
          letterSpacing: '-0.012rem',
          lineHeight: '1.55rem',
          color:'#232E3C',
        },

        h1:{
          fontFamily: 'Ostbahnhof',
        },
        h2:{
          fontFamily: 'Ostbahnhof',
        },
        h3:{
          fontFamily: 'Ostbahnhof',
        },
        h4:{
          fontFamily: 'Ostbahnhof',
        },
        h5:{
          fontFamily: 'Ostbahnhof',
        },
        h6:{
          fontFamily: 'Ostbahnhof',
        },

        subheading: {
        },
      },
      MuiCssBaseline: {
        '@global': {
          '@font-face': [Ostbahnhof,GraphitRegular],
        },
      },
      
      MuiTableCell:{  
        root: {
        padding: '15px 0px',
        borderBottom: `0.1rem solid #F8C05E`,
        verticalAlign:'text-top', 
        margin:'0 15px',
        wordWrap: 'break-word',
      
        
        "&:first-child": {
          color: "#DFA629",
          fontSize: "1.2rem",
          padding: '0px',
          fontFamily: 'Ostbahnhof', 
          letterSpacing: '0rem',
          lineHeight: '1.22rem',
          padding: '0px 5px 15px 0px'
         },
   
         "&:last-child": {
          fontFamily: 'GraphitRegular', 
          color: "#232E3C",
          fontSize: "1rem",
         
         },
       
        },
      },
      MuiMobileStepper:{
        root:{
          fontFamily: 'GraphitRegular',
          position: "absolute",
          top:'calc(50% - 1.5rem)',
          width:'100%',
          background:'none',
          padding: '0px',
        },
        dots:{
          display:'none',
        },
      },
      typography:{
        h1: {
          fontWeight: 700,
          
        },
        h2: {
          fontWeight: 700,
          
        },
        h3: {
          
          fontWeight: 700,
        },
        h4: {
          
          fontWeight: 700,
        },
        h5: {
          
          fontWeight: 700,
        },
        h6: {
          fontWeight: 700,
          
        },
       body1:{
       
        fontWeight: 400,
       },
      },
     
      
  
    },
  
});
export default theme;