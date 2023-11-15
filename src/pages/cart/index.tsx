import React from "react";

export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="data:image/jpeg;base64,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"
          alt="logo do produto"
          className="w-28"
        />
        <strong>Preço R$: 1.000</strong>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 text-white font-medium flex items-center justify-center">
            -
          </button>
          2
          <button className="bg-slate-600 px-2 text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>

        <strong className="float-right">SubTotal: R41.000</strong>
      </section>

      <p className="font-bold mt-4">Total: R$ 1.600</p>
    </div>
  );
}
