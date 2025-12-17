import Logo from './assets/logo.png';
import { useState, useEffect } from 'react';
import figma from './assets/figma.png';
import github from './assets/github.png';
import reactLogo from './assets/react.png';
import tailwind from './assets/tailwind.png';
import vscode from './assets/vscode.png';
import arrow from './assets/arrow.svg';
import profile from './assets/profile.jpeg'
import image from './assets/image.png'

export default function App() {
  const [selected, isSelected] = useState([0]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Tools = [
    {
      "title" : "Figma",
      "description" : "Saya menggunakan Figma untuk mendesign website yang saya buat atau untuk mencari inspirasi di Figma Community",
      "image" : figma
    },
    {
      "title" : "Vscode",
      "description" : "saya menggunakan Vscode sebagai text editor ketika ingin coding",
      "image" : vscode
    },
    {
      "title" : "github",
      "description" : "saya meggunakan github ketika ingin membuat website bersama tim saya",
      "image" : github
    },
    {
      "title" : "react",
      "description" : "react adalah salah satu framework yang wajib dipelajari saat melaksanakan PKL.",
      "image" : reactLogo
    },
    {
      "title" : "tailwind",
      "description" : "Tailwind adalah salah satu framework yang digunakan untuk styling website",
      "image" : tailwind
    }
  ]

  const Projects = [
    {
      "title": "Slicing Website",
      "description": "ini adalah projek pertama yang diberikan oleh pembimbing saya saat PKL pertamakali. Website ini dibuat dengan melakukan pencarian design di Figma Community sebagai design awal, kemudian saya ditugaskan untuk membuat website tersebut menggunakan HTML dan css vanila tanpa framework. setelah itu, saya membuat website tersebut responsive untuk HP sesuai dengan design website sebelumnya.",
      "link" : "https://wikan-dev.github.io/hatchingWeb/"
    },
    {
      "title": "Pokemon-pixelArt",
      "description": "Pokemon-piexelArt adalah sebuah mini games yang ditugaskan oleh saya dan teman saya. Website ini pada dasarnya hanyalah website dimana user bisa menggambar pokemon sesuai dengan gambar yang dipilih oleh user sebelumnya. kemudian setelah gambarnya selesai, user bisa kembali menggambar pokemon lain atau memainkan pokemonnya (belum sepenuhnya selesai)",
      "link" : "https://wikan-dev.github.io/pokemon-pixelArt/"
    },
    {
      "title": "Final Project",
      "description": "Website Final Project diberikan pada tim saya saat awal desember. Kami ditugaskan untuk membuat website fullstack menggunakan React, Tailwind dan js sebagai backend. kemudian setelah websitenya jadi, kami mempresentasikan website tersebut didepan penguji kami yang berjumlah 2 orang.",
      "link" : "https://github.com/Wikan-dev/Routina"
    },
  ]

  const Categories = [
    {
      "title": "Informasi Umum",
      "description" : "informasi umum mengenai BTW Edutech",
      "button": "#info"
    },
    {
      "title": "Tools",
      "description" : "Tools apa saja yang saya gunakan selama PKL",
      "button": "#tools"
    },
    {
      "title": "Projects",
      "description" : "Penjelasan mengenai beberapa project yang saya buat selama PKL",
      "button": "#projects"
    },
    {
      "title": "Penutup",
      "description" : "kesimpulan dan saran yang saya berikan saat PKL",
      "button": "#penutup"
    },
  ]
  
  return (
    <div className="px-10 overflow-y-hidden no-scroll">
      <a href="#home">
        <button
          className={`fixed z-100 right-10 bottom-10 bg-gray-200 w-30 h-30 font-bold text-4xl rounded-full flex justify-center items-center rotate-270 transition-all duration-300 cursor-pointer hover:bg-gray-400 ${
            showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img className="w-15 rotate-90" src={arrow} alt="arrow" />
        </button>
      </a>
      <div id="home" className="w-full h-screen p-30 flex flex-row">
        <div className='w-full h-screen p-10 flex justify-between ' >
          <img src={profile} className='w-1/2 h-100  bg-white border-2 rounded-2xl object-cover'></img>
          <div className='text-2xl w-1/2 mr-auto ml-10 leading-15 relative'>
            <strong className='text-6xl'>BIODATA</strong>
            <h1 className='mt-5'><strong>Nama</strong> : Gede Jnana Wikan La Permana</h1>
            <h1><strong>Kelas</strong> : XI RPL 2</h1>
            <h1><strong>Absen</strong> : 5</h1>
            <h1><strong>Hobi</strong> : Ngoding</h1>
            <h1><strong>Bidang Keahlian</strong> : Rekayasa Perangkat Lunak</h1>
            <a href="#categories"><button className='bg-white border-2 hover:bg-black hover:text-white transition-all duration-300 hover:scale-115 w-50 rounded-2xl h-fit absolute top-100 right-20'>{"next ->"}</button></a>
          </div>
        </div>
      </div>

      <div id='categories' className="w-full pt-10 ">
        <h1 className='font-bold text-3xl'>Categories</h1>
        <div className="flex flex-row justify-between relative mt-20">
          {Categories.map((category, index) => (
            <div key={index} className="bg-black text-white flex flex-row w-70 h-100 relative py-10 rounded-xl drop-shadow-2xl/30">
              <h1 className=" px-5 h-fit w-full text-start absolute font-bold text-3xl">{category.title}</h1>
              <p className="absolute top-25 px-5">{category.description}</p>
              <a href={category.button}><button className="bg-black absolute right-5 bottom-10 w-30 h-10 border-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">detail</button></a>
            </div>
          ))}
        </div>
      </div>

      <div id='info' className="w-full h-auto pt-10">
          <h1 className='font-bold text-3xl'>Sejarah singkat</h1> 
          <div className='flex flex-row gap-20 p-5 border-2 rounded-xl mt-10'>
            <img src={Logo} alt="logo" className='w-1/3'/>
            <p className='mt-25 text-xl'>
              <strong>BTW Edutech</strong> adalah perusahaan <strong>education technology</strong> asal Indonesia yang berfokus pada layanan pembelajaran dan persiapan berbagai seleksi nasional, seperti masuk perguruan tinggi negeri, sekolah kedinasan, serta seleksi CPNS, TNI, dan Polri. Perusahaan ini bermula dari <strong>Bina Taruna Wiratama (Bimbel BTW)</strong>, yang didirikan pada tahun <strong>2018</strong> di Denpasar, Bali, oleh para alumni sekolah kedinasan dengan latar belakang pendidik dan birokrat, kemudian bertransformasi pada tahun <strong>2022</strong> menjadi BTW Edutech sebagai respons terhadap perkembangan pembelajaran digital dengan menghadirkan platform berbasis teknologi yang mengintegrasikan sistem latihan intensif, asesmen minat dan bakat, serta analisis peluang kelulusan secara terstruktur dan adaptif.
            </p>
          </div>
          <div className='flex flex-col gap-5 mt-5'>
            <div className='p-10 bg-white rounded-xl border-2'>
              <h1 className='font-bold text-2xl'>Visi</h1>
              <p className='text-xl'>"Menjadi lembaga pendidikan dan pelatihan terdepan dalam mempersiapkan generasi pemenang untuk Indonesia Maju 2045."</p>
            </div>
            <div className='p-10 bg-white rounded-xl border-2'>
              <h1 className='font-bold text-2xl'>Misi</h1>
              <ul className='text-xl'>
                <li>a.	Menyelenggarakan Bimbingan Belajar seleksi masuk PTN, PTK, ASN, TNI, Polri.</li>
                <li>b.	Mengelola Kursus & Pelatihan Kerja di bidang teknologi digital & industri.</li>
                <li>c.	Membangun karakter profesional dan berintegritas melalui penguatan soft skills.</li>
              </ul>
            </div>
          </div>
      </div>

      <div id="projects" className='w-full h-auto min-h-100 my-10 py-10'>
          <h1 className='font-bold text-3xl'>Projects</h1>
          <div className='flex flex-row mt-10 rounded-xl h-auto'>
            <div className='w-1/2'>
              {Projects.map((project, i) => (
                <div key={i} className={`w-full border-b-2 p-5 cursor-pointer hover:bg-slate-200 transition-all duration-300 ${selected === i ? 'bg-slate-200' : ''}`} onClick={() => isSelected(i)}>
                  <h1 className='font-bold text-xl'>{project.title}</h1>
                </div>
              ))}
            </div>
            <div className='w-1/2 p-5'>
              {selected !== null ? (
                <div>
                  <h1 className='font-bold text-2xl'>{Projects[selected].title}</h1>
                  <p className='text-xl mt-5'>{Projects[selected].description}</p>
                  <a href={Projects[selected].link} className='text-blue-500 text-xl underline'>{"go to ->"}</a>
                </div>
              ) : (
                <p className='text-xl'>Select a project to see the description.</p>
              )}
            </div>
          </div>
          <div className=''>
            <strong>dokumentasi</strong>
            <img src={image} className='w-1/2' alt="" />
          </div>
      </div>

      <div id='tools'>
        <h1 className='font-bold text-3xl mb-10'>Tools</h1>
        <div className='flex flex-wrap flex-row justify-between'>
          {Tools.map((tool, i) => (
            <div key={i} className='w-[700px] h-50 bg-white border-2 mb-10 flex flex-row rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
              <img src={tool.image} alt={tool.title} className='h-50 rounded-tl-2xl rounded-bl-2xl' />
              <div className='flex-col p-5'>
                <h1 className='font-bold text-3xl mb-5'>{tool.title}</h1>
                <p>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-black h-100 absolute left-0 w-full p-10 '>
          <div className='flex flex-row justify-between'>
            <div className='w-1/3'>
              <h1 className='font-bold text-white text-4xl'>Kesimpulan</h1>
              <p className='text-white mt-10'>
                Dengan adanya pelaksanaan kerja praktik ini, memperoleh banyak manfaat yang mungkin tidak diperoleh dalam pelajaran di sekolah. Disini dalam dunia kerja yang sesungguhnya dituntut untuk mandiri sabar dan bertanggung jawab dalam menyelesaikan tugas. Dalam kerja praktik ini berkesempatan menerapkan ilmu yang didapatkan dalam dunia pelajaran di sekolah.
              </p>
            </div>
            <div className='w-1/2'>
              <h1 className='font-bold text-white text-4xl'>Saran</h1>
              <p className='text-white mt-10'>
                Pada kesempatan ini, penulis menyampaikan beberapa saran sebagai bahan pertimbangan bagi pihak industri dan sekolah untuk kemajuan ke depannya, yaitu pengalaman PKL di BTW Edutech sangat bermanfaat khususnya di bidang Teknologi Informasi dan diharapkan kualitas pembinaan tersebut dapat terus dirasakan oleh siswa PKL berikutnya, sementara itu kegiatan PKL di sekolah sudah berjalan dengan baik karena mampu memberi gambaran dunia kerja dalam waktu sekitar enam bulan, namun akan lebih optimal jika pembelajaran yang berkaitan dengan pelaksanaan PKL diperbanyak dan disesuaikan dengan kompetensi masing-masing siswa.

              </p>
            </div>
          </div>
      </div>
    </div>
  )
}