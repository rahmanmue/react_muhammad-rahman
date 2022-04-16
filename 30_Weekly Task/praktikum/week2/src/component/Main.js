import React from "react";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import { Content } from "./Content";
import git from "./../img/git.png";
import ui from "./../img/ui-ux.png";
import figma from "./../img/figma.png";
import html from "./../img/html.png";
import css from "./../img/css.png";
import bootstrap from "./../img/bootstrap.png";

export const Main = () => {
  const baseData = [
    {
      title: "git",
      link: "#git",
      desc: "Ini Adalah Materi Git Branch atau percabangan adalah sebuah cabang dimana bila kita ingin menambahkan fitur tanpa harus ditulis di master melainkan membuat sebuah cabang baru agar proses nya rapi tidak tumpang tindih yang mana setelah kode yang dibuat fix tidak ada perubahan maka akan di merge dengan master. alur kerja dalam git lebih baik dan rapi terbagi dalam beberapa branch master, develop, dan sebuah fitur yang ingin ditambahkan. Dimana sebuah master adalah hasil akhir yang sudah final tidak ada perubahan sedangkan untuk develop merupakan hasil dari gabungan beberapa fitur yang telah dibuat branch yang yang memungkinkan ada perubahan.",
      img: git,
    },
    {
      title: "ui-ux",
      link: "#ui-ux",
      desc: "UI (User Interface )sebuah tampilan yang digunakan user untuk berinteraksi dengan sebuah produk Pilar dalam UI terdiri dari Konsistensi yaitu tampilan yang konsisten, Interface yang simpel dengan menghindari elemen yang tidak dibutuhkan, Iipografi yang bagus, Menawarkan feedback yang informatif. Sedangkan UX (User Experience) adalah segala sesuatu yang dirasakan user ketika menggunakan sebuah produk",
      img: ui,
    },
    {
      title: "figma",
      link: "#figma",
      desc: "Figma adalah Sebuah editor grafik vektor dan alat prototyping yang terutama berbasis web, dengan fitur offline tambahan yang diaktifkan oleh aplikasi desktop untuk macOS dan Windows. yang initinya figma ini adalah aplikasi desain dan sebuah alat prototyping untuk sebuah projek digital baik itu untuk mendesain sebuah UI UX produk.",
      img: figma,
    },
    {
      title: "html",
      link: "#html",
      desc: "HTML yang merupakan singkatan dari Hypertext Markup Language adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web. Kegunaan HTML sendiri adalah, Membuat struktur dari halaman website, Mengatur tampilan dan isi halaman web, Membuat tabel dengan tag html table, Membuat form HTML, Membuat gambar dengan canvas, Mempublikasikan halaman secara online",
      img: html,
    },
    {
      title: "css",
      link: "#css",
      desc: "CSS merupakan singkatan dari Cascading Style Sheet. Fungsi css sendiri adalah untuk menghias halaman website baik itu warna, background, lebar, tinggi dan juga dapat mengatur layout atau posisi konten dari halaman website itu sendiri. Untuk menghubungkan css dengan html ada 3 cara yaitu External adalah Terdapat file CSS sendiri sehingga nantinya didalam file HTML dihubungkan dengan file CSS tersebut, Internal adalah CSS dalam satu file yang berada di HTML yang dibungkus dalam tag style, Inline adalah CSS dalam tag html langsung dituliskan dengan menambahkan atribut style",
      img: css,
    },
    {
      title: "bootstrap",
      link: "#bootstrap",
      desc: "Bootstrap merupakan framework atau kerangka kerja dari CSS untuk mempermudah dalam pembuatan tampilan website yang berbentuk template berbasis HTML dan CSS untuk kebutuhan navigasi tombol, tipografi, formulir, dan komponen antarmuka yang lainnya. Saat ini Bootstrap sudah memiliki versi yang ke-5. Kelebihan dari bootstrap sendiri mudah digunakan dan desain yang responsif",
      img: bootstrap,
    },
  ];

  return (
    <>
      <Col sm={8}>
        <Tab.Content>
          {baseData.map((data, index) => (
            <Tab.Pane eventKey={data.link} key={index}>
              <Content title={data.title} desc={data.desc} img={data.img} />
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Col>
    </>
  );
};
