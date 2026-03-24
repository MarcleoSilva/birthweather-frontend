export interface WeatherStats {
    // Input data
    name: string;
    city: string;
    country: string;
    date: string;

    // Generated data
    mapsURL: string;

    // Precipitation
    maxPrecipitation: number;
    minPrecipitation: number;
    averagePrecipitation: number;
    Precipitation: Array<number>

    // Cloud
    maxCloud: number;
    minCloud: number;
    averageCloud: number;
    Cloud: Array<number>

    // Humidity
    maxHumidity: number;
    minHumidity: number;
    averageHumidity: number;
    Humidity: Array<number>

    // Temperature
    maxTemperature: number;
    minTemperature: number;
    averageTemperature: number;
    Temperature: Array<number>

    // Abstractions
    isRaining: string;
    isCloudy: string;
    isTemperature: string;
}