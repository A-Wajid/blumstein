const Footer = () => {
    return (
        <div className="bg-gray-900 rounded-t-2xl ">
            <div className="mx-auto container">
                {/* content_div */}
                <div className="flex justify-between items-center pt-12 border-b border-b-solid border-b-gray-800 pb-10">
                    {/* left_side_div */}
                    <div className="w-[380px] cursor-pointer">
                        {/* image_div */}
                        <div>
                            <img src="/images/footer.png" alt="footer" />
                        </div>
                        {/* heading */}
                        <div className="py-[14px]">
                            <h5 className="text-lg font-bold text-white">Blumstein</h5>
                        </div>
                        {/* paragraph */}
                        <div>
                            <p className="text-sm font-medium text-gray-400">Whether it be a rental or sale, co-op, condo, townhouse or new development site Meris and Kenny have the knowledge, connections and expertise to make deals happen.</p>
                        </div>
                    </div>
                    {/* middle_lists_div */}
                    <div className="w-[573px] flex space-x-16 cursor-pointer">
                        <ul className="cursor-pointer space-y-4">
                            <li className="text-base font-medium text-gray-400">Watch & Learn</li>
                            <li className="text-base font-medium text-gray-400">Bragging Rights</li>
                            <li className="text-base font-medium text-gray-400">Trustimonials</li>
                        </ul>
                        <ul className="cursor-pointer space-y-4">
                            <li className="text-base font-medium text-gray-400">Read & Learn</li>
                            <li className="text-base font-medium text-gray-400">Our Current Listings</li>
                            <li className="text-base font-medium text-gray-400">See us in Action</li>
                        </ul>
                        <ul className="cursor-pointer space-y-4">
                            <li className="text-base font-medium text-gray-400">Our Team</li>
                            <li className="text-base font-medium text-gray-400">Press</li>
                            <li className="text-base font-medium text-gray-400">Contact us</li>
                        </ul>
                    </div>
                    {/* right_side_div */}
                    <div className="w-[471px] cursor-pointer">
                        {/* heading_div */}
                        <div className="pb-[26px]">
                            <h5 className="text-xl font-bold  text-white">
                                Stay Updated with Team Blumstein
                            </h5>
                        </div>
                        {/* input_div */}
                        <div>
                            <input placeholder="Yor Email" className="w-full bg-gray-700 rounded-md   placeholder:text-white text-base font-normal  pt-5 pl-5 pb-5" />
                            {/* button_div */}
                            <div className="flex justify-end -mt-16">
                                <button className="bg-[#E68A00] py-5 px-7 rounded text-base font-medium text-white">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* social_media_div */}
                <div className="flex items-center justify-between py-8">
                    {/* text */}
                    <div>
                        <p className="text-base font-normal text-gray-300">© 2021 Blumstein | All Rights Reserved</p>
                    </div>
                    {/* social_media_icons */}
                    <div className="flex space-x-6 cursor-pointer">
                        <div>
                            <div><img src="/images/logo-instagram.png" alt="" /></div>
                        </div>
                        <div>
                            <div><img src="/images/logo-facebook.png" alt="" /></div>
                        </div>
                        <div>
                            <div><img src="/images/logo-youtube.png" alt="" /></div>
                        </div>
                        <div>
                            <div><img src="/images/logo-twitter.png" alt="" /></div>
                        </div>
                        <div>
                            <div><img src="/images/logo-tiktok.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;