import React, { useState } from 'react';
import { Globe2, Info, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Data structure for multiple timelines
const timelineGroups = {
  publicService: {
    id: 'publicService',
    title: {
      en: 'Public Service Reforms in Nepal',
      ne: 'नेपालमा सार्वजनिक सेवा सुधार'
    },
    data: [
       {
    year: "Rana Period | राणा काल",
    title: {
      en: "Introduction of Public Complaint Boxes",
      ne: "सार्वजनिक उजुरी पेटिकाको सुरुवात"
    },
    description: {
      en: "Dev Shamsher introduced complaint boxes in public places to hear public grievances directly.",
      ne: "देव शम्शेरले सार्वजनिक स्थलहरूमा उजुरी पेटिका राखी जनगुनासा आफैले सुनुवाइ गर्न थालेका थिए।"
    },
    category: "complaint"
  },
 
  {
    year: "Present | वर्तमान",
    title: {
      en: "Digital Governance",
      ne: "डिजिटल शासन"
    },
    description: {
      en: "Implementation of e-governance through Nagarik Apps, Mero Kitta, and PSC Mobile App.",
      ne: "नागरिक एप्स, मेरो कित्ता, लोक सेवा आयोगको मोबाइल एप्स र अनलाइन सेवाहरूको कार्यान्वयन।"
    },
    category: "digital"
  }
    ]
  },
  administrativeReform: {
    id: 'administrativeReform',
    title: {
      en: 'Administrative Reforms in Nepal',
      ne: 'नेपालमा प्रशासन सुधार'
    },
    data: [
      {
year: "2009 BS | २००९",
title: {
en: "Administrative Reorganization Committee (Buch Commission)",
ne: "प्रशासनिक पुनर्गठन समिति (बुच कमिशन)"
},
description: {
en: "• Known as 'Buch Commission'\n• Led by N.M. Buch (sent by Indian Government)\n <span style=\"text-decoration: underline;\">मुख्य सिफारिसहरू</span> Key recommendations: <*/span>\n   • New appointments only through Public Service Commission consultation\n   • Review of staff benefits through Public Service Commission\n   • Implementation of decentralization system\n   • Formulation of civil service and financial administration laws\n   • Reorganization of ministries and departments, limiting ministries to 11\n   • Conduct examinations for staff management\n   • Provision of staff training\n   • Investigation measures for corruption\n   • Replacement of Cabinet Secretary system with Chief Secretary\n   • Gradual improvement of law and legal procedures\n   • Recruitment of high-ranking officers from India",
ne: "• बुच कमिशनको नामले चिनिन्छ\n• एन.एम. बुचको नेतृत्वमा गठित (भारत सरकारद्वारा पठाइएको)\n <span style=\"text-decoration: underline;\">मुख्य सिफारिसहरू</span> मुख्य सिफारिसहरू:</span>\n   • लोक सेवा आयोगको परामर्शबाट मात्र नयाँ कर्मचारीको नियुक्ति हुनुपर्ने\n   • कर्मचारीहरूको तलब सुविधाको पुनरावलोकन लोक सेवा आयोगबाट गर्ने\n   • विकेन्द्रीकरणको व्यवस्था अवलम्बन गर्नुपर्ने\n   • निजामती प्रशासन र आर्थिक प्रशासनसम्बन्धी कानूनको तर्जुमा गर्नुपर्ने\n   • मन्त्रालय र विभागको पुनर्गठन गर्ने मन्त्रालयको संख्या ११ वटामा सीमित गर्ने\n   • कर्मचारीको व्यवस्थापन गर्न परीक्षा संचालन गरिनुपर्ने\n   • कर्मचारीलाई तालिमको व्यवस्था गर्ने\n   • भ्रष्टाचारको जाँच गर्ने उपायहरू खोज्नुपर्ने\n   • प्रमुख सचिवको व्यवस्था गरी क्याबिनेट सेक्रेटरीको प्रणाली हटाउनुपर्ने\n   • कानून र कानूनी प्रक्रियाको सुधार क्रमिक रूपमा गरिनुपर्ने\n   • उच्चपदस्थ अधिकृतहरू भारतबाट ल्याउनुपर्ने"
},
category: "reform"
},

{
year: "2061 BS | २०६१",
title: {
en: "High-Level Salary Commission",
ne: "उच्चस्तरीय तलब आयोग"
},
description: {
en: "• Chairman: Former Chief Secretary Dr. Bharat Bahadur Pradhan\n• Key recommendations:\n   • Rotate annual grade increment between junior and senior levels\n   • Provide 2-4 level provisions for positions with no promotion prospects\n   • Benefits including educational allowance, transportation allowance, life insurance\n   • Consider four family members per employee with 4 consumer units when determining salary\n   • Maintain existing 1:5 ratio in employee salary differences",
ne: "• अध्यक्ष: पूर्व मुख्य सचिव डा. भरत बहादुर प्रधान\n• मुख्य सिफारिसहरू:\n   • वार्षिक ग्रेड वृद्धिलाई कनिष्ठ-ज्येष्ठ बीचको फरक घुमाउने\n   • बढुवाको कुनै गुञ्जाइस नभएका पदहरुमा २ देखि ४ तहसम्मको व्यवस्था\n   • शैक्षिक भत्ता, परिवहन भत्ता, जीवन बीमा आदि सुविधाहरू\n   • कर्मचारी तथा राष्ट्रसेवकको तलबमान निर्धारण गर्दा प्रति परिवार चार सदस्य मान्ने र ४ सदस्यको उपभोक्ता इकाई हुनुपर्ने\n   • कर्मचारीको तलब अन्तर अनुपात १:५ लाई यथावत राख्नुपर्ने"
},
category: "pay-commission"
}
    ]
  },
 attorneyGeneral: {
    id: 'attorneyGeneral',
    title: {
      en: 'Historical Development of Attorney General in Nepal',
      ne: 'नेपालमा सार्वजनिक सेवा सुधार'
    },
    data: [
  {
    "year": "1947 | २००४",
    "title": {
      "en": "First Constitutional Provision",
      "ne": "पहिलो संवैधानिक व्यवस्था"
    },
    "description": {
      "en": "Nepal Government Act 2004 BS, under Article 12, made first provision for appointment of Chief Legal Advisors (Pradhan Kanuni Sallahakar). However, the Act was never implemented.",
      "ne": "नेपाल सरकार वैधानिक कानुन, २००४ को धारा १२ मा प्रधान कानुनी सल्लाहकारहरुको नियुक्ति गर्ने व्यवस्था गरियो। तर यो कानुन कार्यान्वयनमा नआएकोले कुनै नियुक्ति भएन।"
    },
    "category": "constitutional"
  },
 
  {
    "year": "2015 | २०७२",
    "title": {
      "en": "Current Constitutional Framework",
      "ne": "वर्तमान संवैधानिक संरचना"
    },
    "description": {
      "en": "Constitution of Nepal, Articles 157-159 established current framework. Attorney General appointed by President on PM's recommendation. Given status equal to Supreme Court Justice with comprehensive authority over public prosecution.",
      "ne": "नेपालको संविधानको धारा १५७-१५९ ले वर्तमान व्यवस्था गर्यो। प्रधानमन्त्रीको सिफारिसमा राष्ट्रपतिबाट महान्यायाधिवक्ताको नियुक्ति हुने, सर्वोच्च अदालतको न्यायाधीश सरहको सुविधा र सार्वजनिक अभियोजनमा व्यापक अधिकार प्रदान गर्यो।"
    },
    "category": "constitutional"
  }
]
 }
};
const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5"; // Reduced icon size
  const getColor = () => {
    switch (category) {
      case 'complaint': return 'text-red-500';
      case 'administration': return 'text-blue-500';
      case 'monitoring': return 'text-purple-500';
      case 'governance': return 'text-green-500';
      case 'service': return 'text-orange-500';
      case 'digital': return 'text-cyan-500';
      case 'planning': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };
  
  return (
    <div className={`${getColor()} p-1.5 rounded-full bg-opacity-10 bg-current`}>
      <Info className={iconClass} />
    </div>
  );
};

const HoverCard = ({ description, title, containerRef, isHovered }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  if (!isHovered) return null;
  
  return (
    <div 
      className="ml-2 mt-2"
      ref={containerRef}
    >
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-sm text-gray-600">
            {isFlipped ? 'नेपाली' : 'English'}
          </h4>
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Switch language"
          >
            <Languages className="w-4 h-4 text-blue-600" />
          </button>
        </div>
        <div className="relative min-h-[60px]">
          <div className={`transition-opacity duration-300 ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          }`}>
            <p className="text-sm text-gray-700">{description.en}</p>
          </div>
          <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
            isFlipped ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-gray-700">{description.ne}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineEntry = ({ data, isActive, onClick, index, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverContainerRef = React.useRef(null);
  const timelineEntryRef = React.useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = (e) => {
    const timelineRect = timelineEntryRef.current?.getBoundingClientRect();
    const hoverRect = hoverContainerRef.current?.getBoundingClientRect();
    
    if (timelineRect && hoverRect) {
      const isMovingToHoverCard = 
        e.clientX >= hoverRect.left && 
        e.clientX <= hoverRect.right && 
        e.clientY >= Math.min(timelineRect.top, hoverRect.top) && 
        e.clientY <= Math.max(timelineRect.bottom, hoverRect.bottom);
      
      if (!isMovingToHoverCard) {
        setIsHovered(false);
      }
    }
  };

  return (
    <div className="relative group" ref={timelineEntryRef}>
      <div className="flex items-start gap-3">
        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200" />
        
        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        } text-sm`}>
          {index + 1}
        </div>

        <div className="flex-1 pb-6">
          <div className="flex flex-col md:flex-row gap-2">
            <div 
              className={`cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-50 border-blue-500 shadow-sm' 
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              } border rounded-lg p-3 flex items-center gap-3 md:w-64`}
              onClick={onClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CategoryIcon category={data.category} />
              <div>
                <div className="font-medium text-base">{data.year}</div>
                <div className={`text-sm ${isActive ? 'text-blue-800' : 'text-gray-600'}`}>
                  {language === 'en' ? data.title.en : data.title.ne}
                </div>
              </div>
            </div>

            <div 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={() => setIsHovered(false)}
            >
              <HoverCard 
                description={data.description} 
                title={data.title}
                containerRef={hoverContainerRef}
                isHovered={isHovered}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ timelineData, title, language, isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isActive) return null;

  return (
    <Card className="w-full max-w-3xl mx-auto mb-8">
      <CardContent className="p-4">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          {language === 'en' ? title.en : title.ne}
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {timelineData.map((entry, index) => (
            <TimelineEntry
              key={entry.year}
              data={entry}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              index={index}
              language={language}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

function App() {
  const [language, setLanguage] = useState('en');
  const [activeTimeline, setActiveTimeline] = useState(Object.keys(timelineGroups)[0]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ne' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 px-3">
      <div className="w-full max-w-3xl mx-auto mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
          >
            <Globe2 className="w-5 h-5 text-blue-600" />
            <span className="font-medium">
              {language === 'en' ? 'नेपाली' : 'English'}
            </span>
          </button>

          <div className="flex gap-2 flex-wrap justify-center">
            {Object.values(timelineGroups).map((timeline) => (
              <button
                key={timeline.id}
                onClick={() => setActiveTimeline(timeline.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTimeline === timeline.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                } border border-blue-200`}
              >
                {language === 'en' ? timeline.title.en : timeline.title.ne}
              </button>
            ))}
          </div>
        </div>
      </div>

      {Object.values(timelineGroups).map((timeline) => (
        <Timeline
          key={timeline.id}
          timelineData={timeline.data}
          title={timeline.title}
          language={language}
          isActive={activeTimeline === timeline.id}
        />
      ))}
    </div>
  );
}

export default App;
