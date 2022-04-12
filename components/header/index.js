const Header = () => {
    return (
        <div>
            <div className="container">
                {/* header_main_div */}
                <div>
                    <div className="flex items-center justify-between">
                        {/* logo_div */}
                        <div className="py-3">
                            <img src="/images/logo.png" />
                        </div>
                        {/* hamburder_responsive */}
                        <div>
                            
                        </div>
                        {/* header_nav */}
                        <div className="hidden md:block">
                            <div className="flex space-x-10  py-[21px] cursor-pointer ">
                                <button className="text-base font-bold border-b-[#FF9900] focus:border-b-2 ">Watch & Learn</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">Read & Learn</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">Our Team</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">Bragging Rights</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">Our Current Listings</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">Press</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">Trustimonials</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">See us in Action</button>
                                <button className="text-base  font-medium text-gray-600 border-b-[#FF9900] focus:border-b-2">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;