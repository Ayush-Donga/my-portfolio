import React from 'react';
import { Page, Text, View, Document, Link as PdfLink } from '@react-pdf/renderer';
import { styles, colors } from './pdf-styles';

// Helper to decode HTML entities
const decodeHtml = (html: string) => {
  if (!html) return '';
  return html
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&bull;/g, '•')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—');
};

// Enhanced HTML Renderer for better content parsing
const HtmlRenderer = ({ html, style, isBullet = false }: { html: string; style?: any; isBullet?: boolean }) => {
  if (!html) return null;

  const decodedHtml = decodeHtml(html);

  // Handle bullet lists with improved rendering
  if (decodedHtml.includes('<ul>') || decodedHtml.includes('<li>')) {
    const parts = decodedHtml.split(/<\/?li>/).filter(p => {
       const clean = p.replace(/<[^>]+>/g, '').trim();
       return clean.length > 0 && !p.includes('<ul>') && !p.includes('</ul>');
    });
    
    if (parts.length > 0) {
      return (
        <View style={style}>
          {parts.map((part, index) => {
             const cleanText = part.replace(/<[^>]+>/g, '').trim();
             if (!cleanText) return null;
             return (
               <View key={index} style={styles.bulletRow}>
                 <View style={styles.bullet} />
                 <Text style={styles.bulletText}>{cleanText}</Text>
               </View>
             );
          })}
        </View>
      );
    }
  }

  // Fallback for plain text/paragraphs
  const cleanText = decodedHtml
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .trim();
    
  return <Text style={style}>{cleanText}</Text>;
};

export const ResumePDF = ({ resume }: { resume: any }) => {
  if (!resume) return null;
  const { personalInfo, content } = resume;

  // Render all sections in a single column flow
  const allSections = content;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* HEADER - Premium Design */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.fullName}</Text>
          <Text style={styles.professionalTitle}>{personalInfo.professionalTitle}</Text>
          
          <View style={styles.contactRow}>
            {personalInfo.email && (
              <View style={styles.contactItem}>
                 <Text style={styles.contactText}>{personalInfo.email}</Text>
              </View>
            )}
            {personalInfo.phone && (
              <>
                <Text style={styles.contactSeparator}>|</Text>
                <View style={styles.contactItem}>
                   <Text style={styles.contactText}>{personalInfo.phone}</Text>
                </View>
              </>
            )}
            {personalInfo.location && (
              <>
                <Text style={styles.contactSeparator}>|</Text>
                <View style={styles.contactItem}>
                    <Text style={styles.contactText}>{personalInfo.location}</Text>
                </View>
              </>
            )}
            {personalInfo.linkedin && (
              <>
                <Text style={styles.contactSeparator}>|</Text>
                <View style={styles.contactItem}>
                  <PdfLink src={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} style={styles.link}>
                     <Text style={styles.contactText}>LinkedIn</Text>
                  </PdfLink>
                </View>
              </>
            )}
            {personalInfo.github && (
              <>
                <Text style={styles.contactSeparator}>|</Text>
                <View style={styles.contactItem}>
                  <PdfLink src={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`} style={styles.link}>
                     <Text style={styles.contactText}>GitHub</Text>
                  </PdfLink>
                </View>
              </>
            )}
          </View>
        </View>

        <View style={styles.mainContainer}>
          
          {/* PROFESSIONAL PROFILE */}
          {personalInfo.summary && (
            <View style={styles.section} wrap={false}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>PROFESSIONAL PROFILE</Text>
                <View style={styles.sectionLine} />
              </View>
              <HtmlRenderer html={personalInfo.summary} style={styles.summaryText} />
            </View>
          )}

          {/* ALL SECTIONS IN SINGLE COLUMN */}
          {allSections.map((section: any) => (
            <View key={section.id} style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{section.heading}</Text>
                <View style={styles.sectionLine} />
              </View>
              
              {section.type === 'skills' ? (
                <View style={styles.skillsGrid}>
                  {section.items.map((item: any) => (
                    <View key={item.id} style={styles.skillItemFull} wrap={false}>
                      <Text style={styles.skillTitle}>{item.title}</Text>
                      <HtmlRenderer html={item.subskills || item.description} style={styles.skillText} />
                    </View>
                  ))}
                </View>
              ) : section.type === 'education' ? (
                <View style={styles.educationList}>
                  {section.items.map((item: any) => (
                    <View key={item.id} style={styles.educationItemFull} wrap={false}>
                      <View style={styles.itemHeader}>
                        <Text style={styles.itemTitle}>{item.degree || item.title}</Text>
                        <Text style={styles.itemDate}>
                          {item.startDate} {item.endDate ? `— ${item.endDate}` : (!item.startDate ? '' : '— Present')}
                        </Text>
                      </View>
                      <Text style={styles.itemCompany}>{item.school || item.company}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <View style={styles.itemsList}>
                  {section.items.map((item: any) => (
                    <View key={item.id} style={styles.itemGroup} wrap={false}>
                      <View style={styles.itemHeader}>
                        <View style={styles.itemTitleContainer}>
                           <Text style={styles.itemTitle}>{item.title || item.degree}</Text>
                           {item.link && (
                             <PdfLink src={item.link} style={styles.link}>
                               <Text style={{ fontSize: 9, color: colors.blue600 }}>↗</Text>
                             </PdfLink>
                           )}
                        </View>
                        <Text style={styles.itemDate}>
                          {item.startDate} {item.endDate ? `— ${item.endDate}` : (!item.startDate ? '' : '— Present')}
                        </Text>
                      </View>
                      
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.itemCompany}>
                          {item.company || item.school || item.subtitle}
                        </Text>
                        {item.location && (
                          <Text style={styles.itemLocation}>• {item.location}</Text>
                        )}
                      </View>

                      {item.description && (
                        <HtmlRenderer html={item.description} style={styles.itemDescription} isBullet={true} />
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
