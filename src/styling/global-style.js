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