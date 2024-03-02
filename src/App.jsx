import SectionDetails from "./Shared/SectionDetails";


const App = () => {
    return (
        <>
            <div>
                <p className="font-bold text-xl text-center text-red-900">Project Task</p>
            </div>
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
        </>

    );
};

export default App;