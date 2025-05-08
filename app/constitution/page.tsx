import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import type { NextPage } from 'next';
import MainHeader from "@/app/components/MainHeader";
import constitutionData from '@/data/constitution.json';

export const metadata = {
  title: "ASI UK | Constitution",
  description:
      "Founding document of the UK chapter of Adventist Laymen's Services and Industries",
  keywords: [
    "ASI UK constitution",
    "ASI constitution",
    "ASI",
    "ASI UK",
    "ASI-UK",
    "adventist",
    "adventist uk",
    "adventist laymen's services and industries",
    "ministry",
    "ministries",
  ],
  openGraph: {
    url: "https://asiuk.org/constitution",
    type: "website",
    title: "ASI UK Constitution",
    description:
        "Learn more about the ASI UK organisational structure and founding principles",
    images: [
      {
        url: "https://www.asiuk.org/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "ASIUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ASI UK Constitution",
    description:
        "Learn more about the ASI UK organisational structure and founding principles",
    images: [
      {
        url: "https://www.asiuk.org/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "ASIUK"
      }
    ]
  },
};

// Type definitions
type Definition = {
  term: string;
  definition: string;
};

type Subsection = {
  number: string;
  text: string;
};

type Section = {
  type: string;
  number: string;
  text: string;
  subsections?: Subsection[];
};

type Article = {
  number: number;
  title: string;
  content: any[];
};

type ConstitutionData = {
  title: string;
  subtitle: string;
  version: string;
  lastUpdated: string;
  articles: Article[];
  metadata: {
    commitId: string;
    lastCommitDate: string;
  };
};

const Constitution: NextPage = () => {
  const constitution = constitutionData as ConstitutionData;

  // Render definition list (Article 1)
  const renderDefinitions = (article: Article) => {
    const definitionList = article.content[0];
    if (!definitionList || !definitionList.items) return null;

    return (
        <ul className="list-none leading-normal text-sm md:text-base text-black font-normal">
          {definitionList.items.map((item: Definition, idx: number) => (
              <li key={idx} className="mb-4">
                <p>&ldquo;<strong>{item.term}</strong>&rdquo; {item.definition}</p>
              </li>
          ))}
        </ul>
    );
  };

  // Render simple paragraph (Article 7)
  const renderParagraph = (article: Article) => {
    const paragraph = article.content[0];
    if (!paragraph || !paragraph.text) return null;

    return (
        <p className="text-sm md:text-base text-black font-normal">
          {paragraph.text}
        </p>
    );
  };

  // Render sections with subsections (all other articles)
  const renderSections = (article: Article) => {
    if (!article.content || article.content.length === 0) return null;

    return (
        <div className="text-sm md:text-base text-black font-normal">
          {article.content
              .filter(item => item.type === 'section')
              .map((section: Section, idx: number) => (
                  <div key={idx} className="mb-4">
                    {/* Two-column layout for section */}
                    <div className="flex">
                      <div className="w-12 md:w-14 flex-shrink-0 font-normal text-asi-blue text-left pr-3">
                        {section.number}
                      </div>
                      <div className="flex-grow">
                        {section.text}
                      </div>
                    </div>

                    {/* Subsections with two-column layout */}
                    {section.subsections && section.subsections.length > 0 && (
                        <div className="mt-2">
                          {section.subsections.map((subsection: Subsection, subIdx: number) => (
                              <div key={subIdx} className="flex mb-2">
                                <div className="w-12 md:w-14 flex-shrink-0 font-medium invisible">
                                  {/* Invisible spacer to align with section above */}
                                </div>
                                <div className="flex flex-grow">
                                  <div className="w-16 md:w-18 flex-shrink-0 font-normal text-asi-blue text-left pr-3">
                                    {subsection.number}
                                  </div>
                                  <div className="flex-grow">
                                    {subsection.text}
                                  </div>
                                </div>
                              </div>
                          ))}
                        </div>
                    )}
                  </div>
              ))
          }
        </div>
    );
  };

  // GitHub links
  const historyUrl = `https://github.com/asi-uk-admin/asi-uk/commits/main/data/constitution.json`;
  const viewFileUrl = `https://github.com/asi-uk-admin/asi-uk/blob/main/data/constitution.json`;


  return (
      <div className="flex items-center justify-center w-screen">
        <div className="max-w-screen-md mx-auto">
          <div className="text-left p-5">
            {/* Header */}
            <h1 className="text-asi-blue text-3xl md:text-4xl font-bold mb-2">
              {constitution.title}
            </h1>
            <h2 className="italic mb-4">{constitution.subtitle}</h2>

            {/* GitHub Version Badge */}
            <div className="mb-6 flex flex-wrap gap-2 items-center">
              <a
                  href={historyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1 rounded-full"
              >
                <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                View Change History
              </a>
              <a
                  href={viewFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z" clipRule="evenodd"></path>
                </svg>
                View Source
              </a>
              <span className="text-sm text-gray-500 print:inline hidden">
              For revision history, visit: {historyUrl}
            </span>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              {constitution.articles.map((article) => (
                  <div key={article.number}>
                    {/* Two-column layout for article title */}
                    <div className="flex my-4">
                      <div className="w-12 md:w-14 flex-shrink-0 text-xl md:text-2xl text-asi-blue font-semibold text-left pr-3">
                        {article.number}.
                      </div>
                      <h2 className="flex-grow text-xl md:text-2xl text-asi-blue font-semibold">
                        {article.title}
                      </h2>
                    </div>

                    {/* Different rendering based on article type */}
                    {article.number === 1 && (
                        <div className="pl-12 md:pl-14">
                          {renderDefinitions(article)}
                        </div>
                    )}
                    {article.number === 7 && (
                        <div className="pl-12 md:pl-14">
                          {renderParagraph(article)}
                        </div>
                    )}
                    {article.number !== 1 && article.number !== 7 && renderSections(article)}
                  </div>
              ))}
            </div>

          </div>
        </div>
      </div>
  );
};

export default Constitution;