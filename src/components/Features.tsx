import React from 'react';
import { Camera, Wifi, Volume2, BellRing } from 'lucide-react';

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0">
        <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-slate-50">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Recursos Avançados</h2>
          <p>Conheça as tecnologias que fazem nossa luminária solar a mais completa do mercado.</p>
        </div>

        <div className="aspect-square w-full max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <img
            src="https://i.imgur.com/EWSQsCj.png"
            alt="Tecnologias da luminária solar"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <FeatureItem
              icon={<Camera className="w-6 h-6" />}
              title="Câmera PTZ com Movimentação Remota"
              description="Controle a direção da câmera em 360° pelo celular. Veja cada detalhe da sua propriedade de qualquer lugar do mundo."
            />
            
            <FeatureItem
              icon={<Volume2 className="w-6 h-6" />}
              title="Áudio Bidirecional"
              description="Converse com visitantes, entregadores ou afaste intrusos usando o microfone e alto-falante integrados de alta qualidade."
            />

            <FeatureItem
              icon={<BellRing className="w-6 h-6" />}
              title="Detecção de Movimento"
              description="Receba alertas instantâneos no seu celular quando alguém se aproximar da sua propriedade, com notificações personalizáveis."
            />

            <FeatureItem
              icon={<Wifi className="w-6 h-6" />}
              title="Autonomia de 24h"
              description="Energia constante mesmo em dias nublados graças à bateria de alta capacidade e recarga solar eficiente."
            />
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4" data-aos="fade-left">
            <div className="col-span-2">
              <img 
                src="https://i.imgur.com/V9NzLiN.png" 
                alt="Câmera de segurança com iluminação" 
                className="rounded-xl shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <img 
                src="https://i.imgur.com/s9EaXPo.png" 
                alt="Painel solar" 
                className="rounded-xl shadow-md w-full h-40 object-cover"
              />
            </div>
            <div>
              <img 
                src="https://i.imgur.com/quKXePl.png" 
                alt="Controle remoto" 
                className="rounded-xl shadow-md w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          <div className="aspect-square">
            <img 
              src="https://i.imgur.com/ZU42TgS.png" 
              alt="Luminária funcionando à noite" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="aspect-square">
            <img 
              src="https://i.imgur.com/fjfSFzf.png" 
              alt="Detalhes técnicos do produto" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
