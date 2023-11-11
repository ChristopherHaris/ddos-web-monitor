import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../layout";
import "../../../app/globals.css";
import { Separator } from "@/components/ui/separator";
import ReplyCard from "@/components/landing/ReplyCard";
import BarLoader from "react-spinners/BarLoader";

function News() {
  const router = useRouter();
  const { id } = router.query; // Use the dynamic part of the URL as the article ID

  const mockDatabase = [
    {
      id: 1,
      imageUrl: "/images/news1.jpg",
      title:
        "DDOROCARE dan GF Luncurkan EcoRanger Academy untuk Mendukung NTB Zero Waste",
      linkText: "Read More",
      linkHref: "/landing/news/1",
      date: "24 February 2022",
      author: "admin",
      category: "News",
      article: `
            DDOROCARE – Lombok Tengah, Provinsi Nusa Tenggara Barat adalah salah satu provinsi di Indonesia yang memiliki potensi besar untuk mengembangkan industri pariwisata berskala internasional. Pengembangan sektor pariwisata sedang masif dilakukan pemerintah setempat agar menunjang peningkatan perekonomian. Suksesnya Mandalika sebagai salah satu wilayah di NTB yang didapuk sebagai Kawasan Strategis Pariwisata Nasional (KSPN) dan Kawasan Ekonomi khusus (KEK) turut membuka peluang potensi pengembangan sektor pariwisata di sekitarnya. Salah satu yang memiliki potensi besar adalah Desa Bilebante.

      Untuk mendukung perkembangan sektor pariwisata, NTB berkomitmen untuk mewujudkan lingkungan yang bebas dari sampah dengan program unggulan NTB Zero Waste yang menargetkan 70% pengelolaan sampah dan 30% pengurangan sampah di tahun 2023. Program ini turut mendukung target pemerintah pusat pada tahun 2025 untuk pengurangan sampah 30% dan penanganan sampah 70% sesuai dengan Peraturan Presiden Nomor 97 Tahun 2017.

      Mengamini inisiatif baik yang dilakukan pemerintah NTB, program EcoRanger dari Greeneration Foundation menghadirkan EcoRanger Academy di Desa Wisata Hijau Bilebante. Disini, EcoRanger berkolaborasi bersama Yayasan Aksi Indonesia  Lestari (Ddorocare) dan didukung oleh New Zealand Head of Embassy Fund (HEF). “Ddorocare adalah komunitas yang bergerak di bidang riset, edukasi, pengolahan, dan pemberdayaan masyarakat berbasis sampah  di lokasi wisata dan pesisir sejak tahun 2019. Kami memiliki visi untuk mewujudkan Indonesia yang asri dan lestari”, kesamaan visi dengan Greeneration Foundation membuka kesempatan kami untuk berkolaborasi bersama, ujar Wahyu Rosadi sebagai Co-founder Ddorocare.

      EcoRanger Academy adalah langkah inisiatif yang dilakukan untuk membangun sistem pengelolaan sampah yang berkelanjutan edukasi dan pendampingan masyarakat, serta dukungan operasional pengelolaan sampah yang seluruhnya menerapkan konsep pemberdayaan masyarakat. Kegiatan ini diresmikan pada tanggal 23 Februari 2022 di Balai Desa Bilebante, Pringgarata, Lombok Tengah.

      Selaras dengan misi EcoRanger untuk mewujudkan pariwisata berkelanjutan di Indonesia, Desa Wisata Hijau Bilebante dipilih sebagai lokasi intervensi karena memiliki potensi pengembangan pariwisata yang mumpuni namun belum memiliki sistem pengelolaan sampah yang berkelanjutan. Berdasarkan hasil riset yang dilakukan EcoRanger di Desa Wisata Hijau, ditemukan potensi timbulan sampah mencapai 1,9 ton/hari dengan persentase sampah organik mencapai 40,97%. Sangat disayangkannya, sekitar 56.67% warga masih membuang sampahnya begitu saja ke lahan terbuka. Tentunya ini menjadi permasalahan yang harus segera dituntaskan pemerintah setempat, masyarakat, komunitas lokal, EcoRanger, dan Ddorocare dalam sebuah aksi kolaborasi.

      Peresmian EcoRanger Academy ini menjadi langkah awal untuk duduk bersama masyarakat dan pemerintah setempat untuk mendiskusikan strategi yang akan dilakukan untuk membangun sistem pengelolaan sampah. Lalu Maas Solihin selaku Kepala Bidang Tata Lingkungan, DLH  Lombok Tengah turut memaparkan gambaran permasalahan sampah yang terjadi di Lombok Tengah, “Saat ini, kami masih cukup kewalahan untuk menangani sampah di Lombok Tengah. Terbatasnya sarana transportasi sampah dan SDM pengelola sampah masih menjadi tantangan mengatasi sampah yang dihasilkan masyarakat yang terus bertambah. Kami harap aksi kolaborasi ini benar-benar bisa menyelesaikan persoalan yang ada”.

      Oleh karena itu, beliau mengapresiasi inisiatif yang dilakukan melalui EcoRanger Academy yang dapat menjembatani upaya pemerintah dan masyarakat agar saling terintegrasi. Beliau juga menyampaikan bahwa pemerintah juga menawarkan solusi untuk pelaksanaan PHBS di destinasi wisata dan menyediakan layanan TPS3R. Diskusi ini turut dihadiri karang taruna, PKK, pemerintah desa, pokdarwis, dan Polsek Pringgarata  dan Koramil 1620-09/Pringgarata.

      Tara D’Sousa selaku Konselor Pembangunan Kedutaan Besar New Zealand turut menjelaskan manfaat dari kegiatan EcoRanger Academy untuk masyarakat Bilebante dan lingkungan sekitarnya, “New Zealand sangat peduli akan pembangunan berkelanjutan yang memperhatikan aspek lingkungan untuk mempertahankan masa depan generasi penerus. Aksi kolaborasi ini adalah wujud nyata peran masyarakat Indonesia untuk kelestarian lingkungan. Tentunya aksi unik ini akan memberdayakan pemimpin muda di Desa Bilebante untuk mengatasi permasalahan sampah”.

      Lombok Tengah, Provinsi Nusa Tenggara Barat adalah salah satu provinsi di Indonesia yang memiliki potensi besar untuk mengembangkan industri pariwisata berskala internasional. Pengembangan sektor pariwisata sedang masif dilakukan pemerintah setempat agar menunjang peningkatan perekonomian. Suksesnya Mandalika sebagai salah satu wilayah di NTB yang didapuk sebagai Kawasan Strategis Pariwisata Nasional (KSPN) dan Kawasan Ekonomi khusus (KEK) turut membuka peluang potensi pengembangan sektor pariwisata di sekitarnya. Salah satu yang memiliki potensi besar adalah Desa Bilebante.

      Untuk mendukung perkembangan sektor pariwisata, NTB berkomitmen untuk mewujudkan lingkungan yang bebas dari sampah dengan program unggulan NTB Zero Waste yang menargetkan 70% pengelolaan sampah dan 30% pengurangan sampah di tahun 2023. Program ini turut mendukung target pemerintah pusat pada tahun 2025 untuk pengurangan sampah 30% dan penanganan sampah 70% sesuai dengan Peraturan Presiden Nomor 97 Tahun 2017.

      Mengamini inisiatif baik yang dilakukan pemerintah NTB, program EcoRanger dari Greeneration Foundation menghadirkan EcoRanger Academy di Desa Wisata Hijau Bilebante. Disini, EcoRanger berkolaborasi bersama Yayasan Aksi Indonesia  Lestari (Ddorocare) dan didukung oleh New Zealand Head of Embassy Fund (HEF). “Ddorocare adalah komunitas yang bergerak di bidang riset, edukasi, pengolahan, dan pemberdayaan masyarakat berbasis sampah  di lokasi wisata dan pesisir sejak tahun 2019. Kami memiliki visi untuk mewujudkan Indonesia yang asri dan lestari”, kesamaan visi dengan Greeneration Foundation membuka kesempatan kami untuk berkolaborasi bersama, ujar Wahyu Rosadi sebagai Co-founder Ddorocare.

      EcoRanger Academy adalah langkah inisiatif yang dilakukan untuk membangun sistem pengelolaan sampah yang berkelanjutan edukasi dan pendampingan masyarakat, serta dukungan operasional pengelolaan sampah yang seluruhnya menerapkan konsep pemberdayaan masyarakat. Kegiatan ini diresmikan pada tanggal 23 Februari 2022 di Balai Desa Bilebante, Pringgarata, Lombok Tengah.

      Selaras dengan misi EcoRanger untuk mewujudkan pariwisata berkelanjutan di Indonesia, Desa Wisata Hijau Bilebante dipilih sebagai lokasi intervensi karena memiliki potensi pengembangan pariwisata yang mumpuni namun belum memiliki sistem pengelolaan sampah yang berkelanjutan. Berdasarkan hasil riset yang dilakukan EcoRanger di Desa Wisata Hijau, ditemukan potensi timbulan sampah mencapai 1,9 ton/hari dengan persentase sampah organik mencapai 40,97%. Sangat disayangkannya, sekitar 56.67% warga masih membuang sampahnya begitu saja ke lahan terbuka. Tentunya ini menjadi permasalahan yang harus segera dituntaskan pemerintah setempat, masyarakat, komunitas lokal, EcoRanger, dan Ddorocare dalam sebuah aksi kolaborasi.

      Peresmian EcoRanger Academy ini menjadi langkah awal untuk duduk bersama masyarakat dan pemerintah setempat untuk mendiskusikan strategi yang akan dilakukan untuk membangun sistem pengelolaan sampah. Lalu Maas Solihin selaku Kepala Bidang Tata Lingkungan, DLH  Lombok Tengah turut memaparkan gambaran permasalahan sampah yang terjadi di Lombok Tengah, “Saat ini, kami masih cukup kewalahan untuk menangani sampah di Lombok Tengah. Terbatasnya sarana transportasi sampah dan SDM pengelola sampah masih menjadi tantangan mengatasi sampah yang dihasilkan masyarakat yang terus bertambah. Kami harap aksi kolaborasi ini benar-benar bisa menyelesaikan persoalan yang ada”.

      Oleh karena itu, beliau mengapresiasi inisiatif yang dilakukan melalui EcoRanger Academy yang dapat menjembatani upaya pemerintah dan masyarakat agar saling terintegrasi. Beliau juga menyampaikan bahwa pemerintah juga menawarkan solusi untuk pelaksanaan PHBS di destinasi wisata dan menyediakan layanan TPS3R. Diskusi ini turut dihadiri karang taruna, PKK, pemerintah desa, pokdarwis, dan Polsek Pringgarata  dan Koramil 1620-09/Pringgarata.

      Tara D’Sousa selaku Konselor Pembangunan Kedutaan Besar New Zealand turut menjelaskan manfaat dari kegiatan EcoRanger Academy untuk masyarakat Bilebante dan lingkungan sekitarnya, “New Zealand sangat peduli akan pembangunan berkelanjutan yang memperhatikan aspek lingkungan untuk mempertahankan masa depan generasi penerus. Aksi kolaborasi ini adalah wujud nyata peran masyarakat Indonesia untuk kelestarian lingkungan. Tentunya aksi unik ini akan memberdayakan pemimpin muda di Desa Bilebante untuk mengatasi permasalahan sampah”.
    `,
    },
    {
      id: 2,
      imageUrl: "/images/news2.jpg",
      title:
        "Peringati HPSN 2022, DDOROCARE dan GF Melaksanakan Edukasi dan Cleanup di DWH Bilebante",
      linkText: "Read More",
      linkHref: "/landing/news/2",
      date: "24 February 2022",
      author: "admin",
      category: "News",
      article: `DDOROCARE bersama dengan Greeneration Foundation (GF) melaksanakan peringatan Hari Peduli Sampah Nasional (HPSN) dengan melakukan Edukasi di Sekolah MI, MTs, dan MA Hadil Ishlah serta dianjutkan dengan melakukan Cleanup di Desa Wisata Hijau (DWH) Bilebante, Lombok Tengah pada Senin (21/02/2022).

      Kegiatan tersebut diawali dengan melakukan Edukasi kepada 206 siswa yang hadir tentang jenis sampah dan penjelasan tentang pentingnya memperingati HPSN setiap tahunnya. Dalam melakukan edukasi, DDOROCARE bersama GF membuat media sederhana untuk menjelaskan jenis sampah dan waktu terurainya.

      Muhamad Wahyu Rosadi selaku Direktur Eksekutif DDOROCARE menjelaskan, HPSN ini diperingati setiap tanggal 21 Februari untuk mengenang tragedi longsornya TPA Leuwigajah yang mengakibatkan 2 kampung tertimbun longsoran sampah dan menyebabkan lebih dari 150 jiwa meninggal dunia.

      Wahyu menambahkan, HPSN setiap tahunnya sangat penting untuk dilaksanakan. Karena tragedi ini mengingatkan kepada kita semua bahwa sampah yang kita hasilkan ternyata bisa membahayakan banyak orang. Sehingga butuh kesadaran kolektif dari semua pihak untuk bertanggung jawab dalam mengelola sampahnya.

      Ia berharap, semoga dengan adanya kegiatan edukasi ini bisa menumbuhkan kesadaran kepada siswa untuk hidup bebas sampah.

      Setelah melakukan edukasi, dilanjutkan dengan melakukan Cleanup untuk membersihkan sampah kemasan plastik yang berada di lingkungan sekolah, dilanjutkan dengan menyusuri jalur sepeda yang berada di DWH Bilebante.

      Dari hasil cleanup yang dilakukan, terkumpul sebanyak 62,67 Kg sampah dengan jumlah sampah terbesar adalah sampah kemasan plastik sebesar 69%. Sampah yang terkumpul ini, tidak dibuang ke TPA, melainkan akan diolah menjadi produk upcycle oleh DDOROCARE.

      Kegiatan tersebut ditutup dengan games dan pembagian hadiah untuk siswa yang aktif dalam kegiatan edukasi dan cleanup.`,
    },
    {
      id: 3,
      imageUrl: "/images/news3.jpg",
      title:
        "Mewakili Pegiat Lingkungan, DDOROCARE Hadiri Penyusunan Road Map 100% EBT NTB",
      linkText: "Read More",
      linkHref: "/landing/news/3",
      date: "24 February 2022",
      author: "admin",
      category: "News",
      article: `Mataram – DDOROCARE menghadiri undangan Penyusunan Road Map 100% Energi Baru Terbarukan (EBT) NTB 2050 di Ruang Rapat Utama Gubernur NTB, Kamis (03/03/2022).

      Kegiatan tersebut dihadiri oleh Kepala Dinas ESDM NTB, Kepala Dinas Perindustrian NTB, Kepala BAPPEDA se-NTB, Akademisi, dan Komunitas Pegiat Lingkungan. Hasil diskusi ini dirangkum secara komprehensif dalam dokumen penyusunan Road Map Energi Baru Terbarukan NTB tahun 2050.

      DDOROCARE selaku perwakilan pegiat lingkungan menyampaikan komitmennya untuk membantu mewujudkan penggunaan Energi Baru Terbarukan di NTB dengan memanfaatkan sampah sebagai sumberdaya untuk diolah menjadi energi. Hal ini sejalan juga dengan isu yang kami laksanakan yaitu membantu menyelesaikan permasalahan sampah di NTB.`,
    },
  ];

  // Find the selected article from the mockDatabase based on the ID
  const selectedArticle = mockDatabase.find(
    (article) => article.id === Number(id)
  );

  // Display a loading message if the article is not found
  if (!selectedArticle) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color={"#000000"} loading={true} height={4} />
      </div>
    );
  }

  const { title, imageUrl, article, date, author, category } = selectedArticle;

  const paragraphs = article.split("\n\n");

  return (
    <Layout>
      <div className="max-w-[95%] md:max-w-[75%] mx-auto my-4 md:my-8 p-4 space-y-3">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold my-8">{title}</h1>
        <Separator className="h-2 rounded-sm" />
        <div className="flex text-sm h-6 gap-2">
          <p>
            posted on {date} by {author}
          </p>
          <Separator orientation="vertical" className="h-full" />
          <p>in {category}</p>
        </div>
      </div>
      <div className="max-w-[85%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto mt-8 p-3 md:p-5 bg-white rounded shadow">
        <Image
          src={imageUrl}
          alt={title}
          height={600}
          width={600}
          className="mb-4 w-full"
        />
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 leading-relaxed text-sm md:text-lg font-base mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <Separator className="rounded-sm max-w-[85%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] my-10 mx-auto" />
      <div className="flex w-full justify-center">
        <ReplyCard />
      </div>
    </Layout>
  );
}

export default News;
