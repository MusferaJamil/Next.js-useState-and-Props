const ChildComponent = (props: any) => {
    console.log(props)
    return (
        <div>
            <h1 className="text-7xl">{props.name}</h1>
            <p className="text-7xl">{props.rank}</p>
            <p className="text-7xl">{props.profile}</p>
        </div>
    )
}

export default ChildComponent