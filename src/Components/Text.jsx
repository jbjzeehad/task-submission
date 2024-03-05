

const Text = ({ headtext, paratext }) => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-7">{headtext}</h1>
            <p className="text-lg font-normal">{paratext}</p></div>
    );
};

export default Text;