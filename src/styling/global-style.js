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
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
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

export const aboutContainer = {
    py: 6
};

export const aboutHeader = {
    textAlign: 'center',
    mb: 6
};

export const profileCard = {
    p: 4,
    mb: 4,
    borderRadius: 4,
    elevation: 4
};

export const profileAvatar = {
    width: 140,
    height: 140,
    fontSize: 42,
    mx: { xs: 'auto', md: 0 }
};

export const profileName = {
    fontWeight: 600,
    mb: 2,
    textAlign: { xs: 'center', md: 'left' }
};

export const profileInfoItem = {
    display: 'flex',
    alignItems: 'center',
    gap: 1
};

export const profileDescription = {
    lineHeight: 1.7,
    textAlign: { xs: 'center', md: 'left' }
};

export const sectionCard = {
    p: 3,
    height: '100%',
    elevation: 2,
    transition: 'all 0.3s ease-in-out'
};

export const sectionHeader = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5
};

export const sectionIcon = {
    p: 1,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export const sectionDivider = {
    opacity: 0.3
};

export const skillsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.5
};

export const skillChip = {
    m: 0.25,
    borderRadius: 3,
    fontWeight: 500,
    size: 'small',
    transition: 'all 0.2s ease-in-out'
};

export const experienceRole = {
    fontWeight: 600
};

export const experienceCompany = {
    fontWeight: 500
};

export const itemDivider = {
    mt: 2,
    opacity: 0.3
};

export const awardContent = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: { xs: 'column', sm: 'row' }
};

export const awardDetails = {
    flex: 1
};

export const awardTitle = {
    fontWeight: 500,
    lineHeight: 1.3
};

export const awardPlacerChip = {
    mt: 0.5,
    height: 20,
    fontSize: '0.7rem',
    fontWeight: 600,
    size: 'small',
    color: 'primary'
};

export const awardDate = {
    ml: { xs: 0, sm: 1 },
    mt: { xs: 1, sm: 0 },
    flexShrink: 0,
    color: 'text.secondary'
};

export const getAboutTitleStyles = (theme) => ([
    {
        fontWeight: 700,
        mb: 1,
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    }
]);

export const getProfileCardStyles = (theme) => ([
    profileCard,
    {
        background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
        border: `2px solid ${theme.palette.primary.main}1A`
    }
]);

export const getProfileAvatarStyles = (theme) => ([
    profileAvatar,
    {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
        boxShadow: theme.shadows[4]
    }
]);

export const getSectionCardStyles = (theme) => ([
    sectionCard,
    {
        background: `linear-gradient(135deg, ${theme.palette.primary.main}03 0%, ${theme.palette.secondary.main}03 100%)`,
        border: `1px solid ${theme.palette.primary.main}1A`,
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[8],
            border: `1px solid ${theme.palette.primary.main}33`
        }
    }
]);

export const getSectionIconStyles = (theme) => ([
    sectionIcon,
    {
        backgroundColor: `${theme.palette.primary.main}1A`,
        color: theme.palette.primary.main
    }
]);

export const getSectionTitleStyles = (theme) => ([
    sectionTitle,
    {
        color: theme.palette.text.primary
    }
]);

export const getSkillChipStyles = (theme) => ([
    skillChip,
    {
        background: `linear-gradient(45deg, ${theme.palette.primary.main}14 0%, ${theme.palette.secondary.main}14 100%)`,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.primary.main}33`,
        '&:hover': {
            transform: 'scale(1.05)',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}26 0%, ${theme.palette.secondary.main}26 100%)`,
            boxShadow: theme.shadows[2]
        }
    }
]);

export const getPrimaryTextStyles = (theme) => ([
    experienceRole,
    {
        color: theme.palette.primary.main
    }
]);
export const logoStyles = {
    fontFamily: '"Roboto Slab", "Georgia", serif',
    fontWeight: 800,
    letterSpacing: ".2rem",
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)'
    }
};

export const tabsStyles = {
    '& .MuiTab-root': {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.95rem',
        minHeight: 64,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-2px)'
        }
    }
};

export const drawerHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: 2
};

export const listItemStyles = {
    borderRadius: 2,
    mx: 1,
    my: 0.5,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        transform: 'translateX(4px)'
    }
};
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