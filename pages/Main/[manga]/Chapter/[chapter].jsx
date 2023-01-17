import Image from "next/image";

const Chapter = ({ data }) => {
 
  return (
    <div className="bg-slate-500">
      <p>{data.data.ChapterTitle}</p>
      {data.data.ChapterContent.map((item) => (
        <Image
          className="m-auto w-full max-w-[640px]"
          key={data._id}
          src={item}
          alt=""
          width={200}
          height={10}
        />
      ))}
      stuff should be here
    </div>
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
