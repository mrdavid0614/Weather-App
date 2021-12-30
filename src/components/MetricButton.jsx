const MetricButton = ({ text, isActive, onClick }) => {
    return <>
        <button
            className={ `w-10 h-10 rounded-full font-bold ${ isActive ? 'bg-white text-black' : 'bg-gray-600' }` }
            onClick={ onClick }
        >
            { text }
        </button>
    </>
}

export default MetricButton