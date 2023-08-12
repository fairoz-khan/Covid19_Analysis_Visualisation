import Papa from 'papaparse';

export const getData = async (dataURL: string, setData: (data: any) => void) => {
    Papa.parse(dataURL, {
        header: true,
        download: true,
        skipEmptyLines: true,
        delimiter: ",",
        complete: (csvData) => {
            setData(csvData.data);
        }
    });
}

export const isNumber = (value: any): boolean => {
    return typeof value === "number";
}

export const sumCases = (arr: any[], key: string) => arr.reduce((accumalator, obj) => {
    return Number.isInteger(parseInt(obj[key])) ? accumalator + Number(obj[key]) : accumalator
}, 0);