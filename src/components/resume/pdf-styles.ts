import { StyleSheet, Font } from '@react-pdf/renderer';

// Register Inter Font for Premium Look
// Note: Using built-in Helvetica fonts for better reliability
// If you want to use custom fonts, uncomment below and ensure fonts load properly
/*
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2', fontWeight: 700 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLu7AZ9hiA.woff2', fontWeight: 800 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuL67AZ9hiA.woff2', fontWeight: 900 },
  ]
});
*/

// Modern Color Palette - Refined for Print
export const colors = {
  white: '#FFFFFF',
  slate50: '#F8FAFC',
  slate100: '#F1F5F9',
  slate200: '#E2E8F0',
  slate300: '#CBD5E1',
  slate400: '#94A3B8',
  slate500: '#64748B',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1E293B',
  slate900: '#0F172A',
  blue500: '#3B82F6',
  blue600: '#2563EB', // Professional Primary
  blue700: '#1D4ED8',
  blue50: '#EFF6FF',
};

export const styles = StyleSheet.create({
  // Base Layout - A4 Optimized for 2 pages max
  page: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    lineHeight: 1.4,
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 40,
  },
  
  // Header Section - Compact
  header: {
    paddingBottom: 18,
    backgroundColor: colors.white,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.slate100,
    marginBottom: 12,
    alignItems: 'center',
    textAlign: 'center',
  },
  name: {
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 900,
    color: colors.slate900,
    marginBottom: 5,
    lineHeight: 1.1,
    letterSpacing: -0.5,
  },
  professionalTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 700,
    color: colors.slate700,
    marginBottom: 12,
    maxWidth: 400,
    lineHeight: 1.3,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    rowGap: 3,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  contactText: {
    fontSize: 7.5,
    color: colors.slate600,
    fontFamily: 'Helvetica',
  },
  contactSeparator: {
    fontSize: 7.5,
    color: colors.slate300,
    marginHorizontal: 0,
  },
  link: {
    textDecoration: 'none',
    color: colors.blue600,
  },

  // Main Container - Single Column
  mainContainer: {
    width: '100%',
  },
  
  // Section Headers - Compact
  section: {
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate900,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  sectionLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.slate200,
  },
  
  // Experience/Project/Item Lists - Compact
  itemsList: {
    width: '100%',
  },
  itemGroup: {
    marginBottom: 6,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  itemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
  },
  itemTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate900,
    lineHeight: 1.2,
  },
  itemDate: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate400,
    marginLeft: 8,
    textAlign: 'right',
  },
  itemCompany: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.blue600,
    marginBottom: 3,
  },
  itemLocation: {
    fontSize: 7.5,
    color: colors.slate400,
    marginLeft: 5,
  },
  itemDescription: {
    fontSize: 8.5,
    color: colors.slate700,
    lineHeight: 1.45,
  },
  
  // Skills Grid - Compact
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  skillItemFull: {
    width: '47%',
    marginBottom: 8,
  },
  skillTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate800,
    marginBottom: 2,
  },
  skillText: {
    fontSize: 8,
    color: colors.slate600,
    lineHeight: 1.35,
  },
  
  // Education List - Compact
  educationList: {
    width: '100%',
  },
  educationItemFull: {
    marginBottom: 10,
  },
  educationDegree: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate800,
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.blue600,
    marginBottom: 2,
  },
  educationDate: {
    fontSize: 8,
    color: colors.slate500,
  },
  
  // Bullet Points - Compact
  bullet: {
    width: 2.5,
    height: 2.5,
    backgroundColor: colors.slate300,
    borderRadius: 1.25,
    marginRight: 7,
    marginTop: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: colors.slate700,
    lineHeight: 1.5,
  },
  
  // Summary/Profile Section - Compact
  summaryText: {
    fontSize: 9,
    color: colors.slate700,
    lineHeight: 1.55,
    textAlign: 'justify',
  },
});
