"use client";
import React from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import "../Contact.css";

import opendata from "../../public/Assets/images/situs/opendata.png";
import pemerintah from "../../public/Assets/images/situs/majalengka.png";
import disparbud from "../../public/Assets/images/situs/jabar.png";
import kemenekraf from "../../public/Assets/images/situs/kemenekraf.png";
import diskominfo from "../../public/Assets/images/situs/diskominfo.png";
import kreasi from "../../public/Assets/images/situs/kreasi-jabar.png";

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "86f9b95d-65fa-41e0-8912-a7bed2873302");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: "Berhasil!",
      text: "Pesan Berhasil Terkirim!",
      icon: "success",
    });
  }
};
const Contact = () => {
  return (
    <>
      <main>
        {/*Kontak*/}
        <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-2 pt-32 pb-5">
          Kontak <span className="font-bold text-sky-400">Kami</span>
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-9 items-center">
          <div className="kontak pt-2 items-center" id="kontak">
            <section className="contact">
              <form onSubmit={onSubmit}>
                <div className="input-box">
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    className="field"
                    placeholder="Masukkan Nama Anda"
                    name="name"
                    required
                  />
                </div>
                <div className="input-box">
                  <label>Email</label>
                  <input
                    type="email"
                    className="field"
                    placeholder="Masukkan Email Anda"
                    name="email"
                    required
                  />
                </div>
                <div className="input-box">
                  <label>Pesan Anda</label>
                  <textarea
                    name="message"
                    className="field mess"
                    placeholder="Masukkan Pesan Anda"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex px-5 mx-0 bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
          {/* Maps */}
          <div className="flex items-center rounded-lg pt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.755440848336!2d108.23259038137675!3d-6.836432259248356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f86d8f48b7f%3A0x2608311136d4c262!2sGedung%20MCC%20(%20Majalengka%20Creative%20Center%20)!5e0!3m2!1sen!2sid!4v1731155851875!5m2!1sen!2sid"
              width="700"
              height="600"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="flex items-center rounded-lg"
            ></iframe>
          </div>
        </div>
        {/* Situs Terkait */}
        <div className="situs pt-10" id="situs">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-2">
            Situs <span className="font-bold text-sky-400">Terkait</span>
          </h1>
          <ul className="box px-5 bg-white shadow rounded-lg py-5 my-5">
            <div className="flex flex-row gap-24 justify-evenly overflow-x-auto pt-10 pb-40 my-1 mx-auto px-1">
              <li className="size-24 mx-5">
                <a href="https://kemenparekraf.go.id/">
                  <Image src={kemenekraf} alt="Kemenekraf" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Kementrian Pariwisata dan Ekonomi Kreatif
                  </p>
                </a>
              </li>
              <li className="size-24">
                <a href="https://disparbud.jabarprov.go.id/">
                  <Image src={disparbud} alt="Disparbud Jabar" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Dinas Pariwisata dan Kebudayaan Jawa Barat
                  </p>
                </a>
              </li>

              <li className="size-20">
                <a href="https://kreasijabar.id/ekraf?city_ids=252">
                  <Image src={kreasi} alt="Pemerintah Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-3">
                    Kreasi Jabar
                  </p>
                </a>
              </li>
              <li className="size-24">
                <a href="https://majalengkakab.go.id/">
                  <Image src={pemerintah} alt="Pemerintah Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Pemerintah Kabupaten Majalengka
                  </p>
                </a>
              </li>

              <li className="size-40">
                <a href="https://data.majalengkakab.go.id/">
                  <Image src={opendata} alt="Open Data Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-16">
                    Open Data Kabupaten Majalengka
                  </p>
                </a>
              </li>
              <li className="size-24">
                <a href="https://diskominfo.majalengkakab.go.id/">
                  <Image src={diskominfo} alt="Diskominfo Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-16">
                    Dinas Komunikasi dan Informatika Kabupaten Majalengka
                  </p>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contact;
