import { createTheme } from "@material-ui/core/styles";

const intelBlack = "#0a0808";
const intelBlue = "#28b1e7";
const intelGrey = "#868686";

export default createTheme({
    palette: {
        common: {
            black: `${intelBlack}`,
            blue: `${intelBlue}`,
            grey: intelGrey
        },
        primary: {
            main: `${intelBlack}`
        },
        secondary: {
            main: `${intelBlue}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "1rem"
        },
        estimate: {
            color: "white",
            fontFamily: "pacifico",
            textTransform: "none",
            fontSize: "1rem"
        },
        h2: {
            fontFamily: "Raleway",
            fontSize: "2.3rem",
            fontWeight: "bold",
            lineHeight: "1.5em",
            color: intelBlue
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2rem"
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: intelBlue
        },
        h5: {
            fontFamily: "Ralway",
            fontSize: "1.2rem",
            fontWeight: 500,
            color: intelBlue
        },
        subtitle1: {
            fontFamily: "Roboto",
            fontSize: "1.15rem",
            color: intelGrey
        },
        subtitle2: {
            fontFamily: "Roboto",
            fontSize: "1rem",
            color: intelGrey
        },
        button: {
            fontFamily: "Raleway",
            textTransform: "none",
            borderRadius: 50
        },
        body1: {
            fontFamily: 'Raleway',
            fontSize: '1rem',
            color: intelBlue
        },
        body2: {
            fontFamily: "Roboto",
            fontSize: "1.2rem",
            color: intelGrey
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: intelBlue,
                fontSize: "1rem"
            }
        },
    }
})