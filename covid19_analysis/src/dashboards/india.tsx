import React, { useState, useEffect } from 'react';
import { dataSetURLs } from '../utility/dataUrls';
import { getData, sumCases } from '../utility/helper';
import { PlotChart, PieChart } from '../components/generateChart';
import '../index.css'

interface IIndianCoronaCasesByStates {
    state: string,
    confirmedNationalCases: number | null,
    confirmedForeignCases: number | null,
    confirmedCases: number | null,
    deathsCases: number | null,
    curedCases: number | null
}

export const India: React.FC = () => {
    const [indianData, setIndianData] = useState<any[]>();
    const [stateWiseData, setStateWiseData] = useState<IIndianCoronaCasesByStates[]>();
    const [totalCase, setTotalCase] = useState();

    useEffect(() => {
        const getIndianData = async () => {
            await getData(dataSetURLs.covid19IndianData, setIndianData);
        }

        getIndianData();
    }, []);

    useEffect(() => {
        if (indianData !== null && indianData !== undefined) {
            const indianStates: string[] = Array.from(new Set(indianData?.map(obj => obj["State/UnionTerritory"])));
            let indiaCoronaCasesByStates: IIndianCoronaCasesByStates[] = new Array<IIndianCoronaCasesByStates>();

            indianStates.forEach((stateName: string) => {
                const filteredState = indianData?.filter((data) => data["State/UnionTerritory"] === stateName);

                let stateData: IIndianCoronaCasesByStates = {
                    state: stateName,
                    confirmedNationalCases: null,
                    confirmedForeignCases: null,
                    confirmedCases: null,
                    deathsCases: null,
                    curedCases: null
                }

                stateData.confirmedNationalCases = sumCases(filteredState, "ConfirmedIndianNational");
                stateData.confirmedForeignCases = sumCases(filteredState, "ConfirmedForeignNational");
                stateData.confirmedCases = sumCases(filteredState, "Confirmed");
                stateData.confirmedCases = sumCases(filteredState, "Deaths");
                stateData.confirmedCases = sumCases(filteredState, "Cured");

                indiaCoronaCasesByStates.push(stateData);
            });

            console.log(indiaCoronaCasesByStates);
            setStateWiseData(indiaCoronaCasesByStates);
        }
    }, [indianData]);


    return (
        <div>
            {
                (stateWiseData?.length !== undefined) &&
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='card border-primary col-4'>
                                Hello How are You Doing! Nothing is working on margins of plots? not sure what to do
                            </div>
                            <div className='card border-primary'>
                                <PieChart
                                    title='Pie Chart'
                                    chartType='pie'
                                    xData={["Confirmed", "Cured", "Deaths"]}
                                    yData={[sumCases(indianData ?? [], "Confirmed"), sumCases(indianData ?? [], "Cured"), sumCases(indianData ?? [], "Deaths")]}
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>

                        <div className='card border-primary col-2'>
                            Hello How are You Doing! Nothing is working on margins of plots? not sure what to do
                        </div>
                        <div className='card border-primary'>
                            <PlotChart
                                title='bar Chart'
                                chartType='bar'
                                yData={stateWiseData.map(d => d.state)}
                                xData={stateWiseData.map(d => d.confirmedCases) as number[]}
                                xTitle='Cases Count'
                                yTitle=''
                                orientation='h'
                                width={500}
                                height={1000}
                            />
                        </div>
                        <div className='card border-primary'>
                            <PlotChart
                                title='bar Chart'
                                chartType='bar'
                                yData={stateWiseData.map(d => d.state)}
                                xData={stateWiseData.map(d => d.confirmedCases) as number[]}
                                xTitle='Cases Count'
                                yTitle=''
                                orientation='h'
                                width={500}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};