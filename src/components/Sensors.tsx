import React from 'react';
import { Radio, Battery, Signal } from 'lucide-react';

const mockSensors = [
  { id: 1, name: 'Sensor A1', area: 'Almacén', status: 'active', battery: 85, signal: 92 },
  { id: 2, name: 'Sensor A2', area: 'Almacén', status: 'active', battery: 72, signal: 88 },
  { id: 3, name: 'Sensor P1', area: 'Producción', status: 'warning', battery: 15, signal: 95 },
  { id: 4, name: 'Sensor D1', area: 'Despacho', status: 'inactive', battery: 0, signal: 0 },
];

function Sensors() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Estado de Sensores</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSensors.map((sensor) => (
          <div
            key={sensor.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Radio className={`w-6 h-6 ${
                  sensor.status === 'active' ? 'text-green-500' :
                  sensor.status === 'warning' ? 'text-yellow-500' :
                  'text-red-500'
                }`} />
                <h3 className="text-lg font-semibold">{sensor.name}</h3>
              </div>
              <span className="text-sm text-gray-500">{sensor.area}</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Battery className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Batería</span>
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      sensor.battery > 60 ? 'bg-green-500' :
                      sensor.battery > 20 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${sensor.battery}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{sensor.battery}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Signal className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Señal</span>
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${sensor.signal}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{sensor.signal}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sensors;