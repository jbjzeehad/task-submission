import FooterSquare from "../Components/FooterSquare";


const Footer = () => {
    return (
        <div className=" w-full px-48 py-24 bg-[#02033B] h-[680px]">

            <div className="flex gap-[60px] ">
                <div className="text-white">
                    <h1 className=" text-2xl font-extrabold mb-12">Scan. Detect. Remove.</h1>
                    <p className="mb-9 flex gap-10" >
                        <img src="/twitter.svg" />
                        <img src="/facebook.svg" />
                        <img src="/youtube.svg" />
                    </p>
                    <span className="flex underline gap-6 text-xs"><p>Privacy Policy</p> <p>Terms of Service</p></span>
                    <p className="mb-5 mt-9">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                    <p>Designed & developed by Bigger Picture</p>
                </div>
                <div className="w-[188px] ">
                    <h1 className="text-[#FFF] text-4xl font-extrabold border-b-2 pb-6">Miro.</h1>
                    <ul className="mt-16 text-lg text-[#FFC247] grid gap-6 font-extrabold">
                        <FooterSquare list="iPhone"></FooterSquare>
                        <FooterSquare list="Android"></FooterSquare>
                        <FooterSquare list="Help"></FooterSquare>
                        <FooterSquare list="About"></FooterSquare>
                        <FooterSquare list="Insights"></FooterSquare>
                    </ul>
                </div>
                <div className="bg-[#FDB235] p-9 w-[436px] rounded-3xl relative h-[272px] ">
                    <h1 className="text-2xl font-extrabold mb-5">Sign up to our newsletter</h1>
                    <p className="mb-9 text-[#02033B] text-base font-normal">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                    <form className="w-full  flex ">
                        <input className="py-2 px-4 w-64 rounded-l-3xl text-sm" type="text" placeholder="Email address" />
                        <button className="py-2 px-6  w-28 bg-[#02033B] text-white rounded-r-3xl">Submit</button>
                    </form>
                </div>
            </div>
            <p className="w-[549px] text-[#FFF] text-xs font-normal mt-20 ">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
    );
};

export default Footer;