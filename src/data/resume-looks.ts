// The walking figure's looks on the resume, by frame name in public/icon/walking (walking-<id>.svg). The page cycles
// through them; scripts/resume-pdf.mjs prints one PDF per look, so the download matches the look on screen.
export const LOOKS = ['default', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const pdfFor = (id: string) => (id === 'default' ? '/Yixi-Chris-Wu-Resume.pdf' : `/Yixi-Chris-Wu-Resume-${id}.pdf`);
