import SignUpButton from "../Components/SignUpButton";


const Hero = () => {
    return (
        <div className="flex gap-14 mx-[150px] my-32">
            <div>
                <h1 className="text-[#050038] text-5xl font-bold">Take ideas from better to best</h1>
                <p className="text-lg mt-4 mb-8">Miro is your teams visual platform to connect, collaborate, and create — together.</p>
                <form className="w-full grid gap-3">
                    <input className="py-2 px-4  rounded-3xl text-lg border border-[#9B99AF]" type="text" placeholder="Enter your work email" />
                    <SignUpButton></SignUpButton>
                </form>
                <p className="text-sm text-[#05003866]">Collaborate with your team within minutes</p>
                <div className="rounded-lg bg-[#F5F5F7] mt-10 p-4 flex gap-4">
                    <div>
                        <p className="flex"> <img src="/Frame6.svg" alt="" />
                            <img src="/Frame6.svg" alt="" />
                            <img src="/Frame6.svg" alt="" />
                            <img src="/Frame6.svg" alt="" />
                            <img src="/Frame7.svg" alt="" /></p>
                        <p>Based on 5149+ reviews:</p>
                    </div>
                    <img src="/Frame5.svg" alt="" />
                    <img src="/Frame4.svg" alt="" />
                    <img src="/Frame3.svg" alt="" />

                </div>
            </div>
            <img src="/headerimage-without-text.png.png" alt="" />
        </div>
    );
};

export default Hero;