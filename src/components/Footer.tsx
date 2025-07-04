import { Github, Linkedin, Pill } from "lucide-react";
import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="col-span-1 md:col-span-2 border-b-2 border-gray-700 pb-8">
          <div>
            <span className="flex gap-2">
              <Pill size={32} className="text-white" />
              <h1 className="text-2xl font-bold mb-4">PharmaShop</h1>
            </span>

            <p className="text-gray-300 mb-4">
              Sua saúde é nossa prioridade. Oferecemos medicamentos de qualidade
              com os melhores preços e atendimento especializado.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
              <NavLink target="_blank" to="https://github.com/Brunogodoy2911">
                <Github size={20} className="text-white" />
              </NavLink>
            </div>

            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
              <NavLink
                target="_blank"
                to="https://www.linkedin.com/in/brunogodoydev/"
              >
                <Linkedin size={20} className="text-white" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="py-8 text-center text-gray-400">
          © 2025 PharmaShop. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
