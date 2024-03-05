import SectionDetails from "./Shared/SectionDetails";
import Footer from "./Layouts/Footer";
import ImageSection from "./Sections/ImageSection";
import Trusted from "./Sections/Trusted";
import SectionItems from "./Shared/SectionItems";
import BrainstormingSection from "./Shared/BrainstormingSection";
import FeaturedSection from "./Shared/FeaturedSection";
import ReviewSection from "./Shared/ReviewSection";
import Hero from "./Sections/Hero";


const App = () => {
    return (
        <>
            <div>
                <p className="font-bold text-xl text-center text-red-900">Project Task</p>
            </div>
            <Hero></Hero>
            <Trusted></Trusted>
            <FeaturedSection
                featurehead={"Collaborate without constraints"}>

            </FeaturedSection>

            <SectionDetails
                heading={"Work together, wherever you work"}
                subHeading={"In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."}
                photoURL={"/hybridwork.png.png"}
            >
            </SectionDetails>
            <SectionDetails
                heading={"Connect your tools, close your tabs"}
                subHeading={"Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love."}
                photoURL={"/M3_integrations_all_integrations.png.png"}
                cssclass={"flex-row-reverse"}
            >
            </SectionDetails>
            <ImageSection></ImageSection>
            <SectionItems
                sectionHeading={"Built for the way you work"}
                imgURL={"/Brainstormwithoutshadow.jpg.png"}
            ></SectionItems>
            <BrainstormingSection
                sectionHeading={"Built for all kinds of teams"}
                imgURL={"/uxdesignwithoutshadow.jpg.png"}
            >
            </BrainstormingSection>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </>

    );
};

export default App;