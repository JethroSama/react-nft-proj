import React from 'react'
import instagram from '../assets/owner/instagram.png'
import twitter from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'
const CurrentNft = ({ data }) => {
    console.log(data)
    return (
        <div className="flex text-white w-full p-3 mb-10">
            <div className="h-60  ">
                <img className="h-full rounded-xl object-contain" src={data.image_original_url} alt="current" />
            </div>

            <div className="flex flex-col justify-between flex-1 px-12  ">
                <div>
                    <h1 className=" font-bold text-6xl">{data.name}<span className="text-gray-300">·#{data.token_id}</span></h1>
                </div>

                <div className='flex justify-between'>
                    <div className="flex flex-1">
                        <img className="h-14 object-contain rounded-full mr-3" src={data.creator.profile_img_url} alt="user" />
                        <div >
                            <p>{data.creator.address}</p>
                            <p className="text-cyan-500 hover:underline">@{data.creator.address.substring(0, 6)}</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="h-14 w-14 border-solid border-gray-300 hover:border-white border-2 rounded-full flex justify-center items-center mx-1">
                            <img className="h-10 object-contain" src={instagram} alt="user" />
                        </div>
                        <div className="h-14 w-14 border-solid border-gray-300 hover:border-white border-2 rounded-full flex justify-center items-center mx-1">
                            <img className="h-10 object-contain" src={twitter} alt="user" />
                        </div>
                        <div className="h-14 w-14 border-solid border-gray-300 hover:border-white border-2 rounded-full flex justify-center items-center mx-1">
                            <img className="h-10 object-contain" src={more} alt="user" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentNft
