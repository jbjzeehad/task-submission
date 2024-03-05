
import Member from '../Components/Member';
import Text from '../Components/Text';

const ReviewSection = () => {
    return (
        <div className="mx-[150px] my-28 grid justify-items-center">
            <h1 className="text-5xl text-center font-bold">
                Loved by the worlds best teams</h1>
            <button className='border border-[#4262FF] text-lg mt-9 rounded-3xl text-[#4262FF] py-3 px-8'>See all customer stories →</button>
            <div className='grid grid-cols-3 mt-20'>
                <div className='grid'>
                    <img className='px-6 -mb-6' src="/Vector7.svg" alt="" />
                    <Text
                        paratext={"“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”"}
                    ></Text>
                    <p className='self-end'>
                        <Member
                            dp={"../../public/Mask_group-1.png"}
                            memberName={"Roxanne Mustafa"}
                            memberPosition={"Design Team Lead at VMware"}
                        ></Member></p>
                </div>
                <div className='grid '>
                    <img className='px-6 -mb-6' src="/Vector5.svg" alt="" />
                    <Text
                        paratext={"“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”"}
                    >
                    </Text>
                    <p className='self-end'>
                        <Member
                            dp={"../../public/Mask_group-2.png"}
                            memberName={"Jane Ashley"}
                            memberPosition={"Head of Design at DocuSign"}
                        ></Member>
                    </p>
                </div>
                <div className='grid'>
                    <img className='px-6 -mb-6' src="/Vector6.svg" alt="" />
                    <Text
                        paratext={"“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool thats at the core of what we do and will continue to extend into the future.”"}
                    ></Text>
                    <p className='self-end'>
                        <Member
                            dp={"../../public/Mask_group-3.png"}
                            memberName={"Laura Baird"}
                            memberPosition={"Associate Design Director at frog"}
                        ></Member>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ReviewSection;