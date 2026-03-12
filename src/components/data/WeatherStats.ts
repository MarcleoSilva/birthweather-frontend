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

    // Cloud
    maxCloud: number;
    minCloud: number;
    averageCloud: number;

    // Humidity
    maxHumidity: number;
    minHumidity: number;
    averageHumidity: number;

    // Temperature
    maxTemperature: number;
    minTemperature: number;
    averageTemperature: number;

    // Abstractions
    isRaining: string;
    isCloudy: string;
    isTemperature: string;
}