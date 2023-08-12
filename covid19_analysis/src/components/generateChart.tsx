import React from 'react';
import Plot from 'react-plotly.js';
import { Layout, PlotData, PlotType } from 'plotly.js';
import '../index.css'

type IChartProps = {
    title: string;
    xTitle?: string;
    yTitle?: string;
    xData: string[] | number[] | null;
    yData: number[] | string[] | null;
    chartType: PlotType;
    orientation?: 'v' | 'h' | undefined;
    width?: number;
    height?: number;
};

export const PlotChart: React.FC<IChartProps> = (props) => {
    const data: Partial<PlotData>[] = [{
        x: props.xData ?? [], // X-axis labels
        y: props.yData ?? [], // Y-axis values
        type: props.chartType,
        orientation: props?.orientation,
    }];

    const layout: Partial<Layout> = {
        title: props.title,
        xaxis: { title: props.xTitle },
        yaxis: { title: props.yTitle, titlefont: { size: 12 } },
        width: props.width,
        height: props.height,
        margin: {
            l: 200
        }
    };

    return (
        <Plot data={data} layout={layout} />
    );
};

export const PieChart: React.FC<IChartProps> = (props) => {
    const data: Partial<PlotData>[] = [{
        labels: props.xData ?? [], // X-axis labels
        values: props.yData ?? [], // Y-axis values
        type: 'pie',
        marker: {
            colors: ['rgb(240, 213, 96)', 'rgb(1, 54, 21)', 'rgb(255, 0, 0)']
        }
    }];

    const layout: Partial<Layout> = {
        title: props.title,
        width: props.width,
        height: props.height
    };

    return (
        <Plot data={data} layout={layout} />
    );
};