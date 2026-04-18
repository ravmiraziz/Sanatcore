'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getServiceBySlug, PlaylistItem } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceDetailContent({ slug, initialService }: { slug: string, initialService: any }) {
  const { isHydrated, language } = useLanguage();

  const service = isHydrated ? getServiceBySlug(slug, language) : initialService;

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  if (!service) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Not Found</h1>
          <Link href="/services" className="text-black underline">Back</Link>
        </div>
      </section>
    );
  }

  const playlist: PlaylistItem[] = service.playlist || [];
  const activeVideo = playlist.length > 0 ? playlist[activeVideoIndex] : null;

  function getYoutubeId(url?: string) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  // Fallback: if no playlist, use single videoUrl
  const singleVideoId = !playlist.length ? getYoutubeId(service.videoUrl) : null;
  const currentVideoId = activeVideo?.videoId || singleVideoId;

  const getBackLabel = () => {
    switch (language) {
      case 'uz': return '← Xizmatlarga qaytish';
      case 'en': return '← Back to services';
      default: return '← Назад к услугам';
    }
  };

  const getIncludesLabel = () => {
    switch (language) {
      case 'uz': return 'O\'z ichiga oladi:';
      case 'en': return 'Includes:';
      default: return 'Включает в себя:';
    }
  };

  const getUsesLabel = () => {
    switch (language) {
      case 'uz': return 'Quyidagilar uchun ishlatiladi:';
      case 'en': return 'Used for:';
      default: return 'Используется для:';
    }
  };

  const getProjectLabel = () => {
    switch (language) {
      case 'uz': return 'Loyiha namunalari:';
      case 'en': return 'Project examples:';
      default: return 'Примеры проектов:';
    }
  };

  const getPlaylistCountLabel = (count: number) => {
    switch (language) {
      case 'uz': return `${count} ta video`;
      case 'en': return `${count} videos`;
      default: return `${count} видео`;
    }
  };

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
          {getBackLabel()}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          {service.title}
        </h1>

        <div className="max-w-6xl space-y-12">
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>

          {(service.features && service.features.length > 0) && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{getIncludesLabel()}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                {service.features.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {(service.uses && service.uses.length > 0) && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{getUsesLabel()}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                {service.uses.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* YouTube Playlist Player */}
          {(playlist.length > 0 || singleVideoId) && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{getProjectLabel()}</h2>
              
              {playlist.length > 1 ? (
                /* Full playlist UI with sidebar */
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#0f0f0f]">
                  <div className="flex flex-col lg:flex-row">
                    {/* Main Video Player */}
                    <div className="flex-1 min-w-0">
                      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${currentVideoId}?rel=0&modestbranding=1`}
                          title={activeVideo?.title || 'YouTube video player'}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      {/* Video title below player */}
                      <div className="px-4 py-3 lg:px-6 lg:py-4">
                        <h3 className="text-white text-base lg:text-lg font-semibold truncate">
                          {activeVideo?.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">SANATCORE</p>
                      </div>
                    </div>

                    {/* Playlist Sidebar */}
                    <div className="lg:w-[380px] w-full border-t lg:border-t-0 lg:border-l border-gray-800 flex flex-col bg-[#0f0f0f]">
                      {/* Playlist Header */}
                      <div className="px-4 py-3 border-b border-gray-800 flex-shrink-0">
                        <h4 className="text-white font-semibold text-sm truncate">{service.title}</h4>
                        <p className="text-gray-400 text-xs mt-0.5">
                          SANATCORE · {getPlaylistCountLabel(playlist.length)}
                        </p>
                      </div>

                      {/* Scrollable Video List */}
                      <div 
                        className="overflow-y-auto flex-1 playlist-scroll" 
                        style={{ maxHeight: '400px' }}
                      >
                        {playlist.map((item: PlaylistItem, index: number) => (
                          <button
                            key={`${item.videoId}-${index}`}
                            onClick={() => setActiveVideoIndex(index)}
                            className={`w-full flex items-start gap-3 px-3 py-2 transition-colors text-left group hover:bg-white/10 ${
                              index === activeVideoIndex ? 'bg-white/15' : ''
                            }`}
                          >
                            {/* Index number */}
                            <span className={`text-xs mt-3 flex-shrink-0 w-5 text-right ${
                              index === activeVideoIndex ? 'text-white font-bold' : 'text-gray-500'
                            }`}>
                              {index === activeVideoIndex ? (
                                <svg className="w-3.5 h-3.5 text-white ml-auto" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              ) : (
                                index + 1
                              )}
                            </span>
                            
                            {/* Thumbnail */}
                            <div className="relative flex-shrink-0 w-[100px] h-[56px] rounded overflow-hidden bg-gray-800">
                              <Image
                                src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                                alt={item.title}
                                fill
                                sizes="100px"
                                className="object-cover"
                                unoptimized
                              />
                              {/* Play overlay on hover */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                            </div>

                            {/* Video Info */}
                            <div className="flex-1 min-w-0 py-0.5">
                              <p className={`text-sm leading-snug line-clamp-2 ${
                                index === activeVideoIndex ? 'text-white font-medium' : 'text-gray-300'
                              }`}>
                                {item.title}
                              </p>
                              <p className="text-gray-500 text-xs mt-1">SANATCORE</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Single video - simple embed */
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${currentVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
