import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Antenna {
  id: number;
  x: number;
  y: number;
  name: string;
}

function Map() {
  const [antennas, setAntennas] = useState<Antenna[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [showImageInput, setShowImageInput] = useState(!selectedImage);

  const handleImageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const imageUrl = formData.get('imageUrl') as string;
    setSelectedImage(imageUrl);
    setShowImageInput(false);
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedImage) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newAntenna: Antenna = {
      id: Date.now(),
      x,
      y,
      name: `Antena ${antennas.length + 1}`,
    };
    
    setAntennas([...antennas, newAntenna]);
  };

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Mapa de Instalación</h2>
      
      {showImageInput ? (
        <div className="max-w-md">
          <form onSubmit={handleImageSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                URL del Mapa (imagen)
              </label>
              <input
                type="url"
                name="imageUrl"
                placeholder="https://ejemplo.com/mapa.jpg"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Cargar Mapa
            </button>
          </form>
        </div>
      ) : (
        <div className="relative" style={{ height: 'calc(100vh - 200px)' }}>
          <div
            className="w-full h-full border-2 border-gray-300 rounded-lg overflow-hidden cursor-crosshair relative"
            onClick={handleMapClick}
          >
            <img
              src={selectedImage}
              alt="Mapa de instalación"
              className="w-full h-full object-contain"
            />
            {antennas.map((antenna) => (
              <div
                key={antenna.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${antenna.x}%`, top: `${antenna.y}%` }}
              >
                <MapPin className="w-6 h-6 text-red-500" />
                <span className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-sm">
                  {antenna.name}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowImageInput(true)}
            className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Cambiar Mapa
          </button>
        </div>
      )}
    </div>
  );
}

export default Map;