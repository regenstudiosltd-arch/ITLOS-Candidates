import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Download, Eye } from 'lucide-react';
import brochureImage from '../imports/slyvia_background.png';

export default function App() {
  const brochurePdf = '/ITLOS_BROCHURE_DRAFT_104.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochurePdf;
    link.download = 'ITLOS_Brochure_Dr_Sylvia_Ama_Adusu.pdf';
    link.click();
  };

  const handleReadOnline = () => {
    window.open(brochurePdf, '_blank');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl w-full">
        <div className="flex-1 flex justify-center w-full">
          <ImageWithFallback
            src={brochureImage}
            alt="Dr. Sylvia Ama Adusu - ITLOS Candidate"
            className="w-full max-w-lg h-auto rounded-lg shadow-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-start gap-6 w-full max-w-xl px-4">
          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={handleReadOnline}
              className="inline-flex items-center justify-center gap-3 bg-[#1B4332] text-white px-8 py-4 rounded-lg border-2 border-[#D4AF37] hover:bg-[#2D6A4F] transition-all shadow-lg hover:shadow-xl"
            >
              <Eye className="w-5 h-5" />
              Read Brochure Online
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1B4332] px-8 py-4 rounded-lg border-2 border-[#D4AF37] hover:bg-gray-50 transition-all shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Brochure (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}