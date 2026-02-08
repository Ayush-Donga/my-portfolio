'use client';

import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import { Button } from '@/components/ui/button';
import { Download, Printer } from 'lucide-react';
import { toast } from 'sonner';

interface ResumeDownloadButtonProps {
  resume: any;
}

const ResumeDownloadButton = ({ resume }: ResumeDownloadButtonProps) => {
  const [pdfError, setPdfError] = useState(false);

  if (!resume) return null;

  const handlePrintFallback = () => {
    toast.info('Using browser print instead. Save as PDF from the print dialog.');
    window.print();
  };

  if (pdfError) {
    return (
      <Button 
        onClick={handlePrintFallback}
        className="h-10 px-6 rounded-xl font-bold gap-2 shadow-lg shadow-blue-500/20 bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all text-xs"
      >
        <Printer className="w-4 h-4" /> 
        Print as PDF
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={<ResumePDF resume={resume} />}
      fileName={`${resume.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`}
    >
      {/* @ts-ignore */}
      {({ blob, url, loading, error }: any) => {
        // If there's an error, show the print fallback
        if (error) {
          console.error('PDF generation error:', error);
          setPdfError(true);
          return null;
        }

        return (
          <Button 
            disabled={loading}
            onClick={() => {
              if (!loading && !url) {
                toast.error('PDF generation failed. Using print instead.');
                handlePrintFallback();
              }
            }}
            className="h-10 px-6 rounded-xl font-bold gap-2 shadow-lg shadow-blue-500/20 bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all text-xs"
          >
            <Download className="w-4 h-4" /> 
            {loading ? 'Preparing PDF...' : 'Save as PDF'}
          </Button>
        );
      }}
    </PDFDownloadLink>
  );
};

export default ResumeDownloadButton;
