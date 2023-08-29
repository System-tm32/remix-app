import { json } from "@remix-run/node";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useMemo } from "react";

export const meta: V2_MetaFunction = () => [{ title: "Mix" }];

export const loader = async ({ params }: LoaderArgs) => {
  const data = await import("../data/mixes.json");
  const id = params.id as unknown as number;

  if (!data.mix[id]) {
    throw new Response("Mix not found.", {
      status: 404,
    });
  }

  return json({
    ...data.mix[id],
  });
};

const MixPage = () => {
  const mix = useLoaderData<typeof loader>();

  const pagination = useMemo(() => {
    const previousPage = Number(mix.id) - 1 || 0;
    const nextPage = Number(mix.id) + 1;

    const pagination = {
      previous: {
        disabled: previousPage <= -1,
        link: `/mix/${previousPage}`,
      },
      next: {
        disabled: Number(mix.id) >= 2,
        link: `/mix/${nextPage}`,
      },
    };

    return pagination;
  }, [mix.id]);

  return (
    <div className="bg-cyan-300 h-full w-full p-5 text-lg">
      <Link
        to={pagination.previous.link}
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 ${
          pagination.previous.disabled && "pointer-events-none bg-gray-500"
        }`}
      >
        Prev Mix
      </Link>

      <Link
        to={pagination.next.link}
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 ${
          pagination.next.disabled && "pointer-events-none bg-gray-500"
        }`}
      >
        Next Mix
      </Link>
      <Link
        to={"/home"}
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500`}
      >
        Back
      </Link>

      {mix && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-auto">
          <div className="px-6 py-4 text-gray-700 text-base">
            <div className="font-bold text-xl mb-2">{mix.name}</div>
            <p className="text-gray-700 text-base">{mix.description}</p>
            <li>
              Табаки:{" "}
              {mix.tobacco.map((t: any, i) => (
                <div key={i + "tobacco"}>
                  {t.title + " " + t.taste + " " + t.percentage + "%"}
                </div>
              ))}
            </li>
            <li>Чаша: {mix.bowl}</li>
            <li>Крепость: {mix.strength}</li>
          </div>
          <div className="px-6 pt-4 pb-2">
            {mix.categories.map((c: string) => (
              <span
                key={c}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MixPage;
