import React from 'react';
import { Radio, Package, AlertTriangle, CheckCircle } from 'lucide-react';

function Dashboard() {
  const stats = [
    { title: 'Sensores Activos', value: '12', icon: Radio, color: 'text-green-500' },
    { title: 'Items Registrados', value: '1,234', icon: Package, color: 'text-blue-500' },
    { title: 'Alertas', value: '3', icon: AlertTriangle, color: 'text-yellow-500' },
    { title: 'Lecturas Hoy', value: '8,543', icon: CheckCircle, color: 'text-purple-500' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <p className="text-sm font-medium">
                    Sensor A{index + 1} detectó movimiento
                  </p>
                  <p className="text-xs text-gray-500">
                    Hace {index + 1} minutos
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Estado del Sistema</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Rendimiento del Sistema</span>
              <span className="text-sm font-medium">98%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm">Uso de Memoria</span>
              <span className="text-sm font-medium">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm">Almacenamiento</span>
              <span className="text-sm font-medium">72%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;