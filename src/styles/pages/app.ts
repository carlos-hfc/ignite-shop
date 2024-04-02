import { styled } from ".."

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
})

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})

export const CardButton = styled("button", {
  width: 48,
  height: 48,
  borderRadius: 6,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$gray800",
  border: 0,
  color: "$gray300",
  cursor: "pointer",
  position: "relative",

  span: {
    position: "absolute",
    backgroundColor: "$green300",
    color: "$white",
    borderRadius: "50%",
    fontWeight: "bold",
    border: "3px solid $gray900",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    width: 24,
    height: 24,
    right: -8,
    top: -8,
  },
})

export const Cart = styled("div", {
  padding: 48,
  backgroundColor: "$gray800",
  right: 0,
  position: "fixed",
  top: 0,
  height: "100vh",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  transition: "transform .2s ease-in-out",

  h2: {
    fontSize: "$md",
    fontWeight: "bold",
    lineHeight: 1.6,
    color: "$gray100",
    marginBottom: "2rem",
  },

  footer: {
    marginTop: "auto",

    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& + &": {
        marginTop: 8,
      },

      span: {
        fontSize: "1rem",
        lineHeight: 1.6,
        color: "$gray300",

        "&:last-of-type": {
          fontSize: "$md",
        },
      },

      strong: {
        fontSize: "$md",
        lineHeight: 1.6,
        color: "$gray100",

        "&:last-of-type": {
          fontSize: "$xl",
        },
      },
    },

    button: {
      marginTop: 56,
      width: "100%",
      border: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "$green500",
      color: "$white",
      fontWeight: "bold",
      fontSize: "$md",
      padding: "1.25rem",
      borderRadius: 8,
      cursor: "pointer",
    },
  },

  variants: {
    open: {
      true: {
        transform: "translateX(0)",
      },
      false: {
        transform: "translateX(100%)",
      },
    },
  },

  defaultVariants: {
    open: false,
  },
})

export const Items = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
})

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: 100,
  height: 100,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
})

export const ProductCart = styled("div", {
  display: "flex",
  gap: 20,
  minWidth: 384,
  width: "100%",
  justifyContent: "normal",

  div: {
    display: "flex",
    flexDirection: "column",
  },

  h3: {
    color: "$gray300",
    fontSize: 18,
    lineHeight: 1.6,
    fontWeight: "normal",
  },

  strong: {
    color: "$gray300",
    fontSize: 18,
    lineHeight: 1.6,
    fontWeight: "bold",
  },

  a: {
    color: "$green500",
    fontWeight: "bold",
    fontSize: "1rem",
    lineHeight: 1.6,
    marginTop: "auto",
    textDecoration: "none",
    display: "block",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
})

export const CloseButton = styled("button", {
  all: "unset",
  position: "absolute",
  right: "1.5rem",
  top: "1.5rem",
  cursor: "pointer",
})

export const EmptyCart = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 20,
  minWidth: 384,
  height: "100%",
  width: "100%",

  span: {
    fontSize: "$lg",
    color: "$gray300",
  },
})
