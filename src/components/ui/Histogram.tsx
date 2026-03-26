
interface InputProps {
    numArray: Array<number>;
    width: number;
    height: number;
    pL?: number;
    pR?: number;
    pT?: number;
    pB?: number;
    fontSize?: number;
}

export default function Histogram({numArray, width, height, pL = 50, pR = 30, pT = 30, pB = 30, fontSize = 15}: InputProps){

    const pLeft = pL, pRight = pR, pTop = pT, pBottom = pB;
    const chartWidth = width - pLeft - pRight;
    const chartHeight = height - pTop - pBottom;

    const minRange = Math.min(...numArray);
    const maxRange = Math.max(...numArray);
    const lineChartRange = maxRange - minRange;

    const xMapper = (i: number) => pLeft + (i/ (numArray.length - 1)) * chartWidth;
    const yMapper = (i: number) => pTop + chartHeight -  ((i - minRange)/lineChartRange) * chartHeight;

    const varPoints = numArray.map((v,i) => `${xMapper(i)},${yMapper(v)}`).join(' ');

    return(
        <svg width={width} height={height}>
            <polyline
                points={varPoints}
                fill="none"
                stroke="red"
                strokeWidth="3"
                />
            <line x1={pLeft} y1={pTop} x2={pLeft} y2={pTop + chartHeight + 5} stroke="black" strokeWidth="1" />

            <line x1={pLeft} y1={chartHeight + pTop + 5 } x2={chartWidth + pLeft} y2={pTop + chartHeight + 5} stroke="black" strokeWidth="1" />

            {[0, 6, 12, 18, 23].map((h) => (
                <text
                    key={h}
                    x={xMapper(h)}
                    y={pTop + chartHeight + 20}
                    textAnchor="middle"
                    fontSize={fontSize}
                    fill="black"
                >
                    {h}h
                </text>))}
            
            {[0, 0.25, 0.5, 0.75, 1].map((t) => {
                const temp = minRange + t * lineChartRange;

                return(
                    <text
                        key={t}
                        x={pLeft - 4}
                        y={yMapper(temp)}
                        textAnchor="end"
                        fontSize={fontSize}
                        fill="black">
                            {temp.toFixed(1)}°C
                        </text>
                )
            })}



        </svg>
    )

}
