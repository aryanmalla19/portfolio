import React from 'react'

export default function Gallery({data}) {
    console.log(data?.images[0])
    return (
        <div class="p-5 md:p-10">
            <div class="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                {data?.images[0].skills.map((e)=>{
                    return(
                <img src={e.img} alt="" />
                    )
                })}
            </div>
        </div>
    )
}
