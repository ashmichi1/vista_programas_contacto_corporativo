import React, { useState, useEffect } from 'react';

export default function VistaProgramasContacto() {
  const programas = ['ADSO', 'REDES DE DATOS', 'ANIMACIÓN 3D', 'LOGÍSTICA', 'MERCADÉO', 'SISTEMAS'];

  const [selectedProgram, setSelectedProgram] = useState('');
  const [form, setForm] = useState({ nombres: '', apellidos: '', mensaje: '' });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleSelect = (p) => setSelectedProgram(p);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.nombres.trim() || !form.apellidos.trim() || !form.mensaje.trim() || !selectedProgram) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showAlert('Por favor, completa todos los campos y selecciona un programa.', 'error');
      return;
    }
    // Simular envío exitoso
    showAlert('Mensaje enviado correctamente. Gracias por contactarnos.', 'success');
    setForm({ nombres: '', apellidos: '', mensaje: '' });
    setSelectedProgram('');
  };

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    // desaparecer después de 3.5s
    setTimeout(() => setAlert((a) => ({ ...a, show: false })), 3500);
  };

  // For accessibility: focus the first field when alert appears for error
  useEffect(() => {
    if (alert.show && alert.type === 'error') {
      const el = document.querySelector('input[name="nombres"]');
      if (el) el.focus();
    }
  }, [alert]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-6">
      {/* Alert */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className={`max-w-xl px-5 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-300 ${alert.show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'} ${alert.type === 'error' ? 'bg-rojo' : 'bg-vinotinto'}`}
          role="status"
          aria-live="polite"
        >
          {alert.message}
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-6">
        <header className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-6">
          <nav className="flex justify-between text-gray-300 font-semibold mb-3">
            <span className="hover:text-vinotinto transition-colors">INICIO</span>
            <span className="hover:text-vinotinto transition-colors">PROGRAMAS</span>
            <span className="hover:text-vinotinto transition-colors">CONTACTO</span>
          </nav>

          <div className="text-center">
            <div className="text-sm text-gray-400">servicio nacional de aprendizaje</div>
            <div className="mt-2 text-2xl font-bold text-vinotinto">Centro de Gestión de Mercados, Logística y Tecnologías de la Información – Bogotá</div>
            <div className="text-sm text-gray-400 mt-1">CGMLTI</div>
          </div>
        </header>

        <section className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-200 font-semibold mb-4">Programas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {programas.map((p) => (
              <button
                key={p}
                onClick={() => handleSelect(p)}
                className={`py-3 rounded-lg border font-semibold transition focus:outline-none focus:ring-2 focus:ring-vinotinto ${selectedProgram === p ? 'bg-vinotinto text-white border-vinotinto shadow-md' : 'bg-[#111111] text-gray-200 border-gray-700 hover:border-vinotinto hover:text-white'}`}
                aria-pressed={selectedProgram === p}
              >
                {p}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-200 font-semibold text-center mb-4">Contacto</h3>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
            <label for="nombres">Nombres: </label>
            <input
              name="nombres"
              value={form.nombres}
              onChange={handleChange}
              className="w-3/4 bg-[#0b0b0b] border border-gray-700 rounded-md px-3 py-2 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-vinotinto focus:border-vinotinto"
              placeholder="Ingrese sus nombres"
              autoComplete="off"
            />
            <input
              name="apellidos"
              value={form.apellidos}
              onChange={handleChange}
              className="w-3/4 bg-[#0b0b0b] border border-gray-700 rounded-md px-3 py-2 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-vinotinto focus:border-vinotinto"
              placeholder="Ingrese sus apellidos"
            />
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className="w-3/4 bg-[#0b0b0b] border border-gray-700 rounded-md px-3 py-2 placeholder-gray-500 text-gray-100 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-vinotinto focus:border-vinotinto"
              placeholder="MENSAJE"
            />
            <button
              type="submit"
              className="w-3/4 py-2 rounded-md font-semibold text-white transition-all duration-200 bg-vinotinto hover:bg-rojo border border-vinotinto hover:border-rojo focus:outline-none focus:ring-2 focus:ring-rojo"                    >
              ENVIAR
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
