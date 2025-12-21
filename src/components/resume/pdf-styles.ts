import { StyleSheet, Font } from '@react-pdf/renderer';

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
  // Base Layout - A4 Optimized for multi-page
  page: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.45,
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 50,
  },
  
  // Header Section - Perfect Balance
  header: {
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.slate200,
    marginBottom: 25,
  },
  name: {
    fontSize: 25,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate900,
    marginBottom: 4,
    lineHeight: 1.1,
    letterSpacing: -0.2,
  },
  professionalTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.blue600,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    rowGap: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contactText: {
    fontSize: 8.2,
    color: colors.slate600,
    fontFamily: 'Helvetica',
  },
  contactSeparator: {
    fontSize: 8.2,
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
  
  // Section Headers
  section: {
    marginBottom: 22,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate900,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
  },
  sectionLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.slate200,
  },
  
  // Experience/Project/Item Lists
  itemsList: {
    width: '100%',
  },
  itemGroup: {
    marginBottom: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  itemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate900,
    lineHeight: 1.2,
  },
  itemDate: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate400,
    marginLeft: 10,
    textAlign: 'right',
  },
  itemCompany: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.blue600,
    marginBottom: 4,
  },
  itemLocation: {
    fontSize: 8,
    color: colors.slate400,
    marginLeft: 6,
  },
  itemDescription: {
    fontSize: 9,
    color: colors.slate700,
    lineHeight: 1.5,
  },
  
  // Skills Grid
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  skillItemFull: {
    width: '47%',
    marginBottom: 12,
  },
  skillTitle: {
    fontSize: 9.2,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate800,
    marginBottom: 3,
  },
  skillText: {
    fontSize: 8.5,
    color: colors.slate600,
    lineHeight: 1.4,
  },
  
  // Education List
  educationList: {
    width: '100%',
  },
  educationItemFull: {
    marginBottom: 14,
  },
  educationDegree: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.slate800,
    marginBottom: 3,
  },
  educationSchool: {
    fontSize: 9.2,
    fontFamily: 'Helvetica-Bold',
    color: colors.blue600,
    marginBottom: 2,
  },
  educationDate: {
    fontSize: 8.5,
    color: colors.slate500,
  },
  
  // Bullet Points
  bullet: {
    width: 3,
    height: 3,
    backgroundColor: colors.slate300,
    borderRadius: 1.5,
    marginRight: 8,
    marginTop: 5,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  bulletText: {
    flex: 1,
    fontSize: 9.2,
    color: colors.slate700,
    lineHeight: 1.55,
  },
  
  // Summary/Profile Section
  summaryText: {
    fontSize: 9.5,
    color: colors.slate700,
    lineHeight: 1.6,
    textAlign: 'justify',
  },
});
