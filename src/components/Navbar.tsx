import { House, Package, Pill, Plus, Tag } from "lucide-react";
import { NavLink } from "react-router";

export function Navbar() {
  const getNavLinkClass = ({ isActive }: any) =>
    `flex justify-center items-center gap-2 px-3 py-2 rounded-md transition-colors cursor-pointer hover:text-white hover:bg-white/10 ${
      isActive ? "bg-white/10 text-white" : "text-white/80"
    }`;

  return (
    <nav className="flex justify-between w-full h-16 bg-gradient-to-r from-green-600 to-blue-600 shadow-lg sticky top-0 z-50 px-6 lg:px-8">
      <div className="flex justify-center items-center text-white">
        <NavLink className="flex justify-center items-center gap-4" to="/">
          <Pill size={32} />
          <h1 className="text-xl font-bold">PharmaShop</h1>
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-6 text-white">
        <NavLink className={getNavLinkClass} to="/">
          <House size={20} />
          <p className="text-base">Home</p>
        </NavLink>

        <NavLink className={getNavLinkClass} to="/products">
          <Package size={20} />
          <p className="text-base">Produtos</p>
        </NavLink>

        <NavLink className={getNavLinkClass} to="/categories">
          <Tag size={20} />
          <p className="text-base">Categorias</p>
        </NavLink>

        <NavLink className={getNavLinkClass} to="/newProduct">
          <Plus size={20} />
          <p className="text-base">Novo Produto</p>
        </NavLink>
      </div>
    </nav>
  );
}
