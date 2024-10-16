import styles from "@/app/ui/styles/home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className={`text-4xl font-bold mb-4 ${styles.text_greenSea}`}>
              Welcome to my blog!
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra nunc at adipiscing sit morbi aliquet mauris porttitor
              nisi, senectus pharetra, ac porttitor orci.
            </p>
            <a
              href="/blog/posts"
              className={`outline outline-1 outline-offset-2 hover:text-white py-2 px-4 rounded hover:bg-green-400 md:w-auto ${styles.text_greenSea} ${styles.fit_content}`}
            >
              Go to Blog
            </a>
          </div>
          <div className="relative flex justify-center items-center z-10">
            <Image
              src="/green-sea.jpg"
              alt="green sea image"
              width={1000}
              height={760}
              className="hidden md:block rounded-lg"
            />
            <Image
              src="/green-sea-mobile.jpg"
              alt="green sea image"
              width={560}
              height={620}
              className="block md:hidden rounded-lg"
            />
          </div>
        </div>
      </div>
      <div
        className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_greenSea}`}
      ></div>
    </main>
  );
}
