import { styled } from ".."

export const HomeContainer = styled("main", {
  display: "flex",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  width: "100%",
  marginLeft: "auto",
  minHeight: 656,
})

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: ".25rem",
    left: ".25rem",
    right: ".25rem",
    padding: 20,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,.6)",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all .2s ease-in-out",

    div: {
      display: "flex",
      flexDirection: "column",
      gap: 4,

      strong: {
        fontSize: "$md",
        color: "$gray100",
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 6,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "$green500",
      border: 0,
      color: "$white",
      cursor: "pointer",
      position: "relative",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
})
