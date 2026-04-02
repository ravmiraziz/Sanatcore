export default function ClientsSection() {
  const clients = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6'];

  const partners = [
    '/partners/1.webp',
    '/partners/2.webp',
    '/partners/3.webp',
    '/partners/4.webp',
    '/partners/5.webp',
    '/partners/6.webp',
    '/partners/7.webp',
    '/partners/8.webp',
    '/partners/9.webp',
    '/partners/10.webp',
    '/partners/11.webp',
    '/partners/12.webp',
    '/partners/13.webp',
    '/partners/14.webp',
    '/partners/15.webp',
    '/partners/16.webp',
    '/partners/17.webp',
    '/partners/18.webp',
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
                className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-400 text-center font-semibold">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-sm">
                    {client}
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
                className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-400 text-center font-semibold">
                  <div className="w-24 h-24 rounded flex items-center justify-center text-sm">
                    <img src={partner} alt="partners" />
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
