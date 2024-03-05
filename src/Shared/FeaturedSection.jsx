import SignUpButton from "../Components/SignUpButton";


const FeaturedSection = ({ }) => {
    return (

        <div className="mx-[150px] grid justify-items-center mt-32 relative border">
            <h1 className="text-5xl text-center font-bold px-80">
                Collaborate without
                constraints</h1>
            <div className="my-10 grid grid-cols-3 gap-5">
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-7">Free forever</h1>
                    <p className="text-lg font-normal">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
                        pricing plans for more features.</p></div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-7">Easy integrations</h1>
                    <p className="text-lg font-normal">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace .</p>
                </div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-7">Security first</h1>
                    <p className="text-lg font-normal">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                        at our Trust Center .</p>
                </div>
            </div>
            <SignUpButton></SignUpButton>
            <img className=" absolute -top-20  right-64" src="/Group.svg" alt="" />
        </div>
    );
};

export default FeaturedSection;