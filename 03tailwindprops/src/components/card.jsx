import React from "react";

function Card({username,btntext}){
    console.log(username)
    return(
        <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <img alt="" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" class="h-56 w-full object-cover"></img>

        <div className="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>

            <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">
                {username}
            </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
            <button className="px-4 py-2 text-black rounded">
 {btntext ||"visit more"} →
</button>
        </div>
</article>
    )
}

export default Card