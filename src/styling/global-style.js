export const browseNoResult = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "40vh",
    color: "#888",
    gap: 12,
    marginTop: 24,
};
export const mainContainer = {
    width: "100%",
    paddingLeft:8,
    paddingRight:8,
    paddingTop:8,
    paddingBottom:8,
};

export const browseSearchCentered = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 2
};

export const browseSearchBar = {
    display: "flex",
    gap: 2,
};
export const bookModalHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2, 
};

export const bookModalContent = {
    display: "flex",
    gap: 2, 
    flexWrap: "wrap",
};

export const bookModalInfo = {
    flex: 1,
};

export const bookModalSubjects = {
    display: "flex",
    gap: 1, 
    flexWrap: "wrap",
};

export const bookModalDivider = {
    marginTop: 2,
    marginBottom: 2,
};

export const bookModalDescription = {
    whiteSpace: "pre-line",
    color: "text.secondary",
};
export const bookModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 500, md: 600 }, 
    borderRadius: 3,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    maxHeight: "85vh",
    overflowY: "auto",
};


export const bookModalImage = {
    width: 120,
    height: 180,
    objectFit: 'cover',
    borderRadius: 4,
};
export const cardGrid = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    width: '100%',
    marginTop: '12px',
};

export const sectionTitle = {
    fontWeight: 700,
    fontSize: '2rem',
    marginTop: '32px',
    marginBottom: '8px',
    letterSpacing: '.02em',
};

export const bookCard = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: 250
};

export const bookCardMedia = {
    objectFit: 'cover',
};

export const bookCardContent = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
};

export const bookCardBottom = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    mt: 2,
};

export const bookCardRating = {
    display: 'flex',
    alignItems: 'center',
    ml: 'auto',
};

export const bookCardStar = {
    color: '#FFD700',
    fontSize: 20,
    mr: 0.5,
};
export const container_col = {
    display: "flex",
    flexDirection: "column",
}

export const container_row = {
    display: "flex",
    flexDirection: "row",
}

export const appBar = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden"
}

export const appBarChild = {
    height: "100vh"
}

export const gap = (value) => ({ gap: value });
export const justify = (value) => ({ justifyContent: value });
export const item = (value) => ({ alignItem: value });
export const padding = (value) => ({ padding: value });
export const margin = (value) => ({ margin: value });
export const width = (value) => ({ width: value });
export const height = (value) => ({ height: value });
export const textColor = (value) => ({ color: value });
export const text = (value) => ({ fontSize: value });
export const textAlign = (value) => ({ textAlign: value });
export const textWeight = (value) => ({ fontWeight: value });
export const selfAlign = (value) => ({ alignSelf: value });
export const display = (value) => ({ display: value });
export const flexDirection = (value) => ({ flexDirection: value });
export const flexWrap = (value) => ({ flexWrap: value });
export const border = (value) => ({ border: value });
export const radius = (value) => ({ borderRadius: value });