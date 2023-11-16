import * as React from "react";
import { CartContext } from "../../contexts/CartContext";
import { BsCartPlus } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface ProductsProps {
  cover: string;
  id: number;
  description: string;
  price: number;
  title: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");

      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddCartItem(product: ProductsProps) {
    toast.success("Item adicionado ao carrinho!", {
      style: {
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#fff",
      },
    });
    addItemCart(product);
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1
        className="font-bold text-2xl mb-4 mt-10 text-center
      "
      >
        Produtos em alta
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <section key={product.id} className="w-full ">
            <Link to={`/products/${product.id}`}>
              <img
                className="w-full rounded-lg max-h-70 mb-2"
                alt={product.title}
                src={product.cover}
              />

              <p className="font-medium mt-1 mb-2">{product.title}</p>
            </Link>
            <div className="flex gap-3 items-center">
              <strong className="text-zinc-900/90">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <button
                className="bg-zinc-900 p-1 rounded"
                onClick={() => handleAddCartItem(product)}
              >
                <BsCartPlus size={20} color="#fff" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
