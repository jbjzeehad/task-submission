

const LearnMoreButton = ({ buttoncss }) => {
    return (
        <>
            <button className="text-[#4262FF] text-lg font-normal mt-8"><span className={`${buttoncss} underline`}>Learn more</span> →</button>
        </>
    );
};

export default LearnMoreButton;