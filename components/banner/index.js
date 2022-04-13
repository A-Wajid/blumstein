import Router from 'next/router'
const Banner = () => {
    return (
        <div className="mx-auto container">
            {/* text_div */}
            <div className="py-6">
                <p className="text-base font-normal text-gray-600">Informational videos for your everyday Real Estate FAQs</p>
            </div>
            {/* videos_main_div */}
            <div className="flex w-[1760px]">
                {/* videos_left_side_div */}
                <div className="w-[880px]">
                    {/* image_1_text_main_div */}
                    <div className="bg-[url('/images/videoframe.png')] bg-no-repeat bg-center w-[864px] h-[500px] cursor-pointer" onClick={()=> Router.push("/videos/FUiu-cdu6mA")}>
                        {/* text_div */}
                        <div className="h-full flex flex-col justify-end pb-6 pl-6">
                            <div>
                                <p className="text-[28px] font-semibold text-white">Adam --- Proper Pricing</p>
                            </div>
                            {/* image_time_div */}
                            <div className=" flex items-center pt-3">
                                {/* img_div */}
                                <div>
                                    <img src="/images/Vector.svg" />
                                </div>
                                {/* text_div */}
                                <div>
                                    <p className="text-base font-medium text-white pl-2">10:13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* image_2_3_text_main_div */}
                    <div className="flex py-8">
                        {/* image_2_text_div */}
                        <div className="bg-[url('/images/VideoFrame2.png')] bg-no-repeat bg-center w-[416px] h-[234px] mr-8 cursor-pointer" onClick={()=> Router.push("/videos/iDVItAX-meU")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">Sydney -- First Steps for Buyers</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* image_3_text_div */}
                        <div className="bg-[url('/images/VideoFrame3.png')] bg-no-repeat bg-center w-[416px] h-[234px] cursor-pointer" onClick={()=> Router.push("/videos/F48_PVjQp4M")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">Sydney _ Kenny - Getting your Ducks in a Row for Buying</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* image_4text_main_div */}
                    <div className="bg-[url('/images/VideoFrame4.png')] bg-no-repeat bg-center w-[864px] h-[500px] cursor-pointer" onClick={()=> Router.push("/videos/hsCrLC8QKGw")}>
                        {/* text_div */}
                        <div className="h-full flex flex-col justify-end pb-6 pl-6">
                            <div>
                                <p className="text-[28px] font-semibold text-white">Syd --Buying a home-  From beginning to end</p>
                            </div>
                            {/* image_time_div */}
                            <div className=" flex items-center pt-3">
                                {/* img_div */}
                                <div>
                                    <img src="/images/Vector.svg" />
                                </div>
                                {/* text_div */}
                                <div>
                                    <p className="text-base font-medium text-white pl-2">10:13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* videos_right_side_div */}
                <div className="w-[880px]">
                    {/* image_5_6_text_main_div */}
                    <div className="flex pb-8">
                        {/* image_2_text_div */}
                        <div className="bg-[url('/images/VideoFrame5.png')] bg-no-repeat bg-center w-[416px] h-[234px] mr-8 cursor-pointer" onClick={()=> Router.push("/videos/hmw-w4PFms8")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">Cole -- Buying or Selling copy</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* image_3_text_div */}
                        <div className="bg-[url('/images/VideoFrame6.png')] bg-no-repeat bg-center w-[416px] h-[234px] cursor-pointer" onClick={()=> Router.push("/videos/EyB1VOIC8SY")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">Sydney -- Closing Costs for Buyers</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* image_7_text_main_div */}
                    <div className="bg-[url('/images/VideoFrame7.png')] bg-no-repeat bg-center w-[864px] h-[500px] mb-8 cursor-pointer" onClick={()=> Router.push("/videos/IHTgiTk1c_s")}>
                        {/* text_div */}
                        <div className="h-full flex flex-col justify-end pb-6 pl-6">
                            <div>
                                <p className="text-[28px] font-semibold text-white">Adam -- Dual Agency</p>
                            </div>
                            {/* image_time_div */}
                            <div className=" flex items-center pt-3">
                                {/* img_div */}
                                <div>
                                    <img src="/images/Vector.svg" />
                                </div>
                                {/* text_div */}
                                <div>
                                    <p className="text-base font-medium text-white pl-2">10:13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* image_8_9_text_main_div */}
                    <div className="flex pb-8">
                        {/* image_2_text_div */}
                        <div className="bg-[url('/images/VideoFrame8.png')] bg-no-repeat bg-center w-[416px] h-[234px] mr-8 cursor-pointer" onClick={()=> Router.push("/videos/YgnOBK8EfC4")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">Types Of Ownership</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* image_3_text_div */}
                        <div className="bg-[url('/images/VideoFrame9.png')] bg-no-repeat bg-center w-[416px] h-[234px] cursor-pointer" onClick={()=> Router.push("/videos/u0bXhRQoiFs")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">Understanding CEMAs</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* image_10_11_text_main_div */}
                    <div className="flex pb-8">
                        {/* image_2_text_div */}
                        <div className="bg-[url('/images/VideoFrame10.png')] bg-no-repeat bg-center w-[416px] h-[234px] mr-8 cursor-pointer" onClick={()=> Router.push("/videos/PJQNQd1KV9E")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">What are lot line windows_</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* image_3_text_div */}
                        <div className="bg-[url('/images/VideoFrame11.png')] bg-no-repeat bg-center w-[416px] h-[234px] cursor-pointer" onClick={()=> Router.push("/videos/JAcq6FIOr6s")}>
                            {/* text_div */}
                            <div className="h-full flex flex-col justify-end pb-6 pl-6">
                                <div>
                                    <p className="text-[20px] font-semibold text-white">Who represents whom in a Real Estate_</p>
                                </div>
                                {/* image_time_div */}
                                <div className=" flex items-center pt-3">
                                    {/* img_div */}
                                    <div>
                                        <img src="/images/Vector.svg" />
                                    </div>
                                    {/* text_div */}
                                    <div>
                                        <p className="text-base font-medium text-white pl-2">10:13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end_video_div */}
            <div className="flex">
                {/* left_side_div */}
                <div className="pb-8 pr-6">
                    {/* image_12_text_div */}
                    <div className="bg-[url('/images/VideoFrame12.png')] bg-no-repeat bg-center w-[416px] h-[234px] mb-8 cursor-pointer" onClick={()=> Router.push("/videos/vVBf9RXgAuI")}>
                        {/* text_div */}
                        <div className="h-full flex flex-col justify-end pb-6 pl-6 pr-6">
                            <div>
                                <p className="text-[20px] font-semibold text-white">Sydney--Buying a home-  From Beginning to End</p>
                            </div>
                            {/* image_time_div */}
                            <div className=" flex items-center pt-3">
                                {/* img_div */}
                                <div>
                                    <img src="/images/Vector.svg" />
                                </div>
                                {/* text_div */}
                                <div>
                                    <p className="text-base font-medium text-white pl-2">10:13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* image_13_text_div */}
                    <div className="bg-[url('/images/VideoFrame13.png')] bg-no-repeat bg-center w-[416px] h-[234px] cursor-pointer" onClick={()=> Router.push("/videos/URpJukeJ07Q")}>
                        {/* text_div */}
                        <div className="h-full flex flex-col justify-end pb-6 pl-6">
                            <div>
                                <p className="text-[20px] font-semibold text-white">Adam -- Chelsea Living</p>
                            </div>
                            {/* image_time_div */}
                            <div className=" flex items-center pt-3">
                                {/* img_div */}
                                <div>
                                    <img src="/images/Vector.svg" />
                                </div>
                                {/* text_div */}
                                <div>
                                    <p className="text-base font-medium text-white pl-2">10:13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* middle_div */}
                <div className="bg-[url('/images/VideoFrame14.png')] bg-no-repeat  w-[864px] h-[500px] cursor-pointer" onClick={()=> Router.push("/videos/Q05r6ts9m9s")} >
                    {/* text_div */}
                    <div className="h-full flex flex-col justify-end pb-6 pl-6">
                        <div>
                            <p className="text-[28px] font-semibold text-white">Adam -- Loft living in NYC</p>
                        </div>
                        {/* image_time_div */}
                        <div className=" flex items-center pt-3">
                            {/* img_div */}
                            <div>
                                <img src="/images/Vector.svg" />
                            </div>
                            {/* text_div */}
                            <div>
                                <p className="text-base font-medium text-white pl-2">10:13</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right_side_div */}
                <div className="pb-8 pl-6">
                    {/* image_2_text_div */}
                    <div className="bg-[url('/images/VideoFrame15.png')] bg-no-repeat bg-center w-[416px] h-[234px] mb-8 cursor-pointer" onClick={()=> Router.push("/videos/d95PPykB2vE")}>
                        {/* text_div */}
                        <div className="h-full flex flex-col justify-end pb-6 pl-6">
                            <div>
                                <p className="text-[20px] font-semibold text-white">Adam -- Pre war Apartments</p>
                            </div>
                            {/* image_time_div */}
                            <div className=" flex items-center pt-3">
                                {/* img_div */}
                                <div>
                                    <img src="/images/Vector.svg" />
                                </div>
                                {/* text_div */}
                                <div>
                                    <p className="text-base font-medium text-white pl-2">10:13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* image_3_text_div */}
                    <div className="bg-[url('/images/VideoFrame16.png')] bg-no-repeat bg-center w-[416px] h-[234px] cursor-pointer" onClick={()=> Router.push("/videos/BS8WpTC4fA8")}>
                        {/* text_div */}
                        <div className="h-full flex flex-col justify-end pb-6 pl-6">
                            <div>
                                <p className="text-[20px] font-semibold text-white">Cole -- Buying or Selling</p>
                            </div>
                            {/* image_time_div */}
                            <div className=" flex items-center pt-3">
                                {/* img_div */}
                                <div>
                                    <img src="/images/Vector.svg" />
                                </div>
                                {/* text_div */}
                                <div>
                                    <p className="text-base font-medium text-white pl-2">10:13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;