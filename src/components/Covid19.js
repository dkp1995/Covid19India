    import React, { useEffect, useState} from 'react'

export const Covid19 = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        
        getCovidDate()

    }, [])

    const getCovidDate = async () => {

        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();

        console.log(actualData.statewise)

        setdata(actualData.statewise)
    }


    


    return (
        <div className="container">
            <h1 className="text-center">India Covid 19 Data</h1>

            <hr></hr>

            <table className="table">
               
               <thead>
                    <tr>
                            <th>State</th> 
                            <th>Confirmed</th> 
                            <th>Recovered</th> 
                            <th>Deaths</th> 
                            <th>Active</th>
                            <th>LastUpdated</th> 
                        
                    </tr>
               </thead>
               <tbody>

                   { 
                   
                        data.map((curElem, index) => {

                            return (

                                
                        <tr>
                            <td>{curElem.state}</td> 
                            <td>{curElem.confirmed}</td> 
                            <td>{curElem.recovered}</td> 
                            <td className="table-danger">{curElem.deaths}</td> 
                            <td>{curElem.active}</td> 
                            <td>{curElem.lastupdatedtime}</td> 
                    
                        </tr>   
                                
                            )
                        })
                   
                   }
                            
                </tbody> 
                

            </table>

        </div>

    )
}


export default Covid19
