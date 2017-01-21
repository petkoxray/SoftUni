using System;
using System.Collections.Generic;
using System.Linq;

class PopulationCounter
{
    static void Main()
    {
        string input = Console.ReadLine();

        var countries = new Dictionary<string, Dictionary<string,long>>();

        while (!input.Equals("report"))
        {
            ReadCountries(countries,input);

            input = Console.ReadLine();
        }

        PrintReport(countries);

    }

    private static void PrintReport(Dictionary<string, Dictionary<string, long>> countries)
    {
        var orderedCountries = countries.OrderByDescending(c => c.Value.Values.Sum());
        foreach (var country in orderedCountries)
        {
            Console.WriteLine($"{country.Key} (total population: {country.Value.Values.Sum()})");
            var cities = country.Value;
            foreach (var city in cities.OrderByDescending(c => c.Value))
            {
                Console.WriteLine($"=>{city.Key}: {city.Value}");
            }
        }
    }

    private static void ReadCountries(Dictionary<string, Dictionary<string, long>> countries, string input)
    {
        var inputs = input.Split('|');
        string city = inputs[0];

        string country = inputs[1];
        long cityPopulation = long.Parse(inputs[2]);

        if (!countries.ContainsKey(country))
        {
            countries.Add(country, new Dictionary<string, long>());
        }
        if (!countries[country].ContainsKey(city))
        {
            countries[country].Add(city, cityPopulation);
        }
    }
}

