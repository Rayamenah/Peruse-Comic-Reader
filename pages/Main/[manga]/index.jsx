import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Context } from "../../_app";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//components
import ChapContainer from "../../../Components/Hero/ChapContainer.jsx";

const MangaDetails = (props) => {
  const [star, setStar] = useState(false)
  const { favorites, setFavorites } = useContext(Context);
  const { Manga, Chapter } = props;


  const FavoriteManga = () => {
    setStar(!star);
    const checkFav = favorites.find((item) => item._id === Manga._id);

    if (star) {
      if (checkFav) {
        toast.success("Already in your favorites");
      } else {
        setFavorites((prev) => [...prev, { ...Manga }]);
        toast.success("Added to favorites");
        localStorage.setItem("favorites", Manga)
        setStar(false)

      }
    } else {
      const remove = favorites.filter((item) => item._id !== Manga._id)
      setFavorites(remove)
      toast.success("removed from favorites")
    }

  };


  return (
    <>
      {/* //////hero section////// */}

      <section className="w-full m-auto max-w-4xl bg-slate-200">
        <article className="w-full md:block font-sans">
          <Image
            src={Manga.data.MangaCover}
            alt=""
            className="object-fit mx-auto h-96 md:mx-auto md:h-96"
            width={300}
            height={80}
          />
          <div className="p-2 mt-2">
            <p className="mb-1 text-base font-semibold text-slate-700">
              Title: {Manga.data.MangaTitle}
            </p>
          </div>
        </article>
        <p className="p-2 text-sm text-slate-600">
          <span className=" text-base font-semibold text-slate-700">
            Description
          </span>{" "}
          : {Manga.data.MangaSynopsis}
        </p>
        {/* <div>
          <button className="ml-2 p-2 rounded-full bg-slate-300 transition-all hover:scale-110 active:scale-90" onClick={FavoriteManga}> {(star) ? <AiOutlineHeart className="w-4 h-4" /> : <AiFillHeart className="w-4 h-4" />}
          </button>
          <ToastContainer />
        </div> */}


        {/* ///////////////////chapter section///////////// */}

        {
          <article className="border-slate-800 bg-slate-400 rounded-sm font-sans">
            {Chapter?.data?.series.map((chapter) => (
              <ChapContainer
                key={chapter._id}
                url={chapter.ChapterUrl}
                NewchapterId={chapter._id}
                chapterTitle={chapter.ChapterTitle}
                clickable
              />
            ))}
          </article>
        }
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://manga-scrapper.p.rapidapi.com/series/?provider=asura&page=1&limit=20",
    options
  );

  const page = await res.json();
  const data = page.data;

  const paths = data?.series?.map((item) => ({
    params: {
      manga: item._id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
    },
  };
  const chapOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
    },
  };

  /////////fetch 2 api using promise.all////////////

  const [Mangares, Chapres] = await Promise.all([
    fetch(
      `https://manga-scrapper.p.rapidapi.com/series/${params.manga}/?provider=asura`,
      options
    ),
    fetch(
      `https://manga-scrapper.p.rapidapi.com/series/${params.manga}/chapters/?provider=asura`,
      chapOptions
    ),
  ]);

  const [Manga, Chapter] = await Promise.all([Mangares.json(), Chapres.json()]);

  return {
    props: {
      Manga,
      Chapter,
    },
  };
};

export default MangaDetails;
