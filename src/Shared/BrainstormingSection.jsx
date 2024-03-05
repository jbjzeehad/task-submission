import Button from "../Components/Button";
import LearnMoreButton from "../Components/LearnMoreButton";


const BrainstormingSection = ({ sectionHeading, imgURL }) => {
    return (
        <div className="mx-40">
            <h1 className="text-[#050038] text-5xl font-bold">{sectionHeading}</h1>
            <div className="flex gap-2 mt-8">
                <Button text={"UX & Design"}></Button>
                <Button text={"Marketing"}></Button>
                <Button text={"Product Management"}></Button>
                <Button text={"Engineering"}></Button>
                <Button text={"Consultants"}></Button>
                <Button text={"Agile Coaches"}></Button>
                <Button text={"Sales"}></Button>
            </div>
            <div className="p-7 flex">
                <div className="p-8">
                    <p className="flex gap-3 text-lg font-normal"><img src="/Frame2.svg" alt="" />Build low-fi wireframes</p>
                    <p className="flex gap-3 my-4"><img src="/Frame2.svg" alt="" />Involve stakeholders in the design process</p>
                    <p className="flex gap-3"><img src="/Frame2.svg" alt="" />Run engaging design workshops</p>

                    <LearnMoreButton buttoncss={"no-underline"}></LearnMoreButton>
                    <p className="font-normal text-lg mt-[70px]">Integrate your favorite tools</p>
                    <p className="flex gap-8 mt-3">
                        <img src="/Vector 3.svg" alt="" />
                        <img src="/Vector4.svg" alt="" />
                        <img src="/Vector2.svg" alt="" />
                        <img src="/Vector.svg" alt="" />
                    </p>

                </div>
                <img src={imgURL} />
            </div>
        </div>
    );
};

export default BrainstormingSection;