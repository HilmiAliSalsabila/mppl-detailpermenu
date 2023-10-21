// eslint-disable-next-line no-unused-vars
import React from 'react';

const ProductPage = () => {
  return (
    <div className="w-[390px] h-[844px] relative bg-gray-200">
      <div className="w-[350px] h-[401px] left-[20px] top-[344px] absolute bg-white rounded-[5px] shadow" />
      <div className="w-[390px] h-[350px] left-0 top-0 absolute">
        <div className="w-[390px] h-[350px] left-0 top-0 absolute bg-zinc-300" />
        <img className="w-[390px] h-[305px] left-0 top-0 absolute" src="https://via.placeholder.com/390x305" />
      </div>
      <div className="w-[130px] h-10 left-[130px] top-[286px] absolute bg-white rounded-[20px] shadow" />
      <div className="left-[40px] top-[365px] absolute text-neutral-700 text-[25px] font-semibold font-['Asap Condensed']">Cafe Latte</div>
      <div className="left-[258px] top-[364px] right-[40px] absolute text-stone-500 text-xl font-semibold font-['Asap Condensed']">Rp. 17.000</div>
      <img className="w-5 h-5 left-[230px] top-[296px] absolute" src="https://via.placeholder.com/20x20" />
      <img className="w-5 h-5 left-[140px] top-[296px] absolute" src="https://via.placeholder.com/20x20" />
      <div className="left-[190px] top-[294px] absolute text-neutral-700 text-xl font-normal font-['Asap Condensed']">1</div>
      <img className="w-[25px] h-[25px] left-[20px] top-[20px] absolute" src="https://via.placeholder.com/25x25" />
      <div className="left-[40px] top-[412px] right-[40px] absolute text-neutral-700 text-xs text-justify font-normal font-['Asap Condensed']">
        Cafe latte, sering disebut hanya sebagai adalah minuman kopi berbasis espresso yang populer dan klasik yang berasal dari Italia dan telah mendapatkan popularitas luas di seluruh dunia dunia. Nama LATTE berasal dari kata Italia untuk
        susu,dan minuman ini ditandai dengan tekstur yang halus dan krim.
      </div>
      <div className="w-[354px] h-[45px] left-[20px] top-[770px] absolute bg-stone-500 rounded-[5px]" />
      <div className="left-[50px] top-[781px] absolute text-white text-xl font-normal font-['Asap Condensed']">Tambah ke Keranjang</div>
      <img className="w-7 h-7 left-[318px] top-[779px] absolute" src="https://via.placeholder.com/28x28" />
      <div className="w-[45px] h-[45px] left-[314px] top-[688px] absolute">
        <div className="w-[45px] h-[45px] left-0 top-0 absolute bg-stone-500 rounded-full shadow" />
        <img className="w-5 h-5 left-[11px] top-[13px] absolute" src="https://via.placeholder.com/20x20" />
      </div>
    </div>
  );
};

export default ProductPage;
