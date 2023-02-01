"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { AiOutlineArrowLeft } from "react-icons/ai"

const Chapter = ({ data }) => {
  const router = useRouter()
  const route = router.query

  return (
    <>
      {data && <div className="bg-slate-500 px-2">
        <Link className="flex w-auto items-center transition text-slate-900 hover:text-blue-900" href={`/Main/${route.manga}`}><AiOutlineArrowLeft className="mr-1" />{route.manga}</Link>
        <h1 className="text-slate-900 font-bold">{data?.data?.ChapterTitle}</h1>
        {data?.data?.ChapterContent.map((item) => (
          <Image
            className="m-auto w-full max-w-[480px]"
            key={item}
            src={item}
            alt=""
            width={200}
            height={10}
          />
        ))}
      </div>}
    </>

  );
};

export const getServerSideProps = async (context) => {
  const { chapter } = context.query;
  const { manga } = context.query;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
    },
  };

  const res = await fetch(
    `https://manga-scrapper.p.rapidapi.com/series/${manga}/chapter/${chapter}/?provider=asura`,
    options
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Chapter;
