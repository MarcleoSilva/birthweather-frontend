
interface InputProps {
    numArray: Array<number>;
    width: number;
    height: number;
    pL?: number;
    pR?: number;
    pT?: number;
    pB?: number;
}

export default function DayTemp({numArray, width, height, pL = 10, pR = 10, pT = 10, pB = 10}: InputProps){

    const pLeft = pL, pRight = pR, pTop = pT, pBottom = pB;
    const chartWidth = width - pLeft - pRight;
    const chartHeight = height - pTop - pBottom;

    const minRange = Math.min(...numArray);
    const maxRange = Math.max(...numArray);
    const lineChartRange = maxRange - minRange;

    const xPosition = (i: number) => pLeft + (i/ (numArray.length - 1)) * chartWidth;
    const yPosition = (i: number) => pTop + chartHeight -  ((i - minRange)/lineChartRange) * chartHeight;

    const varPoints = numArray.map((v,i) => `${xPosition(i)},${yPosition(v)}`).join(' ');


    return(
        <svg width={width} height={height}>
            <polyline
                points={varPoints}
                fill="none"
                stroke="red"
                strokeWidth="3"
                />
        </svg>
    )

}
