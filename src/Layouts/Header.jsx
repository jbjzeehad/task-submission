import SignUpButton from "../Components/SignUpButton";


const Header = () => {
    return (
        <div className="mx-8 py-5 flex items-center justify-between text-[#050038]" >
            <div className="flex items-center gap-5">
                <img src="/Frame.svg" alt="" />
                <p className="flex gap-1 items-center">Product<img src="/image2.svg" /></p>
                <p className="flex gap-1 items-center">Solutions<img src="/image2.svg" /></p>
                <p className="flex gap-1 items-center">Resources<img src="/image2.svg" /></p>
                <p>Enterprise</p>
                <p>Pricing</p>
            </div>
            <div className="flex items-center gap-5 ">
                <p className="flex gap-2"> <img src="/Frame8.svg" />EN</p>
                <p>Contact Sales</p>
                <p>Login</p>
                <SignUpButton></SignUpButton>
            </div>
        </div>
    );
};

export default Header;