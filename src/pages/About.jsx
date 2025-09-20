import { Box, Chip, Card, Avatar, Typography, Container, Grid, Divider, Paper, Stack, useTheme } from "@mui/material"
import { LocationOn, CalendarToday, Work, School,EmojiEvents,Code } from "@mui/icons-material"
import { sectionHeader, sectionDivider, itemDivider, awardContent, experienceCompany,
          awardDetails, awardTitle, awardPlacerChip, awardDate, profileName, profileInfoItem,
          profileDescription, getAboutTitleStyles, getProfileCardStyles, getProfileAvatarStyles, 
          getSectionCardStyles, getSectionIconStyles, getSectionTitleStyles, getSkillChipStyles, 
          getPrimaryTextStyles, display, flexDirection, gap, padding, textAlign, container_col, flexWrap,
          width,
} from "../styling/global-style"
import { personalData } from '../data/personal';

export default function About() {
  const theme = useTheme()
  const initials = personalData.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase()

  const SectionCard = ({ icon, title, children }) => (
    <Card sx={getSectionCardStyles(theme)}>
      <Stack spacing={2}>
        <Box sx={sectionHeader}>
          <Box sx={getSectionIconStyles(theme)}>
            {icon}
          </Box>
          <Typography variant="h6" sx={getSectionTitleStyles(theme)}>
            {title}
          </Typography>
        </Box>
        <Divider sx={sectionDivider} />
        {children}
      </Stack>
    </Card>
  )

  return (
    <Container sx={[padding(5), container_col, gap(2)]}>
      <Box sx={[textAlign("center")]}>
        <Typography
          variant="h3"
          component="h1"
          sx={getAboutTitleStyles(theme)}
        >
          About the Developer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Full Stack Developer | Software Developer | Game Developer | Mobile Developer
        </Typography>
      </Box>

      <Paper sx={getProfileCardStyles(theme)}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Avatar sx={getProfileAvatarStyles(theme)}>
              {initials}
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={profileName}>
              {personalData.name}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <Box sx={profileInfoItem}>
                <LocationOn color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  {personalData.location}
                </Typography>
              </Box>
              <Box sx={profileInfoItem}>
                <CalendarToday color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  Born {personalData.birthday}
                </Typography>
              </Box>
            </Stack>

            <Typography variant="body1" sx={profileDescription}>
              Hi! I'm {personalData.name.split(' ')[0]}, a Full Stack developer from {personalData.location}.
              I build web apps using React, JavaScript and modern tools. This Bookshelf project
              is a small portfolio app that demonstrates my work with React + Vite + Material UI and
              various frontend patterns.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ mb: 4 }}>
        <SectionCard icon={<Code />} title="Technical Skills">
          <Box sx={[display('flex'), flexWrap('wrap'), gap(0.5)]}>
            {personalData.skills.map((skill) => (
              <Chip key={skill} label={skill} sx={getSkillChipStyles(theme)} />
            ))}
          </Box>
        </SectionCard>
      </Box>

      <SectionCard icon={<School />} title="Education">
        <Box>
          <Typography variant="subtitle1" sx={getPrimaryTextStyles(theme)}>
            {personalData.education.course}
          </Typography>
          <Typography variant="body2" sx={[experienceCompany, { mt: 0.5 }]}>
            {personalData.education.school}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Graduated {personalData.education.graduated_at}
          </Typography>
        </Box>
      </SectionCard>

      <Box sx={[display('flex'), flexDirection({xs: 'column', lg: 'row'}), flexWrap({xs: "wrap", lg: "nowrap"}), gap(2)]}>
        <Box sx={[width({sm: '100%', lg: '50%'})]}>
          <SectionCard icon={<Work />} title="Experience">
            <Stack spacing={2.5}>
              {personalData.experience.map((exp, idx) => (
                <Box key={idx}>
                  <Typography variant="subtitle1" sx={getPrimaryTextStyles(theme)}>
                    {exp.role}
                  </Typography>
                  <Typography variant="body2" sx={experienceCompany}>
                    {exp.company}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {exp.period}
                  </Typography>
                  {idx < personalData.experience.length - 1 && (
                    <Divider sx={itemDivider} />
                  )}
                </Box>
              ))}
            </Stack>
          </SectionCard>
        </Box>

        <Box sx={[width({sm: '100%', lg: '50%'})]}>
          <SectionCard icon={<EmojiEvents />} title="Awards & Achievements">
            <Stack spacing={1.5}>
              {personalData.awards.map((award, i) => (
                <Box key={i}>
                  <Box sx={awardContent}>
                    <Box sx={awardDetails}>
                      <Typography variant="body2" sx={awardTitle}>
                        {award.award}
                      </Typography>
                      {award.placer && (
                        <Chip label={award.placer} sx={awardPlacerChip} />
                      )}
                    </Box>
                    <Typography variant="caption" sx={awardDate}>
                      {award.date}
                    </Typography>
                  </Box>
                  {i < personalData.awards.length - 1 && (
                    <Divider sx={[itemDivider, { mt: 1.5 }]} />
                  )}
                </Box>
              ))}
            </Stack>
          </SectionCard>
        </Box>
      </Box>
    </Container>
  )
}