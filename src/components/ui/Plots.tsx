
import Plot from 'react-plotly.js';

interface InputProps{
    varArray: Array<number>,
    name: string
}

export function BoxPlot({varArray, name}: InputProps){
    const traceTemperature = {
        y: varArray,
        type: 'box' as const,
        name: name,
        marker: {
            color: "rgb(9,56,125)"
        },
        boxpoints: 'all' as const
    };

    return(
        <div className='overflow-hidden'>
            <Plot
                data={[traceTemperature]}
                layout={{
                    title: {
                        text: "Temp. Along the day",
                        x: 0.4,                
                        xanchor: "center",
                        font: { size: 15 }       
                    },
                    width: 223,
                    height: 221,
                    margin: { l: 40, r: 80, t: 40, b: 30 },
                }}
                config={{ responsive: false }}
                style={{ width: 223, height: 210 }}
            />
        </div>
    )

}