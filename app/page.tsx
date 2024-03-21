import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const nameOfPass = "รหัส"
  const hint = "อยู่วงโรงเรียน เขียน Code เป็น"
  
  const link1 = "";
  const link2 = "";
  const link3 = "";
  const link4 = "";

  const hintsub1 = "JS"; // JS // Airwavy
  const hintsub2 = "###"; // String // NP Band
  const hintsub3 = "###"; // YouTube // iPhone 13
  const hintsub4 = "###"; // Man // Web App 1st 

  const date = "21/3/2024";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          สวัสดี
          <code className="font-mono font-bold">น้อง{nameOfPass}สุดน่ารัก</code>
        </p>
        
      </div>

      <div className="relative place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <label>NOTE จากพี่รหัส</label>
        <h1 className="text-4xl">พี่ไม่สะดวกติดต่อทางเบอร์อ่ะ ติดต่อยาก รบกวนติดต่อ</h1>
        <br/>
        <h1 className="text-2xl">
          <ul>
            <li>Instagram: mangoisdeliciousbro</li>
            <br/>
            <li>หรือถ้าไม่ได้จริงๆ รบกวนเขียน Email มาหาพี่หน่อยนะ : <Link href="mailto:webgoodd@gmail.com">webgoodd@gmail.com</Link></li>
          </ul>
        </h1>
      </div>

      <br/>

      <div className="relative place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <label>คำใบ้</label>
        <h1 className="text-4xl">{hint}</h1>
      </div>

      <label>คำใบ้เพิ่มเติม</label>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        <a
          href={link1}
          className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {hintsub1}{" "}
           
          </h2>
        </a>

        <a
          href={link2}
          className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          {hintsub2}{" "}
           
          </h2>
        </a>
        <a
          href={link3}
          className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          {hintsub3}{" "}
           
          </h2>
        </a>
        <a
          href={link4}
          className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          {hintsub4}{" "}
           
          </h2>
        </a>
        
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          อัปเดตล่าสุด&nbsp;
          <code className="font-mono font-bold">{date}</code>
        </p>
        
      </div>
    </main>
  );
}
