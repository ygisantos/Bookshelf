export const cardGrid = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    width: '100%',
    marginTop: '12px',
};

export const sectionTitle = {
    fontWeight: 700,
    fontSize: '1.3rem',
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
export const text = (value) => ({ color: value });
export const border = (value) => ({ border: value });
export const radius = (value) => ({ borderRadius: value });