'use client';

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ResumeDownloadButtonProps {
  resume: any;
}

const ResumeDownloadButton = ({ resume }: ResumeDownloadButtonProps) => {
  if (!resume) return null;

  return (
    <PDFDownloadLink
      document={<ResumePDF resume={resume} />}
      fileName={`${resume.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`}
    >
      {/* @ts-ignore */}
      {({ blob, url, loading, error }: any) => (
        <Button 
          disabled={loading}
          className="h-10 px-6 rounded-xl font-bold gap-2 shadow-lg shadow-blue-500/20 bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all text-xs"
        >
          <Download className="w-4 h-4" /> 
          {loading ? 'Preparing PDF...' : 'Save as PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

export default ResumeDownloadButton;
