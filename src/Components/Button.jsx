

const Button = ({ text }) => {
    return (
        <>
            <button className="rounded-3xl focus:bg-[#F2F2F2] hover:bg-[#F2F2F2] border border-[#F2F2F2] py-3 px-4 text-[#050038]">{text}</button>
        </>
    );
};

export default Button;