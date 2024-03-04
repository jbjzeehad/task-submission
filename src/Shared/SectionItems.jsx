import Button from "../Components/Button";
import LearnMoreButton from "../Components/LearnMoreButton";


const SectionItems = ({ sectionHeading, imgURL }) => {
    return (
        <div className="mx-40">
            <h1 className="text-[#050038] text-5xl font-bold">{sectionHeading}</h1>
            <div className="flex gap-2 mt-8">
                <Button text={"Brainstorming"}></Button>
                <Button text={"Diagramming"}></Button>
                <Button text={"Meetings and Workshops"}></Button>
                <Button text={"Scrum Events"}></Button>
                <Button text={"Mapping"}></Button>
                <Button text={"Research & Designs"}></Button>
                <Button text={"Strategic Planning"}></Button>
            </div>
            <div className="p-7 flex">
                <div className="p-8">
                    <h1 className="text-lg font-normal text-[#050038]">Brainstorming</h1>
                    <p className="mt-6 text-lg">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                    <LearnMoreButton buttoncss={"no-underline"}></LearnMoreButton>
                </div>
                <img src={imgURL} />
            </div>
        </div>
    );
};

export default SectionItems;