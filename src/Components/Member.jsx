

const Member = ({ dp, memberName, memberPosition }) => {
    return (
        <div className="flex gap-4 p-6 text-sm">
            <img src={dp} />
            <div>
                <h1 className="">{memberName}</h1>
                <p className="">{memberPosition}</p>
            </div>
        </div>
    );
};

export default Member;