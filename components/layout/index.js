const Layout = () => {
    return (
        <div className="mx-auto container">
                {/* layout_main_div */}
                <div className="flex items-center justify-between border-b border-solid border-b-gray-200 pt-12 pb-6 ">
                    {/* left_side_div */}
                    <div className="md:flex items-center cursor-pointer">
                        {/* heading_div */}
                        <div>
                            <p className="text-base font-medium hidden md:block">Showing <span className="text-[#FFC700]">12 Videos</span></p>
                            <h1 className="text-gray-800 text-4xl font-bold pt-3">Watch & Learn</h1>
                        </div>
                        {/* buyer_seller */}
                        <div className="pl-[23px]">
                            <div className="w-[285px] border border-solid border-gray-200 rounded-[60px] h-12 flex items-center">
                                {/* left_text */}
                                <div className="bg-gray-800 w-[128px] h-10 rounded-[60px] m-1">
                                    <p className="text-base font-medium text-white flex items-center justify-center h-full">Buyer - Seller</p>
                                </div>
                                {/* right_text */}
                                <div className="pl-2">
                                    <p className="text-base font-medium text-gray-800">Landlord - Tenant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right_side_div */}
                    <div className="cursor-pointer">
                        <div className="w-[412px] h-12 rounded-[40px] border border-solid border-gray-200 ">
                            {/* icon_text  */}
                            <div className="flex items-center h-full pl-[18px]">
                                <div>
                                    <img src="/images/search.png" />
                                </div>
                                <input placeholder="Search..." className=" pl-2  w-full   placeholder:text-gray-800 text-base font-medium focus:outline-none" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Layout;