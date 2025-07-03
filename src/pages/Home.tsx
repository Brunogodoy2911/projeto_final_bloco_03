import {
  Clock3,
  Package,
  Pill,
  Plus,
  ShoppingCart,
  Tag,
  UsersRound,
} from "lucide-react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col justify-center items-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Bem-vindo(a) à <span className="text-green-600">PharmaShop</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Sua farmácia online completa. Encontre medicamentos, suplementos e
          produtos de saúde com os melhores preços e entrega rápida.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button className="gap-2" onClick={() => navigate("/products")}>
            <Package />
            Ver Produtos
          </Button>
          <Button
            className="gap-2 bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate("/categories")}
          >
            <Tag />
            Categorias
          </Button>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a PharmaShop?
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Tudo que você precisa para cuidar da sua saúde
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <span className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={32} className="text-white" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Produtos de Qualidade
              </h3>
              <p className="text-gray-600">
                Grande variedade de medicamentos e produtos com procedência
                garantida.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <span className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={32} className="text-white" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compra Fácil
              </h3>
              <p className="text-gray-600">
                Interface intuitiva para encontrar e comprar seus produtos
                rapidamente.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors md:col-span-2 lg:col-span-1">
              <span className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill size={32} className="text-white" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Especialização Farmacêutica
              </h3>
              <p className="text-gray-600">
                Equipe especializada e produtos organizados por categorias.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Acesso Rápido
          </h2>
          <p className="text-gray-600">Navegue facilmente pelo nosso sistema</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="/products"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group block"
          >
            <Package className="text-green-600 h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Todos os Produtos
            </h3>
            <p className="text-sm text-gray-600">Ver nossa linha completa</p>
          </a>
          <a
            href="/categories"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group block"
          >
            <Tag className="text-blue-600 h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 mb-2">Categorias</h3>
            <p className="text-sm text-gray-600">Organize por categoria</p>
          </a>
          <a
            href="/newProduct"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group block"
          >
            <Plus className="text-purple-600 h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 mb-2">Novo Produto</h3>
            <p className="text-sm text-gray-600">Adicione produtos</p>
          </a>
          <a className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group block">
            <UsersRound className="text-orange-600 h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Minha Conta (Em Breve...)
            </h3>
            <p className="text-sm text-gray-600">Ver seu perfil e pedidos</p>
          </a>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersRound size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Produtos Disponíveis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Categorias</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock3 size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24h</h3>
              <p className="text-gray-600">Entrega Rápida</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
