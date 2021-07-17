import React, {useEffect, useState} from 'react';
import Card from '../../components/card';
import { arrayChunk } from '../../utils/helper';

const UniversityView = (props: any) => {
    
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const universities = props?.universities?.universityData?.universityList?.responseData;
        setUniversities(universities)
    }, [props])


    return <React.Fragment>
        {universities && arrayChunk(universities, 3).map((universitiesRow: any, index: any) => (
            <div className="row" key={Math.random()}>
                {universitiesRow.map((university: any, index: any) => (
                    <div className="column" key={Math.random()}>
                        <Card 
                            key={Math.random()}
                            data={university}
                            type="university"
                        />
                    </div>
                ))}
            </div>
        ))}
    </React.Fragment>
}

export default UniversityView;