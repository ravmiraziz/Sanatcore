export default function ClientsSection() {
  const clients = [
    'Client 1',
    'Client 2',
    'Client 3',
    'Client 4',
    'Client 5',
    'Client 6',
  ];

  const partners = [
    'Partner 1',
    'Partner 2',
    'Partner 3',
    'Partner 4',
    'Partner 5',
    'Partner 6',
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
                className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-400 text-center font-semibold">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-sm">
                    {partner}
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
