import LearnMoreButton from "../Components/LearnMoreButton";


const SectionDetails = ({ heading, subHeading, cssclass, photoURL }) => {
    return (
        <div className={`${cssclass} inline-flex gap-28 mx-[150px] my-[60px] px-[10px] items-center`}>
            <div>
                <h1 className="text-[#050038] text-5xl font-bold">{heading}</h1>
                <p className="text-lg font-normal mt-4 text-[#050038]">{subHeading}</p>
                <LearnMoreButton></LearnMoreButton>
            </div>
            <img src={photoURL} />
        </div>
    );
};

export default SectionDetails;