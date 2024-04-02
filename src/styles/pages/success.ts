import { styled } from ".."

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontWeight: "bold",
    color: "$green500",
    fontSize: "$lg",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
})

export const ImagesBox = styled("div", {
  display: "flex",
  marginTop: "4rem",
})

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: 140,
  height: 140,
  borderRadius: "50%",
  padding: ".25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
  position: "relative",

  "&:not(:first-of-type)": {
    marginLeft: "-3.5rem",
  },

  img: {
    objectFit: "cover",
  },
})
