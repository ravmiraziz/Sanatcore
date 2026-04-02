export default function ClientsSection() {
  const clients = [
    {
      color: 'bg-white',
      image: '/partners/1.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/2.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/3.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/4.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/5.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/6.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/7.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/8.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/9.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/10.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/11.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/12.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/13.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/14.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/15.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/16.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/17.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/18.webp',
    },
  ];

  const partners = [
    {
      color: 'bg-white',
      image: '/partners/19.png',
    },
    {
      color: 'bg-white',
      image: '/partners/1.webp',
    },
    {
      color: 'bg-white',
      image: '/partners/21.png',
    },
    {
      color: 'bg-white',
      image: '/partners/22.png',
    },
    {
      color: 'bg-white',
      image: '/partners/23.png',
    },
    {
      color: 'bg-white',
      image: '/partners/24.png',
    },
    {
      color: 'bg-white',
      image: '/partners/25.png',
    },
    {
      color: 'bg-white',
      image: '/partners/26.png',
    },
    {
      color: 'bg-white',
      image: '/partners/20.png',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Clients */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-12 text-center">Наши клиенты</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${client.color} p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-center font-semibold">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <img src={client.image} alt="clients" className="h-full object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-2xl font-bold mb-12 text-center">Партнеры</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${partner.color} p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-center font-semibold">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <img src={partner.image} alt="partners" className="h-full object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
