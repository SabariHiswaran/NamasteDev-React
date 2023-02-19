const Shimmer = () => {
    return (
        <>

            {Array(20)
                .fill("")
                .map((items, index) => {
                    return (

                        <div className="shimmer-list" key={index}>
                            <div className="shimmer-div"> 

                            </div>
                            <h1 className="shimmer-heading"></h1>
                            <p className="shimmer-para"></p>
                        </div>

                    )
                }
                )}


        </>
    )
}

export default Shimmer